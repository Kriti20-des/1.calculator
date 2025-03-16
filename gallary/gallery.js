const galleryImages = document.querySelectorAll('.gallery-image');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        showCurrentImage();
    });
});

prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }
    showCurrentImage();
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }
    showCurrentImage();
});

function showCurrentImage() {
    galleryImages.forEach((image) => {
        image.style.opacity = 0.5;
    });
    galleryImages[currentIndex].style.opacity = 1;
}