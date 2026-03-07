import template from "./venues-filter.html?raw";

export function renderVenueFilter() {
  return template;
}

const renderCheckbox = (venue, groupName) => {
  return `
    <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
        <input type="checkbox" name="${groupName}" value="${venue.value}" class="hidden peer">
        <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
            <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                <use href="/sprite.svg#check"></use>
            </svg>
        </div>
        <span class="flex-1">${venue.label}</span>
    </label>
  `;
};

export function initVenueFilter(root = document) {
  const eventTypesContainer = root.querySelector("#event-types-container");
  const capacityContainer = root.querySelector("#venue-capacity-container");

  if (eventTypesContainer) {
    eventTypesContainer.innerHTML = mockEventTypes
      .map((venue) => renderCheckbox(venue, "event_type"))
      .join("");
  }

  if (capacityContainer) {
    capacityContainer.innerHTML = mockCapacity
      .map((venue) => renderCheckbox(venue, "venue_capacity"))
      .join("");
  }
}

const mockEventTypes = [
  { label: "Тимбилдинг", value: "teamBuilding" },
  { label: "Лекция", value: "lection" },
  { label: "Фуршет", value: "buffet" },
  { label: "Форум", value: "forum" },
  { label: "Банкет", value: "banquet" },
  { label: "Вебинар", value: "webInn" },
  { label: "Выставка", value: "event" },
  { label: "Семинар", value: "seminar" },
  { label: "Конференция", value: "conference" },
  { label: "Презентация", value: "presentation" },
  { label: "Бизнес-завтрак", value: "businessBreak" },
  { label: "Корпоратив", value: "corporate" },
];

const mockCapacity = [
  { label: "До 60 человек", value: "60" },
  { label: "От 60 до 120 человек", value: "60-120" },
  { label: "От 120 до 150 человек", value: "120-150" },
  { label: "От 150 до 250 человек", value: "150-250" },
  { label: "От 250 до 400 человек", value: "250-400" },
];
