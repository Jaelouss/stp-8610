const box = document.querySelector('#cookie-buttons');
const modal = document.querySelector('#cookie-modal');
const openModal = localStorage.getItem('cookie') || null;

if (!openModal) {
  document.documentElement.classList.add('is-lock');
  modal.classList.remove('visually-hidden');

  box.addEventListener('click', e => {
    const button = e.target;
    modal.classList.add('visually-hidden');

    if (button.dataset.cookie === 'yes') {
      localStorage.setItem('cookie', true);
    }
    if (button.dataset.cookie === 'no') {
      localStorage.setItem('cookie', false);
    }
    document.documentElement.classList.remove('is-lock');
  });
} else {
  modal.classList.add('visually-hidden');
}
