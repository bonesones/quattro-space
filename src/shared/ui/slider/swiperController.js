let swiperLibPromise;
let swiperCssPromise;

async function ensureSwiperCss() {
  if (!swiperCssPromise) {
    swiperCssPromise = Promise.resolve()
      .then(() => import("swiper/css"))
      .catch((e) => {
        swiperCssPromise = undefined;
        throw e;
      });
  }

  return swiperCssPromise;
}

export async function loadSwiper(extraCssImports = []) {
  if (!swiperLibPromise) {
    swiperLibPromise = Promise.all([import("swiper"), import("swiper/modules")])
      .then(([swiper, modules]) => ({
        Swiper: swiper.default,
        modules,
      }))
      .catch((e) => {
        swiperLibPromise = undefined;
        throw e;
      });
  }

  await ensureSwiperCss();
  if (extraCssImports.length) {
    await Promise.all(extraCssImports.map((fn) => fn()));
  }

  return swiperLibPromise;
}

export function destroySwiperIfExists(swiperElement) {
  if (!swiperElement) return;
  if (swiperElement.swiper) {
    swiperElement.swiper.destroy(true, true);
  }
}

export function createSwiper(swiperElement, Swiper, options) {
  if (!swiperElement) return null;
  destroySwiperIfExists(swiperElement);
  return new Swiper(swiperElement, options);
}

