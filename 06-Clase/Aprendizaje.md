# Proyecto Modelo: Semántica Web (HTML5)

Este documento presenta un ejemplo práctico de implementación rigurosa del estándar de **Semántica Web (HTML5)** del W3C. El objetivo es demostrar cómo una estructura semántica correcta mejora la accesibilidad, el SEO y la mantenibilidad del código.

## 1. Desarrollo del Código

El código fuente completo de este ejemplo se encuentra en el archivo `index.html` dentro de esta misma carpeta.

Se ha priorizado el uso de etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<time>`, `<figure>`) en lugar de contenedores genéricos (`<div>`).

Puedes ver el código en: [index.html](./index.html)

---

## 2. Informe de Implementación

### Metodología
Para aplicar el estándar de Semántica Web HTML5, seguí los siguientes pasos:

1.  **Análisis del Contenido**: Antes de escribir código, analicé la jerarquía de la información. Identifiqué qué partes eran navegación, contenido principal, información complementaria y pie de página.
2.  **Selección de Etiquetas**: Sustituí los contenedores genéricos (`<div id="header">`, `<div class="post">`) por sus contrapartes semánticas (`<header>`, `<article>`).
3.  **Estructuración Jerárquica**:
    *   Usé `<main>` para delimitar el contenido único de la página, facilitando a los lectores de pantalla saltar la navegación repetitiva.
    *   Dentro de `<main>`, encapsulé el post del blog en un `<article>`, ya que es una pieza de contenido autónoma.
    *   Usé `<section>` para dividir el artículo en subtemas lógicos con sus propios subtítulos (`<h2>`).
4.  **Enriquecimiento de Datos**: Implementé la etiqueta `<time>` con el atributo `datetime` para que la fecha de publicación sea procesable por máquinas (motores de búsqueda, calendarios).
5.  **Validación**: El código está diseñado para pasar la validación del W3C Markup Validation Service, asegurando que no haya errores de sintaxis o anidamiento incorrecto.

### Análisis Técnico
Esta implementación cumple con las directrices de la W3C por las siguientes razones:

*   **Separación de Estructura y Presentación**: El HTML solo describe *qué* es el contenido (un encabezado, una navegación, un artículo), dejando el *cómo* se ve al CSS.
*   **Accesibilidad (A11y)**: Los lectores de pantalla (screen readers) utilizan estas etiquetas para crear un "árbol de accesibilidad". Un usuario ciego puede navegar directamente al `<main>` o saltar entre `<article>`s, algo imposible con solo `<div>`s sin roles ARIA.
*   **Interoperabilidad**: Al usar `<time datetime="2025-11-21">`, navegadores y bots entienden la fecha exacta sin ambigüedades de formato regional.
*   **SEO (Search Engine Optimization)**: Los motores de búsqueda como Google dan más peso al contenido dentro de `<main>` y `<h1>` que al contenido en un `<div>` genérico o un `<footer>`.

### Lecciones Aprendidas

La transición de maquetar con "Div Soup" (sopa de divs) a HTML Semántico ofrece ventajas claras: el código es más legible para los humanos y más significativo para las máquinas. Antes, para entender qué hacía un bloque de código, tenías que leer su clase CSS; ahora, la propia etiqueta te lo dice.

#### Respuestas a las preguntas de reflexión:

*   **¿Qué aprendieron sobre la importancia de los estándares?**
    *   Aprendimos que los estándares no son reglas arbitrarias, sino acuerdos globales que garantizan que la web sea accesible para todos (incluyendo personas con discapacidad) y funcione en cualquier dispositivo o navegador. Sin estándares, la web sería un caos fragmentado.

*   **¿Cómo influye la W3C en su futuro como ingenieros de sistemas?**
    *   Como futuros ingenieros, la W3C define las "reglas del juego". Seguir sus recomendaciones nos convierte en profesionales que construyen software robusto, escalable y ético. Ignorar los estándares resulta en deuda técnica y productos de baja calidad que fallan con el tiempo.

*   **¿Qué desafíos encontraron al implementar los estándares?**
    *   El principal desafío es el cambio de mentalidad. Es fácil caer en la costumbre de usar `<div>` para todo por rapidez. Otro desafío es distinguir sutiles diferencias, por ejemplo, cuándo usar `<section>` vs `<article>`, o entender que un `<header>` puede ir dentro de un `<article>` y no solo al principio de la página.
