import { format } from "../Components/format.js";

let upgradeCostFormat = 0;
let returnedFormatedValue = 0;
let autoClickFormat;

export const updateList = {
    'otwieracz': {
        currentCost: 10,
        cost: 40,
        level: 0,
        autoClickValue: 0,
        extraMoneyPerClick: 1
    },
    'mietek': {
        currentCost: 150,
        cost: 150,
        level: 0,
        autoClickValue: 15,
        extraMoneyPerClick: 0
    },
    'seba': {
        currentCost: 1200,
        cost: 700,
        level: 0,
        autoClickValue: 100,
        extraMoneyPerClick: 10
    },
    'grazyna': {
        currentCost: 5000,
        cost: 3000,
        level: 0,
        autoClickValue: 223,
        extraMoneyPerClick: 150
    },
    'gang': {
        currentCost: 30000,
        cost: 20000,
        level: 0,
        autoClickValue: 640,
        extraMoneyPerClick: 300
    },
    'monopolowy': {
        currentCost: 115000,
        cost: 150000,
        level: 0,
        autoClickValue: 1230,
        extraMoneyPerClick: 900
    },
    'browar': {
        currentCost: 750000,
        cost: 1250000,
        level: 0,
        autoClickValue: 0,
        extraMoneyPerClick: 4000
    },
    'destylarnia': {
        currentCost: 4000000,
        cost: 4000000,
        level: 0,
        autoClickValue: 4300,
        extraMoneyPerClick: 0  
    },
    'current': {
        currentAutoClickValue: 0,
        currentExtraMoneyPerClick: 0
    },
}

export function upgrade(counter, autoClick, extraMoneyPerClick, upgradeName) {
    const upgrade = updateList[upgradeName];
    if (counter >= upgrade.currentCost) {
        counter -= upgrade.currentCost;

        upgrade.currentCost += upgrade.cost;
        upgrade.level++;
        updateList.current.currentAutoClickValue += upgrade.autoClickValue;
        updateList.current.currentExtraMoneyPerClick += upgrade.extraMoneyPerClick;

        autoClick = updateList.current.currentAutoClickValue;  
        extraMoneyPerClick = updateList.current.currentExtraMoneyPerClick;

        returnedFormatedValue = format(counter);
        upgradeCostFormat = format(upgrade.currentCost);
        autoClickFormat = format(autoClick);
             
        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('upgradeLevel').innerHTML = upgrade.level;
        document.getElementById('sebaCost').innerHTML = upgradeCostFormat + ' $';
        document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClick + ' $';
    }

    return { counter, autoClick, extraMoneyPerClick };
}

export const timer = (counter, autoClick) => counter + autoClick;