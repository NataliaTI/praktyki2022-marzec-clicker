const btnUpgrades = document.querySelector(".upgrades");

const btnAchievements = document.querySelector(".achievements");

const btnStats = document.querySelector(".stats");


btnUpgrades.addEventListener("click", function(){
    btnUpgrades.classList.add('active');
    btnAchievements.classList.remove('active');
    btnStats.classList.remove('active');
})


btnAchievements.addEventListener("click", function(){
    btnAchievements.classList.add('active');
    btnUpgrades.classList.remove('active');
    btnStats.classList.remove('active');
})


btnStats.addEventListener("click", function(){
    btnStats.classList.add('active');
    btnAchievements.classList.remove('active');
    btnUpgrades.classList.remove('active');
})


