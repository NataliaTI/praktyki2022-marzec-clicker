import {format} from "../src/Scripts/Components/format.js";
import {bonus} from "../src/Scripts/modules/catchbonusReworked";
import {} from './menu.js';
import {changeCounterElementText, onClickHandler} from '../src/Scripts/modules/onClickIncrement.js';
import {updateList, timer, upgrade} from "../src/Scripts/modules/upgrades.js";
import {clickAnimation} from "./animation";
import {catchbonusstart} from "../src/Scripts/modules/catchbonusReworked.js";
import {login} from '../src/Scripts/modules/apiLogin.js';
import {} from './mobileMenu.js';
import achivementList from '../src/Catalog/achievements.json';

let counter = 0;
let autoClick = 0;
let extraMoneyPerClick = 0;

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
            });
        }
    }
    
    if (counterButtonElement) {
        counterButtonElement.addEventListener('click', (event) => {
            counter = onClickHandler(counter, extraMoneyPerClick);
        });
    };

    if(counterButtonElement){
        counterButtonElement.addEventListener('click', (e) => {
            clickAnimation(e, extraMoneyPerClick, counterButtonElement);
        })
    }
    console.log('DOM fully loaded and parsed'); 
});

login();
catchbonusstart();

document.getElementById("wrap").addEventListener('click', (event) => {
    if (event.target && event.target.matches(".catchbonus")) {
        let result = bonus(counter, autoClick);
        console.log(result)
        if (result.autoClick) {
            let oldAutoClick = format(autoClick);
            oldAutoClick = oldAutoClick.replace('.', ',');

            setTimeout(() => {
                autoClick = autoClick - oldAutoClick;
                let autoClickFormat = format(autoClick);
                autoClickFormat = autoClickFormat.replace('.', ',');
                //autoClick = autoClickFormat
                document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClickFormat + ' $';
                autoClickFormat = autoClickFormat.replace(',', '.')
            }, 5000);
            autoClick = result.autoClick
        } else if (result.counter) {
            counter = result.counter
            //const this2 = document.getElementsByTagName('body');
            const this2 = document.querySelector("body");
            let money = document.createElement('div');
            money.classList.add('click');
            //money.id='money';
            //money.style.backgroundColor = "grey"
            //money.style.fontSize = 'large'
            money.style.left = 50 + '%';
            money.style.top = 50 + '%';
            this2.appendChild(money);

            let moneyClick = document.createElement('span');
            moneyClick.classList.add('moneyClick2');
            money.appendChild(moneyClick);
            let bonuscounter = format(Math.floor(counter / 5))
            bonuscounter = bonuscounter.replace('.', ',')

            moneyClick.textContent = '+' + bonuscounter + ' $';

            setTimeout(() => {
                money.remove()
            }, 1500);
        }
    }
});

setInterval(() => {
    counter = timer(counter, autoClick);
    changeCounterElementText(counter);
}, 1000)