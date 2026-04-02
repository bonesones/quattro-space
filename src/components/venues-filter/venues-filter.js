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
        const baseUrl = actionUrl.split("#")[0];
        const params = new URLSearchParams(formData);
        const urlWithParams = baseUrl + "?" + params.toString();

        const response = await fetch(urlWithParams, {
          method: "GET",
          headers: {
            "X-Requested-With": "XMLHttpRequest"
          }
        });

        if (response.ok) {
          const html = await response.text();

          const resultsContainer = document.querySelector(
            "#venues-list-container"
          );

          if (resultsContainer) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const newResults = doc.querySelector("#venues-list-container");

            if (newResults) {
              resultsContainer.innerHTML = newResults.innerHTML;
            }
          }

          if (anchor) {
            window.location.hash = anchor;
          }
        }
      } catch (error) {
        console.error("Ошибка: ", error);
      }
    });
  }
};
