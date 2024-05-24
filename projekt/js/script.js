let currentIndex = 0;
const images = document.querySelectorAll('.slider img');

function showNextImage() {
    images[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.transform = 'translateX(0)';
}

setInterval(showNextImage, 3000);
