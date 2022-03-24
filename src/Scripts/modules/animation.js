const clicker = document.querySelector('.clicker-img');

extraMoneyPerClick = 1;

    clicker.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.classList.add('click');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        let beer = document.createElement('span');
        beer.classList.add('test-click');
        ripples.appendChild(beer);
        

        let money = document.createElement('div');
        money.classList.add('click');
        money.style.left = x + 'px';
        money.style.top = y + 'px';
        this.appendChild(money);

         let moneyClick = document.createElement('span');
        moneyClick.classList.add('moneyClick');
        money.appendChild(moneyClick);

        moneyClick.textContent = '+' + extraMoneyPerClick;

        setTimeout(() => {
          money.remove()
         },1000);

        setTimeout(() => {
            ripples.remove()
        },1500);


    })