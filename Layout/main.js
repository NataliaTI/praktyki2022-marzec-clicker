import { changeCounterElementText, onClickHandler } from '../src/Scripts/modules/onClickIncrement.js';
import { otwieraczUpgrade, mietekUpgrade, sebaUpgrade, grazynaUpgrade, gangUpgrade, monopolowyUpgrade, browarUpgrade, destylarniaUpgrade, timer } from "../src/Scripts/modules/upgrades.js";

// guzik do klikania
const counterButtonElement = document.getElementById("counter-button");

// ulepszenia
const otwieraczUpgradeButton = document.getElementById("upgrade1");
const mietekUpgradeButton = document.getElementById("upgrade2");
const sebaUpgradeButton = document.getElementById("upgrade3");
const grazynaUpgradeButton = document.getElementById("upgrade4");
const gangUpgradeButton = document.getElementById("upgrade5");
const monopolowyUpgradeButton = document.getElementById("upgrade6");
const browarUpgradeButton = document.getElementById("upgrade7");
const destylarniaUpgradeButton = document.getElementById("upgrade8");

export let counter = 150;
export let autoClick = 0;

if (counterButtonElement) {
    counterButtonElement.addEventListener('click', (event) => {
        counter = onClickHandler(counter);
    });
};

if (otwieraczUpgradeButton) {
    otwieraczUpgradeButton.addEventListener('click', (event) => {
        counter = otwieraczUpgrade(counter, autoClick);
    });
}

if (mietekUpgradeButton) {
    mietekUpgradeButton.addEventListener('click', (event) => {
        const result = mietekUpgrade(counter, autoClick);

        counter = result.counter;
        autoClick = result.autoClick;
    });
}

if (sebaUpgradeButton) {
    sebaUpgradeButton.addEventListener('click', (event) => {
        const result = sebaUpgrade(counter, autoClick);

        counter = result.counter;
        autoClick = result.autoClick;
    });
}

if (grazynaUpgradeButton) {
    grazynaUpgradeButton.addEventListener('click', (event) => {
        const result = grazynaUpgrade(counter, autoClick);

        counter = result.counter;
        autoClick = result.autoClick;
    });
}

if (gangUpgradeButton) {
    gangUpgradeButton.addEventListener('click', (event) => {
        const result = gangUpgrade(counter, autoClick);

        counter = result.counter;
        autoClick = result.autoClick;
    });
}

if (monopolowyUpgradeButton) {
    monopolowyUpgradeButton.addEventListener('click', (event) => {
        const result = monopolowyUpgrade(counter, autoClick);

        counter = result.counter;
        autoClick = result.autoClick;
    });
}

if (browarUpgradeButton) {
    browarUpgradeButton.addEventListener('click', (event) => {
        const result = browarUpgrade(counter, autoClick);

        counter = result.counter;
        autoClick = result.autoClick;
    });
}

if (destylarniaUpgradeButton) {
    destylarniaUpgradeButton.addEventListener('click', (event) => {
        const result = destylarniaUpgrade(counter, autoClick);

        counter = result.counter;
        autoClick = result.autoClick;
    });
}

window.addEventListener('DOMContentLoaded', (event) => { console.log('DOM fully loaded and parsed'); });

setInterval(() => {
    counter = timer(counter, autoClick);
    changeCounterElementText(counter)
}, 1000)