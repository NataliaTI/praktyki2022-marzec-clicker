import { counterElement } from './onClickIncrement.js';
import { upgradeList } from "./upgrades.js";
import { sumOfClicks } from "./statistics";

const achievementsList = fetch('../../src/Catalog/achievements.json').then(response => response.json());
console.log(achievementsList)

export function osiagniecia(upgradeLevel, upgradeName) {
    const achievementLevel = Object.entries(achievementsList);
    console.log(achievementLevel)
    for (let index = 0; index < achievementLevel.length; index++) {
        console.log(upgradeLevel)
        achievementLevel[index.level] == upgradeLevel;
        console.log(achievementLevel)
    }
};

      //     if (returnedFormatedValue.counterElement[i] == null || returnedFormatedValue.counterElement[i].text != returnedFormatedValue1.counterElement[i].text) {
        //         returnedFormatedValue1.counterElement[i] = returnedFormatedValue.counterElement[i];
        //     }
        // returnedFormatedValue = returnedFormatedValue1;
    



    // for (i in returnedFormatedValue.counterElement) {
    //     let a = new Function('counter' + returnedFormatedValue.counterElement[i].req);
    //     if (b() && !returnedFormatedValue.counterElement[i].gotten) {
    //         returnedFormatedValue.counterElement[i].gotten = true;
    //         document.querySelector("achievement").innerHTML += 'Osiągnięcie zdobyte';
    //     }
    //     achievement: [{ req: "returnedFormatedValue.counterElement>1", gotten: false, text: "zdobyłeś pierwszy returnedFormatedValue" }];
    // }






  // for (i in otwieraczUpgradeLevel) {
        //     if (otwieracz.level[i] == null || otwieracz.level[i].text != otwieracz1.level[i].text) {
        //         otwieracz1.level[i] = otwieracz.level[i]
        //     }
        // }
        // otwieracz = otwieracz1;

        // for (i in otwieracz.level) {
        //     let a = new Function('return ' + otwieracz.level[i].req);
        //     if (b() && !otwieracz.level[i].gotten) {
        //         otwieracz.level[i].gotten = true;
        //         document.querySelector("achievements").innerHTML += 'Osiągnięcie zdobyte';
        //     }
        //     achievements: [{ req: "otwieracz.level>1", gotten: false, text: "zdobyłeś pierwszy otwieracz" }]
        // }
   // }