import { showContent } from "../Components/alert.js";
import {updateAchievementStat } from "../Components/statistics.js"; 

 

export function osiagniecia(upgradeLevel, upgradeName, achivementList) {
    const achievementLevel = Object.keys(achivementList);

    achievementLevel.forEach(achievementKey => {
        if (achivementList[achievementKey].level == upgradeLevel && achivementList[achievementKey].upgradeName == upgradeName) {
            updateAchievementStat();
            const szklana = achivementList[achievementKey].upgradeName;
            const achievement = document.getElementById(achievementKey);
            const upgradeLevel = achivementList[achievementKey].level;
            const name = achivementList[achievementKey].locked;
            const header = achivementList[achievementKey].achievementHeader;
            const description = achivementList[achievementKey].achievementDescription;
            const achievementImage = achivementList[achievementKey].iconName;
            
            document.getElementById('headline' + szklana + upgradeLevel).innerHTML = header;
            document.getElementById('specification' + szklana + upgradeLevel).innerHTML = description;

            achievement.querySelector('.achievements-look').classList.add(name);
            console.log(achievement.querySelector('.achievements-look'))
            showContent(header, description, achievementImage);
            achievementSound();
         }
     });
}

function achievementSound() {
    const sound = document.getElementById("achievement_sound");
    sound.play();
}
