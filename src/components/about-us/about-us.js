import { aboutUsTemplate } from "./about-us.html.js";

export const renderAbout = () => {
  return aboutUsTemplate;
};

const renderAboutParagraph = (item, order, delay) => {
  return `
    <div class="flex flex-col lg:flex-row gap-6 md:gap-12"
      data-animate
      style="--enter: fadeFromBottom 1s ease ${delay}s both"
    >
      <h3 class="text-subtitle-sm text-center lg:text-start basis-[30%]">
        <span class="text-accent-pink text-subtitle-md">
          ${order < 10 ? `0${order}` : order}/
        </span>
        ${item.title}
      </h3>

      <p class="text-body-base text-justify basis-[70%]">
        ${item.description}
      </p>
    </div>`;
};

export const initAboutParagraphs = (root = document) => {
  if (typeof window === "undefined") return;

  const paragraphsContainer = root.querySelector(".advantages-container");
  let duration = 0;

  if (paragraphsContainer) {
    paragraphsContainer.innerHTML = mockedParagraphs
      .map((item, index) => {
        duration += 0.15;
        return renderAboutParagraph(
          item,
          index + 1,
          index === 0 ? 0 : duration,
        );
      })
      .join("");
  }
};

export const initAbout = (root = document) => {
  if (typeof window === "undefined") return;

  initAboutParagraphs(root);

  console.log("About component initialized");
};

export const mockedParagraphs = [
  {
    title: "Стильное пространство",
    description:
      "Все 5 залов, расположенные в одном здании, интерьерно совмещают аутентичные кирпичные стены и художественные дизайнерские решения (многоуровневые потолки, разные сценарии освещения, стильную мебель).",
  },
  {
    title: "Комфортный сервис",
    description:
      "Большие технические возможности, дополнительные услуги (собственная кухня, охрана, ночной менеджер), клининг образуют единую экосистему, в которой себя удобно чувствуют как опытные организаторы, так и новички в ивент-сфере.",
  },
  {
    title: "Транспортная доступность",
    description:
      "Площадки для мероприятий находятся в центре Москвы, что позволяет всем участникам без особых проблем добраться до места проведения: станции метро «Лубянка», «Чистые пруды», «Тургеневская» находятся в 5–7 мин. пешей доступности.",
  },
];
