export function showContent(alertmessage, text, icon) {
    const temp = document.getElementsByTagName("template")[0];
    const clon = temp.content.cloneNode(true);
    const poptext = document.getElementById('PopUpText');

    clon.querySelector("#achievementPopUp .title").textContent = text;
    clon.querySelector("#achievementPopUp .PUT").textContent = alertmessage;    
    clon.querySelector("#achievementPopUp .icon").src = ('../Images/' + icon);
    document.body.appendChild(clon);

    setTimeout(() => {
       deleteContent(clon)
    }, 5000);

    const closePopUpButtons = document.querySelectorAll('[data-close-button]')

    closePopUpButtons.forEach(button => {
        button.addEventListener('click', () => {
            const close = button.closest('.achievement')
            deleteContent(clon)
        })
    })
}

function deleteContent(clon) {
    document.getElementById("achievementPopUp").remove()
};