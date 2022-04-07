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
import { sound } from '../src/Scripts/Components/sounds.js';
import { loadGameState, saveGameState } from '../src/Scripts/modules/apiStatus.js'

let sumOfCatchedBonuses = 0;
let counter = 0;
let autoClick = 0;
let extraMoneyPerClick = 0;

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
            // TODO 
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
                sound('mixkit-spice-jar-open-1809.wav');
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
                    let oldAutoClick = autoClick +10
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

        setTimeout(() => {

            // tutaj zamiast obiektu gameState napisanego z ręki trzeba zebrać dane związane ze stanem gry
            // i przekazać je do funkcji saveGameState tak jak to się dzieje w tej chwili
            // - N.        
            const gameState = {"startDataTime":"2022-04-06 13:06:01","timeSpentPlaying":"92459750246436537","clickCount":424642,"clickPerSec":1200,"points":3259247,"catchedBonuses":15,"upgradeCount":1500,"achievementsObtained":[1,2,6,12,15],"upgrades":[{"id":1,"quantity":500},{"id":2,"quantity":400},{"id":3,"quantity":300},{"id":4,"quantity":200},{"id":5,"quantity":100}]};

            saveGameState(gameState);
        }, 30000);
    });
});

