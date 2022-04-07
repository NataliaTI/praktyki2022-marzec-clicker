const counterButtonElementStats = document.getElementById('counter-button');
 let sumOfClicks = 0;

export function clickCounter(gameState)
{ 
    //   console.log(sumOfClicks)
//     console.log('gameState',gameState)
        if(gameState)
   {
       sumOfClicks = sumOfClicks + gameState
   }
   else
   {
       sumOfClicks++;
   }
           
   document.getElementById('stat1').innerHTML = sumOfClicks;
//    console.log(sumOfClicks)
}
counterButtonElementStats.addEventListener('click', () => {
    clickCounter();
})

export function dateFunction(gameState){
setInterval(() => {

const dateOne = new Date(gameState); 
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
}


 let sumOfUpgrades = 0; 
 
 export function updateUpgradeStat(gameState)
{
        if(gameState)
   {
       sumOfUpgrades = sumOfUpgrades + gameState
   }
   else
   {
       sumOfUpgrades++;
   }
   document.getElementById('stat2').innerHTML = sumOfUpgrades;
}

  let achievementCounter = 0;
 export function updateAchievementStat(gameState)
 {
    if (gameState) {
        achievementCounter = achievementCounter + gameState
    } else {
        achievementCounter ++;
    }
   
    document.getElementById('stat6').innerHTML = achievementCounter + "/32" ;
 }

  let sumOfCatchedBonuses = 0;
 export function updateCatchedBonusesStat(gameState)
 {      if(gameState)
    {
        sumOfCatchedBonuses = sumOfCatchedBonuses + gameState
    }
    else
    {
        sumOfCatchedBonuses++;
    }
            
     document.getElementById('stat5').innerHTML = sumOfCatchedBonuses;
 }


 export function getStat(statKey) {

    /**
     * W zmiennej `statKey` będzie klucz informujący o tym jaką wartość chcemy uzyskać z funkcji
     * zmienna przyjmuje wartości: 
     * 
     * `clickCount` => sumOfClicks
     * `catchedBonuses` => sumOfCatchedBonuses
     * `upgradeCount` => sumOfUpgrades
     * 
     * Na podstawie zmiennej `statKey` funkcja powinna zwrócić właściwą zmienną
     */
}