/* let slider = document.querySelectorAll('.slider');
let slideBtnLeft = document.querySelector('.slider_controls-l');
let slideBtnRight = document.querySelector('.slider_controls-r');
let i = 0;

console.log(slider);
    slideBtnRight.addEventListener('click', sliderRight);
    slideBtnLeft.addEventListener('click', sliderLeft);
    function sliderRight() {
        console.log('Work');
        slider[0].classList.add('slider-active-r');
        // slider[0].style.transform = 'translateX(-100%)';
        slider[0].classList.remove('slider');
        slider = document.querySelectorAll('.slider');
        console.log(slider);
        // slide[1].style.display = "none";
        // slide[3].style.opacity = "0";
        
    }
    function sliderLeft() {
        slider[0].classList.add('slider-active-l');
        // slider[0].style.transform = 'translateX(-100%)';
        slider[0].classList.remove('slider');
        slider = document.querySelectorAll('.slider');
        console.log(slider);
    }

// for (i = 0; i < Number(slide); i++){
//     slide.classList.add('sider-active');
// } */
// 

// "use strict";
const menuClick = document.querySelector('.burger-menu'),
    span = document.querySelector('.burger__span'),
    nav = document.querySelector('.nav_ul'),
    reviewSlider = document.querySelector('.review__slider');

menuClick.addEventListener('click', () => {
    span.classList.toggle('span_active');
    nav.classList.toggle('nav-active');
});

const spanActive = document.querySelector('.span_active');
spanActive.addEventListener('click', () => {
    span.classList.toggle('span_active');
    nav.classList.toggle('nav-active');
    spanActive.removeEventListener('click');
});
