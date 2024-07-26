window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var windowHeight = window.innerHeight;
  var header = document.querySelector(".header");

  var bottomPosition = windowHeight - header.clientHeight;
  // header.style.backgroundPosition = "0% calc(100% + " + (bottomPosition - scrollTop / 2) + "px)";

  if (window.innerWidth > 1080) {
    var about = document.querySelector(".about");
    bottomPosition = windowHeight - about.clientHeight;
    about.style.backgroundPosition =
      "0% calc(50% + " + (bottomPosition - scrollTop / 5) + "px)";
    var roadmap = document.querySelector(".roadmap");
    bottomPosition = 1.65 * windowHeight - roadmap.clientHeight;
    roadmap.style.backgroundPosition =
      "0% calc(100% + " + (bottomPosition - scrollTop / 5) + "px)";
    var tokenomics = document.querySelector(".tokenomics");
    bottomPosition = 1.5 * windowHeight - tokenomics.clientHeight;
    var newBackgroundPosition =
      "0% calc(100% + " + (bottomPosition - scrollTop / 5) + "px)";

    if (bottomPosition - scrollTop / 5 >= 0) {
      tokenomics.style.backgroundPosition = newBackgroundPosition;
    }
  }
});
