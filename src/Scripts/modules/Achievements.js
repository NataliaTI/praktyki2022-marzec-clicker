import { counterElement } from './onClickIncrement.js';
import { upgradeList } from "./upgrades.js";
import { sumOfClicks } from "./statistics";
import { showContent } from "../Components/alert.js";

export function osiagniecia(upgradeLevel, upgradeName, achivementList) {
    const achievementLevel = Object.keys(achivementList);
    achievementLevel.forEach(achievementKey => {
        if (achivementList[achievementKey].level == upgradeLevel) {
            console.log(achivementList[achievementKey]);
            showContent();
        }
    });
}