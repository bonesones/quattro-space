import template from "./header.html?raw";

export function renderHeader() {
  const year = new Date().getFullYear();
  return template.replace("{{year}}", String(year));
}

document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burgerBtn");

  const menuModal = document.getElementById("menuModal");
  const closeModal = document.getElementById("closeModal");

  burgerBtn.addEventListener("click", () => {
    menuModal.classList.remove("-translate-y-full");
    menuModal.classList.add("translate-y-0");

    burgerBtn.classList.add("hidden");
    closeModal.classList.remove("hidden");
  });

  closeModal.addEventListener("click", () => {
    menuModal.classList.remove("translate-y-0");
    menuModal.classList.add("-translate-y-full");

    burgerBtn.classList.remove("hidden");
    closeModal.classList.add("hidden");
  });
});
