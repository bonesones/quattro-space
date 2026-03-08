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
      `<div class="space-y-25 lg:space-y-0">${renderVenueFilter() + renderVenues() + renderServices() + renderKitchen() + renderOnlineEventDesigner() + renderVenueViewingForm() + renderAbout()}</div>`,
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
      const banner = document.querySelector("#section-0");

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
          const currentSection = sections[index];

          const animations = [
            ["animate-current-section-0", "animate-next-section-0"],
            ["animate-current-section-1", "animate-next-section-1"],
            ["animate-current-section-2", "animate-next-section-2"],
            ["animate-current-section-3", "animate-next-section-3"],
            ["animate-current-section-4", "animate-next-section-4"],
            ["animate-current-section-5", "animate-next-section-5"],
            ["animate-current-section-6", "animate-next-section-6"],
          ];

          const animation = animations[index];

          console.log("starting animations", animation);

          nextSection.classList.remove("lg:invisible");

          console.log("remoed invisible");

          if (index === 0) {
            console.log(index);
            banner.classList.add(animation[0]);
          }

          currentSection.classList.add(animation[0]);
          nextSection.classList.add(animation[1]);

          let finishedAnimations = 0;

          const handleAnimationEnd = () => {
            finishedAnimations++;

            if (finishedAnimations < 2) return;

            if (index === 1) {
              return;
            }

            currentSection.classList.add("lg:invisible");

            if (index !== 0) {
              currentSection.classList.remove(animation[0]);
            }

            setTimeout(() => {
              nextSection.classList.remove(animation[1]);
            }, 500);
          };

          currentSection.addEventListener("animationend", handleAnimationEnd, {
            once: true,
          });
          nextSection.addEventListener("animationend", handleAnimationEnd, {
            once: true,
          });
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
