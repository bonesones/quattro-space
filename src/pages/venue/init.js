import { getVenueNodes } from "./dom.js";
import { setupVenueFullpage } from "./fullpage/setupFullpage.js";
import { initVenueSwipers } from "./sections/swipers.section.js";
import { initVenueUI } from "./sections/ui.section.js";
import { initReviews } from "@/components/reviews/reviews.js";

export const initVenuePage = async () => {
  if (typeof window === "undefined") return;

  const isDesktop = window.innerWidth > 1024;
  const nodes = getVenueNodes(document);

  initVenueUI();

  if (isDesktop) {
    setupVenueFullpage({
      container: nodes.pageRoot,
      header: nodes.desktopHeader
    });
  }

  initReviews();
  initVenueSwipers({ isDesktop });
};
