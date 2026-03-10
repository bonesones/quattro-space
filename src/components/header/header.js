import template from "./header.html?raw";

export const renderHeader = () => {
  const year = new Date().getFullYear();
  return template.replace("{{year}}", String(year));
};

export const initHeader = () => {
  const burgerBtn = document.getElementById("burgerBtn");
  const menuModal = document.getElementById("menuModal");
  const closeModal = document.getElementById("closeModal");
  const video = menuModal?.querySelector("video");

  const playVideo = () => {
    video?.play().catch(() => {
      const img = video.querySelector("img");

      if (img) {
        video.parentNode.replaceChild(img, video);
      }
    });
  };
  const pauseVideo = () => video?.pause();

  burgerBtn?.addEventListener("click", () => {
    document.body.classList.add("overflow-hidden");

    menuModal.classList.remove("-translate-y-full");
    menuModal.classList.add("translate-y-0");

    burgerBtn.classList.add("hidden");
    closeModal.classList.remove("hidden");

    playVideo();
  });

  closeModal?.addEventListener("click", () => {
    document.body.classList.remove("overflow-hidden");

    menuModal.classList.remove("translate-y-0");
    menuModal.classList.add("-translate-y-full");

    burgerBtn.classList.remove("hidden");

    closeModal.classList.add("hidden");
    pauseVideo();
  });
};
