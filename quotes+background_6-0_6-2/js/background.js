const images = ["0.webp", "1.webp", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const imageIdx = Math.floor(Math.random() * images.length);
const chosenImage = images[imageIdx];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);