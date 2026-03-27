import { loadSwiper, createSwiper } from "@/shared/ui/slider/swiperController.js";
import { initFullscreenVenueSwiper } from "@/shared/ui/slider/fullscreenVenueSwiper/initFullscreenVenueSwiper.js";

export async function initCategorySwipers() {
  const { Swiper, modules } = await loadSwiper();
  const { Navigation } = modules;

  initFullscreenVenueSwiper({ Swiper, Navigation });
  initThumbsGallery({ Swiper, Navigation });
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

