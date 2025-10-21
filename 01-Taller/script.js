// Tema y navegación mejorados + efecto tilt de producto
window.addEventListener('DOMContentLoaded', () => {
  // Resalta el enlace activo en la barra de navegación
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    try {
      const same = link.href === window.location.href || link.getAttribute('href') === window.location.pathname.split('/').pop();
      link.classList.toggle('active', same);
    } catch (_) {}
  });

  // Manejo de tema claro/oscuro con persistencia
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme'); // 'dark' | 'light' | null
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let theme = stored || (prefersDark ? 'dark' : 'light');

  function applyTheme(t) {
    if (t === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (toggle) {
        toggle.textContent = '☀';
        toggle.setAttribute('aria-label', 'Cambiar a tema claro');
        toggle.setAttribute('aria-pressed', 'true');
        toggle.title = 'Tema claro';
      }
    } else {
      root.setAttribute('data-theme', 'light');
      if (toggle) {
        toggle.textContent = '🌙';
        toggle.setAttribute('aria-label', 'Cambiar a tema oscuro');
        toggle.setAttribute('aria-pressed', 'false');
        toggle.title = 'Tema oscuro';
      }
    }
  }

  applyTheme(theme);

  if (toggle) {
    toggle.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      applyTheme(theme);
      try { localStorage.setItem('theme', theme); } catch (_) {}
    });
  }

  // Si no hay preferencia guardada, escucha cambios del sistema
  if (!stored && window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (mq.addEventListener) {
      mq.addEventListener('change', e => applyTheme(e.matches ? 'dark' : 'light'));
    } else if (mq.addListener) {
      // Safari antiguo
      mq.addListener(e => applyTheme(e.matches ? 'dark' : 'light'));
    }
  }

  // Efecto tilt sutil sobre la imagen del producto
  const product = document.querySelector('.product');
  const img = document.querySelector('.product-img');
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (product && img && !reduceMotion) {
    const maxTilt = 8; // grados máximos

    function handleMove(e) {
      const rect = product.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;  // 0..1
      const y = (e.clientY - rect.top) / rect.height;  // 0..1
      const rotateY = (x - 0.5) * (maxTilt * 2); // izquierda (-) / derecha (+)
      const rotateX = (0.5 - y) * (maxTilt * 2); // arriba (+) / abajo (-)
      img.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    }

    function resetTilt() {
      img.style.transform = '';
    }

    product.addEventListener('mousemove', handleMove);
    product.addEventListener('mouseleave', resetTilt);
    product.addEventListener('mouseenter', () => {
      img.style.transition = 'transform 120ms ease';
    });
  }
});
