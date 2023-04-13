


const sliderContainer = document.querySelector('.slider-container');
const sliderImages = document.querySelectorAll('.slider img');
const slideInterval = 3000; // Temps de transition en millisecondes
let currentIndex = 0;
let slideTimeout;

function startSlide() {
  slideTimeout = setTimeout(() => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    startSlide();
  }, slideInterval);
}

function stopSlide() {
  clearTimeout(slideTimeout);
}

sliderContainer.addEventListener('mouseenter', stopSlide);
sliderContainer.addEventListener('mouseleave', startSlide);

startSlide();






