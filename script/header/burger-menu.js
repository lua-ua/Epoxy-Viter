/* БУРГЕР-МЕНЮ в HEADER*/
let bodyFixed = document.getElementById('body');
let startBurger = document.getElementById('burger');
let startRotateBurger = document.getElementById('burger__line');
let overflowBurger = document.getElementById('burger-menu');

startBurger.addEventListener('click', function() {
    bodyFixed.classList.toggle('startBurger');
    startRotateBurger.classList.toggle('startRotateBurger');
    overflowBurger.classList.toggle('overflowBurger');
})