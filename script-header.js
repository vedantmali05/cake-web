// Menu Toggle Button
let menuTglBtn = document.querySelector('.menu-toggle-btn'),
    menuTglOpen = document.querySelector('.menu-toggle-open'), // open menu icon
    menuTglClose = document.querySelector('.menu-toggle-close'); // close menu icon
// Menu Bar
let headerNavBox = document.querySelector('.header-nav-box');


function buttonToggler(parentBtn, iconOpen, iconClosed, toggleElement) {
    parentBtn.classList.toggle("opened");
    toggleElement.classList.toggle("opened");
}

menuTglBtn.addEventListener('click', function() {
    buttonToggler(menuTglBtn, menuTglOpen, menuTglClose, headerNavBox);
})