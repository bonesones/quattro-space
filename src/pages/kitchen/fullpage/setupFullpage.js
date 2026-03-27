import { initFullPage } from "@/utils/fullpage.js";

export function setupKitchenFullpage({ container, header, sliderTrigger }) {
  if (!container) return;

  initFullPage({
    container,
    onSectionChange: () => {
      if (!header) return;
      header.classList.add("lg:bg-black", "pt-6", "px-main");
      header.classList.remove("pt-12.5", "px-12");
    },
    beforeSectionChange: () => {
      if (sliderTrigger?.wasTriggered()) {
        sliderTrigger.reset();
        return false;
      }

      return true;
    },
  });
}

