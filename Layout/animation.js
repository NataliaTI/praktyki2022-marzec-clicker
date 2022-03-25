import { extraMoneyPerClick } from "../src/Scripts/modules/upgrades.js";

const clicker = document.querySelector('.clicker-img');

clicker.addEventListener('click', function(e) {
    const cos = extraMoneyPerClick + 1;
    
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.classList.add('click');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    let beer = document.createElement('span');
    beer.classList.add('test-click');
    ripples.appendChild(beer);
    

    let money = document.createElement('div');
    money.classList.add('click');
    money.style.left = x + 'px';
    money.style.top = y + 'px';
    this.appendChild(money);

    let moneyClick = document.createElement('span');
    moneyClick.classList.add('moneyClick');
    money.appendChild(moneyClick);

    moneyClick.textContent = '+' + cos;

    setTimeout(() => {
        money.remove()
    },1500);

    setTimeout(() => {
        ripples.remove()
    },1000);
})