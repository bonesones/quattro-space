export const VenueLayout = (venue) => {
  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth > 1024 : false;

  const slider = isDesktop ? venue.desktopSlider : venue.slider;

  const sliderHeight = isDesktop ? "h-162.5" : "h-125";

  return `
    <section class="mt-16.5 lg:mt-0 lg:pt-19 lg:items-start px-main">
      <div class="min-h-full">
        <svg class="w-7 h-5 lg:hidden">
          <use href="/sprite.svg#arrow-left"></use>
        </svg>

        <nav aria-label="Навигационная цепочка" class="hidden lg:block text-body-sm lg:mt-6">
          <ol class="breadcrumbs flex gap-2">
            <li>
              <a href="/" class="flex items-center gap-2.5">
                <svg class="w-3.25 h-3">
                  <use href="/sprite.svg#breadcrumb"></use>
                </svg>
                Главная
              </a>
            </li>
            /
            <li>
              <a href="/#venues">Площадки</a>
            </li>
            /
            <li>
              <a href="/${venue.slug}.html">${venue.title}</a>
            </li>
          </ol>
        </nav>

        <h1 class="text-[40px] leading-normal lg:text-title-md xl:text-title-lg uppercase font-grotesk text-center lg:text-left lg:mt-6">${venue.title}</h1>

        <img src="${venue.shalePageImage}" fetchpriority="high" alt="Главное изображение площадки" class="w-full rounded-main mt-6 h-71.25 lg:h-107.5 object-cover lg:object-center main-image" style="object-position: center 70%" />

        <div class="
          venue-content
          grid grid-cols-1
          lg:grid-cols-2
          lg:gap-x-11 lg:gap-y-10
          lg:mt-16
          lg:[grid-template-areas:'amenities_description''events_price']
        ">
          <div class="grid grid-cols-5 lg:grid-cols-6 gap-4 mt-6 lg:mt-0 lg:[grid-area:amenities]">
            ${venue.amenities
              .map(
                (el) => `
              <div class="flex flex-col items-center gap-2">
                <svg class="w-12.5 h-12.5 text-accent-pink">
                  <use href="/sprite.svg#${el.icon}"></use>
                </svg>
                <span class="text-base font-extrabold">${el.title}</span>
                <span class="text-xs">${el.description || ""}</span>
              </div>
            `,
              )
              .join("")}
          </div>

          <div class="flex flex-wrap gap-2 mt-10 lg:mt-4 lg:[grid-area:events] h-fit">
            ${venue.events
              .map(
                (event) => `
              <span class="text-base p-2.5 bg-gray rounded-[10px]">${event}</span>
            `,
              )
              .join("")}
          </div>

          <p class="text-center lg:text-left text-lg mt-10 lg:mt-0 lg:[grid-area:description]">
            ${venue.description}
          </p>

          <div class="lg:[grid-area:price]">
            <div class="flex flex-col lg:flex-row items-center justify-between lg:gap-4">
              <div class="text-xl lg:text-2xl font-bold text-center mt-10 lg:mt-0 lg:basis-1/2">
                Стоимость от <span class="text-accent-pink">${venue.price} руб/час</span>
              </div>

              <button type="button" class="w-full lg:basis-1/2 py-4 rounded-main border border-accent-pink ${venue.isSelected ? "bg-accent-pink text-white" : ""} text-base text-center mt-4 lg:mt-0">
                ${venue.isSelected ? "Выбрано" : "Выбрать эту площадку"}
              </button>
            </div>

            <p class="text-lg lg:text-sm font-extrabold lg:font-normal text-center lg:text-left mt-6 lg:mt-4">
              Итоговая стоимость аренды зависит от продолжительности аренды и сезона. Актуальную цену уточняйте у менеджера. Минимальный срок аренды — 6 часов.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="mt-25 px-main">
      <div class="venue-swiper swiper ${sliderHeight} rounded-main 2xl:container">
        <div class="swiper-wrapper">
          ${isDesktop ? renderDesktopSlider(slider) : renderSlider(slider)}
        </div>
      </div>
    </section>
  `;
};

const renderSlider = (slider) => {
  return slider
    .map((slide) => {
      return `
      <div class="swiper-slide">
        <div class="flex flex-col h-full divide-y-16 divide-transparent">
          ${slide
            .map(
              (image) => `
            <div class="h-full relative bg-gray-100 overflow-hidden">
              <img 
                src="${image}" 
                class="w-full h-full object-cover rounded-main"
                loading="lazy" 
                alt="Площадка для мероприятий в Москве" 
              />
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    `;
    })
    .join("");
};

export const renderDesktopSlider = (slider) => {
  return slider
    .map(
      (slide) => `
    <div class="swiper-slide h-full">
      <div class="flex gap-4 h-full items-center">
        ${slide
          .map((el, index) => {
            const isCentralImage = index === Math.floor(slide.length / 2);
            const flexBasisClass = isCentralImage
              ? "lg:basis-1/2"
              : "lg:basis-1/3";
            const height = isCentralImage ? "h-full" : "h-125";

            return `
            <div class="flex flex-col ${flexBasisClass} items-center gap-4 ${height}">
              ${
                el.length === 2
                  ? `<div class="flex flex-col gap-4 h-full w-full">
                      ${el
                        .map(
                          (img) => `
                        <div class="relative overflow-hidden rounded-main h-1/2">
                          <img 
                            src="${img}" 
                            class="w-full h-full object-cover"
                            loading="lazy"
                            alt="Площадка для мероприятий в Москве"
                          />
                        </div>
                      `,
                        )
                        .join("")}
                    </div>`
                  : `<div class="h-full relative overflow-hidden rounded-main w-full">
                      <img 
                        src="${el[0]}" 
                        class="w-full h-full object-cover"
                        loading="lazy"
                        alt="Площадка для мероприятий в Москве"
                      />
                    </div>`
              }
            </div>
          `;
          })
          .join("")}
      </div>
    </div>
  `,
    )
    .join("");
};
