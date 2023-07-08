const burgerBtn = document.querySelector(".burger-btn");
const headerRight = document.querySelector(".header__right");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  headerRight.classList.toggle("active");
});
