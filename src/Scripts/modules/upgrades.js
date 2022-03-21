let upgradeLevel = 0;
let upgradeCost = 10;
export let upgradeCostFormat = upgradeCost;

export function menelUpgrade(autoClick){
    if(counter>=upgradeCost)
    {  
        counter = counter - upgradeCost; 

        returnedFormatedValue = format(counter);
        upgradeCost = upgradeCost + 10;
        upgradeLevel = upgradeLevel + 1;
        autoClick = autoClick + 1;
        upgradeCostFormat = format(upgradeCost);
    
        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('menellevel').innerHTML = upgradeLevel;
        document.getElementById('menelcost').innerHTML = upgradeCostFormat +' $';
        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
    }
}

export function timer() 
{
    counter = counter + autoClick;
    document.getElementById('counter').innerHTML = counter + ' $';
}