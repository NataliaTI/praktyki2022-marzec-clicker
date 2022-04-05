import { showContent } from "../Components/alert.js";

export function osiagniecia(upgradeLevel, upgradeName, achivementList) {
    const achievementLevel = Object.keys(achivementList);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        achievementLevel.forEach(achievementKey => {
            if (achivementList[achievementKey].level == upgradeLevel && achivementList[achievementKey].upgradeName == upgradeName) {
                const header = achivementList[achievementKey].achievementHeader;
                const description = achivementList[achievementKey].achievementDescription;
                const achievementImage = achivementList[achievementKey].iconName;
            
                showContent(header, description, achievementImage);
                achievementSound();
            }
        });
    }


    function achievementSound() {
        const sound = document.getElementById("achievement_sound");
        sound.play();
    }
=======
=======
>>>>>>> 0fe11da1018a9e6ae824f707c9ef282159219008
=======
>>>>>>> 0fe11da1018a9e6ae824f707c9ef282159219008
    achievementLevel.forEach(achievementKey => {
        if (achivementList[achievementKey].level == upgradeLevel && achivementList[achievementKey].upgradeName == upgradeName) {
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
            showContent(header, description, achievementImage);
        }
    });
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fe11da1018a9e6ae824f707c9ef282159219008
=======
>>>>>>> 0fe11da1018a9e6ae824f707c9ef282159219008
=======
>>>>>>> 0fe11da1018a9e6ae824f707c9ef282159219008
