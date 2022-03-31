import { format, replacedot } from '../Components/format.js';
import { extraMoneyPerClick } from '../../../Layout/main.js';

const counterElement = document.getElementById("counter");

let returnedFormatedValue = counter;

export function changeCounterElementText(value){
  returnedFormatedValue = format(value);
  returnedFormatedValue = returnedFormatedValue.replace('.',',')

  counterElement.textContent = returnedFormatedValue + " $";

  mobileHeaderH2.textContent = returnedFormatedValue + ' $';
}

export function onClickHandler(counter) {
  counter += extraMoneyPerClick;
  counter++;
  changeCounterElementText(counter);
  return counter;
  
}

