document.addEventListener("DOMContentLoaded", function() {
    let container = document.querySelector('.container');
    let sliderBox = document.querySelector('.slider');
    let tapToRightBtn = document.querySelector('.btn');
    let slides = Array.from(sliderBox.querySelectorAll('.slide'));
    let slideWidth = slides[0].offsetWidth; // Assume all slides are the same width
    let index = 1; // Start at the first cloned slide

    //initialization function that only runs when the page is loaded
    function cloneSlides() {
        
        handleResize();//dimention slider panels as soon as document opens

        //Create coppies of the first 3 slides and append them to the end of the felxbox
        let firstSlide = slides[0].cloneNode(true);
        let secondSlide = slides[1].cloneNode(true);
        let thirdSlide = slides[2].cloneNode(true);
        sliderBox.appendChild(firstSlide);
        sliderBox.appendChild(secondSlide);
        sliderBox.appendChild(thirdSlide);
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

    // Function to run on window resize
    function handleResize() {
    // set slide width so 3 fit on the screen
    slideWidth = (container.offsetWidth * 0.334);
    slides.forEach(slide => {
        slide.style.offsetWidth = slideWidth + 'px';
    });
    sliderBox.style.width = ((slides.length + 2) * slideWidth) + 'px'; //replace slide width * 7 with an expression that varries with the number of slides
}



    cloneSlides();
    tapToRightBtn.addEventListener('click', sliderNext);
    window.addEventListener('resize', handleResize); //runs handleresize function when window is resized
});
