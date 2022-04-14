import { format } from "../src/Scripts/Components/format.js";
import { updateCatchedBonusesStat, dateFunction, clickCounter, updateUpgradeStat, updateAchievementStat, getStat } from "../src/Scripts/Components/statistics.js";
import { bonus, catchbonusstart } from "../src/Scripts/modules/catchbonusReworked";
import { changeMenuCategory } from './menu.js';
import { changeCounterElementText, onClickHandler } from '../src/Scripts/modules/onClickIncrement.js';
//import { timer, upgrade, upgradeListUpdate, getUpgradesStateArray } from "../src/Scripts/modules/upgrades.js";
import { clickAnimation } from "./animation";
import { login } from '../src/Scripts/modules/apiLogin.js';
import { changeMobileMenuCategory } from "./mobileMenu.js";
import achivementList from '../src/Catalog/achievements.json';
import upgradeList from '../src/Catalog/upgrade.json';
import { clickSound } from '../src/Scripts/Components/sounds.js';
import { loadGameState, saveGameState } from '../src/Scripts/modules/apiStatus.js'
import { achievementShow, achievementListUpdate, getAchievementsUnlocked } from "../src/Scripts/modules/Achievements.js"
import { upgrade, upgradeShow, timer, getUpgradesStateArray, upgradeListUpdate2, getupgradesUnlocked } from "../src/Scripts/modules/upgradesreworked.js"

const DEV_MODE = (window.location.hostname === "nataliati.github.io") ? false : true ;

let counter = 11111;
let totalCounter = counter;
let autoClick = 0;
let extraMoneyPerClick = 0;

// let upgradeList = {
//     'otwieracz': {
//         currentCost: 15,
//         level: 0,
//         autoClickValue: 0,
//         extraMoneyPerClick: 0.5
//     },
//     'mietek': {
//         currentCost: 155,
//         level: 0,
//         autoClickValue: 10,
//         extraMoneyPerClick: 0
//     },
//     'seba': {
//         currentCost: 1600,
//         level: 0,
//         autoClickValue: 90,
//         extraMoneyPerClick: 9
//     },
//     'grazyna': {
//         currentCost: 7500,
//         level: 0,
//         autoClickValue: 299,
//         extraMoneyPerClick: 73
//     },
//     'gang': {
//         currentCost: 35000,
//         level: 0,
//         autoClickValue: 779,
//         extraMoneyPerClick: 133
//     },
//     'monopolowy': {
//         currentCost: 130000,
//         level: 0,
//         autoClickValue: 1818,
//         extraMoneyPerClick: 421
//     },
//     'browar': {
//         currentCost: 800000,
//         level: 0,
//         autoClickValue: 0,
//         extraMoneyPerClick: 3901
//     },
//     'destylarnia': {
//         currentCost: 4000000,
//         level: 0,
//         autoClickValue: 6213,
//         extraMoneyPerClick: 0
//     },
//     'current': {
//         currentAutoClickValue: 0,
//         currentExtraMoneyPerClick: 0
//     },
// }

