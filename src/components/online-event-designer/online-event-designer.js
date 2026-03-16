import { onlineEventDesignerTemplate } from "./online-event-designer.html.js";

export function renderOnlineEventDesigner() {
  return onlineEventDesignerTemplate;
}

export function initOnlineEventDesigner(root = document) {
  if (typeof window === "undefined") return;

  const button = root.querySelector("#section-6 a");

  if (button) {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      console.log("Оставить заявку clicked");

      const formSection = root.getElementById("section-7");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}
