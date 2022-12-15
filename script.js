const viewportWidth = window.innerWidth;

const randomIntegerFrom1 = randomInteger(1);
const petSlides = document.querySelectorAll(".slider-favorite__item");

let slideIndex = 1;
let slideNumber = viewportWidth < 992 ? 4 : 6;

let prevNumbers = [];

function showSlides() {
  const randomNumbers = [];

  while (randomNumbers.length < slideNumber) {
    const random = randomIntegerFrom1(petSlides.length);
    if (
      !randomNumbers.includes(random) &&
      !prevNumbers.includes(random)
    ) {
      randomNumbers.push(random);
    }
  }

  prevNumbers = randomNumbers;

  for (let i = 0; i < petSlides.length; i++) {
    petSlides[i].style.display = "none";
  }
  randomNumbers.forEach((item) => {
    petSlides[item - 1].style.display = "block";
  });
}

const prevBtn = document.querySelector(".btn-favorite--prev");
const nextBtn = document.querySelector(".btn-favorite--next");

prevBtn.addEventListener("click", () => showSlides());
nextBtn.addEventListener("click", () => showSlides());

showSlides();

///////////////////////////////////////////////////////////////////////////////
const reviewWrapper = document.querySelector(".testimonials-list");
const reviews = document.querySelectorAll(
  ".testimonials-item-wrapper"
);
const slider = document.querySelector("#slider");

let reviewCounter = 0;
let reviewItemWidth =
  reviews[1].clientWidth +
  parseInt(getComputedStyle(reviews[0]).marginLeft) +
  12;

if (viewportWidth < 1200) {
  slider.setAttribute("max", 8);
  reviewItemWidth =
    reviews[1].clientWidth +
    parseInt(getComputedStyle(reviews[0]).marginLeft) +
    38;
}

function changeSlider() {
  reviewWrapper.style.transition = "transform 0.3s ease-in-out";
  reviewCounter = +slider.value;
  reviewWrapper.style.transform = `translateX(${
    0 - reviewItemWidth * reviewCounter
  }px)`;
}

slider.addEventListener("change", changeSlider);
slider.addEventListener("mousemove", throttle(changeSlider, 300));

// === HELPERS ===
function randomInteger(min) {
  return function (max) {
    const random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
  };
}

function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}
