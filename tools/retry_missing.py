"""Retry transient missing assets without re-downloading verified files."""

from __future__ import annotations

import concurrent.futures
import json

from download_assets import DATA, download

path = DATA / "assets-manifest.json"
manifest = json.loads(path.read_text(encoding="utf-8"))
retry = [entry["source_url"] for entry in manifest["missing"] if "bronneon_video" not in entry["source_url"]]
print(f"Retrying {len(retry)} temporarily unavailable official files", flush=True)
with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
    results = list(pool.map(download, retry))
by_url = {entry["source_url"]: entry for entry in results}
manifest["entries"] = [by_url.get(entry["source_url"], entry) for entry in manifest["entries"]]
manifest["missing"] = [entry for entry in manifest["entries"] if entry["status"] != "downloaded"]
path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
for entry in results:
    print(entry["status"], entry["source_url"], flush=True)
print(f"Remaining missing: {len(manifest['missing'])}", flush=True)
