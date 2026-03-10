import template from "./kitchen.html?raw";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export function renderKitchen() {
  return template;
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

export const initKitchen = (container) => {
  const swiperEl = container.querySelector(".kitchen-swiper .swiper-wrapper");

  if (swiperEl) {
    swiperEl.innerHTML = mockSlides.map(renderSlide).join("");

    new Swiper(".kitchen-swiper", {
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
  flexContainer.innerHTML = mockSlides.map(renderFlexItem).join("");
};

const mockSlides = [
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
