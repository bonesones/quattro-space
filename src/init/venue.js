import Swiper from "swiper";

import { initFullPage } from "../utils/fullpage.js";
import { Autoplay, EffectFade } from "swiper/modules";

export const initVenuePage = () => {
  const isDesktop = window.innerWidth > 1024;
  const fullPageContainer = document.querySelector(".venue-page");

  if (isDesktop) {
    initFullPage({
      container: fullPageContainer,
      onSectionChange: () => {
        const header = document.querySelector(".desktop-header");
        if (!header) return;

        header.classList.add("lg:bg-black", "pt-6", "px-main");
        header.classList.remove("pt-12.5", "px-12");
      },
    });
  }

  new Swiper(".venue-swiper", {
    modules: [Autoplay, EffectFade],
    effect: "fade",
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 800,
      disableOnInteraction: false,
    },
    loop: true,
  });
};
