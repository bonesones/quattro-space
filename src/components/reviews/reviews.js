import template from "./reviews.html?raw";

export function renderReviews() {
  return template.replace("{{year}}", String(new Date().getFullYear()));
}
