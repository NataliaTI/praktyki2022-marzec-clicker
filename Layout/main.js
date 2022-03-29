import { menuUpgrades } from '../src/Scripts/modules/menu.js';
import { changeCounterElementText, onClickHandler } from '../src/Scripts/modules/onClickIncrement.js';
import { updateList, timer, upgrade } from "../src/Scripts/modules/upgrades.js";
import {} from "./animation";

// guzik do klikania
const counterButtonElement = document.getElementById("counter-button");

// ulepszenia
const upgradeFromHtml = document.getElementsByClassName("menu__upgrades-list-item");

export let counter = 15000000;
export let autoClick = 0;
export let extraMoneyPerClick = 0;

if (upgradeFromHtml.length) {
    for (let name = 0; name < upgradeFromHtml.length; name++) {
        const upgradeDiv = upgradeFromHtml[name];
        let upgradeId = upgradeDiv;
        upgradeId.id;

        upgradeDiv.addEventListener('click', (event) => {
            const result = upgrade(counter, autoClick, extraMoneyPerClick, upgradeId.id);
            
            counter = result.counter;
            autoClick = result.autoClick;
            extraMoneyPerClick = result.extraMoneyPerClick;
        });
    }
}

if (counterButtonElement) {
    counterButtonElement.addEventListener('click', (event) => {
        counter = onClickHandler(counter);
    });
};

window.addEventListener('DOMContentLoaded', (event) => { console.log('DOM fully loaded and parsed'); });

setInterval(() => {
    counter = timer(counter, autoClick);
    changeCounterElementText(counter)
}, 1000)