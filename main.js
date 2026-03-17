const openBtn = document.querySelector(".menuIcon");
const closeBtn = document.querySelector(".closeIcon");
const menu = document.querySelector(".menu");

openBtn.addEventListener("click", () => {
    openBtn.classList.toggle("closeIcon");
    closeBtn.classList.toggle("closeIcon");
    menu.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
    openBtn.classList.toggle("closeIcon");
    closeBtn.classList.toggle("closeIcon");
    menu.classList.toggle("hidden");
});

// slideshow
const videos = document.querySelectorAll(".slider video");
const nextBtn = document.querySelector(".next_btn");
const prevBtn = document.querySelector(".prev_btn");

let current = 0;

function showVideo(index) {
    for (let i = 0; i < videos.length; i++) {
        videos[i].style.display = "none";

        videos[i].pause();          
        videos[i].currentTime = 0;
    }

    videos[index].style.display = "block";
    videos[index].play();
}

nextBtn.addEventListener("click", () => {
    current = current + 1;

    if (current >= videos.length) {
        current = 0;
    }

    showVideo(current);
});

prevBtn.addEventListener("click", () => {
    current = current - 1;

    if (current < 0) {
        current = videos.length - 1;
    }

    showVideo(current);
});

showVideo(current);