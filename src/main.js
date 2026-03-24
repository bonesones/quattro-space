import "./style.css";
import { initHeader, renderHeader } from "./components/header/header.js";
import { initFooter, renderFooter } from "./components/footer/footer.js";

import { BaseLayout } from "./layouts/base.js";

import { PAGES } from "./pages/pagesConfig.js";
import { initHomePage } from "./init/home.js";
import { initVenuePage } from "./init/venue.js";
import { initCategoryPage } from "./init/category.js";

const page = document.body.dataset.page || "home";

const current = PAGES[page] || PAGES.home;

const content = current.content;

if (current.title) {
  document.title = current.title;
}

BaseLayout({
  header: renderHeader(),
  footer: renderFooter(),
  content: content,
  initFns: [initHeader, initFooter]
});

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = document.body.dataset.page || "home";

  if (currentPage === "home") initHomePage();
  else if (currentPage === "shale") initVenuePage();
  else if (currentPage === "business") initCategoryPage();
});
