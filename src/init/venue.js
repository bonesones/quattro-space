import { initFullPage } from "../utils/fullpage.js";

export const initVenuePage = async () => {
  if (typeof window === "undefined") return;

  const isDesktop = window.innerWidth > 1024;
  const fullPageContainer = document.querySelector(".venue-page");

  if (isDesktop) {
    initFullPage({
      container: fullPageContainer,
      onSectionChange: (_, index) => {
        const header = document.querySelector(".desktop-header");
        if (!header) return;

        header.classList.add("lg:bg-black", "pt-6", "px-main");
        header.classList.remove("pt-12.5", "px-12");

        if (index == 0) {
          const title = fullPageContainer.querySelector("h1");
          const mainImage = fullPageContainer.querySelector(".main-image");
          const imageWrapper =
            fullPageContainer.querySelector(".image-wrapper");

          title?.classList.remove("venue-title-animated");
          mainImage?.classList.remove("venue-image-animated");
          imageWrapper?.classList.remove("venue-image-wrapper-animated");
        }
      },
      beforeSectionChange: (currentIndex, nextIndex) => {
        const mainImage = fullPageContainer.querySelector(".main-image");
        const imageWrapper = fullPageContainer.querySelector(".image-wrapper");
        const title = fullPageContainer.querySelector("h1");

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

  try {
    const [{ default: Swiper }, { Autoplay, EffectFade }] = await Promise.all([
      import("swiper"),
      import("swiper/modules"),
    ]);

    await import("swiper/css");
    await import("swiper/css/effect-fade");

    const swiperElement = document.querySelector(".venue-swiper");

    if (swiperElement) {
      if (swiperElement.swiper) {
        swiperElement.swiper.destroy(true, true);
      }

      new Swiper(swiperElement, {
        modules: [Autoplay, EffectFade],
        effect: "fade",
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 800,
          disableOnInteraction: false,
        },
        loop: true,

        ...(isDesktop && {
          allowTouchMove: false,
        }),
      });
    }
  } catch (error) {
    console.error("Failed to initialize Swiper:", error);
  }
};
