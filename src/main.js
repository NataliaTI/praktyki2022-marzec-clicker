import {onClickHandler} from './Scripts/modules/onClickIncrement.js';
import {otwieraczUpgrade, mietekUpgrade, sebaUpgrade, grazynaUpgrade, gangUpgrade, monopolowyUpgrade, browarUpgrade, destylarniaUpgrade, timer} from "./Scripts/modules/upgrades.js";

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

export let counter = 0;
export let autoClick = 1;

if (counterButtonElement){
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
        counter = mietekUpgrade(counter, autoClick);
    });
}

if (sebaUpgradeButton) {
    sebaUpgradeButton.addEventListener('click', (event) => {
        counter = sebaUpgrade(counter, autoClick);
    });
}

if (grazynaUpgradeButton) {
    grazynaUpgradeButton.addEventListener('click', (event) => {
        counter = grazynaUpgrade(counter, autoClick);
    });
}

if (gangUpgradeButton) {
    gangUpgradeButton.addEventListener('click', (event) => {
        counter = gangUpgrade(counter, autoClick);
    });
}

if (monopolowyUpgradeButton) {
    monopolowyUpgradeButton.addEventListener('click', (event) => {
        counter = monopolowyUpgrade(counter, autoClick);
    });
}

if (browarUpgradeButton) {
    browarUpgradeButton.addEventListener('click', (event) => {
        counter = browarUpgrade(counter, autoClick);
    });
}

if (destylarniaUpgradeButton) {
    destylarniaUpgradeButton.addEventListener('click', (event) => {
        counter = destylarniaUpgrade(counter, autoClick);
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

counter = setInterval(() => {
    timer(counter, autoClick);
  }, 1000)