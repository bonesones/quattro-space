import template from "./banner.html?raw";

export function renderBanner() {
  return template;
}

document.addEventListener("DOMContentLoaded", function () {
  const isChrome =
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  const element = document.getElementById("liquid-glass-element");

  if (isChrome) {
    element.className = "glass-main";
  } else {
    element.className = "glass-fallback";
  }
});
