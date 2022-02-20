const images = [
    "img1.jpg",
    "img2.webp",
    "img3.webp",
    "img4.webp",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage);