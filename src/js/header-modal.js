const button = document.querySelector('#burger');
const overlay = document.querySelector('#overlay');
const html = document.querySelector('html');
const header = document.querySelector('#header');

function lockScroll() {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.classList.add('is-lock');
  document.body.style.paddingRight = `${scrollbarWidth}px`;
  document.documentElement.style.setProperty(
    '--scrollbar-offset',
    `${scrollbarWidth / 2}px`
  );
}

function unlockScroll() {
  document.documentElement.classList.remove('is-lock');
  document.body.style.paddingRight = '';
  document.documentElement.style.setProperty('--scrollbar-offset', '0px');
}

button.addEventListener('click', e => {
  if (e.target.closest('#burger')) {
    button.classList.toggle('open');
    overlay.classList.toggle('open');

    if (html.classList.contains('is-lock')) {
      unlockScroll();
    } else {
      lockScroll();
    }
  }
});
