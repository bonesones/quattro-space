import template from "./footer.html?raw";

export function renderFooter() {
  const year = new Date().getFullYear();
  return template.replace("{{year}}", String(year));
}

