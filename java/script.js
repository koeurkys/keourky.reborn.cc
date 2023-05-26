
  
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

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});


const dropbtn = document.querySelector('.dropbtn');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const welcome = document.querySelector('.welcome');
const contact = document.querySelector('.contact-id');

openMenu.addEventListener('click', ()=> {
    dropdownContent.classList.add('active');
    welcome.classList.add('active');
    contact.classList.add('active');
});

closeMenu.addEventListener('click', ()=> {
    dropdownContent.classList.remove('active');
    welcome.classList.remove('active');
    contact.classList.remove('active');
});

openMenu.addEventListener('click', ()=> {
    closeMenu.classList.add('close');
    openMenu.classList.add('close');
});

closeMenu.addEventListener('click', ()=> {
    closeMenu.classList.remove('close');
    openMenu.classList.remove('close');
});


let compteur = 0;
let timer, elements, slides, slideWidth, speed, transition;

window.onload = () => {
    const diapo = document.querySelector('.diapo');

    speed = diapo.dataset.speed;
    transition = diapo.dataset.transition;

    elements = document.querySelector('.global-reviews');

    let firstImage = elements.firstElementChild.cloneNode(true);

    elements.appendChild(firstImage);
    
    slides = Array.from(elements.children);

    slideWidth = 320;

    let next = document.querySelector('.skip-right');
    let prev = document.querySelector('.skip-left');


    next.addEventListener('click', slideNext);
    prev.addEventListener('click', slidePrev);

    timer = setInterval(slideNext, speed);

    diapo.addEventListener('mouseover', stopTimer);
    diapo.addEventListener('mouseout', startTimer);


}

function slideNext() {
    compteur++;
    elements.style.transition= transition+'ms linear';

    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;

    setTimeout(function(){
        if (compteur >= slides.length -1) {
            compteur = 0;
            elements.style.transition= 'unset';
            elements.style.transform='translateX(0)';
        }
    }, transition);
}

function slidePrev() {
    compteur--;
    elements.style.transition = transition+'ms linear';

    if (compteur < 0) {
        compteur = slides.length -1;
        let decal = -slideWidth * compteur
        elements.style.transition= 'unset';
        elements.style.transform=`translateX(${decal}px)`;
        setTimeout(slidePrev, 1);
    }

    let decal = -slideWidth * compteur
    elements.style.transform=`translateX(${decal}px)`;


}

function stopTimer() {
    clearInterval(timer);
}

function startTimer() {
    timer = setInterval(slideNext, speed);
}
