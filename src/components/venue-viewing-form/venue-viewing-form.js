import { venueViewingFormTemplate } from "./venue-viewing-form.html.js";
import IMask from "imask";

export function renderVenueViewingForm() {
  return venueViewingFormTemplate;
}

export function initVenueViewingForm(root = document) {
  if (typeof window === "undefined") return;

  const phoneInput = root.querySelector(".phone-input");
  if (phoneInput) {
    IMask(phoneInput, {
      mask: "+{7} (000) 000-00-00",
      lazy: false,
    });
  }

  const dateInput = root.querySelector("#contact-date");
  const dateDisplay = root.querySelector("#custom-date-display span");

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

  const fileInput = root.querySelector("#file");
  const fileLabel = root.querySelector("label[for='file'] span");

  if (fileInput && fileLabel) {
    fileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        fileLabel.textContent = e.target.files[0].name;
      } else {
        fileLabel.textContent = "Прикрепить файл";
      }
    });
  }

  const form = root.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      form.reset();
      if (dateDisplay) {
        dateDisplay.textContent = "ДД.ММ.ГГГГ";
      }
      if (fileLabel) {
        fileLabel.textContent = "Прикрепить файл";
      }
    });
  }
}
