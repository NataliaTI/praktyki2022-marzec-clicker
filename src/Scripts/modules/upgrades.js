const otwieraczUpgradeButton = document.getElementById("upgrade1");
const mietekUpgradeButton = document.getElementById("upgrade2");
const sebaUpgradeButton = document.getElementById("upgrade3");
const grazynaUpgradeButton = document.getElementById("upgrade4");
const gangUpgradeButton = document.getElementById("upgrade5");
const monopolowyUpgradeButton = document.getElementById("upgrade6");
const browarUpgradeButton = document.getElementById("upgrade7");
const destylarniaUpgradeButton = document.getElementById("upgrade8");

 let upgradeLevel = 0;
 let upgradeCost= 10;
 let autoClick = 0;
 let upgradeCostFormat = upgradeCost;
 let extraMoneyPerClick = 0;
 let otwieraczUpgradeLevel = 0;
 let otwieraczUpgradeCost = 10;


function otwieraczUpgrade()
{
     if(counter>=otwieraczUpgradeCost)
    {  
        counter = counter - otwieraczUpgradeCost; 
         returnedFormatedValue = format(counter);
        otwieraczUpgradeCost = otwieraczUpgradeCost + 40;
        otwieraczUpgradeLevel = otwieraczUpgradeLevel + 1;
        upgradeCostFormat = format(otwieraczUpgradeCost);
        extraMoneyPerClick = extraMoneyPerClick  + 2;
        
    document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
    document.getElementById('otwieraczLevel').innerHTML = otwieraczUpgradeLevel;
    document.getElementById('otwieraczCost').innerHTML = upgradeCostFormat +' $';
    document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
        
    }
  
}


