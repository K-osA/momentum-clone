const images = ["0.jpeg", "1.jpeg", "2.jpg", "3.jpeg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "bgImage";
document.body.appendChild(bgImage);
