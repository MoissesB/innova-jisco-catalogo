"""Extract JISCO's public model/variant facts without prices or availability claims."""

from __future__ import annotations

import argparse
import concurrent.futures
import hashlib
import html
import json
import re
import time
import urllib.error
import urllib.request
from pathlib import Path

BASE = "https://www.jiscoeyewear.com"
COLLECTION = BASE + "/coleccion"
AGENT = "Mozilla/5.0 (compatible; InnovaCatalogAudit/1.0)"
ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"


def get(url: str) -> bytes:
    last = None
    for attempt in range(4):
        try:
            request = urllib.request.Request(url, headers={"User-Agent": AGENT})
            with urllib.request.urlopen(request, timeout=35) as response:
                return response.read()
        except (urllib.error.URLError, TimeoutError) as error:
            last = error
            time.sleep(0.7 * (attempt + 1))
    raise RuntimeError(f"Could not read {url}: {last}")


def attrs(tag: str) -> dict[str, str]:
    return {
        key: html.unescape(value)
        for key, value in re.findall(r'([\w-]+)="([^"]*)"', tag)
    }


def text(value: str) -> str:
    return html.unescape(re.sub(r"<[^>]+>", "", value)).strip()


def source_catalog() -> tuple[dict, dict]:
    page_bytes = get(COLLECTION)
    page = page_bytes.decode("utf-8", errors="replace")
    material_names = {}
    for match in re.finditer(
        r'<li class="check_style_filtro check_style_filtro_(\d+)"[^>]*>\s*<label>.*?<span>([^<]+)</span>',
        page, re.S,
    ):
        material_names[match.group(1)] = text(match.group(2))

    models = {}
    for match in re.finditer(
        r'(<a\b[^>]*\bdata-id-gafa="\d+"[^>]*\bclass="gafa open_url_gafa_modelo"[^>]*>)\s*'
        r'.*?<div class="nombre">([^<]+)</div>', page, re.S,
    ):
        meta = attrs(match.group(1))
        model_id = meta["data-id-gafa"]
        models[model_id] = {
            "source_id": model_id,
            "name": text(match.group(2)),
            "style": meta.get("data-sexo", ""),
            "size": meta.get("data-tamano", ""),
            "season_id": meta.get("data-temporadas", ""),
            "variants": [],
        }

    variants = {}
    for match in re.finditer(r'<a\b[^>]*\bdata-colores="[^"]*"[^>]*\bclass="submodelo [^"]*"[^>]*>', page):
        meta = attrs(match.group(0))
        model_id = meta.get("data-id", "").split("-")[0]
        variant_id = meta.get("data-id-submodelo", "")
        if model_id not in models or not variant_id:
            continue
        path = meta.get("href", "")
        item = {
            "source_id": variant_id,
            "path": path,
            "source_url": BASE + path,
            "color_name": meta.get("data-colores", ""),
            "sku": meta.get("data-id-submodelo-sap", ""),
            "source_sale_flag": meta.get("data-disponible-venta", ""),
            "material_ids": [part for part in meta.get("data-colecciones", "").split(",") if part],
            "front_list_url": meta.get("data-img-list", ""),
        }
        variants[variant_id] = (model_id, item)

    for model_id, item in variants.values():
        models[model_id]["variants"].append(item)
    models = {key: value for key, value in models.items() if value["variants"]}
    audit = {
        "collection_url": COLLECTION,
        "collection_sha256": hashlib.sha256(page_bytes).hexdigest(),
        "models": len(models),
        "variants": len(variants),
        "materials": material_names,
    }
    return models, audit


def enrich(entry: tuple[str, dict]) -> tuple[str, dict, str | None]:
    model_id, item = entry
    try:
        page = get(item["source_url"]).decode("utf-8", errors="replace")
        position = page.rfind('class="nombre_gafa"')
        if position < 0:
            raise ValueError("product panel not found")
        panel = page[position:position + 8500]
        measures = dict((key, value.strip()) for key, value in re.findall(
            r'<span class="una_medida">([A-E]):\s*([^<]+)</span>', panel
        ))
        material = [text(value).lstrip("- ") for value in re.findall(
            r'<a class="una_coleccion"[^>]*>([^<]+)</a>', panel
        )]
        front = re.findall(r'https?://[^"\'\s<>]+/modelos_frontal/product/[^"\'\s<>]+', page)
        side = re.findall(r'https?://[^"\'\s<>]+/modelos_lateral/product/[^"\'\s<>]+', page)
        item.update({
            "measurements": measures,
            "materials": material,
            "front_url": html.unescape(front[-1]) if front else "",
            "side_url": html.unescape(side[-1]) if side else "",
        })
        if not item["front_url"]:
            raise ValueError("front image not found")
        return model_id, item, None if item["side_url"] else f"{item['source_url']}: side image not published"
    except Exception as error:
        item.update({"measurements": {}, "materials": [], "front_url": "", "side_url": ""})
        return model_id, item, f"{item['source_url']}: {error}"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--workers", type=int, default=10)
    args = parser.parse_args()
    models, audit = source_catalog()
    entries = [(model_id, variant) for model_id, model in models.items() for variant in model["variants"]]
    failures = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=args.workers) as pool:
        for number, (model_id, item, failure) in enumerate(pool.map(enrich, entries), 1):
            if failure:
                failures.append(failure)
            if number % 100 == 0:
                print(f"Enriched {number}/{len(entries)} variants", flush=True)
    for model in models.values():
        model["variants"].sort(key=lambda value: value["sku"])
        model["materials"] = sorted({material for variant in model["variants"] for material in variant["materials"]})
        model["category"] = "sun" if any("318" in variant["material_ids"] for variant in model["variants"]) else "optical"
        model["slug"] = re.sub(r"[^a-z0-9]+", "-", model["name"].casefold()).strip("-")
    audit["failures"] = failures
    DATA.mkdir(exist_ok=True)
    (DATA / "catalog.json").write_text(json.dumps({"models": list(models.values())}, ensure_ascii=False, indent=2), encoding="utf-8")
    (DATA / "extract-audit.json").write_text(json.dumps(audit, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps({key: value if key != "failures" else len(value) for key, value in audit.items()}, ensure_ascii=False), flush=True)


if __name__ == "__main__":
    main()
