import {format} from '../Components/format.js';
import {extraMoneyPerClick} from './upgrades.js';

const counterElement = document.getElementById("counter");

let returnedFormatedValue = counter;

export function changeCounterElementText(value){
  returnedFormatedValue = format(value);

  counterElement.textContent = returnedFormatedValue + " $";
}

export function onClickHandler(counter) {
  counter += extraMoneyPerClick;
  counter++;
  changeCounterElementText(counter);
  return counter;
  
}

