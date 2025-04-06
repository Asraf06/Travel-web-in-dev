const video = document.querySelectorAll("#video-bg");

function keepPlaying() {
    if (video.paused) {
        video.play().catch(e => console.log("Autoplay Blocked: ",e));
    }
    requestAnimationFrame(keepPlaying);
}

keepPlaying();

document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
        video.play().catch(e => console.log("Tab resumed. but autoplay blocked : ", e));
    }
})