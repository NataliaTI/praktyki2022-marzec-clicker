const counterElement = document.getElementById("counter");
const counterButtonElement = document.getElementById("counter-button");

let counter = 0;
let returnedFormatedValue = counter;

function changeCounterElementText(value) {
  returnedFormatedValue = format(value);

  counterElement.textContent = returnedFormatedValue + " $";
}

 function onClickHandler() {
  counter= counter + extraMoneyPerClick;
  counter++;
  changeCounterElementText(counter);
}
counterButtonElement.onclick = onClickHandler; 