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

        achievementListUpdate(achievementList, achievementsUnlocked);

    })
}


export function achievementListUpdate(achievementList, achievementsUnlocked) {

    console.log(achievementList)

    for (let lista in achievementList) {
        if (!achievementList[lista].unlocked) {
            achievementList[lista].unlocked = true;

        }
        //console.log(achievementList[lista].upgradeName)
    }
    console.log(achievementList)
    // for (achievementList) {

    //     const achievementsUnlocked = achievementList[achievementKey].unlocked;

    //     if (achievementsUnlocked == false) {
    //         achievementsUnlocked.setAttribute('unlocked') == true;
    //         achievementList = achievementsUnlocked;
    //     }
    // }


    /**
     * W zmiennej `achievementList` znajduje się obiekt z osiągnięciami z pliku achievements.json
     * W zmiennej `achievementsUnlocked` znajduje się tablica z kluczami odblokowanych osiągnięć
     *
     * Na podstawie tablicy `achievementsUnlocked` funkcja powinna zaktualizować klucz `unlocked`
     * w odpowiednich osiągnięciach w obiekcie `achievementList` i zwrócić ten obiekt
    */
}



export function getAchievementsUnlocked(achievementList) {

    /**
     * W zmiennej `achievementList` znajduje się obiekt z osiągnięciami z pliku achievements.json
     * 
     * Na podstawie tej zmiennej należy przejść za pomocą pętli po każdym osiągnięciu po kolei
     * i sprawdzić czy dane osiągnięcie ma ustawiony klucz `unlocked` na `true`
     * jeśli tak dodajemy klucz osiągnięcia do tablicy z odblokowanymi osiągnięciami, 
     * która funkcja powinna zwrócić, zakładając że użytkownik odblokował osiągnięcia:
     * 
     * 'Pierwszy otwieracz'
     * 'Dziesiąty otwieracz'
     * 'Pierwszy menelik'
     * 
     * funkcja powinna zwrócić tablicę:
     * 
     * ["otwieracz1", "otwieracz10", "mietek1"]
     */
}