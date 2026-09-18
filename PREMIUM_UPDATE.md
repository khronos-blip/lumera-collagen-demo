# LUMERA — actualización visual

Estado: publicado en Gviso el 19 de septiembre de 2026, tras autorización del usuario. Versión Cloudflare: 32fd0609-d2b5-49be-a58e-41a561eabf19. HTML, CSS, JavaScript e imágenes nuevas contrastados por SHA-256 contra los archivos locales.

## Archivos

- `index.html`: estructura, contenido e imágenes responsive.
- `premium.css`: dirección visual y ajustes responsive, cargado después del CSS original.
- `app.js`: catálogo e interacciones específicas.
- `cart.js`: carrito de demostración accesible, sin red, pagos ni datos personales.
- `assets/`: imágenes finales WebP y variantes de 640 px.

## Imágenes y resumen del conjunto de prompts

Generación: herramienta integrada image_gen, no API externa ni librería de stock. Son representaciones fotorrealistas generadas por IA de productos ficticios, no fotografías documentales de productos fabricados.

Fotografía editorial mediterránea. Travertino, lino, cítricos, marfil y luz natural de mañana. Prelude: frasco compacto de 15 tomas. Full Light: frasco de 30 tomas y vaso estriado. Season: tres frascos de 30 tomas y caja verde. Ritual: mano removiendo bebida cítrica en vaso estriado. Conservar la fotografía principal existente.

Restricciones comunes: materiales y luz físicamente creíbles; nombre y sabor legibles; sin claims nuevos, sellos de certificación, precios, texto promocional extra ni logotipos ajenos. Las imágenes de detalle conservan la identidad del envase de su referencia.

Assets finales:

- `assets/prelude.webp` y `assets/prelude-640.webp`
- `assets/full-light.webp` y `assets/full-light-640.webp`
- `assets/season.webp` y `assets/season-640.webp`
- `assets/ritual.webp` y `assets/ritual-640.webp`

Exportación: WebP calidad 84 a resolución original; versión de 640 px a calidad 80. Originales preexistentes conservados. Las fotografías de producto sustituyen a las representaciones artificiales anteriores; iconos y gráficos informativos permanecen vectoriales.

## Pruebas locales

- Anchos reales 390, 768 y 1440 px, sin desbordamiento horizontal.
- Inspección visual de portada y página completa.
- Selección de producto, cantidades y checkout simulado.
- Estado vacío deshabilitado, Escape y gestión de foco.
- Sintaxis JavaScript y git diff --check correctos.
- Enlaces internos, IDs y recursos HTML locales sin referencias rotas.
- Sin avisos ni errores de consola durante los recorridos revisados.
- Movimiento reducido implementado en CSS; no se ha emulado una preferencia del sistema ni certificado conformidad WCAG completa.

Para ejecutar desde este repositorio: `python3 -m http.server 4173 --bind 127.0.0.1`. No requiere instalar dependencias.
