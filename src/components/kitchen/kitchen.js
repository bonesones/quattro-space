import { kitchenTemplate } from "./kitchen.html.js";

export function renderKitchen() {
  return kitchenTemplate;
}

export const initKitchen = async (container) => {
  if (typeof window === "undefined") return;

  if (!container) return;

  const [{ default: Swiper }, { Pagination }] = await Promise.all([
    import("swiper"),
    import("swiper/modules"),
  ]);

  await import("swiper/css");
  await import("swiper/css/pagination");

  const swiperWrapper = container.querySelector(
    ".kitchen-swiper .swiper-wrapper",
  );
  const swiperElement = container.querySelector(".kitchen-swiper");

  if (swiperWrapper && swiperElement) {
    if (swiperElement.swiper) {
      swiperElement.swiper.destroy(true, true);
    }

    new Swiper(swiperElement, {
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
};
