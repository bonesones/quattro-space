import { createSwiper } from "../swiperController.js";

export function initFullscreenVenueSwiper({ Swiper, Navigation, selectors } = {}) {
  const wrapperSelector = selectors?.wrapper ?? ".fullscreen-venue-swiper";
  const swiperSelector = selectors?.swiper ?? ".gallery-fullpage-swiper";
  const thumbnailsSelector = selectors?.thumbnails ?? ".thumbnails img";
  const closeSelector = selectors?.close ?? ".close-swiper";
  const nextElSelector = selectors?.nextEl ?? ".swiper-button-next";
  const prevElSelector = selectors?.prevEl ?? ".swiper-button-prev";

  const gallerySwiperWrapper = document.querySelector(wrapperSelector);
  if (!gallerySwiperWrapper) return;

  const gallerySwiper = gallerySwiperWrapper.querySelector(swiperSelector);
  const thumbnails = document.querySelectorAll(thumbnailsSelector);
  const closeBtn = document.querySelector(closeSelector);
  let backgroundSwiper = null;

  if (!gallerySwiper || !closeBtn) return;

  const swiper = createSwiper(gallerySwiper, Swiper, {
    modules: [Navigation],
    loop: true,
    navigation: {
      nextEl: nextElSelector,
      prevEl: prevElSelector,
    },
  });

  thumbnails.forEach((img, index) => {
    img.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const clickedImage = e.currentTarget;
      const sourceSwiperElement = clickedImage?.closest(".venue-swiper");
      backgroundSwiper = sourceSwiperElement?.swiper ?? null;
      backgroundSwiper?.autoplay?.stop?.();

      document.body.classList.add("overflow-hidden");
      gallerySwiperWrapper.classList.remove("hidden");

      const targetImage = clickedImage;
      const imageIndex = Number(
        targetImage?.getAttribute("data-fullscreen-index") ?? index
      );

      swiper?.slideToLoop(imageIndex, 0);
    });
  });

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    backgroundSwiper?.autoplay?.start?.();
    backgroundSwiper = null;

    document.body.classList.remove("overflow-hidden");
    gallerySwiperWrapper.classList.add("hidden");
  });
}

