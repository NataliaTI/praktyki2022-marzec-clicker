 const menelUpgradeButton = document.getElementById('upgrade1')

 
 
 let upgradeLevel = 0;
 let upgradeCost = 10;
 let upgradePower = 0
 





function menelUpgrade()
{
     if(counter>=upgradeCost)
    {  
       
        counter = counter - upgradeCost; 
        upgradeCost = upgradeCost + 10;
        upgradeLevel = upgradeLevel + 1;
        upgradePower = upgradePower + 1;
        
        document.getElementById('counter').innerHTML = counter + ' $';
        document.getElementById('menellevel').innerHTML = upgradeLevel;
        document.getElementById('menelcost').innerHTML = upgradeCost +' $';
        

    }

}
menelUpgradeButton.onclick= menelUpgrade;

