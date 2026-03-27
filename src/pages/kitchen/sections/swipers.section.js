import { loadSwiper, createSwiper } from "@/shared/ui/slider/swiperController.js";
import { initFullscreenVenueSwiper } from "@/shared/ui/slider/fullscreenVenueSwiper/initFullscreenVenueSwiper.js";

export async function initKitchenPageSwipers({ isDesktop }) {
  const { Swiper, modules } = await loadSwiper([
    () => import("swiper/css/pagination"),
    () => import("swiper/css/effect-coverflow"),
  ]);

  const { Pagination, EffectCoverflow, Navigation } = modules;

  const swiperWrapper = document.querySelector(".kitchen-page-swiper .swiper-wrapper");
  const swiperElement = document.querySelector(".kitchen-page-swiper");

  if (!swiperWrapper || !swiperElement) return;

  if (isDesktop) {
    const updateSlidesAnimation = (swiper) => {
      const slides = swiper.slides;

      slides.forEach((slide) => {
        slide.removeAttribute("data-animate");
      });

      const prev = swiper.el.querySelector(".swiper-slide-prev");
      const next = swiper.el.querySelector(".swiper-slide-next");

      const prevInner = prev?.querySelector(".slider-inner");
      const nextInner = next?.querySelector(".slider-inner");

      if (prevInner) {
        prevInner.setAttribute("data-animate", true);
        prevInner.style.setProperty("--enter", "fadeFromBottom 1.6s ease both");
      }

      if (nextInner) {
        nextInner.setAttribute("data-animate", true);
        nextInner.style.setProperty("--enter", "fadeFromBottom 1.6s ease both");
      }
    };

    createSwiper(swiperElement, Swiper, {
      modules: [Pagination, EffectCoverflow],
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      spaceBetween: 150,
      loop: true,
      slidesPerView: 2,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 255,
        modifier: 2,
        slideShadows: false,
      },
      on: {
        init: (swiper) => {
          updateSlidesAnimation(swiper);
        },
        slideChange: (swiper) => {
          updateSlidesAnimation(swiper);
        },
      },
    });

    initFullscreenVenueSwiper({ Swiper, Navigation });
    initThumbsGallery({ Swiper, Navigation });
  } else {
    createSwiper(swiperElement, Swiper, {
      modules: [Pagination],
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
      },
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
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: "auto",
    loop: true,
    centeredSlides: false,
    allowTouchMove: false,
    on: {
      init: (swiper) => {
        updateSlideMargins(swiper);
      },
      slideChange: (swiper) => {
        updateSlideMargins(swiper);
      },
    },
  });
}

