import "./style.css";
import { renderHeader } from "./components/header/header.js";
import { renderFooter } from "./components/footer/footer.js";
import { BaseLayout } from "./layouts/base.js";
import { renderBanner } from "./components/banner/banner.js";
import { initFullPage } from "./utils/fullpage.js";
import homeTemplate from "./pages/home.html?raw";
import aboutTemplate from "./pages/about.html?raw";
import servicesTemplate from "./pages/services.html?raw";
import contactsTemplate from "./pages/contacts.html?raw";
import {
  renderVenueFilter,
  initVenueFilter,
} from "./components/venues-filter/venues-filter.js";
import { renderVenues } from "./components/venues/venues.js";
import {
  renderServices,
  initServices,
} from "./components/services/services.js";
import { renderKitchen } from "./components/kitchen/kitchen.js";
import { renderOnlineEventDesigner } from "./components/online-event-designer/online-event-designer.js";
import { renderVenueViewingForm } from "./components/venue-viewing-form/venue-viewing-form.js";
import { renderAbout } from "./components/about-us/about-us.js";

const page = document.body.dataset.page || "home";

const PAGES = {
  home: {
    title: "Главная | Quattro Space",
    content:
      renderBanner() +
      renderVenueFilter() +
      renderVenues() +
      renderServices() +
      renderKitchen() +
      renderOnlineEventDesigner() +
      renderVenueViewingForm() +
      renderAbout(),
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
    const isDesktop = window.innerWidth > 1024;

    if (isDesktop) {
      initFullPage({
        onSectionChange: (prevIndex, nextIndex) => {
          const header = document.querySelector(".desktop-header");
          if (!header) return;

          if (nextIndex === 0) {
            header.classList.remove("bg-black", "pt-6", "px-main");
            header.classList.add("bg-transparent", "pt-12.5", "px-12");
          } else {
            header.classList.add("bg-black", "pt-6", "px-main");
            header.classList.remove("bg-transparent", "pt-12.5", "px-12");
          }
        },
      });
    }

    const servicesContainer = document.getElementById(
      "services-list-container",
    );

    if (servicesContainer) {
      initServices(servicesContainer);
    }

    initVenueFilter();
  }
});
