let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.addEventListener('click', () =>{
    menu.clickList.toggle('active');
    navbar.clickList.toggle('active');
})