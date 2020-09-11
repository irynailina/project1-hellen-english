(() => {
'use strict';
let burgerBtn = document.querySelector('.navigation__link_burger');
let burgerModal = document.querySelector('.modal-window');
let burgerBtnClose = document.querySelector('.modal-window__header_link');

let openModalMenu = () => {
    burgerModal.classList.add('modal-window_active');
}

let closeModalMenu = () => {
    burgerModal.classList.remove('modal-window_active');
}

burgerBtn.addEventListener('click', openModalMenu);
burgerBtnClose.addEventListener('click', closeModalMenu);
})();