import template from "./banner.html?raw";

export function renderBanner() {
  return template;
}

document.addEventListener("DOMContentLoaded", function () {
  const leftBlock = document.querySelector(
    ".col-span-2 .absolute.inset-0.left-0",
  );
  const atSpan = document.getElementById("at");

  if (leftBlock && atSpan) {
    const leftBlockWidth = leftBlock.offsetWidth;
    const atWidth = atSpan.offsetWidth;
    const moveDistance = -(leftBlockWidth - atWidth);

    atSpan.style.setProperty("--move-distance", moveDistance + "px");
  }
});
