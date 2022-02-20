const images = ["img1.jpg", "img2.webp", "img3.webp", "img4.webp"];
const body = document.querySelector("body");

const chosenImage = images[Math.floor(Math.random() * images.length)];

body.style.backgroundImage = `url(img/${chosenImage})`;