otwieraczUpgradeButton.onclick= otwieraczUpgrade;
let mietekUpgradeLevel = 0;
let mietekUpgradeCost = 150;
function mietekUpgrade()
{
     if(counter>=mietekUpgradeCost)
    {  
        counter = counter - mietekUpgradeCost; 
        returnedFormatedValue = format(counter);
        mietekUpgradeCost = mietekUpgradeCost + 150;
        mietekUpgradeLevel = mietekUpgradeLevel + 1;
        autoClick = autoClick + 9;
        upgradeCostFormat = format(mietekUpgradeCost);
        
    document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
    document.getElementById('mietekLevel').innerHTML = mietekUpgradeLevel;
    document.getElementById('mietekCost').innerHTML = upgradeCostFormat +' $';
    document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
        
    }
    
}
mietekUpgradeButton.onclick= mietekUpgrade;
let sebaUpgradeLevel = 0;
let sebaUpgradeCost= 1200;
function sebaUpgrade()
{
     if(counter>=sebaUpgradeCost)
    {  
        counter = counter - sebaUpgradeCost; 
        returnedFormatedValue = format(counter);
        sebaUpgradeCost = sebaUpgradeCost + 700;
        sebaUpgradeLevel = sebaUpgradeLevel + 1;
        autoClick = autoClick + 73;
        upgradeCostFormat = format(sebaUpgradeCost);
        extraMoneyPerClick = extraMoneyPerClick + 15 ;

    document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
    document.getElementById('sebaLevel').innerHTML = sebaUpgradeLevel;
    document.getElementById('sebaCost').innerHTML = upgradeCostFormat +' $';
    document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
        
    }
    
}
sebaUpgradeButton.onclick= sebaUpgrade;
let grazynaUpgradeLevel = 0;
let grazynaUpgradeCost= 5000;
function grazynaUpgrade()
{
     if(counter>=grazynaUpgradeCost)
    {  
        counter = counter - grazynaUpgradeCost; 
        returnedFormatedValue = format(counter);
        grazynaUpgradeCost = grazynaUpgradeCost + 3000;
        grazynaUpgradeLevel = grazynaUpgradeLevel + 1;
        autoClick = autoClick + 223;
        upgradeCostFormat = format(grazynaUpgradeCost);
        extraMoneyPerClick = extraMoneyPerClick + 150 ;

    document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
    document.getElementById('grazynaLevel').innerHTML = grazynaUpgradeLevel;
    document.getElementById('grazynaCost').innerHTML = upgradeCostFormat +' $';
    document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
        
    }
    
}
grazynaUpgradeButton.onclick= grazynaUpgrade;
let gangUpgradeLevel = 0;
let gangUpgradeCost= 30000;
function gangUpgrade()
{
     if(counter>=gangUpgradeCost)
    {  
        counter = counter - gangUpgradeCost; 
        returnedFormatedValue = format(counter);
        gangUpgradeCost = gangUpgradeCost + 20000;
        gangUpgradeLevel = gangUpgradeLevel + 1;
        autoClick = autoClick + 641;
        upgradeCostFormat = format(gangUpgradeCost);
        extraMoneyPerClick = extraMoneyPerClick + 300 ;

    document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
    document.getElementById('gangLevel').innerHTML = gangUpgradeLevel;
    document.getElementById('gangCost').innerHTML = upgradeCostFormat +' $';
    document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
        
    }
    
}
gangUpgradeButton.onclick= gangUpgrade;
let monopolowyUpgradeLevel = 0;
let monopolowyUpgradeCost= 115000;
function monopolowyUpgrade()
{
     if(counter>=monopolowyUpgradeCost)
    {  
        counter = counter - monopolowyUpgradeCost; 
        returnedFormatedValue = format(counter);
        monopolowyUpgradeCost = monopolowyUpgradeCost + 150000;
        monopolowyUpgradeLevel = monopolowyUpgradeLevel + 1;
        autoClick = autoClick + 1234;
        upgradeCostFormat = format(monopolowyUpgradeCost);
        extraMoneyPerClick = extraMoneyPerClick + 900 ;

    document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
    document.getElementById('monopolowyLevel').innerHTML = monopolowyUpgradeLevel;
    document.getElementById('monopolowyCost').innerHTML = upgradeCostFormat +' $';
    document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
        
    }
    
}
monopolowyUpgradeButton.onclick= monopolowyUpgrade;
let browarUpgradeLevel = 0;
let browarUpgradeCost= 750000;
function browarUpgrade()
{
     if(counter>=browarUpgradeCost)
    {  
        counter = counter - browarUpgradeCost; 
        returnedFormatedValue = format(counter);
        browarUpgradeCost = browarUpgradeCost + 1242353;
        browarUpgradeLevel = browarUpgradeLevel + 1;
        upgradeCostFormat = format(browarUpgradeCost);
        extraMoneyPerClick = extraMoneyPerClick + 3924 ;

    document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
    document.getElementById('browarLevel').innerHTML = browarUpgradeLevel;
    document.getElementById('browarCost').innerHTML = upgradeCostFormat +' $';
    document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
        
    }
}
browarUpgradeButton.onclick= browarUpgrade;
let destylarniaUpgradeLevel = 0;
let destylarniaUpgradeCost= 4000000;
function destylarniaUpgrade()
{
     if(counter>=destylarniaUpgradeCost)
    {  
        counter = counter - destylarniaUpgradeCost; 
        returnedFormatedValue = format(counter);
        destylarniaUpgradeCost = destylarniaUpgradeCost + 3475675;
        destylarniaUpgradeLevel = destylarniaUpgradeLevel + 1;
        autoClick = autoClick + 4256;
        upgradeCostFormat = format(destylarniaUpgradeCost);

    document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';
    document.getElementById('destylarniaLevel').innerHTML = destylarniaUpgradeLevel;
    document.getElementById('destylarniaCost').innerHTML = upgradeCostFormat +' $';
    document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';
        
    }
}
destylarniaUpgradeButton.onclick= destylarniaUpgrade;
function timer() 
{
    counter = counter + autoClick;
    document.getElementById('counter').innerHTML = counter + ' $';
}
setInterval(timer, 1000)
