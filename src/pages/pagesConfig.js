import { renderHomePage } from "./home";
import { renderShalePage } from "./venues/shale";

export const PAGES = {
  home: { title: "Главная | Quattro Space", content: renderHomePage() },
  shale: { title: "Шале | Quattro Space", content: renderShalePage() }
};
