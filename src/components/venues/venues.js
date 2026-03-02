import template from "./venues.html?raw";

export function renderVenues() {
  return template;
}

const renderVenue = (venue) => {
  return `
     <article class="max-lg:max-w-93.75 lg:w-lg xl:w-2xl">
            <img src="${venue.image}" class="w-full h-68.75 lg:h-105 xl:h-134.5 rounded-main" alt="${venue.name}" />
            <h3 class="text-titleMobile font-extrabold mt-4">${venue.name}</h3>
            <div class="text-accentPink flex justify-between">
                <a href="${venue.link}" class="flex text-lg">
                    подробнее

                    <svg class="h-7.5 w-10" aria-hidden="true">
                        <use href="/sprite.svg#arrowRight"></use>
                    </svg>
                </a>

                <span class="mt-2 text-xl font-medium">${venue.capacity}</span>
            </div>
        </article>
    `;
};

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("venues-list-container");

  if (container) {
    container.innerHTML = mockVenues.map(renderVenue).join("");
  }
});

const mockVenues = [
  {
    name: "Зал «Шале»",
    capacity: "до 400 чел",
    image: "/images/venues/shale_main.jpg",
    link: "#",
  },
  {
    name: "Зал «Мансарда»",
    capacity: "до 120 чел",
    image: "/images/venues/mansarda_main.jpg",
    link: "#",
  },
  {
    name: "Малый Конференц-зал",
    capacity: "до 150 чел",
    image: "/images/venues/small_conf_main.jpg",
    link: "#",
  },
  {
    name: "Конференц-зал",
    capacity: "до 250 чел",
    image: "/images/venues/conf_main.jpg",
    link: "#",
  },
  {
    name: "Зал «Компас»",
    capacity: "до 60 чел",
    image: "/images/venues/compas_main.png",
    link: "#",
  },
];