login();
window.addEventListener('DOMContentLoaded', (event) => {

    const menuDivList = document.querySelectorAll('.menu__div-list');
    const buttons = document.querySelectorAll('.menu__item');
    const counterButtonElement = document.getElementById("counter-button");
    const upgradeFromHtml = document.getElementsByClassName("menu-upgrades__list-item");
    const achievementWrap = document.getElementById("tab-achievements");
    const upgradeWrap = document.getElementById("tab-upgrades");

    loadGameState.then((gameState) => {

        if (DEV_MODE) {
            
        gameState = {
        

            "upgrades": [
                {
                    "id": "otwieracz",
                    "quantity": 99,
                    "cost": 12254684
                },
                {
                    "id": "mietek",
                    "quantity": 15,
                    "cost": 1240
                },
                {
                    "id": "seba",
                    "quantity": 8,
                    "cost": 4887
                },
                {
                    "id": "grazyna",
                    "quantity": 9,
                    "cost": 26376
                },
                {
                    "id": "gang",
                    "quantity": 7,
                    "cost": 93098
                },
                {
                    "id": "monopolowy",
                    "quantity": 6,
                    "cost": 300695
                },
                {
                    "id": "browar",
                    "quantity": 1,
                    "cost": 919999
                }
            ],
            "upgradeCount": 213,
            "startDataTime": "2022-04-06 13:06:01",
            "points": 6322496184.5,
            "clickPerSec": 53518,
            "extraMoneyPerClick": 34848.5,
            "clickCount": 1105,
            "catchedBonuses": 2,
            "achievementsObtained": [
                "otwieracz1",
                "otwieracz10",
                "mietek1",
                "mietek10",
                "seba1",
                "ekspedientka1",
                "gang1",
                "monopolowy1",
                "browar1"
            ],
            "achievementCount": 9
    
    }
}
        

        if (gameState) {

            if (gameState.hasOwnProperty('upgradeCount')) {
                updateUpgradeStat(gameState.upgradeCount);
            }

            if (gameState.hasOwnProperty('startDataTime')) {
                dateFunction(gameState.startDataTime);
            }

            if (gameState.hasOwnProperty('clickCount')) {
                clickCounter(gameState.clickCount);
            }

            if (gameState.hasOwnProperty('catchedBonuses')) {
                updateCatchedBonusesStat(gameState.catchedBonuses);
            }

            if (gameState.hasOwnProperty('achievementCount')) {
                updateAchievementStat(gameState.achievementCount);
            }

            if (gameState.hasOwnProperty('extraMoneyPerClick')) {
                extraMoneyPerClick = gameState.extraMoneyPerClick;
            }

            if (gameState.hasOwnProperty('clickPerSec')) {
                autoClick = gameState.clickPerSec;
            }
            document.getElementById('moneyPerSecond').innerHTML ='Na sekundę: ' + format(autoClick) +' $';

            if (gameState.hasOwnProperty('points')) {
                counter = gameState.points;
            }

            // if (gameState.hasOwnProperty('upgrades')) {
            //     const upgradeListTmp = upgradeListUpdate(upgradeList, gameState.upgrades, upgradeFromHtml);
            //     if (upgradeListTmp) {
            //         upgradeList = upgradeListTmp;
            //     }
            // }

            if (gameState.hasOwnProperty('achievementsObtained')) {
                const achivementListTmp = achievementListUpdate(achivementList, gameState.achievementsObtained);

                if (achivementListTmp) {
                    achivementList = achivementListTmp;
                }
            }

        }

        achievementShow(achivementList, achievementWrap);
        upgradeShow(upgradeList, upgradeWrap, totalCounter)

        document.getElementById("wrap").addEventListener('click', (event) => {
            if (event.target && event.target.matches(".catchbonus")) {
                updateCatchedBonusesStat();
                let result = bonus(counter, autoClick);

                if (result.autoClick) {
                    let oldAutoClick = autoClick + 10
                    autoClick = autoClick + autoClick;
                    setTimeout(() => {
                        autoClick = autoClick - result.autoClickAdd
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

        if (upgradeFromHtml.length) {
            for (let name = 0; name < upgradeFromHtml.length; name++) {
                const upgradeDiv = upgradeFromHtml[name];
                const upgradeId = upgradeDiv;

                upgradeDiv.addEventListener('click', (event) => {
                    const result = upgrade(upgradeList, counter, autoClick, extraMoneyPerClick, upgradeId.id, upgradeDiv, achivementList);
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
            document.body.classList.add('bodyLoad');
        }, 1000)

        setInterval(() => {
            const unlockedAchievements = getAchievementsUnlocked(achivementList);
            //const unlockedUpgrades = getupgradesUnlocked(upgradeList);
            const currentGameState = {
                "upgrades": getUpgradesStateArray(upgradeList),
                "upgradeCount": getStat('upgradeCount'),
                "startDataTime": gameState.startDataTime,
                "points": counter,
                "clickPerSec": autoClick,
                "extraMoneyPerClick": extraMoneyPerClick,
                "clickCount": getStat('clickCount'),
                "catchedBonuses": getStat('catchedBonuses'),
                "achievementsObtained": unlockedAchievements,
                "achievementCount": unlockedAchievements.length,
                "upgradesObtained": unlockedUpgrades,
                "upgradeCount": unlockedUpgrades.lenght
            }


            saveGameState(currentGameState);
        }, 60000);
    });
});