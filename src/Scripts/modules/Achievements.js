import { showContent } from "../Components/alert.js";

export function osiagniecia(upgradeLevel, upgradeName, achivementList) {
    const achievementLevel = Object.keys(achivementList);
    achievementLevel.forEach(achievementKey => {
        if (achivementList[achievementKey].level == upgradeLevel && achivementList[achievementKey].upgradeName == upgradeName) {
            const header = achivementList[achievementKey].achievementHeader;
            const description = achivementList[achievementKey].achievementDescription;
            const achievementImage = achivementList[achievementKey].iconName;

            showContent(header, description, achievementImage);
        }
    });
}
