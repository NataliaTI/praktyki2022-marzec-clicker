import { format } from "../Components/format.js";
import { round } from "../Components/format.js";
import { achievements } from "./Achievements.js";
import { updateUpgradeStat } from "../Components/statistics.js";
import { clickSound } from "../Components/sounds.js";

const mobileHeaderH2 = document.querySelector('.mobile__header--h2');
let upgradeCostFormat = 0;
let returnedFormatedValue = 0;
let autoClickFormat;

export function upgrade(upgradeList, counter, autoClick, extraMoneyPerClick, upgradeName, upgradeDiv, achivementList) {
    const upgrade = upgradeList[upgradeName];
    if (counter >= upgrade.currentCost) {
        counter -= upgrade.currentCost;
    
        upgrade.currentCost *= 1.15;
        upgrade.currentCost = round(upgrade.currentCost, -1);
        upgrade.level++;
        updateUpgradeStat();
        upgradeList.current.currentAutoClickValue += upgrade.autoClickValue;
        upgradeList.current.currentExtraMoneyPerClick += upgrade.extraMoneyPerClick;
        clickSound("upgrade_sound");
        achievements(upgrade.level, upgradeName, achivementList);

        autoClick += upgrade.autoClickValue;
        extraMoneyPerClick += upgrade.extraMoneyPerClick;

        returnedFormatedValue = format(counter);
        upgradeCostFormat = format(upgrade.currentCost);
        autoClickFormat = format(autoClick);

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('moneyPerSecond').innerHTML = 'Na sekundę: ' + autoClickFormat + ' $'; 
        document.getElementById('stat3').innerHTML = autoClickFormat;
        upgradeDiv.querySelector('.upgradeLevel').innerHTML = upgrade.level;
        upgradeDiv.querySelector('.upgradeCost').innerHTML = upgradeCostFormat + ' $';
        mobileHeaderH2.textContent = returnedFormatedValue + " $";
    }

    return { counter, autoClick, extraMoneyPerClick };
}

export const timer = (counter, autoClick) => counter + autoClick;

export function upgradeListUpdate(upgradeList, upgradeStatus, upgradeHtml) {

    upgradeStatus.forEach(upgrade => {        
            const upgradeCost = upgrade.cost;
            const upgardeLevel = upgrade.quantity;

            if (upgrade != 'current') {
                upgradeList[upgrade.id].currentCost = upgradeCost;
                upgradeList[upgrade.id].level = upgardeLevel;
            }
    });

    Array.from(upgradeHtml).forEach((upgrade) => {

        const upgradeCost = upgrade.querySelector('.upgradeCost');
        const upgradeLevel = upgrade.querySelector('.upgradeLevel');

        upgradeCost.innerHTML = format(upgradeList[upgrade.id].currentCost) + " $";
        upgradeLevel.innerHTML = upgradeList[upgrade.id].level;
    });

    return upgradeList;
}

export function getUpgradesStateArray(upgradeList) {
    let upgradeStatus = [];
    for (let Upgrade in upgradeList){
        if(Upgrade != "current" && upgradeList[Upgrade].level>0){
            const level = upgradeList[Upgrade].level;
            const cost = upgradeList[Upgrade].currentCost;
            const upgradeObject = {id: Upgrade, quantity: level, cost: cost};
            upgradeStatus.push(upgradeObject);
        }
    } 
    return upgradeStatus;
}