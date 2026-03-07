import template from "./services.html?raw";

export function renderServices() {
  return template;
}

const updateServiceHeights = (article) => {
  if (!article) return;

  const img = article.querySelector(".service-image");
  const button = article.querySelector("[data-accordion-target]");
  const inner = article.querySelector(".accordion-content");

  if (!img || !button || !inner) return;

  const isMobile = window.innerWidth < 1024;

  if (article.classList.contains("is-open")) {
    const contentHeight = inner.scrollHeight;

    if (isMobile) {
      img.style.height = "250px";
    } else {
      img.style.height = `${contentHeight + button.offsetHeight}px`;
    }

    inner.style.maxHeight = `${contentHeight}px`;
  } else {
    const buttonHeight = button.offsetHeight;

    if (isMobile) {
      img.style.height = `73px`;
    } else {
      img.style.height = `${buttonHeight}px`;
    }

    inner.style.maxHeight = "0px";
  }
};

const updateAllServiceHeights = (root = document) => {
  root.querySelectorAll(".service-item").forEach((article) => {
    updateServiceHeights(article);
  });
};

const initAccordion = (root) => {
  root.querySelectorAll("[data-accordion-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const article = btn.closest(".service-item");

      root.querySelectorAll(".service-item").forEach((item) => {
        if (item !== article) {
          item.classList.remove("is-open");
          updateServiceHeights(item);
        }
      });

      article.classList.toggle("is-open");
      updateServiceHeights(article);
    });
  });
};

const renderFeature = (feature) => {
  return `
    <li>
      ${feature}
    </li>
  `;
};

const renderService = (service) => {
  return `
    <article class="group service-item flex flex-col lg:flex-row lg:items-stretch lg:gap-12">
     ${
       service.img
         ? `<img
           src="${service.img}"
           class="service-image w-full max-lg:h-62.5 lg:w-1/2 lg:shrink-0 lg:self-stretch object-cover object-center rounded-main transition-all duration-500"
           alt="${service.title}"
         />`
         : `<div class="service-image w-full max-lg:h-62.5 lg:w-1/2 lg:shrink-0 lg:self-stretch rounded-main transition-all duration-500 bg-[#C4C4C4]"></div>`
     }

      <div class="mt-main lg:mt-0 lg:w-1/2">
        <button 
          type="button" 
          class="text-xl lg:text-2xl w-full uppercase font-medium flex justify-between gap-6 items-center text-start border-b pb-8 cursor-pointer"
          data-accordion-target
        >
          <span>${service.title}</span>

          <svg 
            class="w-10 h-10 transition-transform duration-300 
                   group-[.is-open]:rotate-45"
            data-accordion-icon
          >
            <use href="/sprite.svg#plus"></use>
          </svg>
        </button>

        <div 
          class="accordion-content overflow-hidden transition-[max-height] group-[.is-open]:h-auto duration-500 ease-in-out">
          <div class="overflow-hidden pt-main space-y-main">

            <p class="service-description text-xl lg:text-2xl font-bold">
              ${service.description}
            </p>

            <ul class="accordion-list dash-list text-lg lg:text-base space-y-main">
              ${service.features.map(renderFeature).join("")}
            </ul>

            <a 
              href="${service.link}" 
              class="block text-center uppercase lg:normal-case text-base w-full lg:w-1/2 ml-auto cursor-pointer bg-accent-pink hover:shadow-pink rounded-main py-4 text-white"
            >
              ${service.linkLabel}
            </a>

          </div>
        </div>
      </div>
    </article>
  `;
};

export function initServices(container) {
  if (!container) return;

  container.innerHTML = mockServices.map(renderService).join("");

  initAccordion(container);
  updateAllServiceHeights(container);
}

