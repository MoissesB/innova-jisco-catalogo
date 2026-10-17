"""Validate catalogue integrity and unmodified official media before release."""

from __future__ import annotations

import hashlib
import json
import struct
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
catalog = json.loads((PUBLIC / "data/catalog.json").read_text(encoding="utf-8"))["models"]
manifest = json.loads((ROOT / "data/assets-manifest.json").read_text(encoding="utf-8"))
variants = [variant for model in catalog for variant in model["variants"]]
assert len(catalog) == 235 and len(variants) == 854
assert len({model["source_id"] for model in catalog}) == len(catalog)
assert len({model["slug"] for model in catalog}) == len(catalog)
assert len({variant["sku"] for variant in variants}) == len(variants)
assert len({variant["source_id"] for variant in variants}) == len(variants)
assert not any("price" in key.lower() or "precio" in key.lower() or "source_sale_flag" == key for variant in variants for key in variant)

missing_views = []
for model in catalog:
    for variant in model["variants"]:
        for view in ("front", "side"):
            path = variant.get(f"{view}_path", "")
            if path:
                assert (PUBLIC / path.lstrip("/")).is_file(), (model["name"], variant["sku"], view)
            else:
                missing_views.append((model["name"], variant["sku"], view))
assert missing_views == [("MAJESTIC", "4 MAJESTIC GNGR", "side")], missing_views

downloaded = [entry for entry in manifest["entries"] if entry["status"] == "downloaded"]
for entry in downloaded:
    file = PUBLIC / entry["path"].lstrip("/")
    assert file.stat().st_size == entry["bytes"], entry["path"]
    assert hashlib.sha256(file.read_bytes()).hexdigest() == entry["sha256"], entry["path"]
assert len(manifest["missing"]) == 6
assert all("bronneon_video" in entry["source_url"] for entry in manifest["missing"])

press = [entry for entry in downloaded if entry["source_url"] in manifest["press_urls"]]
types = Counter(Path(entry["path"]).suffix.lower() for entry in press)
assert types == {".jpg": 25, ".png": 2, ".mp4": 7, ".pdf": 1}, types
for entry in press:
    file = PUBLIC / entry["path"].lstrip("/")
    header = file.read_bytes()[:12]
    suffix = file.suffix.lower()
    assert suffix != ".mp4" or header[4:8] == b"ftyp", entry["path"]
    assert suffix != ".pdf" or header.startswith(b"%PDF"), entry["path"]

def declared_mp4_end(file: Path) -> int:
    content = file.read_bytes()
    position = 0
    while position + 8 <= len(content):
        size = struct.unpack(">I", content[position:position + 4])[0]
        if size < 8:
            break
        position += size
    return position

videos = [entry for entry in press if entry["path"].endswith(".mp4")]
truncated = [entry for entry in videos if declared_mp4_end(PUBLIC / entry["path"].lstrip("/")) != entry["bytes"]]
assert len(truncated) == 1 and truncated[0]["path"].endswith("Marea_video_1.mp4"), truncated
assert "Marea_video_1.mp4" not in (PUBLIC / "index.html").read_text(encoding="utf-8")
assert "Marea_video_1.mp4" not in (PUBLIC / "app.js").read_text(encoding="utf-8")

print(json.dumps({"models":len(catalog),"variants":len(variants),"product_views":sum(bool(variant.get(f"{view}_path")) for variant in variants for view in ("front","side")),"press_files":dict(types),"missing_official_links":len(manifest["missing"]),"truncated_unlinked_mp4":len(truncated),"verified_sha256":len(downloaded)},ensure_ascii=False))
