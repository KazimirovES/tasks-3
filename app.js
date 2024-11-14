const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",
});

const enableOnlyMobile = () => {
  if (window.innerWidth > 768) {
    swiper.disable();
  } else {
    swiper.enable();
    swiper.update();
  }
};

enableOnlyMobile();

window.addEventListener("resize", enableOnlyMobile);
console.log(window.addEventListener);

let buttonOpenClose = document.querySelector(".button__open-close");
let equipmenRepairWrapper = document.querySelector(".equipmen__repair-wrapper");
let buttonText = document.querySelector(".button__text");
let buttonIcon = document.querySelector(".button__icon");

buttonOpenClose.addEventListener("click", () => {
  equipmenRepairWrapper.classList.toggle("equipmen__repair-wrapper--click");
  buttonText.textContent =
    buttonText.textContent === "Показать все" ? "Скрыть" : "Показать все";
  buttonIcon.classList.toggle("button__icon--rotate");
});
