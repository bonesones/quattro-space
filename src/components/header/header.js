import { headerTemplate } from "./header.html.js";

export const renderHeader = () => {
  return headerTemplate;
};

export const initHeader = () => {
  if (typeof window === "undefined") return;

  const burgerBtn = document.getElementById("burgerBtn");
  const menuModal = document.getElementById("menuModal");
  const closeModal = document.getElementById("closeModal");
  const video = menuModal?.querySelector("video");

  if (!burgerBtn || !menuModal || !closeModal) {
    console.warn("Header elements not found");
    return;
  }

  const playVideo = () => {
    video?.play().catch(() => {
      const img = video?.querySelector("img");
      if (img && video) {
        video.parentNode.replaceChild(img, video);
      }
    });
  };

  const pauseVideo = () => video?.pause();

  const openMenu = () => {
    document.body.classList.add("overflow-hidden");
    menuModal.classList.remove("-translate-y-full");
    menuModal.classList.add("translate-y-0");
    burgerBtn.classList.add("hidden");
    closeModal.classList.remove("hidden");
    playVideo();
  };

  const closeMenu = () => {
    document.body.classList.remove("overflow-hidden");
    menuModal.classList.remove("translate-y-0");
    menuModal.classList.add("-translate-y-full");
    burgerBtn.classList.remove("hidden");
    closeModal.classList.add("hidden");
    pauseVideo();
  };

  burgerBtn.addEventListener("click", openMenu);
  closeModal.addEventListener("click", closeMenu);

  menuModal
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeMenu));
};
