import { venueViewingFormTemplate } from "./venue-viewing-form.html.js";
import IMask from "imask";

export function renderVenueViewingForm() {
  return venueViewingFormTemplate;
}

export function initVenueViewingForm(root = document) {
  if (typeof window === "undefined") return;

  const forms = Array.from(root.querySelectorAll("form")).filter(
    (form) =>
      form.querySelector(".phone-input") ||
      form.querySelector('input[name="contact-date"]') ||
      form.querySelector('input[type="file"]')
  );

  forms.forEach((form) => {
    if (form.dataset.venueViewingInitialized === "true") return;

    const phoneInput = form.querySelector(".phone-input");
    if (phoneInput) {
      IMask(phoneInput, {
        mask: "+{7} (000) 000-00-00",
        lazy: false,
      });
    }

    const dateInput = form.querySelector('input[name="contact-date"], #contact-date');
    const dateDisplay = form.querySelector("#custom-date-display span");

    if (dateInput && dateDisplay) {
      dateInput.addEventListener("change", (e) => {
        if (e.target.value) {
          const [year, month, day] = e.target.value.split("-");
          dateDisplay.textContent = `${day}.${month}.${year}`;
        } else {
          dateDisplay.textContent = "ДД.ММ.ГГГГ";
        }
      });
    }

    const fileInput = form.querySelector('input[type="file"], #file');
    const fileNamesContainer = form.querySelector("#file-names");

    if (fileInput && fileNamesContainer) {
      fileInput.addEventListener("change", () => {
        const files = Array.from(fileInput.files);
        if (files.length === 0) {
          fileNamesContainer.textContent = "";
          return;
        }

        fileNamesContainer.innerHTML = files
          .map((file) => `<div>${file.name}</div>`)
          .join("");
      });
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      form.reset();
      if (dateDisplay) {
        dateDisplay.textContent = "ДД.ММ.ГГГГ";
      }
      if (fileNamesContainer) {
        fileNamesContainer.textContent = "";
      }
    });

    form.dataset.venueViewingInitialized = "true";
  });
}
