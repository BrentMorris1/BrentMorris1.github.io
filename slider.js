document.addEventListener("DOMContentLoaded", function() {
    let sliderBox = document.querySelector('.slider');
    let tapToRightBtn = document.querySelector('.btn');
    let slides = Array.from(sliderBox.querySelectorAll('.slide'));
    let slideWidth = slides[0].offsetWidth; // Assume all slides are the same width
    let index = 1; // Start at the first cloned slide

    function cloneSlides() {
        let firstSlide = slides[0].cloneNode(true);
        let lastSlide = slides[slides.length - 1].cloneNode(true);
        sliderBox.appendChild(firstSlide);
        sliderBox.insertBefore(lastSlide, sliderBox.firstChild);
        sliderBox.style.width = `${(slides.length + 2) * slideWidth}px`; // Adjust width
    }

    function sliderNext() {
        index++;
        if (index >= slides.length + 1) { // When reaching the last slide
            sliderBox.style.transition = 'none'; // Disable transition
            index = 1; // Move to the first cloned slide
            sliderBox.style.left = `-${index * slideWidth}px`;
            setTimeout(() => {
                sliderBox.style.transition = 'left 0.3s'; // Re-enable transition
                index++;
                sliderBox.style.left = `-${index * slideWidth}px`;
            }, 0);
        } else {
            sliderBox.style.left = `-${index * slideWidth}px`;
        }
    }

    cloneSlides();
    tapToRightBtn.addEventListener('click', sliderNext);
});
