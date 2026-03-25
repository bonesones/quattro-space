import { renderHomePage } from "./home.js";
import { renderShalePage } from "./venues/shale.js";
import { renderBusinessPage } from "./categories/business.js";
import { render404Page } from "./404.js";
import { renderKitchenPage } from "./kitchen.js";

export const PAGES = {
  home: {
    title: "Главная | Quattro Space",
    render: renderHomePage,

    get content() {
      return this.render();
    }
  },
  shale: {
    title: "Шале | Quattro Space",
    render: renderShalePage,
    get content() {
      return this.render();
    }
  },
  business: {
    title: "Бизнес | Quattro Space",
    render: renderBusinessPage,
    get content() {
      return this.render();
    }
  },
  404: {
    title: "404 | Quattro Space",
    render: render404Page,
    get content() {
      return this.render();
    }
  },
  kitchen: {
    title: "Кухня | Quattro Space",
    render: renderKitchenPage,
    get content() {
      return this.render();
    }
  }
};
