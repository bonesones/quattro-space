import template from "./venues.html?raw";
import IMask from "imask";

export function renderVenues() {
  return template;
}

const renderForm = () => {
  return `
    <article class="hidden lg:block">
      <svg class="w-36 h-32 ml-auto">
          <use href="/sprite.svg#big-arrow"></use>
      </svg>

      <div class="space-y-4 mt-10">
        <h3 class="text-subtitle-lg-sm font-extrabold uppercase">5 элегантных залов на ваш выбор</h3>
        <p class="text-body-lg">Вы можете реализовать события любого масштаба для частных клиентов и крупных компаний благодаря адаптивности площадок для проведения мероприятий <span class="text-accent-pink">Quattro Space.</span></p>
      </div>

      <form method="post" action="#" aria-label="Форма записи на просмотр" class="mt-22 grid grid-cols-2 gap-x-6 gap-y-4">
        <input type="text" id="name" name="name" class="px-4 py-4.5 bg-gray rounded-main outline-none placeholder-black" placeholder="Имя" required> 
        <input type="tel" id="phone" name="phone" class="phone-input px-4 py-4.5 bg-gray rounded-main outline-none placeholder-black" placeholder="Телефон" required> 

        <label class="flex items-center gap-2 cursor-pointer select-none text-xs self-start">
          <input type="checkbox" class="peer hidden" required />

          <div class="w-6.5 h-6.5 shrink-0 border-2 border-accent-pink resize-none rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
              <svg class="w-4 h-3 hidden fill-current text-accent-pink">
                  <use href="/sprite.svg#check"></use>
              </svg>
          </div>

          Нажимая на кнопку, вы соглашаетесь на обработку персональных данных
        </label>

        <button 
          type="submit" 
          class="bg-accent-pink text-white text-body-base py-4 rounded-main hover:bg-pink-600 focus:outline-none uppercase cursor-pointer"
        >
          Записаться на просмотр
        </button>
      </form>
    </article>
  `;
};

const renderVenue = (venue) => {
  return `
    <article class="w-full max-md:max-w-86.25 lg:max-w-lg xl:max-w-2xl flex flex-col h-full">
      <div class="w-full aspect-345/276 lg:aspect-627/538 overflow-hidden rounded-main">
        <img src="${venue.image}" class="w-full h-full object-cover" alt="${venue.name}" />
      </div>

      <div class="grid grid-cols-4 mt-main lg:mt-10 lg:px-main flex-1">
        <h3 class="text-subtitle-lg-sm font-extrabold col-span-4 xl:col-span-3">${venue.name}</h3>

        <span class="hidden xl:inline col-span-1 self-center text-2xl font-medium justify-self-end text-accent-pink">${venue.capacity}</span>

        <a href="${venue.link}" class="flex gap-2 text-lg text-accent-pink col-span-2">
          подробнее
          <svg class="h-7.5 w-10" aria-hidden="true">
            <use href="/sprite.svg#arrow-right"></use>
          </svg>
        </a>

        <span class="xl:hidden mt-2 text-xl font-medium justify-self-end text-accent-pink col-span-2">${venue.capacity}</span>
      </div>
    </article>
  `;
};
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("venues-list-container");

  container.innerHTML = mockVenues.map(renderVenue).join("");
  container.innerHTML += renderForm();

  const phoneInput = document.querySelectorAll(".phone-input");

  phoneInput.forEach((input) => {
    IMask(input, {
      mask: "+{7} (000) 000-00-00",
      lazy: false,
    });
  });
});

const mockVenues = [
  {
    name: "Зал «Шале»",
    capacity: "до 400 чел",
    image: "/images/venues/shale_main.webp",
    link: "#",
  },
  {
    name: "Зал «Мансарда»",
    capacity: "до 120 чел",
    image: "/images/venues/mansarda_main.webp",
    link: "#",
  },
  {
    name: "Малый Конференц-зал",
    capacity: "до 150 чел",
    image: "/images/venues/small_conf_main.webp",
    link: "#",
  },
  {
    name: "Конференц-зал",
    capacity: "до 250 чел",
    image: "/images/venues/conf_main.webp",
    link: "#",
  },
  {
    name: "Зал «Компас»",
    capacity: "до 60 чел",
    image: "/images/venues/compas_main.webp",
    link: "#",
  },
];
