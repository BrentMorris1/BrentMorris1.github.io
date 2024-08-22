document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Now that the header is loaded, apply the sticky header logic
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

            if (window.location.pathname.endsWith("index.html")) {
                scrollToTop.addEventListener("click", function(event) {
                    event.preventDefault(); // Prevent default anchor click behavior
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth' // Smooth scrolling
                    });
                });
            }
            
        });
});
