document.addEventListener('DOMContentLoaded', () => {
  const backdrop = document.getElementById('backdrop');

  // Crear botón flotante
  const btn = document.createElement('button');
  btn.id = 'lb-toggle-backdrop';
  btn.type = 'button';
  btn.textContent = backdrop ? 'Ocultar fondo' : 'Mostrar fondo';

  // Estilos mínimos inline para que funcione sin depender de CSS adicional
  Object.assign(btn.style, {
    position: 'fixed',
    right: '16px',
    bottom: '16px',
    zIndex: '9999',
    padding: '8px 12px',
    background: 'rgba(0,0,0,0.6)',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px'
  });

  document.body.appendChild(btn);

  function toggleBackdrop() {
    if (!backdrop) {
      // Si no existe el elemento, mostrar una notificación pequeña en consola
      console.warn('Elemento #backdrop no encontrado.');
      return;
    }

    const isHidden = backdrop.style.display === 'none' || backdrop.classList.contains('hidden');
    if (isHidden) {
      backdrop.style.display = '';
      backdrop.classList.remove('hidden');
      btn.textContent = 'Ocultar fondo';
    } else {
      backdrop.style.display = 'none';
      backdrop.classList.add('hidden');
      btn.textContent = 'Mostrar fondo';
    }
  }

  btn.addEventListener('click', toggleBackdrop);

  // Atajo de teclado: tecla 'b' para alternar
  document.addEventListener('keydown', (e) => {
    // evitar activar dentro de inputs o textarea
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || e.ctrlKey || e.metaKey) return;
    if (e.key === 'b' || e.key === 'B') {
      toggleBackdrop();
    }
  });

});

