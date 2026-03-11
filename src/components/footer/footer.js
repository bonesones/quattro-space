import template from "./footer.html?raw";

export const renderFooter = () => {
  const year = new Date().getFullYear();
  return template.replace("{{year}}", String(year));
};

export const initFooter = () => {
  const footer = document.querySelector("footer");
  const video = footer?.querySelector("video");

  video?.play().catch(() => {
    const img = video.querySelector(".footer-fallback");

    if (img) {
      video.parentNode.replaceChild(img, video);
    }
  });

  const renderFooterItem = (item) =>
    `<li class="text-center"><a href="${item.link}">${item.title}</a></li>`;

  const renderFooterMobileList = (list) => `
    <div class="text-white">
      <button class="flex justify-between w-full items-center accordion-btn cursor-pointer">
        <span class="text-xl font-bold">${list.title}</span>
        <svg class="w-7.5 h-7.5 transition-transform duration-300">
          <use href="/sprite.svg#arrow-down"></use>
        </svg>
      </button>
      <div class="overflow-hidden max-h-0 transition-all duration-300 accordion-content">
        <ul class="mt-4 flex flex-col items-center gap-4 text-lg">
          ${list.items.map(renderFooterItem).join("")}
        </ul>
      </div>
    </div>
  `;

  const renderFooterDesktopList = (list) => `
    <div class="text-white flex flex-col items-start gap-6">
      <span class="font-extrabold text-2xl">${list.title}</span>
      <ul class="mt-4 flex flex-col items-start gap-4 text-white text-body-base">
        ${list.items.map(renderFooterItem).join("")}
      </ul>
    </div>
  `;

  const mobileFooterEls = document.querySelectorAll(".mobile-footer");
  const desktopFooterEls = document.querySelectorAll(".desktop-footer");

  mobileFooterEls.forEach(
    (el) => (el.innerHTML = mockFooter.map(renderFooterMobileList).join("")),
  );
  desktopFooterEls.forEach(
    (el) => (el.innerHTML = mockFooter.map(renderFooterDesktopList).join("")),
  );

  document.querySelectorAll(".accordion-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const svg = btn.querySelector("svg");
      const isOpen =
        content.style.maxHeight && content.style.maxHeight !== "0px";

      document.querySelectorAll(".accordion-btn").forEach((otherBtn) => {
        const otherContent = otherBtn.nextElementSibling;
        const otherSvg = otherBtn.querySelector("svg");
        otherContent.style.maxHeight = "0";
        otherSvg.classList.remove("rotate-180");
      });

      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        svg.classList.add("rotate-180");
      }
    });
  });
};

const mockFooter = [
  {
    title: "Главная страница",
    items: [
      { title: "О нас", link: "#" },
      { title: "Площадки", link: "#" },
      { title: "Услуги", link: "#" },
      { title: "Отзывы", link: "#" },
      { title: "Контакты", link: "#" },
    ],
  },
  {
    title: "Залы",
    items: [
      { title: "Зал «Шале»", link: "#" },
      { title: "Зал «Мансарда»", link: "#" },
      { title: "Зал «Компас»", link: "#" },
      { title: "Конференц-зал", link: "#" },
      { title: "Малый конференц-зал", link: "#" },
    ],
  },
  {
    title: "Услуги",
    items: [
      { title: "Онлайн-конструктор мероприятий", link: "#" },
      { title: "Личный кабинет", link: "#" },
      { title: "Собственная кухня", link: "#" },
      { title: "Техническое сопровождение", link: "#" },
      { title: "Ивент-менеджер", link: "#" },
    ],
  },
  {
    title: "Прочее",
    items: [
      { title: "Контакты", link: "#" },
      { title: "Условия договора оказания услуг", link: "#" },
      { title: "Политика конфиденциальности", link: "#" },
      { title: "Политика использования cookie-файлов", link: "#" },
      { title: "Политика обработки персональных данных", link: "#" },
    ],
  },
];
