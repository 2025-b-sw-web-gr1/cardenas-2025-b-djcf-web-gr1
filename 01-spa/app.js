// SPA super simple usando hash (#) para rutas
// Rutas: #/, #/gatos, #/perros

const routes = {
  '/': () => `
    <section class="hero">
      <div class="hero-grid">
        <div class="copy">
          <h2>Adopta amor con patitas</h2>
          <p>Gatitos curiosos y perritos leales te están esperando. Conoce su edad, tamaño y carácter para encontrar tu compañero ideal.</p>
          <div class="cta-row">
            <a class="btn" href="#/gatos">Ver Gatitos</a>
            <a class="btn btn-alt" href="#/perros">Ver Perros</a>
          </div>
        </div>
        <div class="media">
          <img src="https://images.unsplash.com/photo-1553322397-0f9f4b9a3d9f?w=900&auto=format&fit=crop&q=60" alt="Gatito y perrito juntos" loading="lazy" />
        </div>
      </div>
    </section>
  `,
  '/gatos': () => renderCards('Gatitos', [
    { nombre: 'Michi', desc: 'Curioso y juguetón', edad: '6 meses', tam: 'Pequeño', temp: 'Activo', img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&auto=format&fit=crop&q=60' },
    { nombre: 'Luna', desc: 'Ama las siestas', edad: '2 años', tam: 'Mediano', temp: 'Tranquila', img: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=600&auto=format&fit=crop&q=60' },
    { nombre: 'Tigre', desc: 'Fan de las cajas', edad: '1 año', tam: 'Mediano', temp: 'Curioso', img: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=600&auto=format&fit=crop&q=60' },
  ]),
  '/perros': () => renderCards('Perros', [
    { nombre: 'Rex', desc: 'Leal y protector', edad: '3 años', tam: 'Grande', temp: 'Guardían', img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&auto=format&fit=crop&q=60' },
    { nombre: 'Nala', desc: 'Corre como el viento', edad: '1 año', tam: 'Mediano', temp: 'Energética', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&auto=format&fit=crop&q=60' },
    { nombre: 'Bolt', desc: 'Siempre listo para jugar', edad: '8 meses', tam: 'Pequeño', temp: 'Juguetón', img: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b6?w=600&auto=format&fit=crop&q=60' },
  ]),
};

function renderCards(titulo, items) {
  const cards = items.map(
    (i) => `
      <article class="card">
        <img src="${i.img}" alt="${i.nombre}" loading="lazy"/>
        <div class="card-body">
          <h3>${i.nombre} <span class="badge">${i.edad || 'N/D'}</span></h3>
          <p>${i.desc}</p>
          <details>
            <summary>Detalles</summary>
            <ul>
              <li><strong>Tamaño:</strong> ${i.tam || '—'}</li>
              <li><strong>Temperamento:</strong> ${i.temp || '—'}</li>
            </ul>
          </details>
          <button class="btn adopt-btn" type="button" aria-label="Adoptar a ${i.nombre}">Adoptar</button>
        </div>
      </article>
    `
  ).join('');

  return `
    <section>
      <h2>${titulo}</h2>
      <div class="grid">${cards}</div>
    </section>
  `;
}

function parseLocation() {
  const hash = window.location.hash || '#/';
  // Normaliza a '/ruta'
  const path = hash.replace(/^#/, '');
  return path;
}

function router() {
  const path = parseLocation();
  const view = routes[path] || notFound;
  document.getElementById('app').innerHTML = view();
  highlightNav(path);
}

function notFound() {
  return `
    <section>
      <h2>404</h2>
      <p>Ups, esa ruta no existe. Vuelve al <a href="#/">Inicio</a>.</p>
    </section>
  `;
}

// Navegación: responde a cambios del hash y a la carga inicial
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);

// Delegación de eventos para botones "Adoptar"
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.adopt-btn');
  if (btn) {
    const name = btn.getAttribute('aria-label')?.replace('Adoptar a ', '') || 'la mascota';
    alert(`¡Gracias por tu interés en adoptar a ${name}!`);
  }
});

function highlightNav(path){
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const target = href.replace(/^#/, '');
    a.classList.toggle('active', target === path);
  });
}
