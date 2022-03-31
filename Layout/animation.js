import { format } from "../src/Scripts/Components/format.js";
import { extraMoneyPerClick } from "./main.js";

export const clicker = document.querySelector('.clicker-img');


export function clickAnimation(e){
    const moneyOnClick = extraMoneyPerClick + 1;
    let moneyOnClickFormated = format(moneyOnClick);

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let beerWrap = document.createElement('span');
    beerWrap.classList.add('click');
    beerWrap.style.left = x + 'px';
    beerWrap.style.top = y + 'px';
    clicker.appendChild(beerWrap);

    let beer = document.createElement('span');
    beer.classList.add('click-beer');
    beerWrap.appendChild(beer);

    let moneyClickWrap = document.createElement('div');
    moneyClickWrap.classList.add('click');
    moneyClickWrap.style.left = x + 'px';
    moneyClickWrap.style.top = y + 'px';
    clicker.appendChild(moneyClickWrap);

    let moneyClick = document.createElement('span');
    moneyClick.classList.add('moneyClick');
    moneyClickWrap.appendChild(moneyClick);

    moneyClick.textContent = '+' + moneyOnClickFormated;

    setTimeout(() => {
        moneyClickWrap.remove()
    },1500);

    setTimeout(() => {
        beerWrap.remove()
    },1000);
    
}


// clicker.addEventListener('click', function(e) {
//     const cos = extraMoneyPerClick + 1;
//     let cosFormated = format(cos);
    
//     let x = e.clientX - e.target.offsetLeft;
//     let y = e.clientY - e.target.offsetTop;

//     let ripples = document.createElement('span');
//     ripples.classList.add('click');
//     ripples.style.left = x + 'px';
//     ripples.style.top = y + 'px';
//     this.appendChild(ripples);

//     let beer = document.createElement('span');
//     beer.classList.add('test-click');
//     ripples.appendChild(beer);
    

//     let money = document.createElement('div');
//     money.classList.add('click');
//     money.style.left = x + 'px';
//     money.style.top = y + 'px';
//     this.appendChild(money);

//     let moneyClick = document.createElement('span');
//     moneyClick.classList.add('moneyClick');
//     money.appendChild(moneyClick);
    

//     moneyClick.textContent = '+' + cosFormated;

//     setTimeout(() => {
//         money.remove()
//     },1500);

//     setTimeout(() => {
//         ripples.remove()
//     },1000);
// })