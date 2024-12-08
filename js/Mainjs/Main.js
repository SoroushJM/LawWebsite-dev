//set up carousel
console.log("main js loaded");
const myCarouselElement = document.querySelector("#carouselMain");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 10000,
  touch: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("LanguageDropDown");

  // language can only be this values :
  // English
  // Kurdish
  // Arabic
  // Function to switch language based on selected value
  function switchLanguage(language) {
    const elements = document.querySelectorAll(".translatable");
    elements.forEach((element) => {
      const translation = element.getAttribute(`data-${language}`);
      if (translation) {
        element.innerHTML = translation;
      }
    });    
    let alltags =document.querySelectorAll('span, h1, h2, h3, h4, h5, h6, body');
    if(language==="English")
    {
      document.body.style.direction = "ltr";
      document.body.style.fontFamily = "MuseoSansRounded";
      console.log("english language has been selected");
      alltags.forEach((x)=>x.style.setProperty('font-family', 'MuseoSansRounded', 'important'));
    }
    else{
      document.body.style.direction = "rtl"
      document.body.style.fontFamily = "Yekan";
      alltags.forEach((x)=>x.style.setProperty('font-family', 'Yekan', 'important'));
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

/**
 * Handles the click event of a button and provides information about the clicked button.
 *
 * @param {HTMLElement} buttonElement - The button element that triggered the function.
 * @returns {void}
 */
function ChangeLanguage(buttonElement)
{
  const changeLanguageButton = document.getElementById("LanguageDropDown");
  changeLanguageButton.textContent = buttonElement.textContent;
}