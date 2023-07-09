const aside = document.querySelector(".aside");
const asideBtn = document.querySelector(".aside__swipe-btn");
const asideMobileBtn = document.querySelector(".aside-btn-mobile");

if (aside) {
  asideBtn.addEventListener("click", () => {
    aside.classList.toggle("hidden");
    asideBtn.classList.toggle("hidden");
  });

  aside.addEventListener("click", ({ target }) => {
    if (target.matches(".aside__button") || target.closest(".aside__button")) {
      const targetBtn = target.closest(".aside__button")
        ? target.closest(".aside__button")
        : target;
      const item = target.closest(".aside__item");
      const subList = item.querySelector(".aside__sublist");

      if (subList.matches(".active")) {
        subList.classList.remove("active");
        targetBtn.classList.remove("active");
        return;
      }

      const activeSubList = aside.querySelector(".aside__sublist.active");
      const activeBtn = aside.querySelector(".aside__button.active");
      if (activeSubList) {
        activeSubList.classList.remove("active");
        activeBtn.classList.remove("active");
      }

      subList.classList.toggle("active");
      targetBtn.classList.toggle("active");
    }
  });

  asideMobileBtn.addEventListener("click", () => {
    aside.classList.toggle("active");
    asideMobileBtn.classList.toggle("active");
  });
}
