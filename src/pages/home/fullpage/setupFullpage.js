import { initFullPage } from "@/utils/fullpage.js";
import { applyHomeDesktopHeaderStyle } from "./headerBehavior.js";

export function setupHomeFullpage({ container, header }) {
  if (!container) return;

  initFullPage({
    container,
    onSectionChange: (_, nextIndex) => {
      applyHomeDesktopHeaderStyle(header, nextIndex);
    },
  });
}

