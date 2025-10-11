document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-links a');

  if (!hamburger || !navLinks) return;

  const openMenu = () => {
    hamburger.classList.add('active');
    navLinks.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  // Toggle al hacer click en el botón
  hamburger.addEventListener('click', (e) => {
    const isOpen = hamburger.classList.contains('active');
    if (isOpen) closeMenu();
    else openMenu();
  });

  // Cerrar cuando se clickea un enlace del menú (útil en móvil)
  navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
      // pequeña espera para que el scroll ocurra antes de cerrar visualmente (opcional)
      closeMenu();
    });
  });

  // Cerrar si se hace click fuera del menú cuando está abierto
  document.addEventListener('click', (e) => {
    if (!navLinks.classList.contains('active')) return;
    const target = e.target;
    if (target === hamburger || hamburger.contains(target)) return;
    if (target === navLinks || navLinks.contains(target)) return;
    // click fuera
    closeMenu();
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMenu();
    }
  });
});
