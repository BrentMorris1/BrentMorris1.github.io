/* This code is responsible for the project infinite slider section.
Three projects will show regardless of the aspect ratio of the view window */


document.addEventListener("DOMContentLoaded", function() {
    let container = document.querySelector('.container');
    let sliderBox = document.querySelector('.slider');
    let tapToRightBtn = document.querySelector('.btn');
    let slides = Array.from(sliderBox.querySelectorAll('.slide'));
    let slideWidth = slides[0].offsetWidth; // Assume all slides are the same width
    let index = 0; //index represents the slide offset from loaded position
    let isAnimating = false; // Flag to prevent multiple clicks during animation

    //initialization function that only runs when the page is loaded
    function cloneSlides() {
        
        handleResize();//dimention slider panels as soon as document opens

        //Create coppies of the first 3 slides and append them to the end of the felxbox
        //these copys are used to create the looping effect
        let firstSlide = slides[0].cloneNode(true);
        let secondSlide = slides[1].cloneNode(true);
        let thirdSlide = slides[2].cloneNode(true);

        sliderBox.appendChild(firstSlide);
        sliderBox.appendChild(secondSlide);
        sliderBox.appendChild(thirdSlide);

        sliderBox.style.transition = 'left 0.5s';
    }
    
    //function is called whenever the next button is pressed
    function sliderNext() {
        if (isAnimating) return; // Prevent multiple clicks during animation
        isAnimating = true;
        index++;
        //slide the slider box position the width of a slider element
        sliderBox.style.transition = 'left 0.5s';
        sliderBox.style.left = `-${ index * slides[0].offsetWidth}px`;
        
        //if you have reached the end of the loop, slide to the begining without a transition 
        // If you've reached the end of the loop, jump to the beginning without a transition
        if (index >= slides.length) {
        setTimeout(() => {
            sliderBox.style.transition = 'none'; // Disable transition
            index = 0; // Reset positional index to 0
            sliderBox.style.left = `-${index * slideWidth}px`;
            isAnimating = false; // Re-enable clicking after animation
        }, 500); // Adjust timeout to match your transition duration
    } else {
        setTimeout(() => {
            isAnimating = false; // Re-enable clicking after animation
        }, 500);
    }

    }

    // Function to run on window resize
    function handleResize() {
    //allSlides object includes the coppied slides
    const allSlides = document.querySelectorAll('.slider .slide'); // Assuming slides have a class 'slide'
    // set slide width so 3 fit on the screen
    slideWidth = (container.offsetWidth * 0.306667);
    paddingWidth = (container.offsetWidth *0.0101) // the 0.0001 prevents the 4th slide from bleeding over in some circumstances
    
    //this loop is not modifying the slide coppies.
    allSlides.forEach(slide => {
        // do not use this code because it includes the region hidden by the scroll bar in the viewport width
        //slide.style.width = '30.6666vw';
        //slide.style.margin = '1vw';
        slide.style.width = slideWidth + 'px';
        slide.style.padding = paddingWidth + 'px';
    });
    //No harm in having the width of the slider box larger than it needs to be
    //if the box is too small it will shrink the project slides from 33% of screen width
    sliderBox.style.width = ((slides.length + 4) * container.offsetWidth * 0.34) + 'px'; //replace slide width * 7 with an expression that varries with the number of slides
    
    //update the left value of the sliderbox left offset
        sliderBox.style.transition = 'none'; // Disable transition
        sliderBox.style.left = `-${index * slides[0].offsetWidth}px`;
}



    cloneSlides();
    tapToRightBtn.addEventListener('click', sliderNext);
    window.addEventListener('resize', handleResize); //runs handleresize function when window is resized
    
});
