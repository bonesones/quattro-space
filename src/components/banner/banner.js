import { Autoplay, EffectFade } from "swiper/modules";
import { bannerTemplate } from "./banner.html.js";

export function renderBanner() {
  return bannerTemplate;
}

export const initBanner = async (root = document) => {
  const leftBlock = root.querySelector(".col-span-2 .absolute.inset-0.left-0");
  const atSpan = root.getElementById("at");
  const container = root.getElementById("banner-container");

  const mobileVideo = container?.querySelector(".mobile-video");
  const imageFallback = container?.querySelector(".mobile-fallback");

  if (mobileVideo) {
    mobileVideo.play().catch(() => {
      if (imageFallback) {
        mobileVideo.parentNode.replaceChild(imageFallback, mobileVideo);
      }
    });
  }

  if (leftBlock && atSpan) {
    const leftBlockWidth = leftBlock.offsetWidth;
    const atWidth = atSpan.offsetWidth;
    const moveDistance = -(leftBlockWidth - atWidth);

    atSpan.style.setProperty("--move-distance", moveDistance + "px");
  }

  if (typeof window !== "undefined") {
    try {
      const [
        { default: Swiper },
        { Pagination, Navigation, EffectFade, Autoplay },
      ] = await Promise.all([import("swiper"), import("swiper/modules")]);

      await import("swiper/css");
      await import("swiper/css/pagination");
      await import("swiper/css/navigation");
      await import("swiper/css/effect-fade");

      const bannerSwiper = root.querySelector(".banner-swiper");

      if (bannerSwiper) {
        if (bannerSwiper.swiper) {
          bannerSwiper.swiper.destroy(true, true);
        }

        const swiper = new Swiper(bannerSwiper, {
          modules: [Pagination, Navigation, EffectFade, Autoplay],
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".banner-pagination",
            clickable: true,
          },
          effect: "fade",
          fadeEffect: {
            crossFade: true,
          },
          speed: 1000,

          on: {
            init: function () {
              const paginationEl = document.querySelector(".banner-pagination");
              if (paginationEl) {
                paginationEl.addEventListener("click", (e) => {
                  e.stopPropagation();
                  e.preventDefault();
                });

                paginationEl.addEventListener("mousedown", (e) => {
                  e.stopPropagation();
                  e.preventDefault();
                });

                paginationEl.addEventListener("touchstart", (e) => {
                  e.stopPropagation();
                  e.preventDefault();
                });
              }

              const prevBtn = document.querySelector(".banner-prev");
              const nextBtn = document.querySelector(".banner-next");

              if (prevBtn) {
                prevBtn.addEventListener("click", (e) => {
                  e.stopPropagation();
                  e.preventDefault();
                });

                prevBtn.addEventListener("mousedown", (e) => {
                  e.stopPropagation();
                  e.preventDefault();
                });
              }

              if (nextBtn) {
                nextBtn.addEventListener("click", (e) => {
                  e.stopPropagation();
                  e.preventDefault();
                });

                nextBtn.addEventListener("mousedown", (e) => {
                  e.stopPropagation();
                  e.preventDefault();
                });
              }
            },

            touchStart: function () {
              if (window.fullpageScrollDisabled) return;
              window.fullpageScrollDisabled = true;
            },

            touchEnd: function () {
              setTimeout(() => {
                window.fullpageScrollDisabled = false;
              }, 100);
            },
          },
        });
      }
    } catch (error) {
      console.error("Failed to initialize banner swiper:", error);
    }
  }
};
