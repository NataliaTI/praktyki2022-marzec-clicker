export function showContent(alertmessage, text, icon) {
    const temp = document.getElementById("alertTemplate");
    const clon = temp.content.cloneNode(true);
    const poptext = document.getElementById('PopUpText');

    clon.querySelector("#achievementPopUp .alert__info").textContent = text;
    clon.querySelector("#achievementPopUp .alert__text").textContent = alertmessage;    
    clon.querySelector("#achievementPopUp .icon").src = ('../Images/' + icon);
    document.body.appendChild(clon);

    setTimeout(() => {
       deleteContent(clon)
    }, 5000);

    const closePopUpButtons = document.querySelectorAll('[data-close-button]')

    closePopUpButtons.forEach(button => {
        button.addEventListener('click', () => {
            const close = button.closest('.alert')
            deleteContent(clon)
        })
    })
}

function deleteContent(clon) {
    document.getElementById("achievementPopUp").remove()
};