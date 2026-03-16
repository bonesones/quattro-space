import { reviewsTemplate } from "./reviews.html.js";

export function renderReviews() {
  return reviewsTemplate.replace("{{year}}", String(new Date().getFullYear()));
}

export function initReviews(root = document) {
  if (typeof window === "undefined") return;

  console.log("Reviews component initialized");
}

export async function loadReviews() {
  if (typeof window === "undefined") return [];

  try {
    return [];
  } catch (error) {
    console.error("Failed to load reviews:", error);
    return [];
  }
}

export async function loadPartners() {
  if (typeof window === "undefined") return [];

  try {
    return [];
  } catch (error) {
    console.error("Failed to load partners:", error);
    return [];
  }
}
