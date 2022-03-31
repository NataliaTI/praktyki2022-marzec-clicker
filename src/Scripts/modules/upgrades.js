import { format } from "../Components/format.js";

let upgradeCostFormat = 0;
let returnedFormatedValue = 0;
export let autoClickFormat;

const updateList = {
    'otwieracz': {
        cost: 40,
        level: 1,
        extraMoneyPerClick: 1
    },
    'mietek': {
        cost: 150,
        level: 1,
        autoClickValue: 15,
    },
    'seba': {
        cost: 700,
        level: 1,
        autoClickValue: 100,
        extraMoneyPerClick: 9
    },
    'grazyna': {
        cost: 3000,
        level: 1,
        autoClickValue: 223,
        extraMoneyPerClick: 150
    },
    'gang': {
        cost: 20000,
        level: 1,
        autoClickValue: 641,
        extraMoneyPerClick: 300
    },
    'monopolowy': {
        cost: 150000,
        level: 1,
        autoClickValue: 1234,
        extraMoneyPerClick: 900
    },
    'browar': {
        cost: 1250000,
        level: 1,
        extraMoneyPerClick: 4000
    },
    'destylarnia': {
        cost: 4000000,
        level: 1,
        autoClickValue: 4300
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

        returnedFormatedValue = format(counter);
        upgradeCostFormat = format(upgrade.currentCost);
        autoClickFormat = format(autoClick);
             
        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClick + ' $';

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
    clon.querySelector("#achievementPopUp .PUT").textContent = alertmessage;    clon.querySelector("#achievementPopUp .icon").src = ('../Images/' + icon);
    document.body.appendChild(clon);

    setTimeout(() => {
        deleteContent(clon)
    }, 5000);

    const closePopUpButtons = document.querySelectorAll ('[data-close-button]')

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
 
window.addEventListener('DOMContentLoaded', function(){
    //do showContent wpisuj co chcesz zeby alert oddal, pierwsze to text, drugie nazwa pliku z folderu images (NIE DAWAJ PELNEJ SCIEZKI TYLKO NP. KAPSEL.PNG)
    showContent('Odblokowano osiągnięcie!', 'Co dwa otwieracze to nie jeden!', 'dualies.png');
});