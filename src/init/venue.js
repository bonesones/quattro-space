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
      },
      beforeSectionChange: (currentIndex) => {
        const mainImage = fullPageContainer.querySelector(".main-image");
        const title = fullPageContainer.querySelector("h1");
        const content = fullPageContainer.querySelector(".venue-content");

        const isFirstSectionAnimated =
          mainImage?.classList.contains("venue-image-animated") &&
          title?.classList.contains("venue-title-animated") &&
          content?.classList.contains("venue-content-animated");

        if (currentIndex === 0 && !isFirstSectionAnimated) {
          title?.classList.add("venue-title-animated");
          mainImage?.classList.add("venue-image-animated");
          content?.classList.add("venue-content-animated");

          return false;
        }
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
