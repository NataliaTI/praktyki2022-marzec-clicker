import {onClickHandler} from './Scripts/modules/onClickIncrement.js';
import {otwieraczUpgrade, mietekUpgrade, sebaUpgrade, grazynaUpgrade, gangUpgrade, monopolowyUpgrade, browarUpgrade, destylarniaUpgrade, timer} from "./Scripts/modules/upgrades.js";
import {otwieraczUpgradeLevel, otwieraczUpgradeCost} from "./Scripts/modules/upgrades.js";


// guzik do klikania
const counterButtonElement = document.getElementById("counter-button");

// ulepszenia
const otwieraczUpgradeButton = document.getElementById("upgrade1");
const mietekUpgradeButton = document.getElementById("upgrade2");
const sebaUpgradeButton = document.getElementById("upgrade3");
const grazynaUpgradeButton = document.getElementById("upgrade4");
const gangUpgradeButton = document.getElementById("upgrade5");
const monopolowyUpgradeButton = document.getElementById("upgrade6");
const browarUpgradeButton = document.getElementById("upgrade7");
const destylarniaUpgradeButton = document.getElementById("upgrade8");

export let counter = 100;
export let autoClick = 0;

if (counterButtonElement){
    counterButtonElement.addEventListener('click', (event) => {
        counter = onClickHandler(counter);
        console.log(counter);
    });
};

if (otwieraczUpgradeButton) {
    otwieraczUpgradeButton.addEventListener('click', (event) => {
        counter = otwieraczUpgrade(counter);
        
    });
    // otwieraczUpgradeButton.onclick = otwieraczUpgrade;
}







mietekUpgradeButton.onclick = mietekUpgrade;
sebaUpgradeButton.onclick = sebaUpgrade;
grazynaUpgradeButton.onclick = grazynaUpgrade;
gangUpgradeButton.onclick = gangUpgrade;
monopolowyUpgradeButton.onclick = monopolowyUpgrade;
browarUpgradeButton.onclick = browarUpgrade;
destylarniaUpgradeButton.onclick = destylarniaUpgrade;












window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

// setInterval(timer, 1000);