import { reviewsTemplate } from "./reviews.html.js";

export function renderReviews() {
  return reviewsTemplate.replace("{{year}}", String(new Date().getFullYear()));
}

function waitForImages(container) {
  if (!container) return Promise.resolve();

  const images = [...container.querySelectorAll("img")];

  if (!images.length) return Promise.resolve();

  return Promise.all(
    images.map(img => {
      if (img.complete) return Promise.resolve();

      return new Promise(resolve => {
        const onDone = () => {
          img.removeEventListener("load", onDone);
          img.removeEventListener("error", onDone);
          resolve();
        };

        img.addEventListener("load", onDone);
        img.addEventListener("error", onDone);
      });
    })
  )
    .then(
      () =>
        new Promise(resolve => {
          requestAnimationFrame(() => resolve());
        })
    )
    .then(
      () =>
        new Promise(resolve => {
          requestAnimationFrame(() => resolve());
        })
    );
}

export const initReviews = async () => {
  const row1Container = document.querySelector(".partners-swiper.row-1");
  const row2Container = document.querySelector(".partners-swiper.row-2");

  const isDesktop = window.innerWidth > 768;

  try {
    const [{ default: Marquee }] = await Promise.all([
      import("vanilla-marquee")
    ]);


    await Promise.all([
      waitForImages(row1Container),
      waitForImages(row2Container)
    ]);

    if (row1Container) {
      new Marquee(row1Container, {
        delayBeforeStart: 0,
        direction: "left",
        duplicated: true,
        startVisible: true,
        speed: isDesktop ? 130 : 50,
      });
    }

    if (row2Container) {
      new Marquee(row2Container, {
        delayBeforeStart: 0,
        direction: "left",
        speed: isDesktop ? 130 : 50,
        duplicated: true,
        startVisible: true,
      });
    }
  } catch (error) {
    console.error("Failed to initialize banner swiper:", error);
  }
};
