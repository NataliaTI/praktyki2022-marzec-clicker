export function changeMenuCategory(buttons, menuDivList){
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
    
            const dataKey = button.getAttribute('data-key');
            const menuCategoryId =  document.querySelector('#' + dataKey);
    
            for(let i = 0; i < buttons.length ;i++){
                buttons[i].classList.remove('menu__item--active');
                menuDivList[i].classList.remove('menu__div--active');
            }
            
            button.classList.add('menu__item--active');
            menuCategoryId.classList.add('menu__div--active');
        })
    })
}