const navigation__list = document.querySelectorAll('.navigation__list');

        function activeLink() {
            navigation__list.forEach((item) => item.classList.remove('active'));
            this.classList.add('active');
        }
        navigation__list.forEach((item) => item.addEventListener('click', activeLink));



        const menu = document.querySelector('.menu');
        const mobileButtons = document.querySelectorAll('.mobileMenu-btn');
        const menuDivList = document.querySelectorAll('.menu__div-list');
        const exitBtn = document.querySelectorAll('.exit-btn');
        const mobileHome = document.querySelector('.mobileHome');
        
        
        mobileButtons.forEach((button) => {
            button.addEventListener('click', () => {
                
                console.log(button);

                const dataKey = button.getAttribute('data-key');
        
                console.log(dataKey);
        
                let menuCategoryId =  document.querySelector('#' + dataKey);
        
                console.log(menuCategoryId);
        
                for(let i = 0; i < menuDivList.length ;i++){
                    // mobileButtons[i].classList.remove('active--menu-item');
                    menuDivList[i].classList.remove('menu__div--active');
                    // menu.classList.remove('mobileMenu')
                }
                         
                menuCategoryId.classList.add('menu__div--active');
                menu.classList.add('mobileMenu');

                exitBtn.forEach((exit) => {
                    exit.addEventListener('click', () => {
                        
                        for(let i=0; i < mobileButtons.length ;i++){
                            mobileButtons[i].classList.remove('active');
                        }

                        // console.log(exit);
                        menu.classList.remove('mobileMenu');
                        mobileHome.classList.add('active');
                    })
                })
            })
            
        })

        console.log(exitBtn);

        // exitBtn.forEach((exit) => {
        //     exit.addEventListener('click', () => {
                
        //         console.log(exit);
        //         menu.classList.remove('mobileMenu');
        //     })
        // })



























// const mobileHome = document.querySelector('.mobileHome');
// const mobileUpgrade = document.querySelector('.mobileUpgrade');
// const mobileAchievements = document.querySelector('.mobileAchievement');
// const mobileStats = document.querySelector('.mobileStats');
// const menu = document.querySelector('.menu');
// const mobileHeader = document.querySelector('.mobile_header');
// const mobileHeaderBtn = document.querySelector('.mobile_header-btn');
// const mobileHeaderH2 = document.querySelector('.mobile_header-h2');



// const menuDivUpgrades = document.querySelector('.menu-div-upgrades');
// const menuDivAchievements = document.querySelector('.menu-div-achievements');
// const menuDivStats = document.querySelector('.menu-div-stats');


// function changeToHome (){
//     menu.classList.remove('mobileMenu');
// }

// function changeToUpgrade(){
//     menuDivUpgrades.classList.add('menu__div--active');
//     menuDivAchievements.classList.remove('menu__div--active');
//     menuDivStats.classList.remove('menu__div--active');

//     menu.classList.add('mobileMenu');
// }

// function changeToAchievements(){
//     menuDivAchievements.classList.add('menu__div--active');
//     menuDivUpgrades.classList.remove('menu__div--active');
//     menuDivStats.classList.remove('menu__div--active');

//     menu.classList.add('mobileMenu');
// }

// function changeToStats(){
//     menuDivStats.classList.add('menu__div--active');
//     menuDivAchievements.classList.remove('menu__div--active');
//     menuDivUpgrades.classList.remove('menu__div--active');

//     menu.classList.add('mobileMenu');
// }

// function closeMenu(){
//     menu.classList.remove('mobileMenu');
//     mobileHome.classList.add('active');
//     mobileAchievements.classList.remove('active');
//     mobileUpgrade.classList.remove('active');
//     mobileStats.classList.remove('active');
// }


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

