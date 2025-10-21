// SolCare SPA: hash-based router with themed UI and smooth view transitions
(function () {
  // ---------- Theme management (matches script.js behavior) ----------
  const root = document.documentElement;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const stored = safeGet('theme');
  let theme = stored || (prefersDark ? 'dark' : 'light');

  function applyTheme(t) {
    root.setAttribute('data-theme', t === 'dark' ? 'dark' : 'light');
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
      if (t === 'dark') {
        toggle.textContent = '☀';
        toggle.setAttribute('aria-label', 'Cambiar a tema claro');
        toggle.setAttribute('aria-pressed', 'true');
        toggle.title = 'Tema claro';
      } else {
        toggle.textContent = '🌙';
        toggle.setAttribute('aria-label', 'Cambiar a tema oscuro');
        toggle.setAttribute('aria-pressed', 'false');
        toggle.title = 'Tema oscuro';
      }
    }
  }

  function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (_) {} }
  function safeGet(k) { try { return localStorage.getItem(k); } catch (_) { return null } }

  function initThemeToggle() {
    applyTheme(theme);
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        theme = theme === 'dark' ? 'light' : 'dark';
        applyTheme(theme);
        safeSet('theme', theme);
      });
    }

    // Listen to OS changes if user has no stored preference
    if (!stored && window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e) => applyTheme(e.matches ? 'dark' : 'light');
      if (mq.addEventListener) mq.addEventListener('change', handler);
      else if (mq.addListener) mq.addListener(handler);
    }
  }

  // ---------- Router ----------
  const app = () => document.getElementById('app');

  const routes = {
    '/marca1': viewMarca1,
    '/marca2': viewMarca2,
  };

  function parseRoute() {
    // Default route
    let hash = window.location.hash || '#/marca1';
    if (!hash.startsWith('#/')) hash = '#/marca1';
    const path = hash.slice(1); // remove '#'
    return routes[path] ? path : '/marca1';
  }

  function navigate(path) {
    if (window.location.hash !== `#${path}`) {
      window.location.hash = `#${path}`;
    } else {
      render(path);
    }
  }

  function setActiveNav(path) {
    const links = document.querySelectorAll('.nav-link[data-route]');
    links.forEach(a => {
      const isActive = a.getAttribute('href') === `#${path}`;
      a.classList.toggle('active', isActive);
      if (isActive) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }

  function render(path) {
    const el = app();
    if (!el) return;
    const view = routes[path] || viewMarca1;

    // Render and enhance
    el.innerHTML = '';
    el.appendChild(view());

    // after render hooks
    enhanceView(el);

    // Update title
    document.title = path === '/marca2' ? 'SolCare · Marca 2 (SPA)' : 'SolCare · Marca 1 (SPA)';

    // Update nav state
    setActiveNav(path);
  }

  // ---------- View helpers ----------
  function section(opts) {
    const wrapper = document.createElement('div');
    wrapper.className = 'view';
    wrapper.innerHTML = opts.html;
    return wrapper;
  }

  function baseHero({ title, lead, features, img, alt, details, buyText }) {
    const feats = features.map(f => `
      <div class="feature">
        <div class="icon">${f.icon}</div>
        <div>
          <h3>${f.h}</h3>
          <p>${f.p}</p>
        </div>
      </div>
    `).join('');
    return `
      <section class="hero">
        <div class="copy">
          <h1>${title}</h1>
          <p class="lead">${lead}</p>
          <div class="actions">
            <a class="btn btn-primary" href="#" data-scroll="#comprar" role="button">Comprar ahora</a>
            <a class="btn btn-ghost" href="#" data-scroll="#detalles">Ver detalles</a>
          </div>
          <div class="features">${feats}</div>
        </div>
        <div class="product">
          <img src="${img}" alt="${alt}" class="product-img" />
        </div>
      </section>
      <section id="detalles" class="card" aria-labelledby="detalles-title">
        <h2 id="detalles-title">Detalles del producto</h2>
        <p>${details}</p>
      </section>
      <section id="comprar" class="card" aria-labelledby="comprar-title">
        <h2 id="comprar-title">Compra segura</h2>
        <p>${buyText}</p>
        <a class="btn btn-primary" href="#" role="button" data-action="add-to-cart">Añadir al carrito</a>
      </section>
    `;
  }

  function viewMarca1() {
    const html = baseHero({
      title: 'Bloqueador Solar Marca 1',
      lead: 'Descubre la protección avanzada de la Marca 1 con ingredientes naturales y fórmula resistente al agua. Ideal para todo tipo de piel.',
      features: [
        { icon: '🛡️', h: 'Protección SPF 50+', p: 'Amplio espectro contra rayos UVA/UVB para tu día a día.' },
        { icon: '💧', h: 'Resistente al agua', p: 'Ideal para actividades al aire libre y deportes.' },
        { icon: '🌿', h: 'Ingredientes naturales', p: 'Suave con tu piel, libre de parabenos y fragancias fuertes.' }
      ],
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      alt: 'Bloqueador Solar Marca 1',
      details: 'Fórmula hipoalergénica con antioxidantes y filtros de última generación. Protección inmediata, no comedogénica y apta para rostro y cuerpo.',
      buyText: 'Precio promocional por lanzamiento y envíos a todo el país.'
    });
    return section({ html });
  }

  function viewMarca2() {
    const html = baseHero({
      title: 'Bloqueador Solar Marca 2',
      lead: 'La Marca 2 ofrece protección solar de amplio espectro, textura ligera y rápida absorción. Perfecta para uso diario.',
      features: [
        { icon: '⚡', h: 'Absorción inmediata', p: 'Textura ultra ligera que no deja residuos grasos.' },
        { icon: '🧴', h: 'Acabado mate', p: 'Controla el brillo y se integra con tu maquillaje.' },
        { icon: '🧪', h: 'Dermatológicamente probado', p: 'Apto para piel sensible, sin irritaciones.' }
      ],
      img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
      alt: 'Bloqueador Solar Marca 2',
      details: 'Filtros fotoestables y acabado mate para pieles mixtas a grasas. Resistente al sudor y sin perfume.',
      buyText: '3 y 6 meses sin intereses. Envío en 24-48h.'
    });
    return section({ html });
  }

  // ---------- Enhancements per view ----------
  function enhanceView(rootEl) {
    // Theme toggle state refresh (in case first paint came before binding)
    applyTheme(theme);

    // Smooth scroll for internal CTA buttons
    rootEl.querySelectorAll('[data-scroll]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = rootEl.querySelector(a.getAttribute('data-scroll'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Mock cart action
    rootEl.querySelectorAll('[data-action="add-to-cart"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.textContent = 'Añadido ✅';
        btn.setAttribute('aria-live', 'polite');
        setTimeout(() => { btn.textContent = 'Añadir al carrito'; }, 1800);
      });
    });

    // Tilt effect for product image (re-attach on every route)
    const product = rootEl.querySelector('.product');
    const img = rootEl.querySelector('.product-img');
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (product && img && !reduceMotion) {
      const maxTilt = 8;
      const handleMove = (e) => {
        const rect = product.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * (maxTilt * 2);
        const rotateX = (0.5 - y) * (maxTilt * 2);
        img.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
      };
      const resetTilt = () => { img.style.transform = ''; };
      product.addEventListener('mousemove', handleMove);
      product.addEventListener('mouseleave', resetTilt);
      product.addEventListener('mouseenter', () => { img.style.transition = 'transform 120ms ease'; });
    }

    // Focus the main heading for a11y on navigation
    const firstH1 = rootEl.querySelector('h1');
    if (firstH1) {
      firstH1.setAttribute('tabindex', '-1');
      firstH1.focus({ preventScroll: true });
    }
  }

  // ---------- Boot ----------
  window.addEventListener('hashchange', () => render(parseRoute()));
  window.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    // Navigate to default route if missing
    const path = parseRoute();
    if (!window.location.hash) {
      navigate(path);
    } else {
      render(path);
    }
  });
})();
