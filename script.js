document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.project-carousel');
    const projects = document.querySelectorAll('.project-card');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 33.33}%)`;
    }

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % projects.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        updateCarousel();
    });

    updateCarousel();
});
