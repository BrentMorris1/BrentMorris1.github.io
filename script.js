document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slide');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    const images = slider.querySelectorAll('img');
    const totalImages = images.length;
    const imagesToShow = 3;
    const slideWidth = 100 / imagesToShow;

    let currentSlide = 0;

    function updateSlidePosition() {
        const offset = -currentSlide * slideWidth;
        slider.style.transform = `translateX(${offset}%)`;
    }

    prevArrow.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? totalImages - imagesToShow : currentSlide - 1;
        updateSlidePosition();
    });

    nextArrow.addEventListener('click', () => {
        currentSlide = (currentSlide >= totalImages - imagesToShow) ? 0 : currentSlide + 1;
        updateSlidePosition();
    });
});
