"""Append selected JISCO references to the portal's existing showcase data."""

from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
portal = Path(sys.argv[1])
source = portal / "catalog-showcase-data.js"
catalog = json.loads((ROOT / "data/catalog.json").read_text(encoding="utf-8"))["models"]
models = catalog[:6] + [model for model in catalog if model["category"] == "sun"][:3]
products = []
for model in models:
    variant = model["variants"][0]
    products.append({
        "name": model["name"],
        "meta": "Sol" if model["category"] == "sun" else "Óptica",
        "path": f"/modelo/{model['slug']}/{variant['source_id']}",
        "image": variant["front_path"],
    })
text = source.read_text(encoding="utf-8")
text = text.split("\nwindow.INNOVA_SHOWCASE_PRODUCTS.brands.jisco = ")[0]
text += "\nwindow.INNOVA_SHOWCASE_PRODUCTS.brands.jisco = " + json.dumps(products, ensure_ascii=False, separators=(",", ":")) + ";\n"
source.write_text(text, encoding="utf-8")
print(f"Added {len(products)} JISCO showcase models")