const mockServices = [
  {
    linkLabel: "Открыть конструктор",
    link: "#",
    title: "Онлайн-конструктор мероприятий",
    description:
      "Для максимально быстрого бронирования лучших площадок мы подготовили для Вас <span>онлайн-конструктор ТЗ:</span>",
    features: [
      "<span>Удобная фильтрация по всем нужным критериям</span> по Вашему ТЗ позволит быстро собрать все данные о меропроприятии в единый документ для бронирования",
      "<span>Составление меню для мероприятия онлайн</span> дает возможность сразу выбрать формат подачи блюд (банкет,фуршет),а так же их количество и время подачи под нужный тайминг мероприятия",
      "<span>Возможность сохранения и корректировки данных в личном кабинете</span> позволит Вам быстро внести необходимые изменения в бронирование",
    ],
  },
  {
    linkLabel: "Личный кабинет",
    link: "#",
    title: "Личный кабинет постоянного клиента",
    description:
      "Специально для ивент-агентств команда Quattro space создала <span>личный кабинет</span> постоянного клиента:",
    features: [
      "<span>История мероприятий и бронирований</span> будут всегда отображены в личном кабинете",
      "<span>Сохранение предварительного ТЗ и меню кухни на мероприятие</span> будет доступно после составления ТЗ через наш онлайн-сборщик с возможностью редактирования данных в режиме онлайн",
      "<span>Онлайн ввод и редактирование реквизитов,</span> а так же, хранение и загрузка документов позволят быстро согласовать бронирование с менеджером",
      "<span>Персональные условия (скидки, бонусы, статус)</span> будут отображаться в личном кабинете с возможностью отслеживания обновлений",
      "<span>Контакты личного менеджера и канал связи с ним</span> так же будут закреплены в Вашем личном кабинете",
    ],
  },
  {
    img: "/images/kitchen-service.webp",
    linkLabel: "Составить меню",
    link: "#",
    title: "Собственная кухня",
    description: "Собственная кухня ресторанного уровня прямо на площадке:",
    features: [
      "<span>Quisque suscipit</span> metus non mattis commodo. Maecenas ac tempus dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "<span>Integer tempus</span> varius dui vel tempor. Fusce id aliquet diam, quis pellentesque diam. Cras sagittis blandit ipsum, in euismod felis condimentum quis.",
      "<span>Vestibulum</span> non enim at diam viverra feugiat. Phasellus porttitor, metus sit amet sollicitudin feugiat, ligula odio tempor sapien, in placerat dui felis at enim.",
    ],
  },
  {
    img: "/images/tech-support.jpg",
    linkLabel: "Перейти в раздел",
    link: "#",
    title: "Техническое сопровождение",
    description:
      "Команда Quattro space предоставляет <span class='text-accent-pink'>полное техническое сопровождение под ключ:</span>",
    features: [
      "<span>Звуковое оборудование:</span> акустические системы, микрофоны, пульты управления звуком, чтобы звук был чистым и качественным.",
      "<span>Освещение:</span> световые эффекты, спецэффекты для организации атмосферы и поддержания интереса аудитории.",
      "<span>Видео-оборудование:</span> проекторы, экраны, видеостены, 3d визуализация, камеры для воспроизведения презентаций, трансляции видеоматериалов, интерактивных игр и других видео контентов.",
      "<span>Сценические декорации:</span> подиумы, спецэффекты для придания шоу выразительности и эффектности.",
      "<span>Технический персонал:</span> опытные звукорежиссеры, светотехники, видеооператоры, специалисты, которые обеспечат стабильную работу оборудования.",
      "<span>Координация технического продакшна</span> и взаимодействие с другими службами для согласованной работы всего оборудования.",
    ],
  },
  {
    img: "/images/tech-support.jpg",
    linkLabel: "Перейти в раздел",
    link: "#",
    title: "Техническое сопровождение",
    description:
      "Команда Quattro space предоставляет <span class='text-accent-pink'>полное техническое сопровождение под ключ:</span>",
    features: [
      "<span>Звуковое оборудование:</span> акустические системы, микрофоны, пульты управления звуком, чтобы звук был чистым и качественным.",
      "<span>Освещение:</span> световые эффекты, спецэффекты для организации атмосферы и поддержания интереса аудитории.",
      "<span>Видео-оборудование:</span> проекторы, экраны, видеостены, 3d визуализация, камеры для воспроизведения презентаций, трансляции видеоматериалов, интерактивных игр и других видео контентов.",
      "<span>Сценические декорации:</span> подиумы, спецэффекты для придания шоу выразительности и эффектности.",
      "<span>Технический персонал:</span> опытные звукорежиссеры, светотехники, видеооператоры, специалисты, которые обеспечат стабильную работу оборудования.",
      "<span>Координация технического продакшна</span> и взаимодействие с другими службами для согласованной работы всего оборудования.",
    ],
  },
  {
    img: "/images/tech-support.jpg",
    linkLabel: "Перейти в раздел",
    link: "#",
    title: "Техническое сопровождение",
    description:
      "Команда Quattro space предоставляет <span class='text-accent-pink'>полное техническое сопровождение под ключ:</span>",
    features: [
      "<span>Звуковое оборудование:</span> акустические системы, микрофоны, пульты управления звуком, чтобы звук был чистым и качественным.",
      "<span>Освещение:</span> световые эффекты, спецэффекты для организации атмосферы и поддержания интереса аудитории.",
      "<span>Видео-оборудование:</span> проекторы, экраны, видеостены, 3d визуализация, камеры для воспроизведения презентаций, трансляции видеоматериалов, интерактивных игр и других видео контентов.",
      "<span>Сценические декорации:</span> подиумы, спецэффекты для придания шоу выразительности и эффектности.",
      "<span>Технический персонал:</span> опытные звукорежиссеры, светотехники, видеооператоры, специалисты, которые обеспечат стабильную работу оборудования.",
      "<span>Координация технического продакшна</span> и взаимодействие с другими службами для согласованной работы всего оборудования.",
    ],
  },
];
