function showSidebar() {
  const hamburgerCheckbox = document.querySelector('.hamburger-checkbox');
  const sidebar = document.querySelector('.header-navigation-menu');

  hamburgerCheckbox.addEventListener('change', () => {
    if (sidebar.style.display == 'block') {
      sidebar.style.display = 'none';
      return;
    }
    sidebar.style.display = 'block';
  });
}

showSidebar();