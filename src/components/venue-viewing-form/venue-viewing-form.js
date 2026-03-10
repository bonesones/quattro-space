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
      span.classList.remove("text-gray-400");
    } else {
      span.textContent = "ДД.ММ.ГГГГ";
      span.classList.add("text-gray-400");
    }
  });
}
