const openSaveButtons = document.querySelectorAll ('[data-save-target]')
const closeSaveButtons = document.querySelectorAll ('[data-close-button]')


openSaveButtons.forEach(button => {
    button.addEventListener('click', () => {
        const save = document.querySelector(button.dataset.saveTarget)
        openSave(save)
    })
})

closeSaveButtons.forEach(button => {
    button.addEventListener('click', () => {
        const save = button.closest('.save')
        closeSave(save)
    })
})


function openSave(save) {
    if (save == null) return
    save.classList.add('active')
    overlay.classList.add('active')
}


function closeSave(save) {
    if (save == null) return
    save.classList.remove('active')
    overlay.classList.remove('active')
}


// function otwieraczUprageLevel;

// if (otwieraczUprageLevel >= 2) {
//     if (status == null) return;
//     status.classList.add('active')
    
// }



