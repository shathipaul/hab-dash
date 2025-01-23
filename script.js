const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
const itemsToShow = 5;
const totalItems = document.querySelectorAll('.carousel-item').length;


function updateCarousel() {
    const itemWidth = 100 / itemsToShow;
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
}


prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});