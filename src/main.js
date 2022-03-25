import {onClickHandler} from './Scripts/modules/onClickIncrement.js';
// import {menelUpgrade, timer, upgradeCostFormat} from './Scripts/modules/upgrades.js';

const counterButtonElement = document.getElementById("counter-button");
// const menelUpgradeButton = document.getElementById("upgrade1");

export let counter = 11;
export let autoClick = 0;

// if (timer) {
//     counter = counter + autoClick;
// }

// if (menelUpgradeButton) {
//     menelUpgradeButton.addEventListener('click', (event) => {
//         counter = menelUpgrade(autoClick);
//         console.log(autoClick);
//     });
// }

if (counterButtonElement){
    counterButtonElement.addEventListener('click', (event) => {
        counter = onClickHandler(counter);
    });
};

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

// setInterval(timer, 1000);