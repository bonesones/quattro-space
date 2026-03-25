import { initFullPage } from "../utils/fullpage.js";

export const initKitchenPage = async () => {
  if (typeof window === "undefined") return;

  const isDesktop = window.innerWidth > 1024;

  const container = document.querySelector(".kitchen");

  initTabs();
  initForm();
  initBackButton();
  initMenuAnimation();

  if (isDesktop) {
    const kitchenSwiper = document.querySelector(".kitchen-page-swiper");

    let sliderTriggered = false;

    kitchenSwiper.addEventListener("click", () => {
      sliderTriggered = true;
    });

    initFullPage({
      container: container,
      onSectionChange: (_, nextIndex) => {
        const header = document.querySelector(".desktop-header");
        if (!header) return;

        header.classList.add("lg:bg-black", "pt-6", "px-main");
        header.classList.remove("pt-12.5", "px-12");
      },
      beforeSectionChange: () => {
        if (sliderTriggered) {
          sliderTriggered = false;
          return false;
        }

        return true;
      }
    });
  }

  const [
    { default: Swiper },
    { Pagination, EffectCoverflow, Navigation }
  ] = await Promise.all([import("swiper"), import("swiper/modules")]);

  await import("swiper/css");
  await import("swiper/css/pagination");
  await import("swiper/css/effect-coverflow");

  const swiperWrapper = document.querySelector(
    ".kitchen-page-swiper .swiper-wrapper"
  );
  const swiperElement = document.querySelector(".kitchen-page-swiper");

  if (swiperWrapper && swiperElement) {
    if (swiperElement.swiper) {
      swiperElement.swiper.destroy(true, true);
    }

    if (isDesktop) {
      const updateSlidesAnimation = swiper => {
        const slides = swiper.slides;

        slides.forEach(slide => {
          slide.removeAttribute("data-animate");
        });

        const prev = swiper.el.querySelector(".swiper-slide-prev");
        const next = swiper.el.querySelector(".swiper-slide-next");

        const prevInner = prev?.querySelector(".slider-inner");
        const nextInner = next?.querySelector(".slider-inner");

        if (prevInner) {
          prevInner.setAttribute("data-animate", true);
          prevInner.style.setProperty(
            "--enter",
            "fadeFromBottom 1.6s ease both"
          );
        }

        if (nextInner) {
          nextInner.setAttribute("data-animate", true);
          nextInner.style.setProperty(
            "--enter",
            "fadeFromBottom 1.6s ease both"
          );
        }
      };

      new Swiper(swiperElement, {
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
          slideShadows: false
        },
        on: {
          init: swiper => {
            updateSlidesAnimation(swiper);
          },
          slideChange: swiper => {
            updateSlidesAnimation(swiper);
          }
        }
      });

      initFullPageSwiper(Swiper, Navigation);
      initSwiperGallery(Swiper, Navigation);
    } else {
      new Swiper(swiperElement, {
        modules: [Pagination],
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        }
      });
    }
  }
};

const initFullPageSwiper = (Swiper, Navigation) => {
  const gallerySwiperWrapper = document.querySelector(
    "#fullscreen-venue-swiper"
  );

  const gallerySwiper = gallerySwiperWrapper.querySelector(
    ".gallery-fullpage-swiper"
  );
  const thumbnails = document.querySelectorAll(".thumbnails img");
  const closeBtn = document.getElementById("close-swiper");

  if (gallerySwiper) {
    if (gallerySwiper.swiper) {
      gallerySwiper.swiper.destroy(true, true);
    }

    const swiper = new Swiper(gallerySwiper, {
      modules: [Navigation],
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    thumbnails.forEach((img, index) => {
      img.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();

        document.body.classList.add("overflow-hidden");

        gallerySwiperWrapper.classList.remove("hidden");
        swiper.slideToLoop(index, 0);
      });
    });

    closeBtn.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();

      document.body.classList.remove("overflow-hidden");

      gallerySwiperWrapper.classList.add("hidden");
    });
  }
};

const updateSlideMargins = swiper => {
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
};

const initSwiperGallery = (Swiper, Navigation) => {
  const swiper = document.querySelector(".swiper-gallery-thumbs");

  if (!swiper) return;
  if (swiper.swiper) swiper.swiper.destroy(true, true);

  new Swiper(swiper, {
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
};

const initTabs = () => {
  const buttons = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;

      buttons.forEach(b => (b.dataset.active = "false"));
      btn.dataset.active = "true";

      contents.forEach(img => {
        img.dataset.active = img.dataset.content === target ? "true" : "false";
      });
    });
  });
};

const initForm = () => {
  initPhoneMask();
  initDateMask();
  initFileInput();
};

const initPhoneMask = () => {
  const phoneInput = document.querySelector(".venue-phone-input");

  if (phoneInput) {
    IMask(phoneInput, {
      mask: "+{7} (000) 000-00-00",
      lazy: false,
      placeholderChar: "_"
    });
  }
};

const initDateMask = () => {
  const dateInput = document.querySelector("#contact-date");
  const dateDisplay = document.querySelector("#custom-date-display span");

  if (dateInput && dateDisplay) {
    dateInput.addEventListener("change", e => {
      if (e.target.value) {
        const [year, month, day] = e.target.value.split("-");
        dateDisplay.textContent = `${day}.${month}.${year}`;
      } else {
        dateDisplay.textContent = "ДД.ММ.ГГГГ";
      }
    });
  }
};

const initFileInput = () => {
  const fileInput = document.getElementById("file");
  const fileNamesContainer = document.getElementById("file-names");

  fileInput.addEventListener("change", () => {
    const files = Array.from(fileInput.files);
    if (files.length === 0) {
      fileNamesContainer.textContent = "";
      return;
    }

    fileNamesContainer.innerHTML = files
      .map(file => `<div>${file.name}</div>`)
      .join("");
  });
};

const initBackButton = () => {
  const backButton = document.querySelector(".back-button");

  if (backButton) {
    backButton.addEventListener("click", () => {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = "/";
      }
    });
  }
};

const initMenuAnimation = () => {
  const kitchenItems = document.querySelectorAll(".mt-6 .grid > div");
  const itemsPerRow = 4;

  kitchenItems.forEach((item, index) => {
    const rowNumber = Math.floor(index / itemsPerRow) + 1;
    const isEvenRow = rowNumber % 2 === 0;

    item.setAttribute("data-animate", true);
    item.style.setProperty(
      "--leave",
      isEvenRow ? "fadeToLeft 1.6s ease both" : "fadeToRight 1.6s ease both"
    );
  });
};
