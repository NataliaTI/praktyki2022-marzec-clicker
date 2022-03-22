import {autoClick, counter} from "../../main";
import {format} from './format.js'; 

export let upgradeLevel = 0;
export let upgradeCost= 10;
export let upgradeCostFormat = upgradeCost;
export let extraMoneyPerClick = 0;
export let returnedFormatedValue = 0;

// zmienne od poszczególnych ulepszeń
export let otwieraczUpgradeLevel = 0;
export let otwieraczUpgradeCost = 10;

let mietekUpgradeLevel = 0;
let mietekUpgradeCost = 150;

let sebaUpgradeLevel = 0;
let sebaUpgradeCost= 1200;

let grazynaUpgradeLevel = 0;
let grazynaUpgradeCost= 5000;

let gangUpgradeLevel = 0;
let gangUpgradeCost= 30000;

let monopolowyUpgradeLevel = 0;
let monopolowyUpgradeCost= 115000;

let browarUpgradeLevel = 0;
let browarUpgradeCost= 750000;

let destylarniaUpgradeLevel = 0;
let destylarniaUpgradeCost= 4000000;

// funkcje od ulepszeń 
export function otwieraczUpgrade(counter)
{
    if(counter >= otwieraczUpgradeCost)
    {  
        counter -= otwieraczUpgradeCost;
        returnedFormatedValue = format(counter);
        otwieraczUpgradeCost += 40;
        otwieraczUpgradeLevel += 1;
        upgradeCostFormat = format(otwieraczUpgradeCost);
        // extraMoneyPerClick += 2;
        
        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('otwieraczLevel').innerHTML = otwieraczUpgradeLevel;
        document.getElementById('otwieraczCost').innerHTML = upgradeCostFormat +' $';
        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
    }
}

// export function mietekUpgrade()
// {
//      if(counter>=mietekUpgradeCost)
//     {  
//         counter = counter - mietekUpgradeCost; 
//         returnedFormatedValue = format(counter);
//         mietekUpgradeCost = mietekUpgradeCost + 150;
//         mietekUpgradeLevel = mietekUpgradeLevel + 1;
//         autoClick = autoClick + 9;
//         upgradeCostFormat = format(mietekUpgradeCost);
        
//         document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
//         document.getElementById('mietekLevel').innerHTML = mietekUpgradeLevel;
//         document.getElementById('mietekCost').innerHTML = upgradeCostFormat +' $';
//         document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
//     }
// }

// export function sebaUpgrade()
// {
//      if(counter>=sebaUpgradeCost)
//     {  
//         counter = counter - sebaUpgradeCost; 
//         returnedFormatedValue = format(counter);
//         sebaUpgradeCost = sebaUpgradeCost + 700;
//         sebaUpgradeLevel = sebaUpgradeLevel + 1;
//         autoClick = autoClick + 73;
//         upgradeCostFormat = format(sebaUpgradeCost);
//         extraMoneyPerClick = extraMoneyPerClick + 15 ;

//         document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
//         document.getElementById('sebaLevel').innerHTML = sebaUpgradeLevel;
//         document.getElementById('sebaCost').innerHTML = upgradeCostFormat +' $';
//         document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
        
//         // upgradeCostFormat = format(upgradeCost);
    
//         // document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
//         // document.getElementById('menellevel').innerHTML = upgradeLevel;
//         // document.getElementById('menelcost').innerHTML = upgradeCostFormat +' $';
//         // document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
//     }
// }

// export function grazynaUpgrade()
// {
//      if(counter>=grazynaUpgradeCost)
//     {  
//         counter = counter - grazynaUpgradeCost; 
//         returnedFormatedValue = format(counter);
//         grazynaUpgradeCost = grazynaUpgradeCost + 3000;
//         grazynaUpgradeLevel = grazynaUpgradeLevel + 1;
//         autoClick = autoClick + 223;
//         upgradeCostFormat = format(grazynaUpgradeCost);
//         extraMoneyPerClick = extraMoneyPerClick + 150 ;

//         document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
//         document.getElementById('grazynaLevel').innerHTML = grazynaUpgradeLevel;
//         document.getElementById('grazynaCost').innerHTML = upgradeCostFormat +' $';
//         document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
//     }
// }

// export function gangUpgrade()
// {
//      if(counter>=gangUpgradeCost)
//     {  
//         counter = counter - gangUpgradeCost; 
//         returnedFormatedValue = format(counter);
//         gangUpgradeCost = gangUpgradeCost + 20000;
//         gangUpgradeLevel = gangUpgradeLevel + 1;
//         autoClick = autoClick + 641;
//         upgradeCostFormat = format(gangUpgradeCost);
//         extraMoneyPerClick = extraMoneyPerClick + 300 ;

//         document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
//         document.getElementById('gangLevel').innerHTML = gangUpgradeLevel;
//         document.getElementById('gangCost').innerHTML = upgradeCostFormat +' $';
//         document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
//     }
// }

// export function monopolowyUpgrade()
// {
//      if(counter>=monopolowyUpgradeCost)
//     {  
//         counter = counter - monopolowyUpgradeCost; 
//         returnedFormatedValue = format(counter);
//         monopolowyUpgradeCost = monopolowyUpgradeCost + 150000;
//         monopolowyUpgradeLevel = monopolowyUpgradeLevel + 1;
//         autoClick = autoClick + 1234;
//         upgradeCostFormat = format(monopolowyUpgradeCost);
//         extraMoneyPerClick = extraMoneyPerClick + 900 ;

//         document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
//         document.getElementById('monopolowyLevel').innerHTML = monopolowyUpgradeLevel;
//         document.getElementById('monopolowyCost').innerHTML = upgradeCostFormat +' $';
//         document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $'; 
//     }
// }

// export function browarUpgrade()
// {
//      if(counter>=browarUpgradeCost)
//     {  
//         counter = counter - browarUpgradeCost; 
//         returnedFormatedValue = format(counter);
//         browarUpgradeCost = browarUpgradeCost + 1242353;
//         browarUpgradeLevel = browarUpgradeLevel + 1;
//         upgradeCostFormat = format(browarUpgradeCost);
//         extraMoneyPerClick = extraMoneyPerClick + 3924 ;

//         document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
//         document.getElementById('browarLevel').innerHTML = browarUpgradeLevel;
//         document.getElementById('browarCost').innerHTML = upgradeCostFormat +' $';
//         document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
//     }
// }

// export function destylarniaUpgrade()
// {
//      if(counter>=destylarniaUpgradeCost)
//     {  
//         counter = counter - destylarniaUpgradeCost; 
//         returnedFormatedValue = format(counter);
//         destylarniaUpgradeCost = destylarniaUpgradeCost + 3475675;
//         destylarniaUpgradeLevel = destylarniaUpgradeLevel + 1;
//         autoClick = autoClick + 4256;
//         upgradeCostFormat = format(destylarniaUpgradeCost);

//         document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
//         document.getElementById('destylarniaLevel').innerHTML = destylarniaUpgradeLevel;
//         document.getElementById('destylarniaCost').innerHTML = upgradeCostFormat +' $';
//         document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';   
//     }
// }

export function timer() 
{
    counter = counter + autoClick;
    document.getElementById('counter').innerHTML = counter + ' $';
}