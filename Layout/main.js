import {format} from "../src/Scripts/Components/format.js";
import {bonus, catchbonusstart} from "../src/Scripts/modules/catchbonusReworked";
import {changeMenuCategory} from './menu.js';
import {changeCounterElementText, onClickHandler} from '../src/Scripts/modules/onClickIncrement.js';
import {timer, upgrade} from "../src/Scripts/modules/upgrades.js";
import {clickAnimation} from "./animation";
import {login} from '../src/Scripts/modules/apiLogin.js';
import {changeMobileMenuCategory} from "./mobileMenu.js";
import achivementList from '../src/Catalog/achievements.json';

let sumOfCatchedBonuses = 0;
let counter = 2220000;
let autoClick = 0;
let extraMoneyPerClick = 0;
const menuDivList = document.querySelectorAll('.menu__div-list');
const buttons = document.querySelectorAll('.menu-item');

window.addEventListener('DOMContentLoaded', (event) => {
    const counterButtonElement = document.getElementById("counter-button");
    const upgradeFromHtml = document.getElementsByClassName("menu__upgrades-list-item");

    if (upgradeFromHtml.length) {
        for (let name = 0; name < upgradeFromHtml.length; name++) {
            const upgradeDiv = upgradeFromHtml[name];
            const upgradeId = upgradeDiv;
            
            upgradeDiv.addEventListener('click', (event) => {
                const result = upgrade(counter, autoClick, extraMoneyPerClick, upgradeId.id, upgradeDiv, achivementList);
                counter = result.counter;
                autoClick = result.autoClick;
                extraMoneyPerClick = result.extraMoneyPerClick;
                upgradeSound();
            });
        }
    }

    if (counterButtonElement) {
        counterButtonElement.addEventListener('click', (event) => {
            counter = onClickHandler(counter, extraMoneyPerClick);
            clickSound();
        });
    };

    if(counterButtonElement){
        counterButtonElement.addEventListener('click', (e) => {
            clickAnimation(e, extraMoneyPerClick, counterButtonElement);
        })
    }

    console.log('DOM fully loaded and parsed');
});

function clickSound() {
    const sound = document.getElementById("click_sound");
    sound.preload = 'auto';
    sound.load();
    sound.play();
}
function upgradeSound() {
    const sound = document.getElementById("upgrade_sound");
    sound.play();
}

login();
catchbonusstart();

document.getElementById("wrap").addEventListener('click', (event) => {
    if (event.target && event.target.matches(".catchbonus")) {
        sumOfCatchedBonuses++;
        document.getElementById('stat5').innerHTML = sumOfCatchedBonuses;
        let result = bonus(counter, autoClick);
        if (result.autoClick) {
            let oldAutoClick = autoClick
            autoClick = autoClick + autoClick;
            setTimeout(() => {
                
                autoClick = autoClick - oldAutoClick;
                let autoClickFormat = format(autoClick);
                document.getElementById('moneyPerSecond').innerHTML = 'Na sekundę: ' + autoClickFormat + ' $';
            }, 5000);
            autoClick = result.autoClick
        } else if (result.counter) {
            counter = result.counter
        }
    }
});

changeMenuCategory(buttons, menuDivList);
changeMobileMenuCategory(menuDivList);

setInterval(() => {
    counter = timer(counter, autoClick);
    changeCounterElementText(counter);
}, 1000)