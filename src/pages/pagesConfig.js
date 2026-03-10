import aboutTemplate from "./about.html?raw";
import servicesTemplate from "./services.html?raw";
import contactsTemplate from "./contacts.html?raw";
import { renderHomePage } from "./home";

export const PAGES = {
  home: { title: "Главная | Quattro Space", content: renderHomePage() },
  about: { title: "О компании | Quattro Space", content: aboutTemplate },
  services: { title: "Услуги | Quattro Space", content: servicesTemplate },
  contacts: { title: "Контакты | Quattro Space", content: contactsTemplate },
};
