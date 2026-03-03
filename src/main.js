import "./style.css";
import { renderHeader } from "./components/header/header.js";
import { renderFooter } from "./components/footer/footer.js";
import { BaseLayout } from "./layouts/base.js";
import { renderBanner } from "./components/banner/banner.js";

import homeTemplate from "./pages/home.html?raw";
import aboutTemplate from "./pages/about.html?raw";
import servicesTemplate from "./pages/services.html?raw";
import contactsTemplate from "./pages/contacts.html?raw";
import { renderVenueFilter, initVenueFilter } from "./components/venues-filter/venues-filter.js";
import { renderVenues } from "./components/venues/venues.js";
import { renderServices, initServices } from "./components/services/services.js";
import { renderKitchen } from "./components/kitchen/kitchen.js";
import { renderOnlineEventDesigner } from "./components/online-event-designer/online-event-designer.js";

const page = document.body.dataset.page || "home";

const PAGES = {
  home: {
    title: "Главная | Quattro Space",
    content:
      renderBanner() +
      `<div class="space-y-25 lg:space-y-50">${renderVenueFilter() + renderVenues() + renderServices() + renderKitchen() + renderOnlineEventDesigner()}</div>`,
  },
  about: {
    title: "О компании | Quattro Space",
    content: aboutTemplate,
  },
  services: {
    title: "Услуги | Quattro Space",
    content: servicesTemplate,
  },
  contacts: {
    title: "Контакты | Quattro Space",
    content: contactsTemplate,
  },
};

const current = PAGES[page] || PAGES.home;

if (current.title) {
  document.title = current.title;
}

BaseLayout({
  header: renderHeader(),
  footer: renderFooter(),
  content: current.content,
});

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = document.body.dataset.page || "home";

  if (currentPage === "home") {
    if (window.scrollY === 0) {
      document.body.classList.add("overflow-y-hidden");

      setTimeout(() => {
        document.body.classList.remove("overflow-y-hidden");
      }, 1300);
    }
  }

  if (currentPage === "home") {
    const servicesContainer = document.getElementById("services-list-container");
    
    if (servicesContainer) {
      initServices(servicesContainer);
    }

    initVenueFilter();
  }
});
