/* loader.js: utilidades para cargar/quitar estilos dinámicamente */

function loadStylesheet(href, id) {
  if (id && document.getElementById(id)) return document.getElementById(id);
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  if (id) link.id = id;
  document.head.appendChild(link);
  return link;
}

function removeStylesheet(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

async function injectCssTextFrom(url, id) {
  try {
    const res = await fetch(url, { cache: 'no-store' });
    const css = await res.text();
    let style = id ? document.getElementById(id) : null;
    if (!style) {
      style = document.createElement('style');
      if (id) style.id = id;
      document.head.appendChild(style);
    }
    style.textContent = css;
  } catch (e) {
    console.error('No se pudo cargar CSS como texto:', e);
  }
}

// Inicializar interacciones
window.addEventListener('DOMContentLoaded', () => {
  // Aplica una clase para mostrar efectos traídos desde imported.css
  document.body.classList.add('imported-tweaks');

  const loadDarkBtn = document.getElementById('load-dark');
  const removeDarkBtn = document.getElementById('remove-dark');
  const injectTextBtn = document.getElementById('inject-as-text');

  loadDarkBtn?.addEventListener('click', () => {
    loadStylesheet('css/theme-dark.css', 'theme-dark');
  });

  removeDarkBtn?.addEventListener('click', () => {
    removeStylesheet('theme-dark');
  });

  injectTextBtn?.addEventListener('click', async () => {
    await injectCssTextFrom('css/text-snippet.css', 'text-snippet');
  });
});
