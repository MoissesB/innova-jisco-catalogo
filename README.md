# Catálogo JISCO para Innova Boutique

Catálogo independiente de JISCO, servido dentro de `https://innova-boutique.com/jisco/`. La colección se extrajo de la [web oficial](https://www.jiscoeyewear.com/coleccion) el 17 de octubre de 2026 y contiene **235 modelos y 854 variantes**. No representa stock ni disponibilidad confirmada.

## Procedencia y uso

Las imágenes y los vídeos descargables de Prensa en `public/assets/` son copias binarias de los archivos oficiales, sin recortar, filtrar ni recomprimir. El vídeo de la portada oficial (Vimeo 1231592126) se ensambló desde sus flujos HLS de imagen y audio en MP4 sin recodificar. `data/assets-manifest.json` registra URL de origen, ruta, tamaño y SHA-256. `data/extract-audit.json` registra el HTML fuente de la colección y los campos ausentes. El logo de JISCO permanece en la cabecera y la atribución figura junto a las secciones editoriales y las fichas; las fotos de producto no llevan logos superpuestos, conforme a la indicación del distribuidor. Este repositorio no publica precios.

El material de [Prensa JISCO](https://www.jiscoeyewear.com/prensa) indica una fecha límite de uso en línea del **31 de diciembre de 2026**. Revisar con JISCO y renovar o retirar ese material antes de esa fecha. La autorización aportada por el distribuidor exige conservar el material sin modificaciones y atribuirlo siempre a JISCO.

## Integridad de la fuente

- 25 JPG de Prensa, dos PNG de logo, 13 enlaces MP4 y un brandbook PDF fueron inventariados.
- Un producto, `MAJESTIC GNGR`, carece de vista lateral publicada. La ficha muestra solo la frontal.
- Seis enlaces MP4 `bronneon_video_{1..6}.mp4` devuelven 404 y se omiten del sitio. Los siete MP4 restantes se descargaron y se revisaron antes de seleccionar los reproducibles.
- El archivo oficial `Marea_video_1.mp4` responde 200, pero sus 11.796.480 bytes terminan antes del final declarado por la estructura MP4 (26.668.625 bytes). Se conserva con su SHA-256 para auditoría y no se enlaza. La sección de marca reúne los otros seis MP4 descargados y el vídeo de la portada oficial, todos silenciados, en reproducción automática y sin controles visibles.
- El campo técnico `data-disponible-venta` de la web oficial no se usa para mostrar agotamiento; todas las variantes quedan sujetas a confirmación comercial de Innova.
- La portada de Innova utiliza el vídeo horizontal original de la portada de JISCO (MARÉA, 33,7 segundos) desde este repositorio. El sonido original se conserva en el archivo; la portada lo reproduce silenciado. Las fotografías horizontales de MARÉA, LIGHT UP, JISCOTHEQUE y la historia de marca también constan en el manifiesto.
- Las fichas oficiales de producto no aportan un párrafo editorial individual. La descripción mostrada se construye únicamente con sus datos publicados: tipo, material, estilo, talla, color, referencia, medidas y número de acabados. Las películas son contenido editorial de marca; los modelos se agrupan por `data-temporadas="298"` (novedades), óptica restante y sol. Esa agrupación visual no afirma que cada montura aparezca en la campaña correspondiente.

## Actualizar

Ejecutar `python tools/extract_catalog.py`, `python tools/download_assets.py` y `python tools/prepare_public_catalog.py`. Comparar el nuevo inventario con los manifiestos antes de publicar. No modificar los originales de `public/assets/`.
