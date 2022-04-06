const btnUpgrades = document.querySelector(".upgrades");
const btnAchievements = document.querySelector(".achievements");
const btnStats = document.querySelector(".stats");
const menuDivUpgrades = document.querySelector('.menu-upgrades');
const menuDivAchievements = document.querySelector('.menu-div-achievements');
const menuDivStats = document.querySelector('.menu-div-stats');

const buttons = document.querySelectorAll('.menu__item');


// console.log(buttons);




btnUpgrades.addEventListener("click", function(){
    btnUpgrades.classList.add('menu__item--active');
    btnAchievements.classList.remove('menu__item--active');
    btnStats.classList.remove('menu__item--active');

    menuDivUpgrades.classList.add('menu__div--active');
    menuDivAchievements.classList.remove('menu__div--active');
    menuDivStats.classList.remove('menu__div--active');
})

btnAchievements.addEventListener("click", function(){
    btnAchievements.classList.add('menu__item--active');
    btnUpgrades.classList.remove('menu__item--active');
    btnStats.classList.remove('menu__item--active');

    menuDivAchievements.classList.add('menu__div--active');
    menuDivUpgrades.classList.remove('menu__div--active');
    menuDivStats.classList.remove('menu__div--active');

})

btnStats.addEventListener("click", function(){
    btnStats.classList.add('menu__item--active');
    btnAchievements.classList.remove('menu__item--active');
    btnUpgrades.classList.remove('menu__item--active');

    menuDivStats.classList.add('menu__div--active');
    menuDivAchievements.classList.remove('menu__div--active');
    menuDivUpgrades.classList.remove('menu__div--active');
})