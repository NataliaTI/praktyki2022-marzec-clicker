export function clickSound(motive) {
    const sound = document.getElementById(motive);
    sound.preload = 'auto';

    sound.load();
    if (sound.duration > 0 && !sound.paused) {
        sound.stop();

    }
    sound.play();

}
