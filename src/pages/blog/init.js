import { initVenueViewingForm } from "@/components/venue-viewing-form/venue-viewing-form.js";
import { initBlogSwipers } from "./sections/swipers.section.js";

export function initBlogPage() {
  if (typeof window === "undefined") return;
  initVenueViewingForm(document);
  initBlogSwipers();
}

