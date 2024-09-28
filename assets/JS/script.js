
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
});
