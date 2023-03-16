/* БУРГЕР-МЕНЮ в HEADER*/
let bodyFixed = document.getElementById('body');
let startBurger = document.getElementById('header-burger');
let startWhiteBurger = document.getElementById('header-burger__line');
let startRotateBurger = document.getElementById('header-burger__line');
let overflowBurger = document.getElementById('header-burger-menu');

startBurger.addEventListener('click', function() {
    bodyFixed.classList.toggle('startBurger');
    startWhiteBurger.classList.toggle('startBurger');
    startRotateBurger.classList.toggle('startRotateBurger');
    overflowBurger.classList.toggle('overflowBurger');
})