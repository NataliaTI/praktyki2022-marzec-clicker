const navigation__list = document.querySelectorAll('.navigation__list');

        function activeLink() {
            navigation__list.forEach((item) => item.classList.remove('active'));
            this.classList.add('active');
        }
        navigation__list.forEach((item) => item.addEventListener('click', activeLink));