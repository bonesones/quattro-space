import { initFullPage } from "@/utils/fullpage.js";

export function setupVenueFullpage({ container, header }) {
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

        title?.classList.remove("venue-title-animated");
        mainImage?.classList.remove("venue-image-animated");
        imageWrapper?.classList.remove("venue-image-wrapper-animated");
      }
    },
    beforeSectionChange: (currentIndex, nextIndex) => {
      const mainImage = container.querySelector(".main-image");
      const imageWrapper = container.querySelector(".image-wrapper");
      const title = container.querySelector("h1");

      const isFirstSectionAnimated =
        mainImage?.classList.contains("venue-image-animated") &&
        title?.classList.contains("venue-title-animated");
      imageWrapper?.classList.contains("venue-image-wrapper-animated");

      if (currentIndex === 0 && !isFirstSectionAnimated) {
        title?.classList.add("venue-title-animated");
        mainImage?.classList.add("venue-image-animated");
        imageWrapper?.classList.add("venue-image-wrapper-animated");

        return false;
      }

      if (nextIndex === 0) {
        title?.classList.remove("venue-title-animated");
        mainImage?.classList.remove("venue-image-animated");
        imageWrapper?.classList.remove("venue-image-wrapper-animated");
      }

      return true;
    },
  });
}

