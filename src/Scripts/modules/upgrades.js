const menelUpgradeButton = document.getElementById("upgrade1");

 let upgradeLevel = 0;
 let upgradeCost = 10;
 let autoClick = 0;
 let upgradeCostFormat = upgradeCost

 
function menelUpgrade()
{
     if(counter>=upgradeCost)
    {  
        counter = counter - upgradeCost; 

        returnedFormatedValue = format(counter);
        upgradeCost = upgradeCost + 10;
        upgradeLevel = upgradeLevel + 1;
        autoClick = autoClick + 1;
        upgradeCostFormat = format(upgradeCost)
    

        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
        document.getElementById('menellevel').innerHTML = upgradeLevel;
        document.getElementById('menelcost').innerHTML = upgradeCostFormat +' $';
        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
        
    }
    
}



menelUpgradeButton.onclick= menelUpgrade;


function timer() 
{
    counter = counter + autoClick;
    document.getElementById('counter').innerHTML = counter + ' $';
}


setInterval(timer, 1000)

