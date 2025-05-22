'use strict';
//burger menu

let headerMenu = document.getElementsByClassName('header__menu')[0];
let hamburgerMenu = document.getElementsByClassName('header__hamburger-menu')[0];
let headerLinks = document.getElementsByClassName('header__menu-link');
let darkThemeButton = document.getElementsByClassName('btn_change-themes')[0];

hamburgerMenu.addEventListener('click', menuOpen);

Array.from(headerLinks).forEach((elements) => {
    elements.addEventListener('click', menuClose);
});

function menuOpen() {
    headerMenu.classList.toggle('active');
}

function menuClose() {
    headerMenu.classList.remove('active');
}

darkThemeButton.addEventListener('click', changeThemeColor);

function changeThemeColor() {
    document.querySelector('.body').classList.toggle('dark');
}