export function showContent(alertmessage, text, icon) {
    const temp = document.getElementById('alertTemplate');
    const clon = temp.content.cloneNode(true);

    clon.querySelector("#achievementPopUp .alert__info").textContent = text;
    clon.querySelector("#achievementPopUp .alert__text").textContent = alertmessage;
    clon.querySelector("#achievementPopUp .alert__icon").src = ('../Images/' + icon);
    document.body.appendChild(clon);

    const timer = setTimeout(() => {
       deleteContent()
    }, 5000);

    const closePopUpButtons = document.querySelectorAll('[data-close-button]');

    closePopUpButtons.forEach(button => {
        button.addEventListener('click', () => {
            const close = button.closest(".alert");
            deleteContent()
            clearTimeout(timer)
        })
    })
}

function deleteContent() {
    document.getElementById("achievementPopUp").remove()
};