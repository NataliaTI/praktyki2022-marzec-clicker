const menelUpgradeButton = document.getElementById("upgrade1");

let upgradeLevel = 0;
let upgradeCost = 10;
let upgradePower = 0;
let upgradeCostFormat = upgradeCost


function menelUpgrade() {
  if (counter >= upgradeCost) {
    counter = counter - upgradeCost;

    returnedFormatedValue = format(counter);

    upgradeCost = upgradeCost + 10;
    upgradeLevel = upgradeLevel + 1;
    upgradePower = upgradePower + 1;
    upgradeCostFormat = format(upgradeCost)

    document.getElementById("counter").innerHTML = returnedFormatedValue + " $";
    document.getElementById("menellevel").innerHTML = upgradeLevel;
    document.getElementById("menelcost").innerHTML = upgradeCostFormat + " $";
  }
}
menelUpgradeButton.onclick = menelUpgrade;