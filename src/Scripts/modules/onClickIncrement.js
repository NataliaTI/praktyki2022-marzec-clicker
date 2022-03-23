const counterElement = document.getElementById("counter");
const counterButtonElement = document.getElementById("counter-button");

let counter = 100;
let returnedFormatedValue = counter;

function changeCounterElementText(value) {
  returnedFormatedValue = format(value);

  counterElement.textContent = returnedFormatedValue + " $";
}

function onClickHandler() {
  counter++;
  changeCounterElementText(counter);
}
counterButtonElement.onclick = onClickHandler;