document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const header = document.querySelector("header");
    const scrollToTop = document.querySelector('header h1 a');

    window.addEventListener("scroll", function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.classList.add("hidden");
        } else {
            // Scrolling up
            header.classList.remove("hidden");
        }
        lastScrollTop = scrollTop;
    });

    /*this part should allow clicking on "Brent Morris" to scroll to the top smoothly, but I still find the scrolling abrupt */

    scrollToTop.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    });
});


/* Next I want to make an infinate slider as explined here https://stackoverflow.com/questions/73925164/how-to-make-a-slider-loop-with-js 

function sliderFunc() {
    let sliderBox = document.querySelector('.slider');
    let tapToRightBtn = document.querySelector('.btn');
    let index = 0;
    /*sliderBox.style.width = '500px'; let the slider be as big as the containg box* 
    sliderBox.style.left = '0px'; //default horozontal scroll position to 0
  
    function sliderNext() {
      setTimeout(() => {
        index++;
        let child = sliderBox.querySelector(`div:nth-child(${index})`);
        //let childWidth = sliderBox.querySelector(`div:nth-child(${index})`).offsetWidth;// width of the child
        let cloneNode = child .cloneNode(true);
        sliderBox.style.width = `${(5 + index) * 100}px`;
        sliderBox.appendChild(cloneNode);
      }, 300);
      // clone and move the element to bottom
      let currentLeftPosition = sliderBox.style.left ? parseFloat(sliderBox.style.left.replace('px', '')) : 0;
      let nextLeftPosition = currentLeftPosition - 100;
      sliderBox.style.left = `${nextLeftPosition}px`;
  
    }
    tapToRightBtn.addEventListener('click', sliderNext);
  }
  sliderFunc();
  */