const btnUpgrades = document.querySelector(".upgrades");
const btnAchievements = document.querySelector(".achievements");
const btnStats = document.querySelector(".stats");
const menuDivUpgrades = document.querySelector('.menu-div-upgrades');
const menuDivAchievements = document.querySelector('.menu-div-achievements');
const menuDivStats = document.querySelector('.menu-div-stats');

btnUpgrades.addEventListener("click", function(){
    btnUpgrades.classList.add('active');
    btnAchievements.classList.remove('active');
    btnStats.classList.remove('active');

    menuDivUpgrades.classList.add('menu-div-active');
    menuDivAchievements.classList.remove('menu-div-active');
    menuDivStats.classList.remove('menu-div-active');
})

btnAchievements.addEventListener("click", function(){
    btnAchievements.classList.add('active');
    btnUpgrades.classList.remove('active');
    btnStats.classList.remove('active');

    menuDivAchievements.classList.add('menu-div-active');
    menuDivUpgrades.classList.remove('menu-div-active');
    menuDivStats.classList.remove('menu-div-active');
})

btnStats.addEventListener("click", function(){
    btnStats.classList.add('active');
    btnAchievements.classList.remove('active');
    btnUpgrades.classList.remove('active');

    menuDivStats.classList.add('menu-div-active');
    menuDivAchievements.classList.remove('menu-div-active');
    menuDivUpgrades.classList.remove('menu-div-active');
})