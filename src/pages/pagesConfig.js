import { renderHomePage } from "./home.js";
import { renderShalePage } from "./venues/shale.js";

export const PAGES = {
  home: {
    title: "Главная | Quattro Space",
    render: renderHomePage,

    get content() {
      return this.render();
    },
  },
  shale: {
    title: "Шале | Quattro Space",
    render: renderShalePage,
    get content() {
      return this.render();
    },
  },
};
