import { initFullPage } from "@/utils/fullpage.js";

export function setupCategoryFullpage({ container, header }) {
  if (!container) return;

  const CATEGORY_SAFE_GAP_PX = 16;

  const applyCategoryHeroShift = () => {
    const firstSection = container.querySelector("section");
    if (!firstSection) return;

    const imageWrapper = firstSection.querySelector(".image-wrapper");
    const breadcrumbs = firstSection.querySelector(".breadcrumbs");
    const title = firstSection.querySelector("h1");
    if (!imageWrapper || !breadcrumbs || !title) return;

    const wrapperRect = imageWrapper.getBoundingClientRect();
    const breadcrumbsRect = breadcrumbs.getBoundingClientRect();
    const titleRect = title.getBoundingClientRect();

    const minAllowedTop = breadcrumbsRect.bottom + CATEGORY_SAFE_GAP_PX;
    const minAllowedShift = minAllowedTop - wrapperRect.top;
    const titleShift = -titleRect.height;
    const safeShift = Math.max(titleShift, minAllowedShift);

    imageWrapper.style.setProperty("--hero-wrapper-shift", `${safeShift}px`);
  };

  const clearCategoryHeroShift = () => {
    const firstSection = container.querySelector("section");
    const imageWrapper = firstSection?.querySelector(".image-wrapper");
    imageWrapper?.style.removeProperty("--hero-wrapper-shift");
  };

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
        clearCategoryHeroShift();
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
        applyCategoryHeroShift();
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
        clearCategoryHeroShift();
      }

      if (nextIndex === 0) {
        title?.classList.remove("category-title-animated");
        mainImages.forEach((mainImage) =>
          mainImage.classList.remove("category-image-animated"),
        );
        imageWrapper?.classList.remove("category-image-wrapper-animated");
        clearCategoryHeroShift();
      }

      return true;
    },
  });
}

