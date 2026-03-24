export const init404Page = () => {
  if (typeof window === "undefined") return;

  const video = document.querySelector(".error-page-video");

  video?.play().catch(() => {
    const img = document.querySelector(".error-video-fallback");

    if (img && video) {
      video.parentNode.replaceChild(img, video);
    }
  });
};
