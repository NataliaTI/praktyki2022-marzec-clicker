 const menelUpgradeButton = document.getElementById('upgrade1')

 
//  let counter = 0;
// 123
 let upgradeLevel = 0;
 let upgradeCost = 10;
 let autoClick = 0;


 
function menelUpgrade()
{
     if(counter>=upgradeCost)
    {  
       
        counter = counter - upgradeCost; 
        upgradeCost = upgradeCost + 10;
        upgradeLevel = upgradeLevel + 1;
        autoClick = autoClick + 1;
    

        document.getElementById('counter').innerHTML = counter + ' $';
        document.getElementById('menellevel').innerHTML = upgradeLevel;
        document.getElementById('menelcost').innerHTML = upgradeCost +' $';
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

