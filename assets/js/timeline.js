$(document).ready(function () {
    window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
      
        loader.classList.add("loader--hidden");
      
        loader.addEventListener("transitionend", () => {
          document.body.removeChild(loader);
        });
    });
    particlesJS.load('particles-js', 'assets/particles-timeline.json', function() {});
});
