import { initFullPage } from "../utils/fullpage.js";
import { initServices } from "../components/services/services.js";
import { initVenues } from "../components/venues/venues.js";
import { initKitchen } from "../components/kitchen/kitchen.js";
import { initVenueViewingForm } from "../components/venue-viewing-form/venue-viewing-form.js";
import { initBanner } from "../components/banner/banner.js";

export function initHomePage() {
  const isDesktop = window.innerWidth > 1024;
  const fullPageContainer = document.querySelector(".home");

  if (isDesktop) {
    initFullPage({
      container: fullPageContainer,
      onSectionChange: (_, nextIndex) => {
        const header = document.querySelector(".desktop-header");
        if (!header) return;

        if (nextIndex === 0 || nextIndex === 1) {
          header.classList.remove("lg:bg-black", "pt-6", "px-main");
          header.classList.add("pt-12.5", "px-12");
        } else {
          header.classList.add("lg:bg-black", "pt-6", "px-main");
          header.classList.remove("pt-12.5", "px-12");
        }
      },
    });
  }

  initBanner();

  const venuesContainer = document.getElementById("venues-list-container");
  if (venuesContainer) initVenues(venuesContainer);

  const kitchenContainer = document.getElementById("kitchen-container");
  if (kitchenContainer) initKitchen(kitchenContainer);

  const venueFormContainer = document.getElementById("contact-date");
  const venueFormDisplay = document.getElementById("custom-date-display");

  if (venueFormContainer && venueFormDisplay) {
    initVenueViewingForm(venueFormContainer, venueFormDisplay);
  }

  const servicesContainer = document.getElementById("services-list-container");

  if (servicesContainer) initServices(servicesContainer);
}
