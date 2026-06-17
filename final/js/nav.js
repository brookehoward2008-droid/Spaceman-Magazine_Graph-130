import('./wireframe-loader.js');

const navToggle = document.querySelector('.nav-toggle');
const siteNavigation = document.querySelector('#site-navigation');

if (navToggle && siteNavigation) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNavigation.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
