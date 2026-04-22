import "./style.css";
import { initHeader, renderHeader } from "./components/header/header.js";
import { initFooter, renderFooter } from "./components/footer/footer.js";

import { BaseLayout } from "./layouts/base.js";

import { PAGES } from "./pages/pagesConfig.js";
import { initHomePage } from "./init/home.js";
import { initVenuePage } from "./init/venue.js";
import { initCategoryPage } from "./init/category.js";
import { init404Page } from "./init/404.js";
import { initKitchenPage } from "./init/kitchen.js";
import { initBlogsPage } from "./init/blogs.js";
import { initBlogPage } from "./init/blog.js";
import { initVenueViewingForm } from "./components/venue-viewing-form/venue-viewing-form.js";
import { initCookieBanner } from "./components/cookie-banner/cookie-banner.js";

const page = document.body.dataset.page || "home";

const current = PAGES[page] || PAGES.home;

const content = current.content;

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
  else if (currentPage === "404") init404Page();
  else if (currentPage === "kitchen") initKitchenPage();
  else if (currentPage === "blogs") initBlogsPage();
  else if (currentPage === "blog") initBlogPage();

  initVenueViewingForm(document);
  initCookieBanner();
});
