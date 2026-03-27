import { venues } from "@/data/venues.js";
import { VenueLayout } from "@/layouts/venue.js";

export const renderShalePage = () => {
    const venue = venues.find(venue => venue.id === "shale");
    return VenueLayout(venue);
}