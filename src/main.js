import "./style.css";
import { renderHeader } from "./components/header/header.js";
import { renderFooter } from "./components/footer/footer.js";
import { BaseLayout } from "./layouts/base.js";
import { renderBanner } from "./components/banner/banner.js";

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
      `<div class="space-y-25 lg:space-y-50">${renderVenueFilter() + renderVenues() + renderServices() + renderKitchen() + renderOnlineEventDesigner() + renderVenueViewingForm() + renderAbout()}</div>`,
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
    const sections = document.querySelectorAll("section");
    const isDesktop = window.innerWidth > 1024;

    if (isDesktop) {
      const header = document.querySelector(".desktop-header");
      const bannerSection = document.querySelector("#section-0");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.3 },
      );

      sections.forEach((sec) => {
        observer.observe(sec);
      });

      if (header && bannerSection) {
        const headerObserver = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              header.classList.remove("bg-black", "pt-6", "px-main");
              header.classList.add("bg-transparent", "pt-12.5", "px-12");
            } else {
              header.classList.add("bg-black", "pt-6", "px-main");
              header.classList.remove("bg-transparent", "pt-12.5", "px-12");
            }
          },
          { threshold: 0.1 },
        );
        headerObserver.observe(bannerSection);
      }

      let currentIndex = 0;
      sections[currentIndex].classList.add("visible");

      sections.forEach((section, index) => {
        section.addEventListener("click", (e) => {
          if (e.target.closest("button, a, input, textarea, select, label"))
            return;

          if (index === sections.length - 1) return;

          const nextSection = sections[index + 1];

          if (index === 0) {
            slowScrollTo(nextSection, 1000);
          } else {
            nextSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }

          const animations = [
            "animate-section-1",
            "animate-section-2",
            "animate-section-3",
            "animate-section-4",
          ];

          const animation = animations[index];
          nextSection.classList.add(animation);
          setTimeout(() => nextSection.classList.remove(animation), 700);
        });
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

function slowScrollTo(element, duration = 2500) {
  const start = window.scrollY;
  const end = element.getBoundingClientRect().top + window.scrollY;
  const distance = end - start;
  const startTime = performance.now();

  function step(time) {
    const progress = Math.min((time - startTime) / duration, 1);

    window.scrollTo(0, start + distance * progress);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
