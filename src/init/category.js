import { initFullPage } from "../utils/fullpage.js";

export const initCategoryPage = async () => {
  if (typeof window === "undefined") return;

  const isDesktop = window.innerWidth > 1024;
  const fullPageContainer = document.querySelector(".business");

  initTabs();
  initForm();
  initBackButton();

  if (isDesktop) {
    initFullPage({
      container: fullPageContainer,
      onSectionChange: (_, index) => {
        const header = document.querySelector(".desktop-header");
        if (!header) return;

        header.classList.add("lg:bg-black", "pt-6", "px-main");
        header.classList.remove("pt-12.5", "px-12");

        if (index == 0) {
          const title = fullPageContainer.querySelector("h1");
          const mainImage = fullPageContainer.querySelector(".main-image");
          const imageWrapper = fullPageContainer.querySelector(
            ".image-wrapper"
          );

          title?.classList.remove("category-title-animated");
          mainImage?.classList.remove("category-image-animated");
          imageWrapper?.classList.remove("category-image-wrapper-animated");
        }
      },
      beforeSectionChange: (currentIndex, nextIndex) => {
        const mainImages = Array.from(
          fullPageContainer.querySelectorAll(".main-image")
        );
        const imageWrapper = fullPageContainer.querySelector(".image-wrapper");
        const title = fullPageContainer.querySelector("h1");

        const isFirstSectionAnimated =
          mainImages.every(mainImage =>
            mainImage.classList.contains("category-image-animated")
          ) &&
          title?.classList.contains("category-title-animated") &&
          imageWrapper?.classList.contains("category-image-wrapper-animated");

        if (currentIndex === 0 && !isFirstSectionAnimated) {
          mainImages.forEach(mainImage =>
            mainImage.classList.add("category-image-animated")
          );

          title?.classList.add("category-title-animated");
          imageWrapper?.classList.add("category-image-wrapper-animated");

          return false;
        } else if (currentIndex === 0 && isFirstSectionAnimated) {
          title?.classList.remove("category-title-animated");
          mainImages.forEach(mainImage =>
            mainImage.classList.remove("category-image-animated")
          );
          imageWrapper?.classList.remove("category-image-wrapper-animated");
        }

        if (nextIndex === 0) {
          title?.classList.remove("category-title-animated");
          mainImages.forEach(mainImage =>
            mainImage.classList.remove("category-image-animated")
          );
          imageWrapper?.classList.remove("category-image-wrapper-animated");
        }

        return true;
      }
    });

    try {
      const [{ default: Swiper }, { Navigation }] = await Promise.all([
        import("swiper"),
        import("swiper/modules")
      ]);

      await import("swiper/css");
      initFullPageSwiper(Swiper, Navigation);
      initSwiperGallery(Swiper, Navigation);
    } catch (error) {
      console.error("Failed to initialize Swiper:", error);
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
