"""Export public catalog data without internal sale flags or prices."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
catalog = json.loads((ROOT / "data/catalog.json").read_text(encoding="utf-8"))
for model in catalog["models"]:
    for variant in model["variants"]:
        variant.pop("source_sale_flag", None)
public_data = ROOT / "public/data"
public_data.mkdir(parents=True, exist_ok=True)
(public_data / "catalog.json").write_text(json.dumps(catalog, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
print(f"Public catalog: {len(catalog['models'])} models, {sum(len(m['variants']) for m in catalog['models'])} variants")
