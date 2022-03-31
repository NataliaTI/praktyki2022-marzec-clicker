import { format } from "../Components/format.js";

let sumOfUpgrades= 0;
let upgradeCostFormat = 0;
let returnedFormatedValue = 0;
export let autoClickFormat;

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

export function upgrade(counter, autoClick, extraMoneyPerClick, upgradeName, upgradeDiv) {
    const upgrade = updateList[upgradeName];
    if (counter >= upgrade.currentCost) {
        counter -= upgrade.currentCost;

        upgrade.currentCost += upgrade.cost;
        upgrade.level++;
        updateList.current.currentAutoClickValue += upgrade.autoClickValue;
        updateList.current.currentExtraMoneyPerClick += upgrade.extraMoneyPerClick;

        autoClick = updateList.current.currentAutoClickValue;  
        extraMoneyPerClick = updateList.current.currentExtraMoneyPerClick;

        sumOfUpgrades++
        returnedFormatedValue = format(counter);
        upgradeCostFormat = format(upgrade.currentCost);
        autoClickFormat = format(autoClick);
             
        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClick + ' $';
        document.getElementById('stat2').innerHTML = sumOfUpgrades;
        document.getElementById('stat3').innerHTML = autoClickFormat;
        upgradeDiv.querySelector('.upgradeLevel').innerHTML = upgrade.level;
        upgradeDiv.querySelector('.upgradeCost').innerHTML = upgradeCostFormat + ' $';
    }

    return { counter, autoClick, extraMoneyPerClick };
}

export const timer = (counter, autoClick) => counter + autoClick;

/* achievementPopUp();
function achievementPopUp()  {
    console.log(document.getElementById('PopUpText'));
    document.getElementById('PopUpText').innerHTML = "Co dwa otwieracze to nie jeden";
    document.getElementById("achievementPopUp").src = "dualies.png";
    const elem = document.getElementById('achievementPopUp');
} */

//showContent();
//if achievement == true {

function showContent(alertmessage, text, icon) {

    const temp = document.getElementsByTagName("template")[0];
    const clon = temp.content.cloneNode(true);
    const poptext = document.getElementById('PopUpText');

    clon.querySelector("#achievementPopUp .title").textContent = text;
    clon.querySelector("#achievementPopUp .PUT").textContent = alertmessage,
    console.log(clon.querySelector("#achievementPopUp .title"));
    clon.querySelector("#achievementPopUp .icon").src = ('../Images/' + icon);
    document.body.appendChild(clon);

}

function hideContent() {

}
window.addEventListener('DOMContentLoaded', function(){
    // achievementPopUp();
    //do showContent wpisuj co chcesz zeby alert oddal, pierwsze to text, drugie nazwa pliku z folderu images (NIE DAWAJ PELNEJ SCIEZKI TYLKO NP. KAPSEL.PNG)
    showContent('Odblokowano osiągnięcie!', 'Co dwa otwieracze to nie jeden!', 'dualies.png');
});

const closeSaveButtons = document.querySelectorAll ('[data-close-button]');

closeSaveButtons.forEach(button => {
    button.addEventListener('click', () => {
        const save = button.closest('.save');
        closeSave(save);
    })
})

function closeSave(save) {
    if (save == null) return;
    save.classList.remove('active');
    overlay.classList.remove('active');
}