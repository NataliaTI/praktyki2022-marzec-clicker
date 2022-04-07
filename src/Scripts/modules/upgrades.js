import { format } from "../Components/format.js";
import { round } from "../Components/format.js";
import { osiagniecia } from "./Achievements.js";
import {updateUpgradeStat } from "../Components/statistics.js"; 

let upgradeCostFormat = 0;
let returnedFormatedValue = 0;
let autoClickFormat;
const mobileHeaderH2 = document.querySelector('.mobile__header--h2');

const upgradeList = {
    'otwieracz': {
        currentCost: 15,
        level: 0,
        autoClickValue: 0,
        extraMoneyPerClick: 0.5
    },
    'mietek': {
        currentCost: 155,
        level: 0,
        autoClickValue: 10,
        extraMoneyPerClick: 0
    },
    'seba': {
        currentCost: 1600,
        level: 0,
        autoClickValue: 90,
        extraMoneyPerClick: 9
    },
    'grazyna': {
        currentCost: 7500,
        level: 0,
        autoClickValue: 299,
        extraMoneyPerClick: 73
    },
    'gang': {
        currentCost: 35000,
        level: 0,
        autoClickValue: 779,
        extraMoneyPerClick: 133
    },
    'monopolowy': {
        currentCost: 125000,
        level: 0,
        autoClickValue: 1818,
        extraMoneyPerClick: 421
    },
    'browar': {
        currentCost: 800000,
        level: 0,
        autoClickValue: 0,
        extraMoneyPerClick: 3901
    },
    'destylarnia': {
        currentCost: 4000000,
        level: 0,
        autoClickValue: 6213,
        extraMoneyPerClick: 0
    },
    'current': {
        currentAutoClickValue: 0,
        currentExtraMoneyPerClick: 0
    },
}

export function upgrade(counter, autoClick, extraMoneyPerClick, upgradeName, upgradeDiv, achivementList) {
    const upgrade = upgradeList[upgradeName];
    if (counter >= upgrade.currentCost) {
        counter -= upgrade.currentCost;

        upgrade.currentCost *= 1.15;
        upgrade.currentCost = round(upgrade.currentCost, -1);
        upgrade.level++;
        updateUpgradeStat();
        upgradeList.current.currentAutoClickValue += upgrade.autoClickValue;
        upgradeList.current.currentExtraMoneyPerClick += upgrade.extraMoneyPerClick;

        osiagniecia(upgrade.level, upgradeName, achivementList);

        autoClick = upgradeList.current.currentAutoClickValue;
        extraMoneyPerClick = upgradeList.current.currentExtraMoneyPerClick;

        returnedFormatedValue = format(counter);
        upgradeCostFormat = format(upgrade.currentCost);
        autoClickFormat = format(autoClick);

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClickFormat + ' $'; 
        document.getElementById('stat3').innerHTML = autoClickFormat;
        upgradeDiv.querySelector('.upgradeLevel').innerHTML = upgrade.level;
        upgradeDiv.querySelector('.upgradeCost').innerHTML = upgradeCostFormat + ' $';
        mobileHeaderH2.textContent = returnedFormatedValue + " $";
    }

    return { counter, autoClick, extraMoneyPerClick };
}

export const timer = (counter, autoClick) => counter + autoClick;