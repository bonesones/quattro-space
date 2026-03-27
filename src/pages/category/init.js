import { getCategoryNodes } from "./dom.js";
import { setupCategoryFullpage } from "./fullpage/setupFullpage.js";
import { initCategoryUI } from "./sections/ui.section.js";
import { initCategorySwipers } from "./sections/swipers.section.js";
import { initReviews } from "@/components/reviews/reviews.js";

export const initCategoryPage = async () => {
  if (typeof window === "undefined") return;

  const isDesktop = window.innerWidth > 1024;
  const nodes = getCategoryNodes(document);

  initCategoryUI();

  if (isDesktop) {
    setupCategoryFullpage({
      container: nodes.pageRoot,
      header: nodes.desktopHeader,
    });

    try {
      await initCategorySwipers();
    } catch (error) {
      console.error("Failed to initialize Swiper:", error);
    }
  }

  initReviews();
};

