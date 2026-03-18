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

if (nextBtn && prevBtn && videos.length > 0) {
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
}

// light/dark mode
const themeToggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");
const logo = document.querySelector(".logo");
const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");
const starIcon = document.querySelectorAll(".star");
const emailIcon = document.querySelector("#email");
const linkedinIcon = document.querySelector("#linkedin");

function applyTheme(isDark) {
    if (isDark) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");

        icon.src = "images/sun.svg";
        logo.src = "images/logo-dark.svg";
        menuIcon.src = "images/menu-dark.svg";
        closeIcon.src = "images/close-dark.svg";

        starIcon.forEach(star => {
            star.src = "images/decoration_dark.svg";
        });

        emailIcon.src = "images/email_dark.svg";
        linkedinIcon.src = "images/linkedin_dark.svg";

    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");

        icon.src = "images/moon.svg";
        logo.src = "images/logo-light.svg";
        menuIcon.src = "images/menu-light.svg";
        closeIcon.src = "images/close-light.svg";

        starIcon.forEach(star => {
            star.src = "images/decoration.svg";
        });

        emailIcon.src = "images/email.svg";
        linkedinIcon.src = "images/linkedin.svg";
    }
}

themeToggle.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark-mode");
    applyTheme(isDark);
});

const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme === "dark");