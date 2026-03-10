import "./style.css";
import { initHeader, renderHeader } from "./components/header/header.js";
import { initFooter, renderFooter } from "./components/footer/footer.js";

import { BaseLayout } from "./layouts/base.js";

import { PAGES } from "./pages/pagesConfig.js";
import { initHomePage } from "./init/home.js";

const page = document.body.dataset.page || "home";

const current = PAGES[page] || PAGES.home;

if (current.title) {
  document.title = current.title;
}

BaseLayout({
  header: renderHeader(),
  footer: renderFooter(),
  content: current.content,
  initFns: [initHeader, initFooter],
});

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = document.body.dataset.page || "home";

  if (currentPage === "home") initHomePage();
});
