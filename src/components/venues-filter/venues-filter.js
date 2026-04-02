import { venueFilterTemplate } from "./venues-filter.html.js";

export function renderVenueFilter() {
  return venueFilterTemplate;
}

export const initVenueFilter = async () => {
  const form = document.querySelector(".venue-filter-form");

  if (form) {
    form.addEventListener("submit", async function(e) {
      e.preventDefault();

      const actionUrl = this.action;
      const formData = new FormData(this);

      try {
        const urlObj = new URL(actionUrl);
        const anchor = urlObj.hash;
        const params = new URLSearchParams(formData);
        const baseUrl = actionUrl.split("#")[0];
        const urlWithParams = baseUrl + "?" + params.toString();

        await fetch(urlWithParams, { method: "GET" });

        if (anchor) {
          window.location.hash = anchor;
        }
      } catch (error) {
        console.error("Ошибка: ", error);
      }
    });
  }
};
