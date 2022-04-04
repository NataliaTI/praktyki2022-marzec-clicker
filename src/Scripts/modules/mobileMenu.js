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
        const dataKey = button.getAttribute('data-key');

        console.log(dataKey);

        let menuCategoryId =  document.querySelector('#' + dataKey);

        console.log(menuCategoryId);

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