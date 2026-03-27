import { getKitchenNodes } from "./dom.js";
import { setupKitchenFullpage } from "./fullpage/setupFullpage.js";
import { initKitchenUI } from "./sections/ui.section.js";
import { initKitchenPageSwipers } from "./sections/swipers.section.js";
import { initReviews } from "@/components/reviews/reviews.js";

function createSliderTrigger() {
  let sliderTriggered = false;
  return {
    markTriggered() {
      sliderTriggered = true;
    },
    wasTriggered() {
      return sliderTriggered;
    },
    reset() {
      sliderTriggered = false;
    },
  };
}

export const initKitchenPage = async () => {
  if (typeof window === "undefined") return;

  const isDesktop = window.innerWidth > 1024;
  const nodes = getKitchenNodes(document);

  initKitchenUI();

  const sliderTrigger = createSliderTrigger();

  if (isDesktop && nodes.kitchenPageSwiper) {
    nodes.kitchenPageSwiper.addEventListener("click", () => {
      sliderTrigger.markTriggered();
    });

    setupKitchenFullpage({
      container: nodes.pageRoot,
      header: nodes.desktopHeader,
      sliderTrigger,
    });
  }

  await initKitchenPageSwipers({ isDesktop });

  initReviews();
};

