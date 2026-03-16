// src/components/footer/footer.js
import { footerTemplate } from "./footer.html.js";

export const renderFooter = () => {
  const year = new Date().getFullYear();
  return footerTemplate.replace("{{year}}", String(year));
};

export const initFooter = () => {
  if (typeof window === "undefined") return;

  setTimeout(() => {
    const footer = document.querySelector("footer");
    if (!footer) {
      console.warn("Footer not found");
      return;
    }

    const video = footer.querySelector("video");
    video?.play().catch(() => {
      const img = footer.querySelector(".footer-fallback");
      if (img && video) {
        video.parentNode.replaceChild(img, video);
      }
    });

    document.querySelectorAll(".accordion-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const svg = btn.querySelector("svg");
        const isOpen =
          content.style.maxHeight && content.style.maxHeight !== "0px";

        document.querySelectorAll(".accordion-btn").forEach((otherBtn) => {
          if (otherBtn !== btn) {
            const otherContent = otherBtn.nextElementSibling;
            const otherSvg = otherBtn.querySelector("svg");
            otherContent.style.maxHeight = "0";
            otherSvg?.classList.remove("rotate-180");
          }
        });

        if (!isOpen) {
          content.style.maxHeight = content.scrollHeight + "px";
          svg?.classList.add("rotate-180");
        } else {
          content.style.maxHeight = "0";
          svg?.classList.remove("rotate-180");
        }
      });
    });
  }, 100);
};
