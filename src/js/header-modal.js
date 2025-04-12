const burger = document.querySelector('.burger-icon');
const nav = document.querySelector('.box-navigation');
const body = document.body;
const overlay = document.getElementById('overlay');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
    nav.classList.toggle('active');
    body.classList.toggle('lock');
    overlay.classList.toggle('active');
});

window.addEventListener('resize', () => {
    const width = window.innerWidth;

    if(width >= 1200)
    {
        nav.classList.remove('active');
        burger.classList.remove('open');
        body.classList.remove('lock');
        overlay.classList.remove('active');
    }
  });

  overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    burger.classList.remove('open');
    body.classList.remove('lock');
    overlay.classList.remove('active');
  });

const menuLinks = document.querySelectorAll('.list-navigation .link-navigation');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active'); 
    burger.classList.remove('open'); 
    body.classList.remove('lock'); 
    overlay.classList.remove('active');
  });
});