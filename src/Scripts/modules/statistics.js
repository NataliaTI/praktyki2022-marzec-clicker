 //  Liczba kliknięć- działało
 
 const counterButtonElementStats = document.getElementById('counter-button');
//  const counterButtonElementPoints = document.getElementById('counter-button');


 
 let sumOfClicks = 0;

 function clickCounter()
 {
 sumOfClicks ++;
 document.getElementById('stat1').innerHTML = sumOfClicks;
 }
 counterButtonElementStats.onclick= clickCounter;

//  let sumOfPoints = 0

//  function pointsCounter()
//  {
//      sumOfPoints++
//      document.getElementById('stat3').innerHTML = sumOfPoints;
//  }
//  counterButtonElementPoints.onclick= pointsCounter;


 
//  console.log('stat1');


// autoclick na sekunde - nie dziala
// import extraMoneyPerClick from "../../src/Scripts/modules/upgrades.js"




// // Czas gry

// let time = 0;

// function timerStatistic() 
// {
  
//     time ++; 
//     document.getElementById('stat1').innerHTML = time ;
//     console.log(time);
// }
// setInterval(timerStatistic, 1000);


// let totalPoints = 0

// function totalPointsStatistic()
// {

// }


// function autoClickStatistic()
// {


//     document.getElementById('moneyPerSecond')=autoClick;
//     document.getElementById('stat1').innerHTML= 'moneyPerSecond'
//     console.log(autoClick)
// }



// import { gangUpgrade } from "./upgrades";
// Liczba złapanych bonusów
// let bonusCount = 0
// function bonusStatistic()
// {
//     bonusCount += bonusCount
    // document.getElementById('tuwpiszid').innerHTML = bonusCount;
// }
// catchbonus.onclick= bonusStatistic()


// Liczba zakupionych ulepszeń

const otwieraczUpgradeButton = document.getElementById("upgrade1");
const mietekUpgradeButton = document.getElementById("upgrade2");
const sebaUpgradeButton = document.getElementById("upgrade3");
const grazynaUpgradeButton = document.getElementById("upgrade4");
const gangUpgradeButton = document.getElementById("upgrade5");
const monopolowyUpgradeButton = document.getElementById("upgrade6");
const browarUpgradeButton = document.getElementById("upgrade7");
const destylarniaUpgradeButton = document.getElementById("upgrade8");

let totalUpgrades = 0;
function sumOfUpgrades()
{
totalUpgrades++
document.getElementById('stat2').innerHTML = totalUpgrades;
}
otwieraczUpgradeButton.onclick=sumOfUpgrades;
mietekUpgradeButton.onclick=sumOfUpgrades;
sebaUpgradeButton.onclick=sumOfUpgrades;
grazynaUpgradeButton.onclick=sumOfUpgrades;
gangUpgradeButton.onclick=sumOfUpgrades;
monopolowyUpgradeButton.onclick=sumOfUpgrades;
browarUpgradeButton.onclick=sumOfUpgrades;
destylarniaUpgradeButton.onclick=sumOfUpgrades; 



// import { changeCounterElementText, onClickHandler } from '../src/Scripts/modules/onClickIncrement.js';
// const tytyty = document.getElementById('counter')
// function no()    
// {   
//     counter += extraMoneyPerClick;
//     counter++;
//     changeCounterElementText(counter);
//     let totalMoney = totalMoney + counter;
//     return counter;
//     document.getElementById('stat3').innerHTML= totalMoney;
//     console.log(totalMoney)
//   }
//   tytyty.onclick=no;
  


// Liczba osiągnięć

// let sumOfAchievements = 0;
