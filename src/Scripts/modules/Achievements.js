import { showContent } from "../Components/alert.js";
import { updateAchievementStat } from "../Components/statistics.js";
import achivementList from '../../Catalog/achievements.json';
import { clickSound } from "../Components/sounds.js";

export function osiagniecia(upgradeLevel, upgradeName, achivementList) {
    const achievementLevel = Object.keys(achivementList);

    achievementLevel.forEach(achievementKey => {
        if (achivementList[achievementKey].level == upgradeLevel && achivementList[achievementKey].upgradeName == upgradeName) {
            updateAchievementStat();
            const szklana = achivementList[achievementKey].upgradeName;
            const achievement = document.getElementById(achievementKey);
            const upgradeLevel = achivementList[achievementKey].level;
            const name = achivementList[achievementKey].class;
            const header = achivementList[achievementKey].achievementHeader;
            const description = achivementList[achievementKey].achievementDescription;
            const achievementImage = achivementList[achievementKey].iconName;

            document.getElementById('headline' + szklana + upgradeLevel).innerHTML = header;
            document.getElementById('specification' + szklana + upgradeLevel).innerHTML = description;

            achievement.querySelector('.achievements-look').classList.add(name);
            showContent(header, description, achievementImage);
            clickSound("achievement_sound");
        }
    });
}

export function achievementShow(achievementList, achievementWrap) {

    const stencil = document.getElementById("achievement-show")

    const achievements = Object.keys(achivementList);


    achievements.forEach(achievementKey => {

        const clone = stencil.content.cloneNode(true)

        const header = achievementList[achievementKey].achievementHeader;
        const description = achievementList[achievementKey].achievementDescription;
        const unlocked = achievementList[achievementKey].unlocked;

        if (unlocked) {

            clone.querySelector("#headlineotwieracz1").textContent = header;
            clone.querySelector("#specificationotwieracz1").textContent = description;
            clone.querySelector(".achievements-look").classList.add(achievementList[achievementKey].class);

        }
        achievementWrap.appendChild(clone);
    })
}