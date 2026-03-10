import template from "./banner.html?raw";

export function renderBanner() {
  return template;
}

export const initBanner = (root = document) => {
  const leftBlock = root.querySelector(".col-span-2 .absolute.inset-0.left-0");
  const atSpan = root.getElementById("at");
  const container = root.getElementById("banner-container");

  const mobileVideo = container?.querySelector(".mobile-video");

  if (mobileVideo) {
    mobileVideo.play().catch(() => {
      const img = mobileVideo.querySelector("img");

      if (img) {
        mobileVideo.parentNode.replaceChild(img, mobileVideo);
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
