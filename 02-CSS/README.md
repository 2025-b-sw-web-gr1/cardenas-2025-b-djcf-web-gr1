# 02-CSS — Formas de cargar estilos

Este mini‑proyecto muestra, de forma práctica y educativa, distintas maneras de cargar CSS en una página web y cuándo conviene usar cada una.

## Qué demuestra

1. Estilos en línea (inline)

  - Uso del atributo `style` en un elemento.
  - Útil para pruebas rápidas; difícil de mantener a gran escala.

2. Estilos internos con `<style>`

	- Reglas escritas directamente en el documento.
	- Incluye un `@import` desde `<style>` para mostrar efectos y las advertencias por bloqueo de render.

3. Hoja externa con `<link rel="stylesheet">`

	- La forma más común en producción.
	- `css/base.css` además usa `@import` interno de `css/imported.css`.

4. Hoja condicionada por `media` (ej. `print`)

	- `css/print.css` aplica solo al imprimir.

5. Preload + swap

	- Precarga `css/preload.css` y al terminar se activa como `stylesheet` para evitar bloqueo.

6. Carga dinámica con JavaScript

	- Inyectar `<link>` para cargar `css/theme-dark.css` (tema oscuro) bajo demanda.
	- Descargar CSS como texto y colocarlo dentro de un `<style>` (ej. `css/text-snippet.css`).

## Estructura

- `index.html`: Página principal con todas las secciones demostrativas.
- `css/base.css`: Estilos base y layout; hace `@import` de `css/imported.css`.
- `css/imported.css`: Reglas traídas con `@import` desde `base.css`.
- `css/imported-from-style.css`: Importada desde un bloque `<style>` en el HTML.
- `css/print.css`: Estilos solo para impresión (`media="print"`).
- `css/preload.css`: Cargada con `preload` y activada por `onload`.
- `css/theme-dark.css`: Tema oscuro cargado dinámicamente por JS.
- `css/text-snippet.css`: CSS que se descarga como texto e inyecta en `<style>`.
- `js/loader.js`: Lógica de carga dinámica y eventos de botones.

## Ejecutar con http-server

Requisitos: Node.js instalado.

Pasos básicos (PowerShell):

- Cambiar a la carpeta del proyecto: `cd "c:\\Users\\P3E002-B\\Documents\\SWGR1\\cardenas-2025-b-djcf-web-gr1\\02-CSS"`
- Instalar dependencias (primera vez): `npm install`
- Iniciar servidor en <http://localhost:8080>: `npm run start`

Sugerencia: prueba la vista de impresión del navegador para ver los estilos de print.css.

## Notas y buenas prácticas

- Prefiere `<link rel="stylesheet">` para obtener caché y reusabilidad.
- Evita `@import` en producción; usa un bundler/empacador para combinar CSS.
- Usa el atributo `media` para cargas condicionales (print, screen) y considera `prefers-color-scheme`.
- El patrón `preload + swap` puede ayudar con CSS no crítico sin bloquear el render.
