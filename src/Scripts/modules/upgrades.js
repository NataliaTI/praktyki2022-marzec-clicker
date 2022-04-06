import { format } from "../Components/format.js";
import { round } from "../Components/format.js";
import { osiagniecia } from "./Achievements.js";
import {updateUpgradeStat } from "../Components/statistics.js"; 
import {  } from "../../../Layout/mobileMenu.js";

 
let upgradeCostFormat = 0;
let returnedFormatedValue = 0;
let autoClickFormat;
const mobileHeaderH2 = document.querySelector('.mobile__header--h2');

const upgradeList = {
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