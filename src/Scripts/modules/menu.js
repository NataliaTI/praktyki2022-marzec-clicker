const buttons = document.querySelectorAll('.menu-item');
const menuDivList = document.querySelectorAll('.menu__div-list');

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        const dataKey = button.getAttribute('data-key');

        let menuCategoryId =  document.querySelector('#' + dataKey);


        for(let i = 0; i < buttons.length ;i++){
            buttons[i].classList.remove('active--menu-item');
            menuDivList[i].classList.remove('menu__div--active');
        }
        
        button.classList.add('active--menu-item');
        menuCategoryId.classList.add('menu__div--active');
    })
})