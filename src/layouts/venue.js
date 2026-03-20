export const VenueLayout = (venue) => {
  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth > 1024 : false;

  const slider = isDesktop ? venue.desktopSlider : venue.slider;

  const sliderHeight = isDesktop ? "h-162.5" : "h-125";

  return `
    <section class="mt-16.5 lg:mt-20 lg:items-start px-main"
      style="--leave: fadeToTop 1.6s ease both">
      <div class="lg:min-h-screen 2xl:container lg:pb-40">
        <button type="button" class="lg:hidden back-button">
         <svg class="w-7 h-5">
          <use href="/sprite.svg#arrow-left"></use>
        </svg>
        </button>

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

        <div class="image-wrapper w-full overflow-hidden rounded-main mt-6">
            <img src="${venue.shalePageImage}" fetchpriority="high" alt="Главное изображение площадки" class="w-full h-71.25 lg:h-107.5 object-cover lg:object-center main-image" style="object-position: center 70%" 
            data-animate style="--leave: scaleUp 1.4s ease both" />
        </div>

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
              <span class="text-xl lg:text-2xl font-bold text-center lg:text-left mt-10 lg:mt-0 lg:basis-1/2">
                Стоимость от <span class="text-accent-pink">${venue.price} руб/час</span>
              </span>

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
    
    <section class="mt-25 lg:mt-20 px-main lg:items-start" style="--enter: fadeFromBottom 1.6s ease both; --leave: fadeToTop 1.6s ease both">
    <div class="w-full 2xl:container lg:pb-32">
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

      <div class="venue-swiper swiper ${sliderHeight} rounded-main w-full lg:mt-20"> 
        <div class="swiper-wrapper">
          ${isDesktop ? renderDesktopSlider(slider) : renderSlider(slider)}
        </div>
      </div>
    </div>
    </section>

    <section class="mt-25 lg:mt-20 px-main items-start" style="--enter: fadeFromBottom 1.6s ease both; --leave: fadeToTop 1.6s ease both">
      <div class="w-full h-full 2xl:container">
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

          <div class="flex flex-col items-center h-full">
           <h2 class="text-center text-subtitle-md lg:text-[40px] uppercase lg:mt-12">В стоимость бронирования ${venue.title} входит:</h2>

         <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-y-4 lg:gap-x-14 mt-10 max-w-252.5">
            ${venue.included
              .map(
                (item) => `
                    <div class="flex items-center gap-4">
                        ${
                          item.icon
                            ? `<svg class="w-10 h-10 flex items-center justify-center text-accent-pink">
                            <use href="/sprite.svg#${item.icon}"></use>
                        </svg>`
                            : `<img src='${item.img}' alt='${item.title}' class='w-10 h-10 flex text-accent-pink'>`
                        }
                        <span class="text-base">${item.title}</span>
                    </div>
                `,
              )
              .join("")}
         </div>

         <div class="h-full mt-25 max-w-260">
          <h2 class="text-subtitle-md lg:text-[40px] uppercase text-center">
            Оставить заявку
          </h2>

          <form
            method="post"
            action="#"
            aria-label="Форма записи на просмотр"
            class="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-6"
          >
            <input
              type="text"
              name="name"
              class="px-4 py-4.5 bg-gray rounded-main outline-none placeholder-black lg:order-1"
              placeholder="Имя"
              required
            />

            <input
              type="tel"
              name="phone"
              class="venue-phone-input px-4 py-4.5 bg-gray rounded-main outline-none placeholder-black lg:order-2"
              placeholder="Телефон"
              required
            />

            <textarea
              name="comment"
              rows="3"
              class="px-4 py-4.5 bg-gray rounded-main outline-none placeholder-black lg:order-3"
              placeholder="Комментарий"
            ></textarea>
                <label
                class="lg:mb-auto cursor-pointer lg:order-5"
                >
                <div id="file-names" class="text-sm text-black mb-1"></div>

                <div class="flex items-center w-full gap-3.5">
                <input type="file" id="file" class="hidden" />
                <svg class="w-5 h-7">
                    <use href="/sprite.svg#paperclip"></use>
                </svg>

                <span
                    class="block w-3/5 lg:w-fit lg:px-2 bg-accent-pink hover:shadow-pink rounded-[10px] py-2 text-white text-center"
                    >Прикрепить файл</span
                >
                </div>
            </label>

            <fieldset class="space-y-4 mt-2 lg:order-4">
              <legend class="text-sm">
                Выберите наиболее удобный способ для связи с вами
              </legend>

              <div class="flex gap-6">
                <label class="flex flex-col items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="contact-method"
                    value="max"
                    class="hidden peer"
                  />

                  <svg class="w-10 h-10 bg-black rounded-lg">
                    <use href="/sprite.svg#max"></use>
                  </svg>

                  <div
                    class="w-10 h-10 rounded-full border border-accent-pink flex items-center justify-center peer-checked:[&_div]:block"
                  >
                    <div class="hidden w-1/2 h-1/2 rounded-full bg-accent-pink"></div>
                  </div>
                </label>

                <label class="flex flex-col items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="contact-method"
                    value="telegram"
                    class="hidden peer"
                  />

                  <svg class="w-10 h-10">
                    <use href="/sprite.svg#telegram"></use>
                  </svg>

                  <div
                    class="w-10 h-10 rounded-full border border-accent-pink flex items-center justify-center peer-checked:[&_div]:block"
                  >
                    <div class="hidden w-1/2 h-1/2 rounded-full bg-accent-pink"></div>
                  </div>
                </label>

                <label class="flex flex-col items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="contact-method"
                    value="phone"
                    class="hidden peer"
                    required
                    checked
                  />

                  <svg class="w-10 h-10">
                    <use href="/sprite.svg#phone"></use>
                  </svg>

                  <div
                    class="w-10 h-10 rounded-full border border-accent-pink flex items-center justify-center peer-checked:[&_div]:block"
                  >
                    <div class="hidden w-1/2 h-1/2 rounded-full bg-accent-pink"></div>
                  </div>
                </label>
              </div>
            </fieldset>

            <div class="flex flex-col gap-2 mt-2 lg:order-6 w-full">
              <label for="contact-date" class="text-sm cursor-pointer select-none">
                Выберите подходящую дату для связи с вами
              </label>

              <div class="relative w-40">
                <input
                  type="date"
                  id="contact-date"
                  name="contact-date"
                  class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />

                <div
                  id="custom-date-display"
                  class="w-full py-3 rounded-2xl text-base flex items-center justify-between pointer-events-none"
                >
                  <span>ДД.ММ.ГГГГ</span>
                  <svg class="w-10 h-10 text-accent-pink" fill="currentColor">
                    <use href="/sprite.svg#calendar"></use>
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              class="bg-accent-pink text-white text-body-base py-4 rounded-main hover:shadow-pink focus:outline-none uppercase cursor-pointer mt-3.5 lg:mt-0 lg:order-7 lg:col-start-2 lg:w-full"
            >
              Отправить заявку
            </button>

            <label
              class="flex items-center gap-2 cursor-pointer select-none text-xs self-start lg:order-7 lg:col-start-2 lg:w-2/3"
            >
              <input type="checkbox" class="peer hidden" required />

              <div
                class="w-6.5 h-6.5 shrink-0 border-2 border-accent-pink resize-none rounded-md flex items-center justify-center peer-checked:[&_svg]:block"
              >
                <svg class="w-4 h-3 hidden fill-current text-accent-pink">
                  <use href="/sprite.svg#check"></use>
                </svg>
              </div>

              <span>
                Нажимая на кнопку, вы соглашаетесь на обработку
                <a href="#" class="underline">персональных данных</a>
              </span>
            </label>
          </form>

          <div class="flex gap-6 lg:pb-40 mt-10">
            <button type="button" class="border border-accent-pink w-full py-4 rounded-main uppercase basis-full lg:basis-1/2"> 
                Добавить в конструктор
            </button>

            <a href="/#venues" class="max-lg:hidden border border-black text-accent-pink text-body-base py-4 rounded-main uppercase basis-1/2 text-center">
             Продолжить выбор залов
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>

    <section class="mt-25 lg:mt-20 px-main lg:items-start" style="--enter: fadeFromBottom 1.6s ease both; --leave: fadeToTop 1.6s ease both">
     <div class="2xl:container w-full lg:pb-32">
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

        <div class="flex flex-col items-center">
         
      <h2 class="uppercase text-subtitle-md lg:text-subtitle-lg lg:mt-12 text-center max-w-174">Схема зала</h2>

      <p class="text-body-lg text-center mt-6 max-w-174">
        ${venue.schemeParagraph}
      </p>

      <div class="flex flex-col gap-4 items-center text-subtitle-md mt-10 max-w-174">
         <div class="flex flex-col gap-4 items-center lg:flex-row lg:justify-center lg:gap-24">
          <button 
            class="tab-btn data-[active=true]:text-accent-pink cursor-pointer"
            data-target="model"
            data-active="true"
            >
            3D модель
        </button>

        <button 
            class="tab-btn data-[active=true]:text-accent-pink cursor-pointer"
            data-target="plan"
            data-active="false"
        >
            Технический план
        </button>
         </div>
            <div class="mt-10 relative">
            <img 
                src="${venue.schemeImages.model}"
                class="tab-content transition-opacity duration-300
                data-[active=false]:opacity-0
                data-[active=true]:opacity-100"
                data-content="model"
                data-active="true"
            />

            <img 
                src="${venue.schemeImages.plan}"
                class="tab-content absolute top-0 transition-opacity duration-300
                data-[active=false]:opacity-0
                data-[active=true]:opacity-100"
                data-content="plan"
                data-active="false"
            />
            </div>
        </div>
     </div>
    </section>

    <section class="mt-25 lg:mt-0 lg:relative lg:items-start lg:flex-col" style="--enter: fadeFromBottom 1.6s ease both; --leave: fadeToTop 1.6s ease both">
       <div class="mt-20 2xl:container mx-auto">
            <nav aria-label="Навигационная цепочка" class="hidden lg:block text-body-sm lg:mt-6 px-main">
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

            <h2 class="uppercase text-subtitle-md lg:text-subtitle-lg text-center px-main lg:mt-12">Смотрите другие площадки</h2>

            <div class="mt-10 grid grid-cols-1 place-items-center gap-y-6 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-4 px-main">
               <article class="w-full max-md:max-w-86.25 lg:max-w-lg xl:max-w-2xl flex flex-col h-full">
                    <div class="w-full aspect-345/276 lg:aspect-627/538 overflow-hidden rounded-main">
                        <img src="/images/venues/mansarda_main.webp" class="w-full h-full object-cover" loading="lazy" alt="Зал «Мансарда»" />
                    </div>

                    <div>
                      <div class="flex lg:flex-col justify-between items-center lg:items-start mt-6">
                        <h3 class="text-subtitle-md lg:text-subtitle-sm font-extrabold lg:font-medium">Зал «Компас»</h3>

                        <span class="font-medium text-accent-pink lg:text-lg lg:font-normal whitespace-nowrap">до 60 чел</span>
                      </div>

                        <a href="#" class="flex gap-2 text-lg text-black hover:text-black col-span-2 mt-2 lg:mt-10">
                        подробнее
                        <svg class="h-7.5 w-10" aria-hidden="true">
                        <use href="/sprite.svg#arrow-right"></use>
                        </svg>
                    </a>
                    </div>
                </article>

                <!-- Малый Конференц-зал -->

                <article class="w-full max-md:max-w-86.25 lg:max-w-lg xl:max-w-2xl flex flex-col h-full">
                    <div class="w-full aspect-345/276 lg:aspect-627/538 overflow-hidden rounded-main">
                         <img src="/images/venues/small_conf_main.webp" class="w-full h-full object-cover" loading="lazy" alt="Малый Конференц-зал" />
                    </div>

                    <div>
                      <div class="flex lg:flex-col justify-between items-center lg:items-start mt-6">
                        <h3 class="text-subtitle-md lg:text-subtitle-sm font-extrabold lg:font-medium">Малый Конференц-зал</h3>

                        <span class="font-medium text-accent-pink lg:text-lg lg:font-normal whitespace-nowrap">до 150 чел</span>
                      </div>

                        <a href="#" class="flex gap-2 text-lg text-black hover:text-black col-span-2 mt-2 lg:mt-10">
                        подробнее
                        <svg class="h-7.5 w-10" aria-hidden="true">
                        <use href="/sprite.svg#arrow-right"></use>
                        </svg>
                    </a>
                    </div>
                </article>

                <!-- Конференц-зал -->
                <article class="w-full max-md:max-w-86.25 lg:max-w-lg xl:max-w-2xl flex flex-col h-full">
                    <div class="w-full aspect-345/276 lg:aspect-627/538 overflow-hidden rounded-main">
                         <img src="/images/venues/conf_main.webp" class="w-full h-full object-cover" loading="lazy" alt="Конференц-зал" />
                    </div>

                    <div>
                      <div class="flex lg:flex-col justify-between items-center lg:items-start mt-6">
                        <h3 class="text-subtitle-md lg:text-subtitle-sm font-extrabold lg:font-medium">Конференц-зал</h3>

                        <span class="font-medium text-accent-pink lg:text-lg lg:font-normal whitespace-nowrap">до 250 чел</span>
                      </div>

                        <a href="#" class="flex gap-2 text-lg text-black hover:text-black col-span-2 mt-2 lg:mt-10">
                        подробнее
                        <svg class="h-7.5 w-10" aria-hidden="true">
                        <use href="/sprite.svg#arrow-right"></use>
                        </svg>
                    </a>
                    </div>
                </article>

                <!-- Зал «Компас» -->

                <article class="w-full max-md:max-w-86.25 lg:max-w-lg xl:max-w-2xl flex flex-col h-full">
                    <div class="w-full aspect-345/276 lg:aspect-627/538 overflow-hidden rounded-main">
                         <img src="/images/venues/compas_main.webp" class="w-full h-full object-cover" loading="lazy" alt="Зал «Компас»" />
                    </div>

                    <div>
                      <div class="flex lg:flex-col justify-between items-center lg:items-start mt-6">
                        <h3 class="text-subtitle-md lg:text-subtitle-sm font-extrabold lg:font-medium">Зал «Компас»</h3>

                        <span class="font-medium text-accent-pink lg:text-lg lg:font-normal whitespace-nowrap">до 60 чел</span>
                      </div>

                        <a href="#" class="flex gap-2 text-lg text-black hover:text-black col-span-2 mt-2 lg:mt-10">
                        подробнее
                        <svg class="h-7.5 w-10" aria-hidden="true">
                        <use href="/sprite.svg#arrow-right"></use>
                        </svg>
                    </a>
                    </div>
                </article>
            </div>
        </div>

        <div class="mt-25 lg:mt-50 w-full">
         <h2 class="uppercase text-subtitle-md lg:text-subtitle-lg text-center px-main">Lorem ipsum dolor sit amet</h2>

         <div class="grid grid-cols-1 lg:grid-cols-4 gap-y-6 mt-9.5 lg:mt-10 px-main mx-auto 2xl:container">
              <div class="lg:col-span-2 lg:space-y-6">
               <p class="text-xl font-bold lg:text-subtitle-md">Quisque convallis interdum nulla, quis tincidunt ex consectetur hendrerit.</p>
               <p class="text-body-lg lg:text-body-base mt-6 lg:mt-0">Pellentesque sit amet leo lectus. Nulla molestie pretium diam eget bibendum. Suspendisse vel tristique tellus, at vestibulum ex. Proin id diam odio. Cras volutpat lectus est, vitae congue sapien rhoncus et.</p>
              </div>

              <div class="lg:hidden bg-gray rounded-main w-full h-64 mt-6 lg:mt-0"></div>
              <p class="text-body-lg lg:self-center lg:text-body-base col-span-1 lg:col-start-4 mt-6 lg:mt-0">Vivamus vitae venenatis eros, ut accumsan nulla. Morbi sit amet tempus dui, et rutrum eros. Curabitur pretium mi in metus facilisis, sit amet porta urna euismod. Aenean rutrum, erat id ornare pellentesque, velit diam tempor ante, et convallis risus leo nec odio.</p>
         </div>

        <div class="thumbnails px-main 2xl:mx-auto mt-14 hidden 2xl:container lg:block">
            <div class="w-full grid grid-cols-[0.5fr_0.5fr_1fr] overflow-hidden rounded-main">
             ${venue.gallerySlides.map((image) => `<img src="${image}" class="w-full h-100 object-cover cursor-pointer">`).join("")}
            </div>
        </div>


        <div class="mt-25 lg:mt-30 w-full">
              <h2 class="uppercase text-xl font-bold text-center">Партнеры</h2>

              <div class="grid grid-cols-4 lg:grid-cols-10 gap-6 lg:gap-7.5SS mt-4 px-main xl:px-0 max-w-319.75 mx-auto">
                ${Array.from({ length: 20 }, (_) => {
                  return `<div class="bg-gray w-full h-full aspect-square"></div>`;
                }).join("")}
              </div>

              <div class="h-66.5 bg-gray my-10 ">
              </div>
        </div>
    </section>
    <div id="fullscreen-venue-swiper" class="fixed inset-0 z-60 bg-black/50 backdrop-blur hidden items-center justify-center">
        <div class="swiper gallery-fullpage-swiper w-full h-screen">
            <div class="swiper-wrapper">
              ${venue.gallerySlides.map(renderFullscreenSwiperSlide).join("")}
            </div>

            <button class="swiper-button-next absolute z-2 top-1/2 -translate-y-1/2 right-9 text-white cursor-pointer"></button>
            <button class="swiper-button-prev absolute z-2 top-1/2 rotate-180 -translate-y-1/2 left-9 text-white cursor-pointer"></button>
        </div>

        <button id="close-swiper" class="absolute top-4 right-4 z-2 text-white text-3xl cursor-pointer">✕</button>
      </div>
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

const renderFullscreenSwiperSlide = (image) => {
  return `
      <div class="swiper-slide">
       <div class="flex h-full items-center justify-center">
         <img src="${image}" class="object-contain rounded-main">
       </div>
      </div>
    `;
};
