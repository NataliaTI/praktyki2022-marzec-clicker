import {format} from './format.js';
import {extraMoneyPerClick} from './upgrades';

const counterElement = document.getElementById("counter");

let returnedFormatedValue = counter;

export function changeCounterElementText(value){
  returnedFormatedValue = format(value);

  counterElement.textContent = returnedFormatedValue + " $";
}

export function onClickHandler(counter) {
  counter = counter + extraMoneyPerClick;
  counter++;
  changeCounterElementText(counter);
  return counter;
}