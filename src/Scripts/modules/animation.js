const clicker = document.querySelector('.clicker-img');


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
        

        setTimeout(() => {
            ripples.remove()
        },1000);

    })
