import {
  loadSwiper,
  createSwiper
} from "@/shared/ui/slider/swiperController.js";
import { initFullscreenVenueSwiper } from "@/shared/ui/slider/fullscreenVenueSwiper/initFullscreenVenueSwiper.js";

export async function initVenueSwipers({ isDesktop }) {
  const { Swiper, modules } = await loadSwiper([
    () => import("swiper/css/effect-fade"),
    () => import("swiper/css/effect-coverflow")
  ]);

  const { Autoplay, EffectFade, Navigation } = modules;

  initVenueFaders({ Swiper, Autoplay, EffectFade, isDesktop });
  initFullscreenVenueSwiper({
    Swiper,
    Navigation,
    selectors: {
      wrapper: ".fullscreen-venue-swiper-mobile",
      swiper: ".gallery-fullpage-swiper-mobile",
      thumbnails: ".venue-swiper-mobile img",
      close: ".close-swiper-mobile",
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  initFullscreenVenueSwiper({
    Swiper,
    Navigation,
    selectors: {
      wrapper: ".fullscreen-venue-swiper-desktop",
      swiper: ".gallery-fullpage-swiper-desktop",
      thumbnails: ".venue-swiper-desktop img",
      close: ".close-swiper-desktop",
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  initThumbsGallery({ Swiper, Navigation });
}

function initVenueFaders({ Swiper, Autoplay, EffectFade, isDesktop }) {
  const swiperElements = document.querySelectorAll(".venue-swiper");

  if (swiperElements.length > 0) {
    swiperElements.forEach(swiperElement => {
      createSwiper(swiperElement, Swiper, {
        modules: [Autoplay, EffectFade],
        effect: "fade",
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 800,
          disableOnInteraction: false
        },
        loop: true,
        ...(isDesktop && {
          allowTouchMove: false
        })
      });
    });
  }
}

function updateSlideMargins(swiper) {
  const activeIndex = swiper.activeIndex;
  const slides = swiper.slides;

  slides.forEach((slide, index) => {
    const relativeIndex = (index - activeIndex + slides.length) % slides.length;

    if (relativeIndex === 2) {
      slide.style.marginRight = "0";
    } else {
      slide.style.marginRight = "-25%";
    }
  });
}

function initThumbsGallery({ Swiper, Navigation }) {
  const swiper = document.querySelector(".swiper-gallery-thumbs");
  if (!swiper) return;

  createSwiper(swiper, Swiper, {
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    slidesPerView: "auto",
    loop: true,
    centeredSlides: false,
    allowTouchMove: false,
    on: {
      init: swiper => {
        updateSlideMargins(swiper);
      },
      slideChange: swiper => {
        updateSlideMargins(swiper);
      }
    }
  });
}
