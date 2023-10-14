let header_burger = document.querySelector('.header-burger');
let header_menu = document.querySelector('.nav-menu');
let back = document.querySelector('body');
let header_list = document.querySelector('.header-list');

header_burger.onclick = function(){
    header_burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header_list.onclick = function () {
    header_list.classList.remove('active');
    back.classList.toggle('lock');
}