// const slides = document.querySelectorAll('[data-js="carousel__item"]');
// const nextButton = document.querySelector('[data-js="carousel__button--next"]');
// const prevButton = document.querySelector('[data-js="carousel__button--prev"]');

// let currentSlideIndex = 0;

// nextButton.addEventListener("click", () => {
//   if (currentSlideIndex === slides.length - 1) {
//     currentSlideIndex = 0;
//   } else {
//     currentSlideIndex++;
//   }

//   slides.forEach((slide) => {
//     slide.classList.remove("carousel__item--visible");
//   });
//   slides[currentSlideIndex].classList.add("carousel__item--visible");
// });

// prevButton.addEventListener("click", () => {
//   if (currentSlideIndex === 0) {
//     currentSlideIndex = slides.length - 1;
//   } else {
//     currentSlideIndex--;
//   }

//   slides.forEach((slide) => {
//     slide.classList.remove("carousel__item--visible");
//   });
//   slides[currentSlideIndex].classList.add("carousel__item--visible");
// });

var accItem = document.getElementsByClassName("accordionItem");
var accHD = document.getElementsByClassName("accordionItemTitle");
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}
function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "accordionItem hidden";
  }
  if (itemClass == "accordionItem hidden") {
    this.parentNode.className = "accordionItem visible";
  }
}
