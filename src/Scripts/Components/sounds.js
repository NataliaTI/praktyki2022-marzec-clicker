export function Sound(dzwiek) {
    const sound = new Audio("");
    sound.querySelector().soundContent = ('../Sounds/' + dzwiek);
    sound.preload = 'auto';
    sound.load();
    sound.play();
}