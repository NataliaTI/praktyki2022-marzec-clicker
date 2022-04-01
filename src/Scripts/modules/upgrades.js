import { format } from "../Components/format.js";
import { round } from "../Components/format.js";

let sumOfUpgrades = 0;
let upgradeCostFormat = 0;
let returnedFormatedValue = 0;
export let autoClickFormat;

export const updateList = {
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

export function upgrade(counter, autoClick, extraMoneyPerClick, upgradeName, upgradeDiv) {
    const upgrade = updateList[upgradeName];
    if (counter >= upgrade.currentCost) {
        counter -= upgrade.currentCost;

        upgrade.currentCost *= 1.15;
        upgrade.currentCost = round(upgrade.currentCost, -1);
        upgrade.level++;
        sumOfUpgrades++;
        updateList.current.currentAutoClickValue += upgrade.autoClickValue;
        updateList.current.currentExtraMoneyPerClick += upgrade.extraMoneyPerClick;

        autoClick = updateList.current.currentAutoClickValue;
        extraMoneyPerClick = updateList.current.currentExtraMoneyPerClick;

        returnedFormatedValue = format(counter);
        returnedFormatedValue = returnedFormatedValue.replace('.', ',')
        upgradeCostFormat = format(upgrade.currentCost);
        upgradeCostFormat = upgradeCostFormat.replace('.', ',')
        autoClickFormat = format(autoClick);
        autoClickFormat = autoClickFormat.replace('.', ',')

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClickFormat + ' $';
        document.getElementById('stat2').innerHTML = sumOfUpgrades;
        document.getElementById('stat3').innerHTML = autoClickFormat;
        upgradeDiv.querySelector('.upgradeLevel').innerHTML = upgrade.level;
        upgradeDiv.querySelector('.upgradeCost').innerHTML = upgradeCostFormat + ' $';
    }

    return { counter, autoClick, extraMoneyPerClick };
}

export const timer = (counter, autoClick) => counter + autoClick;

function showContent(alertmessage, text, icon) {
    const temp = document.getElementsByTagName("template")[0];
    const clon = temp.content.cloneNode(true);
    const poptext = document.getElementById('PopUpText');

    clon.querySelector("#achievementPopUp .title").textContent = text;
    clon.querySelector("#achievementPopUp .PUT").textContent = alertmessage;    
    clon.querySelector("#achievementPopUp .icon").src = ('../Images/' + icon);
    document.body.appendChild(clon);

    setTimeout(() => {
       deleteContent(clon)
    }, 5000);

    const closePopUpButtons = document.querySelectorAll('[data-close-button]')

    closePopUpButtons.forEach(button => {
        button.addEventListener('click', () => {
            const close = button.closest('.achievement')
            // console.log(close)
            deleteContent(clon)
        })
    })
}
function deleteContent(clon) {
    document.getElementById("achievementPopUp").remove()
};

window.addEventListener('DOMContentLoaded', function () {
    //do showContent wpisuj co chcesz zeby alert oddal, pierwsze to text, drugie nazwa pliku z folderu images (NIE DAWAJ PELNEJ SCIEZKI TYLKO NP. KAPSEL.PNG)
    showContent('Odblokowano osiągnięcie!', 'Co dwa otwieracze to nie jeden!', 'dualies.png');
});