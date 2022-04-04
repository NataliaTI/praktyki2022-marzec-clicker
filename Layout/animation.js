import { format } from "../src/Scripts/Components/format.js";

export function clickAnimation(e, extraMoneyPerClick, counterButtonElement){

    const moneyOnClick = extraMoneyPerClick + 1;
    let moneyOnClickFormated = format(moneyOnClick);
    moneyOnClickFormated = moneyOnClickFormated.replace('.',',')
    
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let beerWrap = document.createElement('span');
    beerWrap.classList.add('click');
    beerWrap.style.left = x + 'px';
    beerWrap.style.top = y + 'px';
    counterButtonElement.appendChild(beerWrap);

    let beer = document.createElement('span');
    beer.classList.add('click-beer');
    beerWrap.appendChild(beer);

    let moneyClickWrap = document.createElement('div');
    moneyClickWrap.classList.add('click');
    moneyClickWrap.style.left = x + 'px';
    moneyClickWrap.style.top = y + 'px';
    counterButtonElement.appendChild(moneyClickWrap);

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