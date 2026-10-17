# Catálogo JISCO para Innova Boutique

Catálogo independiente de JISCO, servido dentro de `https://innova-boutique.com/jisco/`. La colección se extrajo de la [web oficial](https://www.jiscoeyewear.com/coleccion) el 17 de octubre de 2026 y contiene **235 modelos y 854 variantes**. No representa stock ni disponibilidad confirmada.

## Procedencia y uso

Las imágenes, logos y vídeos en `public/assets/` son copias binarias de los archivos oficiales, sin recortar, filtrar ni recomprimir. `data/assets-manifest.json` registra URL de origen, ruta, tamaño y SHA-256. `data/extract-audit.json` registra el HTML fuente de la colección y los campos ausentes. Todas las fotografías y vídeos publicados llevan el logo oficial adyacente y atribución a JISCO Eyewear. Este repositorio no publica precios.

El material de [Prensa JISCO](https://www.jiscoeyewear.com/prensa) indica una fecha límite de uso en línea del **31 de diciembre de 2026**. Revisar con JISCO y renovar o retirar ese material antes de esa fecha. La autorización aportada por el distribuidor exige conservar el material sin modificaciones y atribuirlo siempre a JISCO.

## Integridad de la fuente

- 25 JPG de Prensa, dos PNG de logo, 13 enlaces MP4 y un brandbook PDF fueron inventariados.
- Un producto, `MAJESTIC GNGR`, carece de vista lateral publicada. La ficha muestra solo la frontal.
- Seis enlaces MP4 `bronneon_video_{1..6}.mp4` devuelven 404 y se omiten del sitio. Los siete MP4 restantes se descargaron y se revisaron antes de seleccionar los reproducibles.
- El archivo oficial `Marea_video_1.mp4` responde 200, pero sus 11.796.480 bytes terminan antes del final declarado por la estructura MP4 (26.668.625 bytes). Se conserva con su SHA-256 para auditoría y no se enlaza. La galería muestra los otros seis MP4 descargados y un vídeo MARÉA insertado desde el [Vimeo que utiliza la página oficial](https://www.jiscoeyewear.com/marea); la portada usa `Marea_video_2.mp4`.
- El campo técnico `data-disponible-venta` de la web oficial no se usa para mostrar agotamiento; todas las variantes quedan sujetas a confirmación comercial de Innova.

## Actualizar

Ejecutar `python tools/extract_catalog.py`, `python tools/download_assets.py` y `python tools/prepare_public_catalog.py`. Comparar el nuevo inventario con los manifiestos antes de publicar. No modificar los originales de `public/assets/`.
