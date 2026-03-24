export const init404Page = () => {
  if (typeof window === "undefined") return;

  const video = document.querySelector("video");

  video?.play().catch(() => {
    const img = document.querySelector(".video-fallback");

    if (img && video) {
      video.parentNode.replaceChild(img, video);
    }
  });
};
