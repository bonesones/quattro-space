import { venuesTemplate } from "./venues.html.js";
import IMask from "imask";

export function renderVenues() {
  return venuesTemplate;
}

export const initVenues = (container) => {
  const phoneInput = container.querySelector(".phone-input");

  if (phoneInput && IMask) {
    IMask(phoneInput, {
      mask: "+{7} (000) 000-00-00",
      lazy: false,
    });
  }
};
