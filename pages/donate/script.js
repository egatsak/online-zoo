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

const amountRadioButtonsLabels = document.querySelectorAll(
  ".donation__radiobuttons-amount-radio"
);

const amountInput = document.querySelector(
  ".donation__input-wrapper--number"
);

const amountRadioButtons = document.querySelectorAll(
  ".donation__radiobuttons-amount-radio input"
);

amountRadioButtonsLabels.forEach((item, i, arr) => {
  item.addEventListener("click", () => {
    arr.forEach((it) =>
      it.classList.remove(
        "donation__radiobuttons-amount-radio--active"
      )
    );
    item.classList.add("donation__radiobuttons-amount-radio--active");
    const input = item.querySelector("input");
    amountInput.value = +input.value;
  });
});

amountInput.addEventListener("input", (e) => {
  const radiobuttons = [...amountRadioButtons];
  const foundRadioButton = radiobuttons.find(
    (item) => +item.value === +e.target.value
  );
  amountRadioButtonsLabels.forEach((it) => {
    it.classList.remove(
      "donation__radiobuttons-amount-radio--active"
    );
  });
  if (foundRadioButton) {
    radiobuttons.forEach((it) => {
      it.removeAttribute("checked");
    });
    foundRadioButton.setAttribute("checked", "true");
    foundRadioButton.parentNode.classList.add(
      "donation__radiobuttons-amount-radio--active"
    );
  }
});

const form = document.querySelector(".donation");

form.addEventListener("submit", (e) => {
  new FormData(form);
});

form.addEventListener("formdata", (event) => {
  const data = event.formData;
  let orderDetails = [...data.entries()];
  console.log(orderDetails[0], orderDetails[1]);
});

const once = document.getElementById("label-once");
const monthly = document.getElementById("label-monthly");

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

//
