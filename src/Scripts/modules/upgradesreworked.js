import  upgradeList  from '../../Catalog/upgrade.json';
import { format } from "../Components/format.js";
import { round } from "../Components/format.js";
import { achievements } from "./Achievements.js";
import { updateUpgradeStat } from "../Components/statistics.js";
import { clickSound } from "../Components/sounds.js";

// let upgradeList2 = {
//      'current': {
//          currentAutoClickValue: 0,
//          currentExtraMoneyPerClick: 0
//      },

// }


export const timer = (counter, autoClick) => counter + autoClick;
const mobileHeaderH2 = document.querySelector('.mobile__header--h2');
let upgradeCostFormat = 0;
let returnedFormatedValue = 0;
let autoClickFormat;

export function upgrades(upgradeName, upgradeList, totalCounter ) {
  const upgradeLevel = Object.keys(upgradeList);

  upgradeLevel.forEach(upgradeKey => {
      if (upgradeList[upgradeKey].startCost == totalCounter ) {
          updateUpgradeStat();

          const upgrade = document.getElementById(upgradeKey);
          const cost = format(upgradeList[upgradeKey].currentCost);
          const level = upgradeList[upgradeKey].level;
          const header = upgradeList[upgradeKey].upgradeHeader;
          const tooltip = upgradeList[upgradeKey].tooltip;
          const upgradeImage = upgradeList[upgradeKey].iconName;
          upgradeList[upgradeKey].unlocked = true;
          upgrade.querySelector('.upgrade-headline').innerHTML = header;
          upgrade.querySelector('.upgrade-specification').innerHTML = cost;
          upgrade.querySelector('.upgrade-level').innerHTML = level;
          upgrade.querySelector('.menu-upgrades__tooltiptext').innerHTML = tooltip;
          upgrade.querySelector('.upgrades-look').classList.add(name);
          showContent(cost, header, level, upgradeImage);
          //clickSound("achievement_sound");
      }
  });
}


export function upgradeShow(upgradeList, upgradeWrap, upgradesUnlocked, totalCounter) {

  const stencil = document.getElementById("upgrade-show");
  const upgrades = Object.keys(upgradeList);

  upgrades.forEach(upgradeKey => {

      const clone = stencil.content.cloneNode(true);
      const header = upgradeList[upgradeKey].upgradeHeader;
      const cost = format(upgradeList[upgradeKey].currentCost);
      const unlocked = upgradeList[upgradeKey].unlocked;
      const level = upgradeList[upgradeKey].level;
      const tooltip =upgradeList[upgradeKey].tooltip;

      if (unlocked) {
          clone.querySelector(".upgrade-headline").textContent = header;
          clone.querySelector(".upgrade-specification").textContent = cost + " $";
          clone.querySelector(".upgrade-level").textContent = level;
          clone.querySelector('.menu-upgrades__tooltiptext').innerHTML = tooltip;
          clone.querySelector(".upgrades-look").classList.add(upgradeList[upgradeKey].class);

      }
      upgradeWrap.appendChild(clone);

      const cloneQuerySelector = document.getElementById("upgradeKey");
      cloneQuerySelector.id = upgradeKey;

  })
}


export function upgradeListUpdate(upgradeList, upgradesUnlocked) {

  if (Array.isArray(upgradesUnlocked)) {
      for (let upgradeKey of upgradesUnlocked) {
          upgradeList[upgradeKey].unlocked = true;
      }
  }
}


export function getUpgradesUnlocked(upgradeList) {
  const upgrades = Object.keys(upgradeList);
  let unlockedupgrades = [];

  upgrades.forEach(upgradeKey => {
      const unlockedupgrade = upgradeList[upgradeKey];

      if (unlockedupgrade.unlocked) {
          unlockedupgrades.push(upgradeKey);
      }
  });

  return unlockedupgrades;
}


export function upgradeListUpdate2(upgradeList, upgradeStatus, upgradeHtml) {

  upgradeStatus.forEach(upgrade => {        
          const upgradeCost = upgrade.cost;
          const upgardeLevel = upgrade.quantity;

          if (upgrade != 'current') {
              upgradeList[upgrade.id].currentCost = upgradeCost;
              upgradeList[upgrade.id].level = upgardeLevel;
          }
  });

  Array.from(upgradeHtml).forEach((upgrade) => {

    const upgradeCost = upgrade.querySelector('.upgradeCost');
    const upgradeLevel = upgrade.querySelector('.upgradeLevel');

    upgradeCost.innerHTML = format(upgradeList[upgrade.id].currentCost) + " $";
    upgradeLevel.innerHTML = upgradeList[upgrade.id].level;
});

return upgradeList;
}

export function getUpgradesStateArray(upgradeList) {
  let upgradeStatus = [];
  for (let Upgrade in upgradeList){
      if(Upgrade != "current" && upgradeList[Upgrade].level>0){
          const level = upgradeList[Upgrade].level;
          const cost = upgradeList[Upgrade].currentCost;
          const upgradeObject = {id: Upgrade, quantity: level, cost: cost};
          upgradeStatus.push(upgradeObject);
      }
  } 
  return upgradeStatus;
}

export function upgrade(upgradeList, upgradeList2, counter, autoClick, extraMoneyPerClick, upgradeName, upgradeDiv, achivementList) {
  const upgrade = upgradeList[upgradeName];
  console.log(upgradeName)
  //console.log(upgrade.currentCost)
  if (counter >= upgrade.currentCost) {
      counter -= upgrade.currentCost;
  
      upgrade.currentCost *= 1.15;
      upgrade.currentCost = round(upgrade.currentCost, -1);
      upgrade.level++;
      updateUpgradeStat();
      upgradeList.current.currentAutoClickValue += upgrade.autoClickValue;
      upgradeList.current.currentExtraMoneyPerClick += upgrade.extraMoneyPerClick;
      clickSound("upgrade_sound");
      achievements(upgrade.level, upgradeName, achivementList);

      autoClick += upgrade.autoClickValue;
      extraMoneyPerClick += upgrade.extraMoneyPerClick;

      returnedFormatedValue = format(counter);
      upgradeCostFormat = format(upgrade.currentCost);
      autoClickFormat = format(autoClick);

      document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
      document.getElementById('moneyPerSecond').innerHTML = 'Na sekundę: ' + autoClickFormat + ' $'; 
      document.getElementById('stat3').innerHTML = autoClickFormat;
      upgradeDiv.querySelector('.upgradeLevel').innerHTML = upgrade.level;
      upgradeDiv.querySelector('.upgradeCost').innerHTML = upgradeCostFormat + ' $';
      mobileHeaderH2.textContent = returnedFormatedValue + " $";
  }

  return { counter, autoClick, extraMoneyPerClick };
}