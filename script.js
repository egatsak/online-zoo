const viewportWidth = window.innerWidth;

const header = document.querySelector(".section-header");
const headerInnerSection = document.querySelector(
  ".section-header .section-inner"
);
const headerNavbar = document.querySelector(
  ".main-navigation__inner-wrap"
);

headerInnerSection.addEventListener("click", (e) => {
  e.stopPropagation();
});

headerNavbar.addEventListener("click", (e) => {
  e.stopPropagation();
});

document
  .querySelector(".btn-burger")
  .addEventListener("click", () => {
    header.classList.toggle("section-header--active-nav");
  });

document.body.addEventListener("click", () => {
  header.classList.remove("section-header--active-nav");
});
/////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////
if (viewportWidth < 992) {
  const popupModal = document.querySelector(".modal");
  const popupCloseBtn = document.querySelector(".popup-close-btn");
  const popupContent = document.querySelector(".card-popup-wrapper");
  const cardWrapper = document.querySelector(".popup-item-wrapper");
  popupContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  popupCloseBtn.addEventListener("click", () => {
    popupModal.classList.remove("modal--active");
  });
  popupModal.addEventListener("click", () => {
    popupModal.classList.remove("modal--active");
  });

  reviews.forEach((item) =>
    item.addEventListener("click", () => {
      const cardClone = item.cloneNode(true);
      cardClone.classList.add(".popup__item");
      cardClone.classList.remove(".testimonials-item-wrapper");
      cardWrapper.innerHTML = "";
      cardWrapper.appendChild(cardClone);
      popupModal.classList.add("modal--active");
    })
  );
}
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
