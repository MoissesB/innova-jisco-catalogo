"""Mirror unmodified official JISCO files and record their source/checksum."""

from __future__ import annotations

import concurrent.futures
import hashlib
import html
import json
import re
import urllib.error
import urllib.parse
from pathlib import Path

from extract_catalog import BASE, DATA, ROOT, get

PUBLIC = ROOT / "public"


def asset_path(url: str) -> Path:
    parsed = urllib.parse.urlparse(url)
    path = urllib.parse.unquote(parsed.path).lstrip("/")
    if ".." in Path(path).parts or not path.startswith("assets/"):
        raise ValueError(f"Unexpected source path: {url}")
    return PUBLIC / path


def download(url: str) -> dict:
    target = asset_path(url)
    try:
        data = get(url)
        # All assets are copied byte for byte; no resizing, encoding, or editing.
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(data)
        return {
            "source_url": url,
            "path": "/" + target.relative_to(PUBLIC).as_posix(),
            "sha256": hashlib.sha256(data).hexdigest(),
            "bytes": len(data),
            "status": "downloaded",
        }
    except Exception as error:
        return {"source_url": url, "status": "missing", "error": str(error)}


def press_links() -> list[str]:
    page = get(BASE + "/prensa").decode("utf-8", errors="replace")
    paths = re.findall(r'<a\s+href="([^"]+)"[^>]*>\s*DESCARGAR', page, re.S | re.I)
    return [urllib.parse.urljoin(BASE, html.unescape(path)) for path in paths]


def main() -> None:
    catalog_path = DATA / "catalog.json"
    catalog = json.loads(catalog_path.read_text(encoding="utf-8"))
    product_urls = []
    for model in catalog["models"]:
        for variant in model["variants"]:
            product_urls.extend(variant[key] for key in ("front_url", "side_url") if variant.get(key))
    press = press_links()
    urls = sorted(set(product_urls + press))
    print(f"Downloading {len(product_urls)} product views and {len(press)} press files ({len(urls)} distinct URLs)", flush=True)
    with concurrent.futures.ThreadPoolExecutor(max_workers=12) as pool:
        results = list(pool.map(download, urls))
    by_url = {item["source_url"]: item for item in results}
    for model in catalog["models"]:
        for variant in model["variants"]:
            for key in ("front", "side"):
                result = by_url.get(variant.get(f"{key}_url", ""), {})
                variant[f"{key}_path"] = result.get("path", "") if result.get("status") == "downloaded" else ""
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2), encoding="utf-8")
    manifest = {
        "source": BASE + "/prensa",
        "entries": results,
        "press_urls": press,
        "product_urls": sorted(set(product_urls)),
        "missing": [item for item in results if item["status"] != "downloaded"],
    }
    (DATA / "assets-manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Downloaded {len(results) - len(manifest['missing'])}/{len(results)} distinct assets; missing {len(manifest['missing'])}", flush=True)


if __name__ == "__main__":
    main()
