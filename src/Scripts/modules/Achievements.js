import { showContent } from "../Components/alert.js";
import achivementList from '../../Catalog/achievements.json';



let achievementCounter = 0;

export function osiagniecia(upgradeLevel, upgradeName, achivementList) {
    const achievementLevel = Object.keys(achivementList);

    achievementLevel.forEach(achievementKey => {
        if (achivementList[achievementKey].level == upgradeLevel && achivementList[achievementKey].upgradeName == upgradeName) {
            const szklana = achivementList[achievementKey].upgradeName;
            const achievement = document.getElementById(achievementKey);
            const upgradeLevel = achivementList[achievementKey].level;
            const name = achivementList[achievementKey].locked;
            const header = achivementList[achievementKey].achievementHeader;
            const description = achivementList[achievementKey].achievementDescription;
            const achievementImage = achivementList[achievementKey].iconName;

            achievementCounter++
            document.getElementById('stat6').innerHTML = achievementCounter + '/xyz';
            document.getElementById('headline' + szklana + upgradeLevel).innerHTML = header;
            document.getElementById('specification' + szklana + upgradeLevel).innerHTML = description;

            // achievement.querySelector('.achievements-look').classList.add(name);
            // console.log(achievement.querySelector('.achievements-look'))
            // showContent(header, description, achievementImage);
            // achievementSound();
        }
    });
}


// function achievementSound() {
//     const sound = document.getElementById("achievement_sound");
//     sound.play();
// }

export function achievementShow(achievementList, achievementWrap, icon) {

    const stencil = document.getElementById("achievement-show")
    const clone = stencil.content.cloneNode(true)
    const achievements = Object.keys(achivementList);


    achievements.forEach(achievementKey => {
        const header = achievementList[achievementKey].achievementHeader;
        const description = achievementList[achievementKey].achievementDescription;
        const unlocked = achievementList[achievementKey].unlocked;
        const achievementImage = achievementList[achievementKey].iconName;


        if (unlocked == false) {
            clone.querySelector(".achievements-look").achievementImage = document.getElementsByClassName(".achievements-otwieracz");

        }

        clone.querySelector("#headlineotwieracz1").textContent = header;
        clone.querySelector("#specificationotwieracz1").textContent = description;
        achievementWrap.appendChild(clone);
    })


    document.getElementById("achievement-show");
}