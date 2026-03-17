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
const slides = document.querySelectorAll(".demo_slide");
const nextBtn = document.querySelector(".next_btn");
const prevBtn = document.querySelector(".prev_btn");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}
nextBtn.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
});