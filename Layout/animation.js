import { format } from "../src/Scripts/Components/format.js";

export function clickAnimation(e, extraMoneyPerClick, counterButtonElement){
    const moneyOnClick = extraMoneyPerClick + 1;
    const moneyOnClickFormated = format(moneyOnClick);
    
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    const beerWrap = document.createElement('span');
    beerWrap.classList.add('click');
    beerWrap.style.left = x + 'px';
    beerWrap.style.top = y + 'px';
    counterButtonElement.appendChild(beerWrap);

    const beer = document.createElement('span');
    beer.classList.add('click-beer');
    beerWrap.appendChild(beer);

    const moneyClickWrap = document.createElement('div');
    moneyClickWrap.classList.add('click');
    moneyClickWrap.style.left = x + 'px';
    moneyClickWrap.style.top = y + 'px';
    counterButtonElement.appendChild(moneyClickWrap);

    const moneyClick = document.createElement('span');
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