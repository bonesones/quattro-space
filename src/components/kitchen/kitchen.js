import { kitchenTemplate } from "./kitchen.html.js";

export function renderKitchen() {
  return kitchenTemplate;
}

const renderSlide = (slide, index) => {
  return `
    <div class="swiper-slide flex! flex-col items-center gap-2">
      <span class="text-subtitle-md text-accent-pink font-medium">0${index + 1}/</span>
      <span>${slide.title}</span>
      <img src="${slide.img}" class="w-full h-full rounded-main mt-4" alt="${slide.title}" />
    </div>
  `;
};

const renderFlexItem = (slide, index) => {
  return `
    <div class="flex flex-col items-center gap-2 w-45.5">
      <span class="text-subtitle-md text-accent-pink font-medium">0${index + 1}/</span>
      <span>${slide.title}</span>
      <img src="${slide.img}" class="w-full h-full rounded-main mt-4" alt="${slide.title}" />
    </div>
  `;
};

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
    swiperWrapper.innerHTML = mockSlides.map(renderSlide).join("");

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

  const flexContainer = container.querySelector("#kitchen-container");
  if (flexContainer) {
    flexContainer.innerHTML = mockSlides.map(renderFlexItem).join("");
  }

  const mobileLink = container.querySelector(".lg\\:hidden.bg-accent-pink");
  const desktopLink = container.querySelector(".hidden.lg\\:flex.gap-4");

  if (mobileLink) {
    mobileLink.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Mobile: Перейти в раздел");
    });
  }

  if (desktopLink) {
    desktopLink.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Desktop: Собрать меню онлайн");
    });
  }
};

export const mockSlides = [
  {
    img: "/images/swiper/knife.webp",
    title: "Подача «из под ножа»",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.",
  },
  {
    img: "/images/swiper/food.webp",
    title: "Свежие продукты",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.",
  },
  {
    img: "/images/swiper/knife.webp",
    title: "Фуршетное меню",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.",
  },
  {
    img: "/images/swiper/tray.webp",
    title: "Банкетное меню",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.",
  },
  {
    img: "/images/swiper/knife.webp",
    title: "Премиум сервис",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.",
  },
];
