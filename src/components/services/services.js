import { servicesTemplate } from "./services.html.js";

export function renderServices() {
  return servicesTemplate;
}

const updateServiceHeights = (article) => {
  if (!article) return;

  const img = article.querySelector(".service-image");
  const button = article.querySelector("[data-accordion-target]");
  const inner = article.querySelector(".accordion-content");

  if (!img || !button || !inner) return;

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 1024 : false;

  if (article.classList.contains("is-open")) {
    const contentHeight = inner.scrollHeight;

    if (isMobile) {
      img.style.height = "250px";
    } else {
      img.style.height = `${contentHeight + button.offsetHeight}px`;
    }

    inner.style.maxHeight = `${contentHeight}px`;
  } else {
    const buttonHeight = button.offsetHeight;

    if (isMobile) {
      img.style.height = `73px`;
    } else {
      img.style.height = `${buttonHeight}px`;
    }

    inner.style.maxHeight = "0px";
  }
};

const updateAllServiceHeights = (root = document) => {
  if (typeof window === "undefined") return;

  root.querySelectorAll(".service-item").forEach((article) => {
    updateServiceHeights(article);
  });
};

const initAccordion = (root) => {
  if (typeof window === "undefined") return;

  root.querySelectorAll("[data-accordion-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const article = btn.closest(".service-item");

      root.querySelectorAll(".service-item").forEach((item) => {
        if (item !== article) {
          item.classList.remove("is-open");
          updateServiceHeights(item);
        }
      });

      article.classList.toggle("is-open");
      updateServiceHeights(article);
    });
  });
};

export function initServices(container) {
  if (!container) return;

  if (typeof window !== "undefined") {
    initAccordion(container);
    updateAllServiceHeights(container);

    window.addEventListener("resize", () => {
      updateAllServiceHeights(container);
    });
  }
}
