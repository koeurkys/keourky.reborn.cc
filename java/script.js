
  
//   contenu login
const center = document.querySelector('.center');
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


btnPopup.addEventListener('click', ()=> {
  center.classList.add('active');
});

iconClose.addEventListener('click', ()=> {
  center.classList.remove('active');
});

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

const dropbtn = document.querySelector('.dropbtn');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');
const dropdown = document.querySelector('dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

openMenu.addEventListener('click', ()=> {
    dropdownContent.classList.add('active');
});

closeMenu.addEventListener('click', ()=> {
    dropdownContent.classList.remove('active');
});

openMenu.addEventListener('click', ()=> {
    closeMenu.classList.add('close');
    openMenu.classList.add('close');
});

closeMenu.addEventListener('click', ()=> {
    closeMenu.classList.remove('close');
    openMenu.classList.remove('close');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});



