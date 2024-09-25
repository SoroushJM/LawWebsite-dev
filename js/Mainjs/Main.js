
console.log("main js loaded");
const myCarouselElement = document.querySelector('#carouselMain');

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 10000,
  touch: true
})