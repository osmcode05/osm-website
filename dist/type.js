"use strict";
// <=========== menu =============>
let menu = document.getElementById('menu');
let mark = document.getElementById('mark');
let UL_list = document.querySelector('nav ul');
function toggle() {
    menu.classList.toggle('active');
    mark.classList.toggle('active');
    UL_list.classList.toggle('active');
}
// <=========== image animation =============>
let stars1 = document.getElementById('stars1');
let moon2 = document.getElementById('moon2');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let nouvil = document.querySelector('.nouvil');
let nav = document.querySelector('nav');
let Home = document.querySelector('.Home');
onscroll = () => {
    let value = scrollY;
    stars1.style.bottom = value + 'px';
    moon2.style.top = value * 4 + 'px';
    mountains3.style.top = value * 1.2 + 'px';
    mountains4.style.top = value + 'px';
    river5.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    nouvil.style.fontSize = value + 'px';
    if (value >= 80) {
        nouvil.style.fontSize = 80 + 'px';
        nouvil.style.position = 'fixed';
    }
    if (value >= 390) {
        nouvil.style.display = 'none';
    }
    else {
        nouvil.style.display = 'block';
    }
    if (value >= 80) {
        Home.style.background = 'linear-gradient(to bottom,#2cf3f3,5%,#0d7777,#034952)';
    }
    else {
        Home.style.background = 'transparent';
    }
    if (value >= 550) {
        nav.style.background = '#200016';
    }
    else {
        nav.style.background = 'transparent';
    }
};
