import { initVenueViewingForm } from "@/components/venue-viewing-form/venue-viewing-form.js";

export function initHomeVenueViewingFormSection({ contactDateInput, customDateDisplay }) {
  if (contactDateInput && customDateDisplay) {
    initVenueViewingForm(contactDateInput, customDateDisplay);
  }
}

