import {format} from './format.js'; 
import {autoClick} from "../../main.js";

let upgradeLevel = 0;
let upgradeCost= 10;
let upgradeCostFormat = upgradeCost;
export let extraMoneyPerClick = 0;
let returnedFormatedValue = 0;

// zmienne od poszczególnych ulepszeń
let otwieraczUpgradeLevel = 0;
let otwieraczUpgradeCost = 10;

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
export function otwieraczUpgrade(counter, autoClick)
{
    if(counter >= otwieraczUpgradeCost)
    {  
        counter -= otwieraczUpgradeCost;
        returnedFormatedValue = format(counter);
        otwieraczUpgradeCost += 40;
        otwieraczUpgradeLevel += 1;
        autoClick += 2;
        upgradeCostFormat = format(otwieraczUpgradeCost);
        extraMoneyPerClick += 1;
        
        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('otwieraczLevel').innerHTML = otwieraczUpgradeLevel;
        document.getElementById('otwieraczCost').innerHTML = upgradeCostFormat +' $';
        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
    }
    return counter;
}

export function mietekUpgrade(counter, autoClick)
{
     if(counter >= mietekUpgradeCost)
    {  
        counter -= mietekUpgradeCost; 
        returnedFormatedValue = format(counter);
        mietekUpgradeCost += 150;
        mietekUpgradeLevel += 1;
        autoClick += 9;
        upgradeCostFormat = format(mietekUpgradeCost);
        extraMoneyPerClick += 4;

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('mietekLevel').innerHTML = mietekUpgradeLevel;
        document.getElementById('mietekCost').innerHTML = upgradeCostFormat +' $';
        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
    }
    return counter;
}

export function sebaUpgrade(counter, autoClick)
{
     if(counter>=sebaUpgradeCost)
    {  
        counter -= sebaUpgradeCost; 
        returnedFormatedValue = format(counter);
        sebaUpgradeCost += 700;
        sebaUpgradeLevel += 1;
        autoClick += 73;
        upgradeCostFormat = format(sebaUpgradeCost);
        extraMoneyPerClick += 9;

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('sebaLevel').innerHTML = sebaUpgradeLevel;
        document.getElementById('sebaCost').innerHTML = upgradeCostFormat +' $';
        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
    }
    return counter;
}

export function grazynaUpgrade(counter, autoClick)
{
     if(counter>=grazynaUpgradeCost)
    {  
        counter -= grazynaUpgradeCost; 
        returnedFormatedValue = format(counter);
        grazynaUpgradeCost += 3000;
        grazynaUpgradeLevel += 1;
        autoClick = autoClick + 223;
        upgradeCostFormat = format(grazynaUpgradeCost);
        extraMoneyPerClick += 150 ;

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('grazynaLevel').innerHTML = grazynaUpgradeLevel;
        document.getElementById('grazynaCost').innerHTML = upgradeCostFormat +' $';
        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
    }    
    return counter;
}

export function gangUpgrade(counter, autoClick)
{
     if(counter>=gangUpgradeCost)
    {  
        counter -= gangUpgradeCost; 
        returnedFormatedValue = format(counter);
        gangUpgradeCost += 20000;
        gangUpgradeLevel += 1;
        autoClick += 641;
        upgradeCostFormat = format(gangUpgradeCost);
        extraMoneyPerClick += 300 ;

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('gangLevel').innerHTML = gangUpgradeLevel;
        document.getElementById('gangCost').innerHTML = upgradeCostFormat +' $';
        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
    }
    return counter;
}

export function monopolowyUpgrade(counter, autoClick)
{
     if(counter>=monopolowyUpgradeCost)
    {  
        counter -= monopolowyUpgradeCost; 
        returnedFormatedValue = format(counter);
        monopolowyUpgradeCost += 150000;
        monopolowyUpgradeLevel += 1;
        autoClick += 1234;
        upgradeCostFormat = format(monopolowyUpgradeCost);
        extraMoneyPerClick += 900 ;

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('monopolowyLevel').innerHTML = monopolowyUpgradeLevel;
        document.getElementById('monopolowyCost').innerHTML = upgradeCostFormat +' $';
        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $'; 
    }
    return counter;
}

export function browarUpgrade(counter, autoClick)
{
     if(counter>=browarUpgradeCost)
    {  
        counter -= browarUpgradeCost; 
        returnedFormatedValue = format(counter);
        browarUpgradeCost += 1242353;
        browarUpgradeLevel += 1;
        autoClick += 2578;
        upgradeCostFormat = format(browarUpgradeCost);
        extraMoneyPerClick += 3924 ;

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('browarLevel').innerHTML = browarUpgradeLevel;
        document.getElementById('browarCost').innerHTML = upgradeCostFormat +' $';
        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
    }
    return counter;
}

export function destylarniaUpgrade(counter, autoClick)
{
     if(counter>=destylarniaUpgradeCost)
    {  
        counter -= destylarniaUpgradeCost; 
        returnedFormatedValue = format(counter);
        destylarniaUpgradeCost += 3475675;
        destylarniaUpgradeLevel += 1;
        autoClick += 4256;
        upgradeCostFormat = format(destylarniaUpgradeCost);
        extraMoneyPerClick += 5398;

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('destylarniaLevel').innerHTML = destylarniaUpgradeLevel;
        document.getElementById('destylarniaCost').innerHTML = upgradeCostFormat +' $';
        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';   
    }
    return counter;
}

export function timer(counter, autoClick) 
{
    console.log(counter);
    console.log(autoClick);
    counter += autoClick;
    console.log(counter);
    // document.getElementById('counter').innerHTML = counter + ' $';
    return counter;
}