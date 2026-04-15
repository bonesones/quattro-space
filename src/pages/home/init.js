import { getHomeNodes } from "./dom.js";
import { setupHomeFullpage } from "./fullpage/setupFullpage.js";

import { initHomeBannerSection } from "./sections/banner.section.js";
import { initHomeReviewsSection } from "./sections/reviews.section.js";
import { initHomeVenuesSection } from "./sections/venues.section.js";
import { initHomeKitchenSection } from "./sections/kitchen.section.js";
import { initHomeVenueViewingFormSection } from "./sections/venueViewingForm.section.js";
import { initHomeServicesSection } from "./sections/services.section.js";
import { initFormFilterSection } from "./sections/form-filter.section.js";

export function initHomePage() {
  if (typeof window === "undefined") return;

  const isDesktop = window.innerWidth > 1024;
  const nodes = getHomeNodes(document);

  if (isDesktop) {
    setupHomeFullpage({
      container: nodes.homeRoot,
      header: nodes.header
    });
  }

  initHomeBannerSection();
  initHomeReviewsSection();
  initHomeVenuesSection(nodes);
  initHomeKitchenSection(nodes);
  initHomeVenueViewingFormSection(nodes);
  initHomeServicesSection(nodes);
  initFormFilterSection();
}
