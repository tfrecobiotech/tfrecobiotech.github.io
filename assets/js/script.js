// ===== Drawer menu =====
const drawer = document.getElementById('drawer');
const menuToggle = document.querySelector('.menu-toggle');

function toggleDrawer() {
  drawer.classList.toggle('open');
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !expanded);
}

// Click vào link trong drawer -> đóng menu
drawer?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    drawer.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Click ngoài drawer -> đóng menu
document.addEventListener('click', e => {
  if (drawer && menuToggle &&
      !drawer.contains(e.target) && !menuToggle.contains(e.target)) {
    drawer.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

// ===== Smooth scroll =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Active link on scroll (desktop sidebar) =====
const sections = [...document.querySelectorAll('main section')];
const sideMenu = document.getElementById('sideMenu');
if (sideMenu) {
  const links = [...sideMenu.querySelectorAll('a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting
