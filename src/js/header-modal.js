const button = document.querySelector('.burger-icon');
const menu = document.querySelector('.box-navigation');
const iconClose = document.querySelector('.icon-cross');
const elNavigation = menu.querySelectorAll('.element-navigation');

button.addEventListener('click', () => {
    menu.classList.toggle('active');

})

iconClose.addEventListener('click', ()=>{
    menu.classList.toggle('active');
})

elNavigation.forEach(navItem =>{
    navItem.addEventListener('click', ()=>{
        menu.classList.toggle('active');
    });
})


