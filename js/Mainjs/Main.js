//set up carousel
console.log("main js loaded");
const myCarouselElement = document.querySelector('#carouselMain');

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 10000,
  touch: true
})



document.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("language-select");

  // Function to switch language based on selected value
  function switchLanguage(language) {
      const elements = document.querySelectorAll(".translatable");
      elements.forEach((element) => {
          const translation = element.getAttribute(`data-${language}`);
          if (translation) {
              element.textContent = translation;
          }
      });

      // For Arabic or Farsi, set RTL direction
      if (language === 'ar' || language === 'fa') {
          document.body.setAttribute("dir", "rtl");
      } else {
          document.body.removeAttribute("dir");
      }
  }

  // Event listener to change language on selection
  languageSelect.addEventListener("change", (event) => {
      const selectedLanguage = event.target.value;
      switchLanguage(selectedLanguage);
  });

  // Initial language load
  switchLanguage(languageSelect.value);
});
