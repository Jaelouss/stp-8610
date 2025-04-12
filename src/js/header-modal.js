const burger = document.querySelector('.burger-icon');
const nav = document.querySelector('#nav');
const html = document.documentElement;
const overlay = document.getElementById('overlay');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  nav.classList.toggle('active');
  html.classList.toggle('is-lock');
  overlay.classList.toggle('active');
});

window.addEventListener('resize', () => {
  const width = window.innerWidth;

  if (width >= 1200) {
    nav.classList.remove('active');
    burger.classList.remove('open');
    html.classList.remove('is-lock');
    overlay.classList.remove('active');
  }
});

overlay.addEventListener('click', e => {
  nav.classList.remove('active');
  burger.classList.remove('open');
  html.classList.remove('is-lock');
  overlay.classList.remove('active');
});
