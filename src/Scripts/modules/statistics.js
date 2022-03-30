// Punkty na sekunde - w pliku upgrades.js

//  Liczba kliknięć
const counterButtonElementStats = document.getElementById('counter-button');
let sumOfClicks = 0;

function clickCounter()
{
    sumOfClicks ++;
    document.getElementById('stat1').innerHTML = sumOfClicks;
}
counterButtonElementStats.onclick= clickCounter;


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



// Czas grania



setInterval(() => {

const dateOne = new Date("2022-03-29 10:00:00"); 
const dateTwo = new Date(); 

let seconds = Math.abs(dateTwo-dateOne)/1000;
let minutes = parseInt(seconds/60);
let hours = parseInt(minutes/60);
let days = parseInt(hours/24);
let months = parseInt(days/30);
let years = parseInt(months/12);

seconds = parseInt((seconds-minutes*60));
minutes = parseInt((minutes-hours*60));
hours = parseInt((hours-days*24));
days = parseInt((days-months*30));
months = parseInt((months-years*12));
    document.getElementById('stat4').innerHTML = years + "l " + months + "m " + days + "d " + hours + "g " + minutes + "m " + seconds + "s";
}, 1000)


// Liczba złapanych bonusów - w oczekiwaniu na skończenie bonusów 
//  let bonusCount = 0
// function bonusStatistic()
// {
    //     bonusCount ++;
    //     document.getElementById('stat5').innerHTML = bonusCount;
    // }
    // xyz.onclick= bonusStatistic;


//  let achievementsCount = 0 - w oczekiwaniu na skończenie achievementów
// function achievementsStatistic()
// {
//         achievementsCount ++;
//         document.getElementById('stat6').innerHTML = achievementsCount + '/167';
//     }
//     xyz.onclick= achievementsStatistic;
    
    
