import {format} from './format.js';

const counterElement = document.getElementById("counter");

let returnedFormatedValue = counter;

function changeCounterElementText(value){
  returnedFormatedValue = format(value);

  counterElement.textContent = returnedFormatedValue + " $";
}

export function onClickHandler(counter) {
  // TODO funkcja macieja moze nie dzialac
  // counter = counter + extraMoneyPerClick;
  counter++;
  changeCounterElementText(counter);
  return counter;
}