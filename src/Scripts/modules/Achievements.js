import { showContent } from "../Components/alert.js";
import { updateAchievementStat } from "../Components/statistics.js";
import achivementList from '../../Catalog/achievements.json';
import { clickSound } from "../Components/sounds.js";

export function osiagniecia(upgradeLevel, upgradeName, achivementList) {
    const achievementLevel = Object.keys(achivementList);

    achievementLevel.forEach(achievementKey => {
        if (achivementList[achievementKey].level == upgradeLevel && achivementList[achievementKey].upgradeName == upgradeName) {
            updateAchievementStat();

            const achievement = document.getElementById(achievementKey);
            const name = achivementList[achievementKey].class;
            const header = achivementList[achievementKey].achievementHeader;
            const description = achivementList[achievementKey].achievementDescription;
            const achievementImage = achivementList[achievementKey].iconName;

            achievement.querySelector('.headline').innerHTML = header;
            achievement.querySelector('.specification').innerHTML = description;

            achievement.querySelector('.achievements-look').classList.add(name);
            showContent(header, description, achievementImage);
            clickSound("achievement_sound");
        }
    });
}

export function achievementShow(achievementList, achievementWrap) {

    const stencil = document.getElementById("achievement-show");
    const achievements = Object.keys(achivementList);

    achievements.forEach(achievementKey => {

        const clone = stencil.content.cloneNode(true);
        const header = achievementList[achievementKey].achievementHeader;
        const description = achievementList[achievementKey].achievementDescription;
        const unlocked = achievementList[achievementKey].unlocked;

        if (unlocked) {

            clone.querySelector(".headline").textContent = header;
            clone.querySelector(".specification").textContent = description;
            clone.querySelector(".achievements-look").classList.add(achievementList[achievementKey].class);

        }
        achievementWrap.appendChild(clone);

        const cloneQuerySelector = document.getElementById("achievementKey");
        cloneQuerySelector.id = achievementKey;        
    })
}