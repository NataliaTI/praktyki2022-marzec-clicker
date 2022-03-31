import { format, replacedot } from '../Components/format.js';

const mobileHeaderH2 = document.querySelector('.mobile_header-h2');

const counterElement = document.getElementById("counter");

let returnedFormatedValue = counter;

export function changeCounterElementText(value){
  returnedFormatedValue = format(value);
  returnedFormatedValue = returnedFormatedValue.replace('.',',')

  counterElement.textContent = returnedFormatedValue + " $";

  mobileHeaderH2.textContent = returnedFormatedValue + ' $';
}

export function onClickHandler(counter, extraMoneyPerClick) {
  counter += extraMoneyPerClick;
  counter++;
  changeCounterElementText(counter);

  return counter;  
}