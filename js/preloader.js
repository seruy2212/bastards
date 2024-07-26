document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.querySelector(".preloader");
    var computedStyle = window.getComputedStyle(preloader);
    var transitionDuration = parseFloat(computedStyle.transitionDuration) * 1000;

    function allResourcesLoaded() {
        setTimeout(function() {
            preloader.classList.add("hidden");
            setTimeout(function() {
                preloader.style.display = "none";
            }, transitionDuration)}, 200)
    }

    window.addEventListener("load", allResourcesLoaded);
});