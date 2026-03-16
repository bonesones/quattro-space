import { bannerTemplate } from "./banner.html.js";

export function renderBanner() {
  return bannerTemplate;
}

export const initBanner = (root = document) => {
  const leftBlock = root.querySelector(".col-span-2 .absolute.inset-0.left-0");
  const atSpan = root.getElementById("at");
  const container = root.getElementById("banner-container");

  const mobileVideo = container?.querySelector(".mobile-video");
  const imageFallback = container?.querySelector(".mobile-fallback");

  if (mobileVideo) {
    mobileVideo.play().catch(() => {
      if (imageFallback) {
        mobileVideo.parentNode.replaceChild(imageFallback, mobileVideo);
      }
    });
  }

  if (leftBlock && atSpan) {
    const leftBlockWidth = leftBlock.offsetWidth;
    const atWidth = atSpan.offsetWidth;
    const moveDistance = -(leftBlockWidth - atWidth);

    atSpan.style.setProperty("--move-distance", moveDistance + "px");
  }
};
