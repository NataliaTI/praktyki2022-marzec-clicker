import { format } from '../Components/format.js';
import { extraMoneyPerClick } from '../../../Layout/main.js';
import { osiagniecia } from './Achievements.js';

const mobileHeaderH2 = document.querySelector('.mobile_header-h2');


const counterElement = document.getElementById("counter");

let returnedFormatedValue = counter;

export function changeCounterElementText(value) {
  returnedFormatedValue = format(value);

  counterElement.textContent = returnedFormatedValue + " $";

  mobileHeaderH2.textContent = returnedFormatedValue + ' $';
}

export function onClickHandler(counter) {
  counter += extraMoneyPerClick;
  counter++;
  changeCounterElementText(counter);

  return counter;
}
osiagniecia()