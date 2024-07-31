document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const header = document.querySelector("header");

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
});
