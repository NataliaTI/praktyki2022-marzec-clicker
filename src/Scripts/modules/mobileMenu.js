const navigation__list = document.querySelectorAll('.navigation__list');

        function activeLink() {
            navigation__list.forEach((item) => item.classList.remove('active'));
            this.classList.add('active');
        }
        navigation__list.forEach((item) => item.addEventListener('click', activeLink));


const mobileHome = document.querySelector('.mobileHome');
const mobileUpgrade = document.querySelector('.mobileUpgrade');
const mobileAchievements = document.querySelector('.mobileAchievement');
const mobileStats = document.querySelector('.mobileStats');
const menu = document.querySelector('.menu');
const mobileHeader = document.querySelector('.mobile_header');
const mobileHeaderBtn = document.querySelector('.mobile_header-btn');
const mobileHeaderH2 = document.querySelector('.mobile_header-h2');



const menuDivUpgrades = document.querySelector('.menu-div-upgrades');
const menuDivAchievements = document.querySelector('.menu-div-achievements');
const menuDivStats = document.querySelector('.menu-div-stats');

mobileHome.addEventListener('click', function(){
    menu.classList.remove('mobileMenu');
})

mobileUpgrade.addEventListener('click', function(){
    // btnUpgrades.classList.add('active--menu-item');
    // btnAchievements.classList.remove('active--menu-item');
    // btnStats.classList.remove('active--menu-item');

    menuDivUpgrades.classList.add('menu__div--active');
    menuDivAchievements.classList.remove('menu__div--active');
    menuDivStats.classList.remove('menu__div--active');

    menu.classList.add('mobileMenu');
    
})

mobileAchievements.addEventListener('click', function(){
    // btnAchievements.classList.add('active--menu-item');
    // btnUpgrades.classList.remove('active--menu-item');
    // btnStats.classList.remove('active--menu-item');

    menuDivAchievements.classList.add('menu__div--active');
    menuDivUpgrades.classList.remove('menu__div--active');
    menuDivStats.classList.remove('menu__div--active');

    menu.classList.add('mobileMenu');
})

mobileStats.addEventListener('click', function(){
    // btnStats.classList.add('active--menu-item');
    // btnAchievements.classList.remove('active--menu-item');
    // btnUpgrades.classList.remove('active--menu-item');

    menuDivStats.classList.add('menu__div--active');
    menuDivAchievements.classList.remove('menu__div--active');
    menuDivUpgrades.classList.remove('menu__div--active');

    menu.classList.add('mobileMenu');
})

mobileHeaderBtn.addEventListener('click', function(){
    menu.classList.remove('mobileMenu');
    mobileHome.classList.add('active');
    mobileAchievements.classList.remove('active');
    mobileUpgrade.classList.remove('active');
    mobileStats.classList.remove('active');
})

