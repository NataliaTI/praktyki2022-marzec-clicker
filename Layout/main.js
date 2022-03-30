import { format } from "../src/Scripts/Components/format.js"
import { bonus } from "../src/Scripts/modules/catchbonusReworked";
import {} from '../src/Scripts/modules/menu.js';
import { changeCounterElementText, onClickHandler } from '../src/Scripts/modules/onClickIncrement.js';
import { updateList, timer, upgrade } from "../src/Scripts/modules/upgrades.js";
import {} from "./animation";
import { catchbonusstart } from "../src/Scripts/modules/catchbonusReworked.js";
import { login } from '../src/Scripts/modules/apiLogin.js';

// guzik do klikania
const counterButtonElement = document.getElementById("counter-button");

// ulepszenia
const upgradeFromHtml = document.getElementsByClassName("menu__upgrades-list-item");

export let counter = 0;
export let autoClick = 0;
export let extraMoneyPerClick = 0;

login();

if (upgradeFromHtml.length) {
    for (let name = 0; name < upgradeFromHtml.length; name++) {
        const upgradeDiv = upgradeFromHtml[name];
        let upgradeId = upgradeDiv;
        upgradeId.id;

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
            const oldAutoClick = autoClick

            setTimeout(() => {
                autoClick = autoClick - oldAutoClick;
                let autoClickFormat = format(autoClick)
                //autoClick = autoClickFormat
                document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';
            }, 5000);
            autoClick = result.autoClick
        }else if (result.counter) {                
            counter = result.counter
        }
    } 
});

window.addEventListener('DOMContentLoaded', (event) => { console.log('DOM fully loaded and parsed'); });

setInterval(() => {
    counter = timer(counter, autoClick);
    // changeCounterElementText(counter)
}, 1000)
setInterval(() => {
    changeCounterElementText(counter)
}, 1)