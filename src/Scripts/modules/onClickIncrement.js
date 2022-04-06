import { format, replacedot } from '../Components/format.js';

const mobileHeaderH2 = document.querySelector('.mobile_header-h2');

export const counterElement = document.getElementById("counter");

let returnedFormatedValue = counter;

export function changeCounterElementText(counter) {
  returnedFormatedValue = format(counter);
  
  mobileHeaderH2.textContent = returnedFormatedValue + " $";
  counterElement.textContent = returnedFormatedValue + " $";
}

export function onClickHandler(counter, extraMoneyPerClick) {
  counter += extraMoneyPerClick;
  counter++;
  changeCounterElementText(counter);

  return counter;

}
