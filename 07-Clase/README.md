# Perfil Tripulación "Sombreros de Paja" (One Piece) – Express + Handlebars

Proyecto mínimo en Node.js que renderiza un perfil de la tripulación usando el motor de plantillas **Handlebars (hbs)**.

## 1. Instalación de dependencias

Si aún no has inicializado el proyecto:

```powershell
npm init -y
```

Instala las dependencias necesarias (producción y desarrollo):

```powershell
npm install express hbs
npm install --save-dev nodemon
```

## 2. Ejecución

Modo normal:

```powershell
npm start
```

Modo desarrollo (reinicio automático):

```powershell
npm run dev
```

Abre en el navegador: `http://localhost:3000`

## 3. Estructura relevante

```text
07-Clase/
  app.js
  package.json
  views/
    index.hbs
```

## 4. Datos renderizados

Se utiliza un arreglo con objetos para cada miembro clave: Luffy, Zoro y Nami. Cada objeto incluye: `nombre`, `rol` y `recompensa`.

## 5. ¿Por qué Handlebars para este caso?

- Separación clara entre lógica y presentación: en las vistas sólo hay expresiones simples, el formato se preserva limpio y legible.
- Convención sobre configuración: Handlebars impone un estilo de plantillas más declarativo evitando lógica compleja incrustada.
- Reducido riesgo de mezclar demasiada lógica en la capa de vista, promoviendo mantenibilidad.
- Ideal para un sitio de perfil: la plantilla queda casi igual a HTML puro, facilitando trabajo a diseñadores.

## 6. Diferencias técnicas concretas entre EJS y Handlebars

| Aspecto | EJS | Handlebars |
|---------|-----|------------|
| Delimitadores básicos | `<%= valor %>` imprime con escape, `<%- %>` sin escape | `{{valor}}` imprime con escape, `{{{valor}}}` sin escape |
| Lógica en plantilla | Permite escribir JS directo: `for`, `if`, funciones inline | Limitado: helpers y bloques; no se escribe JS arbitrario |
| Helpers & Extensibilidad | Menos formal, se suele usar lógica inline | Sistema de helpers explícitos y bloques personalizados |

## 7. Ventajas de Handlebars en este proyecto específico

1. Sintaxis muy cercana a HTML: facilita incorporar estilos para una página temática rápidamente.
2. Control de lógica mínimo: evita que se mezclen cálculos o mutaciones innecesarias en la vista del perfil.
3. Reutilización futura: se pueden extraer parciales (ej. tarjeta de personaje) sin refactor complejo.
4. Seguridad: el escape por defecto (`{{}}`) reduce riesgos de inyección si algún dato viniera de fuente externa.
5. Aprendizaje progresivo: estudiantes pueden comprender data-binding sin distraerse con JS embebido.

## 8. Extensiones futuras (ideas)

- Agregar más miembros (Usopp, Sanji, Chopper...).
- Parciales para "card" y para el footer.
- Helper para formatear recompensa en millones.
- Internacionalización (i18n) de roles y textos.

## 9. Referencia breve de uso de cada parte

- `app.js`: configura Express + hbs y define la ruta principal `/`.
- `views/index.hbs`: plantilla que hace `{{#each crew}}` para generar las tarjetas.
- `package.json`: scripts para ejecución estándar y en desarrollo.

---
Desarrollado como ejemplo académico de separación de capas usando Handlebars.
