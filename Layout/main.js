import { format } from "../src/Scripts/Components/format.js";
import { updateCatchedBonusesStat } from "../src/Scripts/Components/statistics.js";
import { bonus, catchbonusstart } from "../src/Scripts/modules/catchbonusReworked";
import { changeMenuCategory } from './menu.js';
import { changeCounterElementText, onClickHandler } from '../src/Scripts/modules/onClickIncrement.js';
import { timer, upgrade } from "../src/Scripts/modules/upgrades.js";
import { clickAnimation } from "./animation";
import { login } from '../src/Scripts/modules/apiLogin.js';
import { changeMobileMenuCategory } from "./mobileMenu.js";
import achivementList from '../src/Catalog/achievements.json';
import { clickSound } from '../src/Scripts/Components/sounds.js';
import { loadGameState, saveGameState } from '../src/Scripts/modules/apiStatus.js'

let sumOfCatchedBonuses = 0;
let counter = 0;
let autoClick = 0;
let extraMoneyPerClick = 0;

export const upgradeList = {
    'otwieracz': {
        currentCost: 10,
        level: 0,
        autoClickValue: 0,
        extraMoneyPerClick: 1
    },
    'mietek': {
        currentCost: 150,
        level: 0,
        autoClickValue: 15,
        extraMoneyPerClick: 0
    },
    'seba': {
        currentCost: 1200,
        level: 0,
        autoClickValue: 100,
        extraMoneyPerClick: 10
    },
    'grazyna': {
        currentCost: 5000,
        level: 0,
        autoClickValue: 223,
        extraMoneyPerClick: 150
    },
    'gang': {
        currentCost: 30000,
        level: 0,
        autoClickValue: 640,
        extraMoneyPerClick: 300
    },
    'monopolowy': {
        currentCost: 115000,
        level: 0,
        autoClickValue: 1230,
        extraMoneyPerClick: 900
    },
    'browar': {
        currentCost: 750000,
        level: 0,
        autoClickValue: 0,
        extraMoneyPerClick: 4000
    },
    'destylarnia': {
        currentCost: 4000000,
        level: 0,
        autoClickValue: 4300,
        extraMoneyPerClick: 0
    },
    'current': {
        currentAutoClickValue: 0,
        currentExtraMoneyPerClick: 0
    },
}

login();

window.addEventListener('DOMContentLoaded', (event) => {

    const menuDivList = document.querySelectorAll('.menu__div-list');
    const buttons = document.querySelectorAll('.menu__item');
    const counterButtonElement = document.getElementById("counter-button");
    const upgradeFromHtml = document.getElementsByClassName("menu-upgrades__list-item");

    loadGameState.then((gameState) => {
        
        // na podstawie obiektu gameState w zaznaczonym poniżej warunku
        // trzeba zaktualizować zmienne odpowiedzialne za
        // aktualny stan gry np. counter, ulepszenia, osiagniecia itd.
        // N.
        console.log('game state', gameState);
        if (gameState) {
          
        }
    
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
                clickSound("click_sound");
            });
        };

        if (counterButtonElement) {
            counterButtonElement.addEventListener('click', (e) => {
                clickAnimation(e, extraMoneyPerClick, counterButtonElement);
            })
        }

        document.getElementById("wrap").addEventListener('click', (event) => {
            if (event.target && event.target.matches(".catchbonus")) {
                updateCatchedBonusesStat();
                let result = bonus(counter, autoClick);
                if (result.autoClick) {
                    let oldAutoClick = autoClick
                    autoClick = autoClick + autoClick + 10;
                    setTimeout(() => {
                        autoClick = autoClick - oldAutoClick - 10;
                        let autoClickFormat = format(autoClick);
                        document.getElementById('moneyPerSecond').innerHTML = 'Na sekundę: ' + autoClickFormat + 10 + ' $';
                    }, 5000);
                    autoClick = result.autoClick
                } else if (result.counter) {
                    counter = result.counter
                }
            }
        });

        catchbonusstart();

        if (buttons.length && menuDivList.length) {
            changeMenuCategory(buttons, menuDivList);
        }
       
        if (menuDivList.length) {
            changeMobileMenuCategory(menuDivList);
        }      
        
        setInterval(() => {
            counter = timer(counter, autoClick);
            changeCounterElementText(counter);
        }, 1000)

        setInterval(() => {

            // tutaj zamiast obiektu gameState napisanego z ręki trzeba zebrać dane związane ze stanem gry
            // i przekazać je do funkcji saveGameState tak jak to się dzieje w tej chwili
            // - N.        

            const gameState = {"startDataTime":"2022-04-06 13:06:01","timeSpentPlaying":"92459750246436537","clickCount":extraMoneyPerClick,"clickPerSec":autoClick,"points":counter,"catchedBonuses":15,"upgradeCount":1500,"achievementsObtained":[1,2,6,12,15],"upgrades":[{"id":1,"quantity":500},{"id":2,"quantity":400},{"id":3,"quantity":300},{"id":4,"quantity":200},{"id":5,"quantity":100}]};

            // console.log('%cmain.js line:109 gameState', 'color: #007acc;', gameState);

            saveGameState(gameState);
        }, 5000);
    });
});