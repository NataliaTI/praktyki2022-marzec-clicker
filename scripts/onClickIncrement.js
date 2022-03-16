const counterElement = document.getElementById('counter');
const counterButtonElement = document.getElementById('counter-button');

let counter = 0;

function changeCounterElementText(value) {
    counterElement.textContent = value + ' $';
}

function onClickHandler() {
    counter++;
    changeCounterElementText(counter);
}

counterButtonElement.onclick = onClickHandler;