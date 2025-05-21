document.getElementById("menu-toggle").addEventListener("click", function () {
    let menu = document.getElementById("nav-menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

// Dynamic Image Slider
const images = ["images/waste_collection.jpg", "images/recycling_process.jpg", "images/clean_environment.jpg"];
let currentIndex = 0;

document.getElementById("next").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("slider-image").src = images[currentIndex];
});

document.getElementById("prev").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("slider-image").src = images[currentIndex];
});