

const navigation__list = document.querySelectorAll('.navigation__list');
const menuDivList = document.querySelectorAll('.menu__div-list');
const menu = document.querySelector('.menu');
const mobileButtons = document.querySelectorAll('.mobileMenu-btn');
const exitBtn = document.querySelectorAll('.exit-btn');
const mobileHome = document.querySelector('.mobileHome');

function changeMobileMenuCategory(menuDivList){
    navigation__list.forEach((item) => {
        item.addEventListener('click', () => {
    
        for(let i = 0; i<navigation__list.length ;i++){
            navigation__list[i].classList.remove('active');
        }
        item.classList.add('active');
        })
    })
    
    
    
    mobileButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const dataKey = button.getAttribute('data-key');
    
            const menuCategoryId =  document.querySelector('#' + dataKey);
    
            for(let i = 0; i < menuDivList.length ;i++){
                menuDivList[i].classList.remove('menu__div--active');
            }
                        
            menuCategoryId.classList.add('menu__div--active');
            menu.classList.add('mobileMenu');
    
            exitBtn.forEach((exit) => {
                exit.addEventListener('click', () => {
                    
                    for(let i=0; i < mobileButtons.length ;i++){
                        mobileButtons[i].classList.remove('active');
                    }
                    menu.classList.remove('mobileMenu');
                    mobileHome.classList.add('active');
                })
            })
        })
    })
}


