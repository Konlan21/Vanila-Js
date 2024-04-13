// Image slider proj

const images = [
  "images/pexels-annesophie-parent-3.jpg",
  "images/pexels-eberhard-grossgasteiger-4.jpg",
  "images/pexels-janez-podnar-2.jpg",
  "images/pexels-riccardo-1.jpg",
  "images/pexels-stein-egil-liland-5.jpg",
];

const img = document.querySelector('img');
const nextBtn = document.querySelector('.next-btn');
const previousBtn = document.querySelector('.prev-btn');


let currentImageIndex = 0;


document.addEventListener('DOMContentLoaded', () => {
    currentImage = images[currentImageIndex];
    img.src = currentImage

    nextBtn.addEventListener('click', () => {
        currentImageIndex++;
        img.src = images[currentImageIndex];

        if(currentImageIndex > images.length - 1) {
            currentImageIndex = 0;
            img.src = images[currentImageIndex]
        }
    })

    previousBtn.addEventListener('click', () => {
        currentImageIndex--;
        img.src = images[currentImageIndex];

        if(currentImageIndex < 0 ) {
            currentImageIndex = images.length - 1;
            img.src = images[currentImageIndex]
        }
    })
})
