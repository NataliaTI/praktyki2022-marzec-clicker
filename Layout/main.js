import { format } from "../src/Scripts/Components/format.js"
import { bonus } from "../src/Scripts/modules/catchbonusReworked";
import {} from '../src/Scripts/modules/menu.js';
import { changeCounterElementText, onClickHandler } from '../src/Scripts/modules/onClickIncrement.js';
import { updateList, timer, upgrade } from "../src/Scripts/modules/upgrades.js";
import {} from "./animation";
import { catchbonusstart } from "../src/Scripts/modules/catchbonusReworked.js";
import { login } from '../src/Scripts/modules/apiLogin.js';
import {mobileHome, mobileUpgrade, mobileAchievements, mobileStats, mobileHeader, mobileHeaderBtn, changeToHome, changeToUpgrade, changeToAchievements, changeToStats, closeMenu} from "../src/Scripts/modules/mobileMenu.js";

// guzik do klikania
const counterButtonElement = document.getElementById("counter-button");

// ulepszenia
const upgradeFromHtml = document.getElementsByClassName("menu__upgrades-list-item");

export let counter = 1000;
export let autoClick = 0;
export let extraMoneyPerClick = 0;

login();

if (upgradeFromHtml.length) {
    for (let name = 0; name < upgradeFromHtml.length; name++) {
        const upgradeDiv = upgradeFromHtml[name];
        const upgradeId = upgradeDiv;

        upgradeDiv.addEventListener('click', (event) => {
            const result = upgrade(counter, autoClick, extraMoneyPerClick, upgradeId.id, upgradeDiv);
            
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

catchbonusstart();

document.getElementById("wrap").addEventListener('click', (event) => {
    if (event.target && event.target.matches(".catchbonus")) {
        let result = bonus(counter, autoClick);
        console.log(result)
        if (result.autoClick) {
            autoClick = result.autoClick
        }else if (result.counter) {                
            counter = result.counter
        }
    } 
});

window.addEventListener('DOMContentLoaded', (event) => { console.log('DOM fully loaded and parsed'); });

setInterval(() => {
    counter = timer(counter, autoClick);
    changeCounterElementText(counter);
}, 1000)

mobileHome.addEventListener('click', (e) => {
    changeToHome();
});

mobileUpgrade.addEventListener('click', (e) => {
changeToUpgrade();
});

mobileAchievements.addEventListener('click', (e) => {
    changeToAchievements();
});

mobileStats.addEventListener('click', (e) => {
    changeToStats();
});

mobileHeaderBtn.addEventListener('click', (e) => {
    closeMenu();
});