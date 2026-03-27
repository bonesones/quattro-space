import IMask from "imask";

export function initVenueUI() {
  initTabs();
  initForm();
  initBackButton();
}

function initTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;

      buttons.forEach((b) => (b.dataset.active = "false"));
      btn.dataset.active = "true";

      contents.forEach((img) => {
        img.dataset.active = img.dataset.content === target ? "true" : "false";
      });
    });
  });
}

function initForm() {
  initPhoneMask();
  initDateMask();
  initFileInput();
}

function initPhoneMask() {
  const phoneInput = document.querySelector(".venue-phone-input");

  if (phoneInput) {
    IMask(phoneInput, {
      mask: "+{7} (000) 000-00-00",
      lazy: false,
      placeholderChar: "_",
    });
  }
}

function initDateMask() {
  const dateInput = document.querySelector("#contact-date");
  const dateDisplay = document.querySelector("#custom-date-display span");

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
}

function initFileInput() {
  const fileInput = document.getElementById("file");
  const fileNamesContainer = document.getElementById("file-names");

  if (!fileInput || !fileNamesContainer) return;

  fileInput.addEventListener("change", () => {
    const files = Array.from(fileInput.files);
    if (files.length === 0) {
      fileNamesContainer.textContent = "";
      return;
    }

    fileNamesContainer.innerHTML = files.map((file) => `<div>${file.name}</div>`).join("");
  });
}

function initBackButton() {
  const backButton = document.querySelector(".back-button");

  if (backButton) {
    backButton.addEventListener("click", () => {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = "/";
      }
    });
  }
}

