import template from "./venue-viewing-form.html?raw";

export function renderVenueViewingForm() {
  return template;
}

export function initVenueViewingForm(nativeInput, display) {
  nativeInput.addEventListener("change", () => {
    const date = nativeInput.value;
    const span = display.querySelector("span");
    if (date) {
      const [year, month, day] = date.split("-");
      span.textContent = `${day}.${month}.${year}`;
    } else {
      span.textContent = "ДД.ММ.ГГГГ";
    }
  });
}
