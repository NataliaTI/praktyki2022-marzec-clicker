const counterButtonElementStats = document.getElementById('counter-button');
let sumOfClicks = 0;

 function clickCounter()
{
    sumOfClicks ++;
    document.getElementById('stat1').innerHTML = sumOfClicks;
}
counterButtonElementStats.onclick = clickCounter;

 
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

let sumOfUpgrades = 0; 
 export function updateUpgradeStat(value)
 {       
            sumOfUpgrades ++;
            document.getElementById('stat2').innerHTML = sumOfUpgrades; 
 }

 let achievementCounter = 0;
 export function updateAchievementStat()
 {
            achievementCounter ++;
            document.getElementById('stat6').innerHTML = achievementCounter + "/32" ;
 }

 let sumOfCatchedBonuses = 0;
 export function updateCatchedBonusesStat()
 {
            sumOfCatchedBonuses++;
            document.getElementById('stat5').innerHTML = sumOfCatchedBonuses;
 }