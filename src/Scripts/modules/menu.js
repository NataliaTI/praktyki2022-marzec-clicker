const btnUpgrades = document.querySelector(".upgrades");
const btnAchievements = document.querySelector(".achievements");
const btnStats = document.querySelector(".stats");
const menuDivUpgrades = document.querySelector('.menu-div-upgrades');
const menuDivAchievements = document.querySelector('.menu-div-achievements');
const menuDivStats = document.querySelector('.menu-div-stats');

const buttons = document.querySelectorAll('.menu-item');


// console.log(buttons);




btnUpgrades.addEventListener("click", function(){
    btnUpgrades.classList.add('active--menu-item');
    btnAchievements.classList.remove('active--menu-item');
    btnStats.classList.remove('active--menu-item');

    menuDivUpgrades.classList.add('menu__div--active');
    menuDivAchievements.classList.remove('menu__div--active');
    menuDivStats.classList.remove('menu__div--active');
})

btnAchievements.addEventListener("click", function(){
    btnAchievements.classList.add('active--menu-item');
    btnUpgrades.classList.remove('active--menu-item');
    btnStats.classList.remove('active--menu-item');

    menuDivAchievements.classList.add('menu__div--active');
    menuDivUpgrades.classList.remove('menu__div--active');
    menuDivStats.classList.remove('menu__div--active');

})

btnStats.addEventListener("click", function(){
    btnStats.classList.add('active--menu-item');
    btnAchievements.classList.remove('active--menu-item');
    btnUpgrades.classList.remove('active--menu-item');

    menuDivStats.classList.add('menu__div--active');
    menuDivAchievements.classList.remove('menu__div--active');
    menuDivUpgrades.classList.remove('menu__div--active');
})