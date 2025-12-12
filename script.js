
  const menuButton = document.querySelector('.menu-knap');
  const menu = document.getElementById('menu');

  menuButton.addEventListener('click', (e) => {
    e.stopPropagation();

    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', false);
    }
  });

