(() => {
  const input = document.getElementById('html-input');
  const preview = document.getElementById('preview');
  const renderBtn = document.getElementById('render');
  const loadBasic = document.getElementById('load-basic');
  const loadImages = document.getElementById('load-images');
  const loadHeadings = document.getElementById('load-headings');

  function render() {
    const html = input.value;
    // Usamos srcdoc que es compatible con la mayoría de navegadores modernos
    preview.srcdoc = html;
  }

  renderBtn.addEventListener('click', render);

  loadBasic.addEventListener('click', () => {
    input.value = `<!doctype html>\n<html>\n  <head>\n    <meta charset="utf-8"/>\n    <title>Ejemplo básico</title>\n  </head>\n  <body>\n    <h1>Título</h1>\n    <p>Este es un párrafo. <strong>HTML</strong> estructura la página.</p>\n    <ul>\n      <li>Elemento 1</li>\n      <li>Elemento 2</li>\n    </ul>\n  </body>\n</html>`;
    render();
  });

  loadImages.addEventListener('click', () => {
    input.value = `<!doctype html>\n<html>\n  <head>\n    <meta charset="utf-8"/>\n    <title>Imagen y enlace</title>\n  </head>\n  <body>\n    <h1>Imagen y enlace</h1>\n    <p>La siguiente imagen usa el atributo <code>alt</code> para accesibilidad:</p>\n    <a href="https://www.example.com" target="_blank">\n      <img src="https://via.placeholder.com/240x120.png?text=Ejemplo" alt="Imagen de ejemplo" />\n    </a>\n    <p>&lt;a&gt; se usa para crear enlaces.</p>\n  </body>\n</html>`;
    render();
  });

  loadHeadings.addEventListener('click', () => {
    input.value = `<!doctype html>\n<html>\n  <head>\n    <meta charset="utf-8"/>\n    <title>Ejemplo: Encabezados</title>\n    <style>body{font-family:Segoe UI,Arial,sans-serif;padding:18px}h1{color:#0b69ff}</style>\n  </head>\n  <body>\n    <h1>H1 - Título principal</h1>\n    <p>Este es el texto que acompaña al título principal.</p>\n    <h2>H2 - Sección principal</h2>\n    <p>Contenido de la sección H2.</p>\n    <h3>H3 - Subsección</h3>\n    <p>Contenido de la subsección H3.</p>\n    <h4>H4 - Nivel menor</h4>\n    <p>Ejemplo de H4 seguido de texto.</p>\n    <h5>H5 - Detalles</h5>\n    <p>Texto de ejemplo para H5.</p>\n    <h6>H6 - Nota final</h6>\n    <p>H6 es el encabezado de menor rango.</p>\n  </body>\n</html>`;
    render();
  });

  // Renderizar inicialmente el contenido actual
  render();
})();
