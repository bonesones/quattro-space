import { renderBanner } from "../components/banner/banner.js";
import { renderVenueFilter } from "../components/venues-filter/venues-filter.js";
import { renderVenues } from "../components/venues/venues.js";
import { renderServices } from "../components/services/services.js";
import { renderKitchen } from "../components/kitchen/kitchen.js";
import { renderOnlineEventDesigner } from "../components/online-event-designer/online-event-designer.js";
import { renderVenueViewingForm } from "../components/venue-viewing-form/venue-viewing-form.js";
import { renderAbout } from "../components/about-us/about-us.js";
import { renderReviews } from "../components/reviews/reviews.js";

export function renderHomePage() {
  return (
    renderBanner() +
    renderVenueFilter() +
    renderVenues() +
    renderServices() +
    renderKitchen() +
    renderOnlineEventDesigner() +
    renderVenueViewingForm() +
    renderAbout() +
    renderReviews()
  );
}
