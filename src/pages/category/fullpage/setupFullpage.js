import { initFullPage } from "@/utils/fullpage.js";

export function setupCategoryFullpage({ container, header }) {
  if (!container) return;

  initFullPage({
    container,
    onSectionChange: (_, index) => {
      if (header) {
        header.classList.add("lg:bg-black", "pt-6", "px-main");
        header.classList.remove("pt-12.5", "px-12");
      }

      if (index == 0) {
        const title = container.querySelector("h1");
        const mainImage = container.querySelector(".main-image");
        const imageWrapper = container.querySelector(".image-wrapper");

        title?.classList.remove("category-title-animated");
        mainImage?.classList.remove("category-image-animated");
        imageWrapper?.classList.remove("category-image-wrapper-animated");
      }
    },
    beforeSectionChange: (currentIndex, nextIndex) => {
      const mainImages = Array.from(container.querySelectorAll(".main-image"));
      const imageWrapper = container.querySelector(".image-wrapper");
      const title = container.querySelector("h1");

      const isFirstSectionAnimated =
        mainImages.every((mainImage) =>
          mainImage.classList.contains("category-image-animated"),
        ) &&
        title?.classList.contains("category-title-animated") &&
        imageWrapper?.classList.contains("category-image-wrapper-animated");

      if (currentIndex === 0 && !isFirstSectionAnimated) {
        mainImages.forEach((mainImage) =>
          mainImage.classList.add("category-image-animated"),
        );

        title?.classList.add("category-title-animated");
        imageWrapper?.classList.add("category-image-wrapper-animated");

        return false;
      } else if (currentIndex === 0 && isFirstSectionAnimated) {
        title?.classList.remove("category-title-animated");
        mainImages.forEach((mainImage) =>
          mainImage.classList.remove("category-image-animated"),
        );
        imageWrapper?.classList.remove("category-image-wrapper-animated");
      }

      if (nextIndex === 0) {
        title?.classList.remove("category-title-animated");
        mainImages.forEach((mainImage) =>
          mainImage.classList.remove("category-image-animated"),
        );
        imageWrapper?.classList.remove("category-image-wrapper-animated");
      }

      return true;
    },
  });
}

