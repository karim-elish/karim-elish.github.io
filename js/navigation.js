(() => {
  const nav = document.querySelector('body > nav');
  const toggle = nav?.querySelector('.menu-toggle');
  const menu = nav?.querySelector('.menu');

  if (!nav || !toggle || !menu) return;

  const icon = toggle.querySelector('.menu-toggle-icon');

  function setMenu(open) {
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute(
      'aria-label',
      open ? 'Close navigation menu' : 'Open navigation menu'
    );

    if (icon) {
      icon.textContent = open ? '×' : '☰';
    }
  }

  toggle.addEventListener('click', () => {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      setMenu(false);
    }
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) {
      setMenu(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenu(false);
      toggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 650) {
      setMenu(false);
    }
  });
})();
