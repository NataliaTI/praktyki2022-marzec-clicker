import { format } from "../Components/format.js";
import { round } from "../Components/format.js";
import { osiagniecia } from "./Achievements.js";
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
        osiagniecia(upgrade.level, upgradeName, achivementList);

        autoClick = upgradeList.current.currentAutoClickValue;
        extraMoneyPerClick = upgradeList.current.currentExtraMoneyPerClick;

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

    upgradeStatus = [{
        'id': "otwieracz",
        'quantity': 15,
        'cost': 100
        }, 
        {   
        "id": "seba",
        "quantity": 10,
        "cost": 200
        }]

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

        upgradeCost.innerHTML = upgradeList[upgrade.id].currentCost + " $";
        upgradeLevel.innerHTML = upgradeList[upgrade.id].level;
    });

    /**
     * W zmiennej `upgradeList` znajduje się obiekt z konfiguracją ulepszeń z main.js
     * W zmiennej `upgradeStatus` znajduje się tablica z zakupionymi ulepszeniami
     * W zmiennej `upgradeHtml` znajduje się lista elementów HTML z ulepszeniami
     * 
     * Na podstawie zmiennej `upgradeStatus` funkcja powinna zaktualizować aktualną
     * liczbę sztuk danego ulepszenia oraz jego koszt w obiekcie `upgradeList`
     * a następnie zaktualizować koszt i liczbę sztuk ulepszenia wyświetlaną na ekranie
     * w zakładce Ulepszenia 
     * 
     * Funkcja powinna zwrócić zaktualizowana zmienną `upgradeList`
     */

    return upgradeList;
}


export function getUpgradesStateArray(upgradeList) {

    /**
     * W zmiennej `upgradeList` znajduje się obiekt z konfiguracją ulepszeń z main.js
     * 
     * Funkcja powinna na podstawie zmiennej `upgradeList` z każdego ulepszenia (mogą być tylko zakupione)
     * wyciągnąć currentCost, level oraz klucz ulepszenia np. "otwieracz", "seba", itp.
     * i przypisać je jako obiekt w tablicy
     * 
     * Przy założeniu, że uzytkownik kupił:
     * 
     * 15 sztuk Otwieracza i jego aktualny koszt to 100$
     * 10 sztuk Seby i jego aktualny koszt to 200$
     * 
     * Funkcja powinna zwrócić tablicę obiektów:
     * 
     * [{
     *  "id": "otwieracz",
     *  "quantity": 15,
     *  "cost": 100
     * }, {
     *  "id": "seba",
     *  "quantity": 10,
     *  "cost": 200
     * }]
     */
}