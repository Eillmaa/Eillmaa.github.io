document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-slider").mount();
});
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-slider", {
    cover: true,
    heightRatio: 0.5,
  }).mount();
});
