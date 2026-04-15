import {
  loadSwiper,
  createSwiper
} from "@/shared/ui/slider/swiperController.js";

export async function initBlogSwipers() {
  const swiperElement = document.querySelector(".blogs-swiper");
  if (!swiperElement) return;

  const swiperWrapper = swiperElement.querySelector(".swiper-wrapper");
  if (!swiperWrapper) return;

  const paginationEl = swiperElement.parentElement?.querySelector(
    ".blogs-swiper-pagination"
  );

  const { Swiper, modules } = await loadSwiper([
    () => import("swiper/css/pagination")
  ]);
  const { Pagination } = modules;

  createSwiper(swiperElement, Swiper, {
    modules: [Pagination],
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 16,
    pagination: {
      el: paginationEl,
      type: "bullets",
      renderBullet: function(index, className) {
        return (
          '<span class="' +
          className +
          ' bg-accent-pink! rounded-lg! w-6! h-2!">' +
          "</span>"
        );
      }
    }
  });
}
