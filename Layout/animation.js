// import { extraMoneyPerClick } from "./upgrades.js";

const clicker = document.querySelector('.clicker-img');

let x;
let y;
let ripples;
let beer;
let money;
let moneyClick;


clicker.addEventListener('click', function(e) {
    x = e.clientX - e.target.offsetLeft;
    y = e.clientY - e.target.offsetTop;

    ripples = document.createElement('span');
    ripples.classList.add('click');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    beer = document.createElement('span');
    beer.classList.add('test-click');
    ripples.appendChild(beer);
    

    money = document.createElement('div');
    money.classList.add('click');
    money.style.left = x + 'px';
    money.style.top = y + 'px';
    this.appendChild(money);

    moneyClick = document.createElement('span');
    moneyClick.classList.add('moneyClick');
    money.appendChild(moneyClick);

    moneyClick.textContent = '+' + extraMoneyPerClick;

    setTimeout(() => {
        money.remove()
    },1500);

    setTimeout(() => {
        ripples.remove()
    },1000);
})
