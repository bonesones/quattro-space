import template from "./venue-viewing-form.html?raw";

export function renderVenueViewingForm() {
  return template;
}

document.addEventListener("DOMContentLoaded", () => {
  const nativeInput = document.getElementById("contact-date");
  const display = document.getElementById("custom-date-display");

  display.addEventListener("click", () => {
    nativeInput.showPicker?.();
    nativeInput.click();
  });

  nativeInput.addEventListener("change", () => {
    const date = nativeInput.value;
    if (date) {
      const [year, month, day] = date.split("-");
      display.querySelector("span").textContent = `${day}.${month}.${year}`;
    } else {
      display.querySelector("span").textContent = "ДД.ММ.ГГГГ";
    }
  });
});
