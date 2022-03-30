import { format } from "../Components/format.js";

export let extraMoneyPerClick = 0;
let upgradeCostFormat = 10;
let returnedFormatedValue = 0;
let autoClickFormat;

// zmienne od poszczególnych ulepszeń
let otwieraczUpgradeLevel = 0;
let otwieraczUpgradeCost = 10;

let mietekUpgradeLevel = 0;
let mietekUpgradeCost = 150;

let sebaUpgradeLevel = 0;
let sebaUpgradeCost = 1200;

let grazynaUpgradeLevel = 0;
let grazynaUpgradeCost = 5000;

let gangUpgradeLevel = 0;
let gangUpgradeCost = 30000;

let monopolowyUpgradeLevel = 0;
let monopolowyUpgradeCost = 115000;

let browarUpgradeLevel = 0;
let browarUpgradeCost= 750000;

let destylarniaUpgradeLevel = 0;
let destylarniaUpgradeCost = 4000000;

// funkcje od ulepszeń 
export function otwieraczUpgrade(counter, autoClick) {
    if (counter >= otwieraczUpgradeCost) {
        counter -= otwieraczUpgradeCost;
        returnedFormatedValue = format(counter);
        otwieraczUpgradeCost += 40;
        otwieraczUpgradeLevel += 1;
        upgradeCostFormat = format(otwieraczUpgradeCost);
        extraMoneyPerClick += 1;
        autoClickFormat = format(autoClick);

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('otwieraczLevel').innerHTML = otwieraczUpgradeLevel;
        document.getElementById('otwieraczCost').innerHTML = upgradeCostFormat + ' $';
        document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClickFormat + ' $';

    }
    
    return counter;
}

export function mietekUpgrade(counter, autoClick) {
    if (counter >= mietekUpgradeCost) {
        counter -= mietekUpgradeCost;
        returnedFormatedValue = format(counter);
        mietekUpgradeCost += 150;
        mietekUpgradeLevel += 1;
        autoClick += 15;
        upgradeCostFormat = format(mietekUpgradeCost);
        autoClickFormat = format(autoClick);

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('mietekLevel').innerHTML = mietekUpgradeLevel;
        document.getElementById('mietekCost').innerHTML = upgradeCostFormat + ' $';
        document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClickFormat + ' $';
        document.getElementById('stat3').innerHTML =  autoClickFormat ;
    }

    return { counter, autoClick };
}

export function sebaUpgrade(counter, autoClick) {
    if (counter >= sebaUpgradeCost) {
        counter -= sebaUpgradeCost;
        returnedFormatedValue = format(counter);
        sebaUpgradeCost += 700;
        sebaUpgradeLevel += 1;
        autoClick += 100;
        upgradeCostFormat = format(sebaUpgradeCost);
        extraMoneyPerClick += 9;
        autoClickFormat = format(autoClick);

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('sebaLevel').innerHTML = sebaUpgradeLevel;
        document.getElementById('sebaCost').innerHTML = upgradeCostFormat + ' $';
        document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClickFormat + ' $';
        document.getElementById('stat3').innerHTML = autoClickFormat ;
    }

    return { counter, autoClick };
}

export function grazynaUpgrade(counter, autoClick) {
    if (counter >= grazynaUpgradeCost) {
        counter -= grazynaUpgradeCost;
        returnedFormatedValue = format(counter);
        grazynaUpgradeCost += 3000;
        grazynaUpgradeLevel += 1;
        autoClick = autoClick + 223;
        upgradeCostFormat = format(grazynaUpgradeCost);
        extraMoneyPerClick += 150;
        autoClickFormat = format(autoClick);

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('grazynaLevel').innerHTML = grazynaUpgradeLevel;
        document.getElementById('grazynaCost').innerHTML = upgradeCostFormat + ' $';
        document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClickFormat + ' $';
        document.getElementById('stat3').innerHTML = autoClickFormat;
    }

    return { counter, autoClick };
}

export function gangUpgrade(counter, autoClick) {
    if (counter >= gangUpgradeCost) {
        counter -= gangUpgradeCost;
        returnedFormatedValue = format(counter);
        gangUpgradeCost += 20000;
        gangUpgradeLevel += 1;
        autoClick += 641;
        upgradeCostFormat = format(gangUpgradeCost);
        extraMoneyPerClick += 300;
        autoClickFormat = format(autoClick);

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('gangLevel').innerHTML = gangUpgradeLevel;
        document.getElementById('gangCost').innerHTML = upgradeCostFormat + ' $';
        document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClickFormat + ' $';
        document.getElementById('stat3').innerHTML =  autoClickFormat  ;
    }

    return { counter, autoClick };
}

export function monopolowyUpgrade(counter, autoClick) {
    if (counter >= monopolowyUpgradeCost) {
        counter -= monopolowyUpgradeCost;
        returnedFormatedValue = format(counter);
        monopolowyUpgradeCost += 150000;
        monopolowyUpgradeLevel += 1;
        autoClick += 1234;
        upgradeCostFormat = format(monopolowyUpgradeCost);
        extraMoneyPerClick += 900;
        autoClickFormat = format(autoClick);

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('monopolowyLevel').innerHTML = monopolowyUpgradeLevel;
        document.getElementById('monopolowyCost').innerHTML = upgradeCostFormat + ' $';
        document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClickFormat + ' $';
        document.getElementById('stat3').innerHTML =autoClickFormat ;
    }

    return { counter, autoClick };
}

export function browarUpgrade(counter, autoClick) {
    if (counter >= browarUpgradeCost) {
        counter -= browarUpgradeCost;
        returnedFormatedValue = format(counter);
        browarUpgradeCost += 1242353;
        browarUpgradeLevel += 1;
        upgradeCostFormat = format(browarUpgradeCost);
        extraMoneyPerClick += 3924;
        autoClickFormat = format(autoClick);

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('browarLevel').innerHTML = browarUpgradeLevel;
        document.getElementById('browarCost').innerHTML = upgradeCostFormat + ' $';
        document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClickFormat + ' $';
    }

    return counter;
}

export function destylarniaUpgrade(counter, autoClick) {
    if (counter >= destylarniaUpgradeCost) {
        counter -= destylarniaUpgradeCost;
        returnedFormatedValue = format(counter);
        destylarniaUpgradeCost += 3475675;
        destylarniaUpgradeLevel += 1;
        autoClick += 4256;
        upgradeCostFormat = format(destylarniaUpgradeCost);
        autoClickFormat = format(autoClick);

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('destylarniaLevel').innerHTML = destylarniaUpgradeLevel;
        document.getElementById('destylarniaCost').innerHTML = upgradeCostFormat + ' $';
        document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClickFormat + ' $';
        document.getElementById('stat3').innerHTML = autoClickFormat;
    
    return { counter, autoClick };
}
}

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
    function showContent() {

        const temp = document.getElementsByTagName("template")[0];
        const clon = temp.content.cloneNode(true);
        const poptext = document.getElementById('PopUpText');
        clon.querySelector("#achievementPopUp .title").textContent = 'Co dwa otwieracze to nie jeden!';
        console.log(clon.querySelector("#achievementPopUp .title"));
        clon.querySelector("#achievementPopUp .icon").src = ('../Images/dualies.png');
        document.body.appendChild(clon);
        
    }

    window.addEventListener('DOMContentLoaded', function(){
       // achievementPopUp();
        showContent();
    })

    