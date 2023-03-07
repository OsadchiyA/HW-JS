const video = document.querySelector(".video");
const videoTrack = document.querySelector(".video-track");
const time = document.querySelector(".timeline");
const btnPlay = document.querySelector(".play");
const btnPause = document.querySelector(".pause");
const btnRewind = document.querySelector(".rewind");
const btnForward = document.querySelector(".forward");

btnPlay.addEventListener("click", () => {
    video.play();
    videoPlay = setInterval(() => {
        let videoTime = Math.round(video.currentTime);
        let videoLength = Math.round(video.duration);
        time.style.width = (videoTime * 100) / videoLength + '%';
    }, 10)
});

btnPause.addEventListener("click", () => {
    video.pause();
    clearInterval(videoPlay)
});


btnRewind.addEventListener("click", () => {
    video.currentTime -= 5;
});


btnForward.addEventListener("click", () => {
    video.currentTime += 5;
});

videoTrack.addEventListener("click", (e) => {
    let posX = e.clientX - 8;
    let timePos = (posX * 100) / 800;
    time.style.width = timePos + '%';
    video.currentTime = (timePos * Math.round(video.duration)) / 100
});