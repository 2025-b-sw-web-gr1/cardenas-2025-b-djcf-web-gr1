
# Pilares y Futuro de los Estándares Web (W3C)

**Autor:** Doménica Judith Cárdenas Fonseca
**Fecha:** 21 de Noviembre de 2025


## 1. HTML (HyperText Markup Language)
**Estatus:** Living Standard / Recomendación W3C

### Descripción Técnica
HTML no es simplemente un conjunto de etiquetas; es el **lenguaje de marcado semántico** que define la estructura y el significado del contenido web. Resuelve el problema de la interoperabilidad documental, permitiendo que un navegador entienda qué parte del contenido es un encabezado, un párrafo, una imagen o un control interactivo, independientemente de cómo se visualice.

### Aplicación Práctica
Más allá de crear una página simple, el uso correcto de HTML semántico se ve en **motores de búsqueda (SEO)** y **lectores de pantalla**.
* *Ejemplo:* Usar la etiqueta `<nav>` para el menú principal y `<article>` para el contenido de un blog, en lugar de usar `<div>` genéricos para todo. Esto permite a un usuario ciego saltar directamente al contenido principal usando el teclado.

### Justificación de la Elección
Es la base innegociable. Un desarrollador que domina la semántica HTML crea sitios que son intrínsecamente más accesibles y mejor posicionados en Google. Sin HTML sólido, el CSS y JavaScript no tienen dónde sostenerse.

---

## 2. CSS (Cascading Style Sheets)
**Estatus:** Varios módulos en niveles de Recomendación (Level 3, Level 4)

### Descripción Técnica
CSS es el lenguaje de diseño que separa el **contenido** (HTML) de la **presentación**. Resuelve el problema de la adaptación visual en un ecosistema fragmentado de dispositivos. Sus módulos más modernos (como Flexbox y Grid) introducen sistemas matemáticos complejos para la distribución del espacio en pantalla sin depender de hacks o tablas antiguas.

### Aplicación Práctica
El **Diseño Responsivo (Responsive Design)**.
* *Ejemplo:* Un sitio de comercio electrónico que muestra 4 productos por fila en un monitor de escritorio, pero que automáticamente reorganiza el contenido a una sola columna vertical cuando se detecta que el usuario está en un teléfono móvil, todo usando el mismo código base (Media Queries).

### Justificación de la Elección
La web ya no es estática ni solo de escritorio. Aprender CSS moderno es vital para garantizar la **Usabilidad (UX)**. Un sitio que no se adapta al dispositivo del usuario se considera "roto" en los estándares actuales de la industria.

---

## 3. WCAG (Web Content Accessibility Guidelines)
**Estatus:** Recomendación W3C (Versiones 2.1 y 2.2)

### Descripción Técnica
Aunque no es un "lenguaje" de programación, es el estándar técnico de referencia para la accesibilidad. Las WCAG proporcionan criterios de éxito testables organizados en cuatro principios: **Perceptible, Operable, Comprensible y Robusto (POUR)**. Resuelve el problema de la exclusión digital, garantizando que personas con discapacidades visuales, motrices o cognitivas puedan usar la web.

### Aplicación Práctica
Auditorías de contraste y navegación.
* *Ejemplo:* Asegurar que el color del texto sobre el fondo tenga una relación de contraste mínima de 4.5:1 para que personas con baja visión puedan leerlo. O garantizar que todos los formularios puedan ser rellenados y enviados usando únicamente la tecla `Tab` y `Enter` (sin ratón).

### Justificación de la Elección
**Ética y Legalidad.** Muchos países ya exigen por ley el cumplimiento de WCAG (Nivel AA) para sitios públicos y corporativos. Un desarrollador que conoce WCAG es un profesional más valioso y socialmente responsable.

---

## 4. WebAuthn (Web Authentication API)
**Estatus:** Recomendación W3C

### Descripción Técnica
WebAuthn es una API que permite a los servidores registrar y autenticar usuarios mediante criptografía de clave pública en lugar de contraseñas. Es parte del proyecto FIDO2. Resuelve el gravísimo problema de seguridad de las **contraseñas débiles, reutilizadas o robadas**, y mitiga casi por completo el *phishing*.

### Aplicación Práctica
**Login Biométrico en el navegador.**
* *Ejemplo:* Un usuario entra a su banca en línea desde Chrome y, en lugar de escribir una contraseña, el navegador le solicita usar su huella dactilar (TouchID) o reconocimiento facial (Windows Hello) para acceder de forma segura inmediata.

### Justificación de la Elección
Representa el futuro de la **Ciberseguridad Web**. Estamos en una transición hacia una web "passwordless" (sin contraseñas). Conocer este estándar coloca al desarrollador en la vanguardia de la seguridad y la experiencia de usuario moderna.

---

## 5. WebAssembly (Wasm)
**Estatus:** Recomendación W3C

### Descripción Técnica
WebAssembly es un formato de instrucciones binario para una máquina virtual basada en pila. Permite ejecutar código a velocidades **casi nativas** en el navegador. Resuelve la limitación de rendimiento de JavaScript para tareas de cómputo pesado. No reemplaza a JS, sino que trabaja junto a él, permitiendo compilar lenguajes como C++, Rust o Go para que corran en la web.

### Aplicación Práctica
**Software de escritorio portado a la web.**
* *Ejemplo:* Herramientas como **Figma** (diseño gráfico), **Google Earth**, o versiones web de **AutoCAD** y **Photoshop**. Estas aplicaciones requieren cálculos matemáticos intensivos que serían demasiado lentos en JavaScript puro, pero fluyen suavemente gracias a Wasm.

### Justificación de la Elección
Rompe los límites de lo que la web puede hacer. Transforma el navegador de un simple "visor de documentos" a una **plataforma de aplicaciones de alto rendimiento**. Es fundamental para desarrolladores interesados en gráficos 3D, videojuegos web o procesamiento de datos en el lado del cliente.