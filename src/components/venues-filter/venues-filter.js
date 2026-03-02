import template from "./venues-filter.html?raw";

export function renderVenueFilter() {
  return template;
}

const renderRadio = (venue) => {
  return `
    <label class="flex items-center gap-3 cursor-pointer">
        <input type="radio" name="venue_type" value="${venue.value}" class="hidden peer">
        <div class="w-9 h-9 shrink-0 border-2 border-accentPink resize-none rounded-xl flex items-center justify-center peer-checked:[&_svg]:block">
            <svg class="w-4 h-3 hidden fill-current text-accentPink">
                <use href="/sprite.svg#check"></use>
            </svg>
        </div>
        <span>${venue.label}</span>
    </label>
  `;
};

document.addEventListener("DOMContentLoaded", function () {
  const eventTypesContainer = document.getElementById("event-types-container");
  const capacityContainer = document.getElementById("venue-capacity-container");

  if (eventTypesContainer) {
    eventTypesContainer.innerHTML = mockEventTypes.map(renderRadio).join("");
  }

  if (capacityContainer) {
    capacityContainer.innerHTML = mockCapacity.map(renderRadio).join("");
  }
});

const mockEventTypes = [
  {
    label: "Тимбилдинг",
    value: "teamBuilding",
  },
  {
    label: "Лекция",
    value: "lection",
  },
  {
    label: "Фуршет",
    value: "buffet",
  },
  {
    label: "Форум",
    value: "forum",
  },
  {
    label: "Банкет",
    value: "banquet",
  },
  {
    label: "Вебинар",
    value: "webInn",
  },
  {
    label: "Выставка",
    value: "event",
  },
  {
    label: "Семинар",
    value: "seminar",
  },
  {
    label: "Конференция",
    value: "conference",
  },
  {
    label: "презентация",
    value: "presentation",
  },
  {
    label: "Бизнес-завтрак",
    value: "businessBreak",
  },
  {
    label: "Корпоратив",
    value: "corporate",
  },
];

const mockCapacity = [
  {
    label: "До 60 человек",
    value: "60",
  },
  {
    label: "От 60 до 120 человек",
    value: "60-120",
  },
  {
    label: "От 120 до 150 человек",
    value: "120-150",
  },
  {
    label: "От 150 до 250 человек",
    value: "150-250",
  },
  {
    label: "От 250 до 400 человек",
    value: "250-400",
  },
];
