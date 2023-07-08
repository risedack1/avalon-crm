const aside = document.querySelector(".aside");
const asideBtn = document.querySelector(".aside__swipe-btn");
const asideMobileBtn = document.querySelector(".aside-btn-mobile");

asideBtn.addEventListener("click", () => {
  aside.classList.toggle("hidden");
  asideBtn.classList.toggle("hidden");
});

aside.addEventListener("click", ({ target }) => {
  if (target.matches(".aside__button") || target.closest(".aside__button")) {
    const item = target.closest(".aside__item");
    const subList = item.querySelector(".aside__sublist");

    subList.classList.toggle("active");
    target.classList.toggle("active");
  }
});

asideMobileBtn.addEventListener("click", () => {
  aside.classList.toggle("active");
  asideMobileBtn.classList.toggle("active");
});
