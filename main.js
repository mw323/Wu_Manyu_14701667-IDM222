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