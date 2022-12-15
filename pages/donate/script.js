const viewportWidth = window.innerWidth;
const header = document.querySelector(".section-header");

document
  .querySelector(".section-header .section-inner")
  .addEventListener("click", (e) => {
    e.stopPropagation();
  });

document
  .querySelector(".main-navigation__inner-wrap")
  .addEventListener("click", (e) => {
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

const once = document.getElementById("once");
const monthly = document.getElementById("monthly");

once.addEventListener("click", () => {
  once.classList.add("donation__radiobuttons-period__item--active");
  monthly.classList.remove(
    "donation__radiobuttons-period__item--active"
  );
});

monthly.addEventListener("click", () => {
  monthly.classList.add(
    "donation__radiobuttons-period__item--active"
  );
  once.classList.remove(
    "donation__radiobuttons-period__item--active"
  );
});
