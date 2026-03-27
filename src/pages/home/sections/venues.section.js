import { initVenues } from "@/components/venues/venues.js";

export function initHomeVenuesSection({ venuesListContainer }) {
  if (venuesListContainer) initVenues(venuesListContainer);
}

