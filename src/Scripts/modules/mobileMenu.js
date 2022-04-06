const navigation__list = document.querySelectorAll('.navigation__list');

        function activeLink() {
            navigation__list.forEach((item) => item.classList.remove('active'));
            this.classList.add('active');
        }
        navigation__list.forEach((item) => item.addEventListener('click', activeLink));


export const mobileHome = document.querySelector('.mobileHome');
export const mobileUpgrade = document.querySelector('.mobileUpgrade');
export const mobileAchievements = document.querySelector('.mobileAchievement');
export const mobileStats = document.querySelector('.mobileStats');
export const menu = document.querySelector('.menu');
export const mobileHeader = document.querySelector('.mobile__header');
export const mobileHeaderBtn = document.querySelector('.mobile__header--btn');
export const mobileHeaderH2 = document.querySelector('.mobile__header--h2');



const menuDivUpgrades = document.querySelector('.upgrades');
const menuDivAchievements = document.querySelector('.menu-div-achievements');
const menuDivStats = document.querySelector('.menu-div-stats');


export function changeToHome (){
    menu.classList.remove('mobileMenu');
}

export function changeToUpgrade(){
    menuDivUpgrades.classList.add('menu__div--active');
    menuDivAchievements.classList.remove('menu__div--active');
    menuDivStats.classList.remove('menu__div--active');

    menu.classList.add('mobileMenu');
}

export function changeToAchievements(){
    menuDivAchievements.classList.add('menu__div--active');
    menuDivUpgrades.classList.remove('menu__div--active');
    menuDivStats.classList.remove('menu__div--active');

    menu.classList.add('mobileMenu');
}

export function changeToStats(){
    menuDivStats.classList.add('menu__div--active');
    menuDivAchievements.classList.remove('menu__div--active');
    menuDivUpgrades.classList.remove('menu__div--active');

    menu.classList.add('mobileMenu');
}

export function closeMenu(){
    menu.classList.remove('mobileMenu');
    mobileHome.classList.add('active');
    mobileAchievements.classList.remove('active');
    mobileUpgrade.classList.remove('active');
    mobileStats.classList.remove('active');
}


// mobileHome.addEventListener('click', function(){
//     menu.classList.remove('mobileMenu');
// })

// mobileUpgrade.addEventListener('click', function(){
//     // btnUpgrades.classList.add('active--menu-item');
//     // btnAchievements.classList.remove('active--menu-item');
//     // btnStats.classList.remove('active--menu-item');

//     menuDivUpgrades.classList.add('menu__div--active');
//     menuDivAchievements.classList.remove('menu__div--active');
//     menuDivStats.classList.remove('menu__div--active');

//     menu.classList.add('mobileMenu');
    
// })

// mobileAchievements.addEventListener('click', function(){
//     // btnAchievements.classList.add('active--menu-item');
//     // btnUpgrades.classList.remove('active--menu-item');
//     // btnStats.classList.remove('active--menu-item');

//     menuDivAchievements.classList.add('menu__div--active');
//     menuDivUpgrades.classList.remove('menu__div--active');
//     menuDivStats.classList.remove('menu__div--active');

//     menu.classList.add('mobileMenu');
// })

// mobileStats.addEventListener('click', function(){
//     // btnStats.classList.add('active--menu-item');
//     // btnAchievements.classList.remove('active--menu-item');
//     // btnUpgrades.classList.remove('active--menu-item');

//     menuDivStats.classList.add('menu__div--active');
//     menuDivAchievements.classList.remove('menu__div--active');
//     menuDivUpgrades.classList.remove('menu__div--active');

//     menu.classList.add('mobileMenu');
// })

// mobileHeaderBtn.addEventListener('click', function(){
//     menu.classList.remove('mobileMenu');
//     mobileHome.classList.add('active');
//     mobileAchievements.classList.remove('active');
//     mobileUpgrade.classList.remove('active');
//     mobileStats.classList.remove('active');
// })

