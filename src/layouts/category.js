export const CategoryLayout = category => {
  return `
    <section class="mt-16.5 lg:mt-20 lg:items-start px-main"
      style="--leave: fadeToTop 1.6s ease both">
      <div class="lg:min-h-screen 2xl:container lg:pb-40 w-full">
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
              <a href="/#venues">Форматы</a>
            </li>
            /
            <li>
              <a href="/${category.slug}.html">${category.title}</a>
            </li>
          </ol>
        </nav>

        <h1 class="text-title-lg-sm leading-normal lg:text-title-md xl:text-title-lg uppercase font-grotesk text-center lg:text-left lg:mt-6">${
          category.title
        }</h1>

        <div class="image-wrapper w-full overflow-hidden rounded-main mt-6 flex">
         <div class="w-full lg:w-1/2 overflow-hidden">
            <img src="${
              category.mainImage
            }" fetchpriority="high" alt="Главное изображение категории" class="w-full h-160 lg:h-107.5 object-cover lg:object-center main-image" style="object-position: center 70%; --leave: fadeToLeft 1.4s ease both" 
                data-animate>
            </div>

            <div class="w-1/2 max-lg:hidden overflow-hidden">
                ${
                  category.mainImageSecond
                    ? `<img src="${category.mainImageSecond}" fetchpriority="high" alt="Главное изображение категории" class="w-full h-160 lg:h-107.5 object-cover lg:object-center main-image" style="object-position: center 70%; --leave: fadeToRight 1.4s ease both" data-animate>`
                    : ""
                }
            </div>
        </div>

        <form
            class="mt-16 flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-4 mx-auto w-full"
            >

            <fieldset class="flex flex-col lg:flex-row gap-6 lg:gap-8">
                <svg class="w-10 h-10 text-black max-lg:hidden">
                    <use href="/sprite.svg#filter"></use>
                </svg>

                <div>
                    <legend
                class="text-subtitle-md text-center lg:text-start font-medium uppercase"
                >
                Формат мероприятия
                </legend>

                <div
                id="event-types-container"
                class="grid grid-cols-2 gap-y-6 lg:gap-y-4 gap-x-6 mt-6 lg:mt-8"
                >
                <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
                    <input type="checkbox" name="event_type" value="teamBuilding" class="hidden peer">
                    <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
                    <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                        <use href="/sprite.svg#check"></use>
                    </svg>
                    </div>
                    <span class="flex-1">Тимбилдинг</span>
                </label>

                <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
                    <input type="checkbox" name="event_type" value="lection" class="hidden peer">
                    <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
                    <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                        <use href="/sprite.svg#check"></use>
                    </svg>
                    </div>
                    <span class="flex-1">Лекция</span>
                </label>

                <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
                    <input type="checkbox" name="event_type" value="buffet" class="hidden peer">
                    <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
                    <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                        <use href="/sprite.svg#check"></use>
                    </svg>
                    </div>
                    <span class="flex-1">Фуршет</span>
                </label>

                <!-- Форум -->
                <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
                    <input type="checkbox" name="event_type" value="forum" class="hidden peer">
                    <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
                    <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                        <use href="/sprite.svg#check"></use>
                    </svg>
                    </div>
                    <span class="flex-1">Форум</span>
                </label>

                <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
                    <input type="checkbox" name="event_type" value="banquet" class="hidden peer">
                    <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
                    <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                        <use href="/sprite.svg#check"></use>
                    </svg>
                    </div>
                    <span class="flex-1">Банкет</span>
                </label>

                <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
                    <input type="checkbox" name="event_type" value="webInn" class="hidden peer">
                    <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
                    <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                        <use href="/sprite.svg#check"></use>
                    </svg>
                    </div>
                    <span class="flex-1">Вебинар</span>
                </label>

                <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
                    <input type="checkbox" name="event_type" value="event" class="hidden peer">
                    <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
                    <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                        <use href="/sprite.svg#check"></use>
                    </svg>
                    </div>
                    <span class="flex-1">Выставка</span>
                </label>

                <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
                    <input type="checkbox" name="event_type" value="seminar" class="hidden peer">
                    <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
                    <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                        <use href="/sprite.svg#check"></use>
                    </svg>
                    </div>
                    <span class="flex-1">Семинар</span>
                </label>
                </div>
                </div>
            </fieldset>

            <fieldset class="flex flex-col gap-6">
                <legend
                class="text-subtitle-md lg:text-subtitle-md text-center lg:text-start font-medium uppercase"
                >
                Количество гостей
                </legend>

                <div
                id="venue-capacity-container"
                class="grid grid-cols-1 gap-y-6 lg:gap-y-4 mt-6 lg:mt-8"
                >
                <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
                    <input type="checkbox" name="venue_capacity" value="60" class="hidden peer">
                    <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
                    <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                        <use href="/sprite.svg#check"></use>
                    </svg>
                    </div>
                    <span class="flex-1">До 60 человек</span>
                </label>

                <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
                    <input type="checkbox" name="venue_capacity" value="60-120" class="hidden peer">
                    <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
                    <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                        <use href="/sprite.svg#check"></use>
                    </svg>
                    </div>
                    <span class="flex-1">От 60 до 120 человек</span>
                </label>

                <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
                    <input type="checkbox" name="venue_capacity" value="120-150" class="hidden peer">
                    <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
                    <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                        <use href="/sprite.svg#check"></use>
                    </svg>
                    </div>
                    <span class="flex-1">От 120 до 150 человек</span>
                </label>

                <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
                    <input type="checkbox" name="venue_capacity" value="150-250" class="hidden peer">
                    <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
                    <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                        <use href="/sprite.svg#check"></use>
                    </svg>
                    </div>
                    <span class="flex-1">От 150 до 250 человек</span>
                </label>

                <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
                    <input type="checkbox" name="venue_capacity" value="250-400" class="hidden peer">
                    <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
                    <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                        <use href="/sprite.svg#check"></use>
                    </svg>
                    </div>
                    <span class="flex-1">От 250 до 400 человек</span>
                </label>
                </div>
            </fieldset>

            <div class="flex flex-col justify-between w-full items-end basis-4/12">
                <svg class="w-41.5 h-33.5 text-accent-pink max-lg:hidden">
                    <use href="/sprite.svg#big-arrow"></use>
                </svg>
                <button
                    type="submit"
                    class="bg-accent-pink w-full h-fit text-center text-white py-4 rounded-main uppercase text-base cursor-pointer hover:shadow-pink"
                >
                    Применить фильтры
                </button>
            </div>
            </form>
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
              <a href="/#venues">Форматы</a>
            </li>
            /
            <li>
              <a href="/${category.slug}.html">${category.title}</a>
            </li>
          </ol>
        </nav>

        <h2 class="uppercase text-subtitle-md lg:text-subtitle-lg text-center lg:mt-12">Подходящие площадки</h2>

        <div class="grid grid-cols-1 md:grid-cols-2  gap-y-6 lg:gap-y-12 md:gap-x-6 w-full mt-10">
          ${category.suitableVenues
            .map(
              (el, index) => `
              <article class="w-full flex flex-col h-full" data-animate style="--leave: ${
                index % 2 === 0 ? "fadeToLeft" : "fadeToRight"
              } 1.6s ease both">
                <div class="w-full aspect-345/276 lg:aspect-627/538 overflow-hidden rounded-main">
                        <img src="${
                          el.image
                        }" class="w-full h-full object-cover" loading="lazy" alt="Конференц-зал" />
                </div>

                <div class="lg:px-main">
                    <div class="flex justify-between items-center  mt-6">
                    <h3 class="text-subtitle-md font-extrabold">${el.title}</h3>

                    <span class="font-medium lg:text-2xl whitespace-nowrap">${
                      el.capacity
                    }</span>
                    </div>

                    <a href="${
                      el.link
                    }" class="flex gap-2 text-lg text-black hover:text-black col-span-2 mt-2 lg:mt-10 lg:hidden">
                    подробнее
                    <svg class="h-7.5 w-10" aria-hidden="true">
                    <use href="/sprite.svg#arrow-right"></use>
                    </svg>
                </a>
                </div>

                <div class="grid grid-cols-5 lg:grid-cols-6 gap-4 mt-6 lg:px-main">
                ${el.parameters
                  .map(
                    el => `
                    <div class="flex flex-col items-center gap-2 w-fit">
                        <svg class="w-12.5 h-12.5 text-accent-pink">
                        <use href="/sprite.svg#${el.icon}"></use>
                        </svg>
                        <span class="text-base font-extrabold">${el.title ??
                          ""}</span>
                        <span class="text-xs">${el.description ?? ""}</span>
                    </div>
                    `
                  )
                  .join("")}
                </div>

                <div class="flex justify-between lg:px-main">
                    <a href="${
                      el.link
                    }" class="flex gap-2 text-lg text-black hover:text-black col-span-2 mt-2 lg:mt-10 max-lg:hidden">
                        Подробнее о зале
                        <svg class="h-7.5 w-10" aria-hidden="true">
                        <use href="/sprite.svg#arrow-right"></use>
                        </svg>
                    </a>

                    <button class="w-full mt-6 rounded-main border border-accent-pink py-4 lg:basis-1/2 cursor-pointer">Выбрать эту площадку</button>
                </div>
            </article>
              `
            )
            .join("")}
        </div>
     </div>
     </section>

     <section class="mt-25 lg:mt-0 lg:relative lg:items-start lg:flex-col" style="--enter: fadeFromBottom 1.6s ease both; --leave: fadeToTop 1.6s ease both">
       <div class="mt-20 w-full mx-auto">
            <nav aria-label="Навигационная цепочка" class="hidden lg:block text-body-sm lg:mt-6 px-main 2xl:container mx-auto">
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
                    <a href="/">Форматы</a>
                    </li>
                    /
                    <li>
                    <a href="/${category.slug}.html">${category.title}</a>
                    </li>
                </ol>
            </nav>


            <div class="h-full mt-25 lg:mt-12 max-w-260 mx-auto px-main">
          <h2 class="text-subtitle-md lg:text-[40px] uppercase text-center">
            Оставить заявку
          </h2>

          <span class="text-center text-3xl font-medium max-lg:hidden">Для отправки заявки введите необходимые данные в поля для ввода</span>

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

          <div class="flex gap-6 mt-10">
            <button type="button" class="border border-accent-pink w-full py-4 rounded-main uppercase basis-full lg:basis-1/2 cursor-pointer"> 
                Добавить в конструктор
            </button>

            <a href="/#venues" class="max-lg:hidden border border-black text-accent-pink text-body-base py-4 rounded-main uppercase basis-1/2 text-center">
             Продолжить выбор залов
            </a>
          </div>
        </div>
           
        <div class="mt-25 lg:mt-50 w-full px-main">
         <h2 class="uppercase text-subtitle-md lg:text-subtitle-lg text-center">Lorem ipsum dolor sit amet</h2>

         <div class="grid grid-cols-1 lg:grid-cols-4 gap-y-6 mt-9.5 lg:mt-10 mx-auto 2xl:container">
              <div class="lg:col-span-2 lg:space-y-6">
               <p class="text-xl font-bold lg:text-subtitle-md">Quisque convallis interdum nulla, quis tincidunt ex consectetur hendrerit.</p>
               <p class="text-body-lg lg:text-body-base mt-6 lg:mt-0">Pellentesque sit amet leo lectus. Nulla molestie pretium diam eget bibendum. Suspendisse vel tristique tellus, at vestibulum ex. Proin id diam odio. Cras volutpat lectus est, vitae congue sapien rhoncus et.</p>
              </div>

              <div class="lg:hidden bg-gray rounded-main w-full h-64 mt-6 lg:mt-0"></div>
              <p class="text-body-lg lg:self-center lg:text-body-base col-span-1 lg:col-start-4 mt-6 lg:mt-0">Vivamus vitae venenatis eros, ut accumsan nulla. Morbi sit amet tempus dui, et rutrum eros. Curabitur pretium mi in metus facilisis, sit amet porta urna euismod. Aenean rutrum, erat id ornare pellentesque, velit diam tempor ante, et convallis risus leo nec odio.</p>
         </div>

        <div class="thumbnails 2xl:mx-auto mt-14 hidden 2xl:container lg:block">
            <div class="swiper swiper-gallery-thumbs rounded-main">
                <div class="swiper-wrapper">
                  ${category.gallerySlides
                    .map(
                      image => `
                      <div class="swiper-slide h-100! w-1/2! shrink-0! cursor-pointer transition-[margin-right]! duration-300!">
                          <img src="${image}" class="w-full h-full object-cover loading="lazy" alt="Площадка для мероприятий в Москве">
                      </div>
                    `
                    )
                    .join("")}
                  </div>
                  <button class="swiper-button-prev absolute z-5 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 top-1/2 rotate-180 -translate-y-1/2 left-9 text-white cursor-pointer"></button>
                  <button class="swiper-button-next absolute z-5 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 top-1/2 -translate-y-1/2 right-9 text-white cursor-pointer"></button>
            </div>
        </div>
      </div>


        <div class="mt-25 lg:mt-30 w-full">
              <h2 class="uppercase text-xl font-bold text-center px-main">Партнеры</h2>

              <div class="grid grid-cols-4 lg:grid-cols-10 gap-6 lg:gap-7.5SS mt-4 px-main xl:px-0 max-w-319.75 mx-auto">
                ${Array.from({ length: 20 }, _ => {
                  return `<div class="bg-gray w-full h-full aspect-square"></div>`;
                }).join("")}
              </div>

              <div class="h-66.5 lg:h-102.5 bg-gray my-10 lg:my-30">
              </div>
        </div>
    </section>
    <div id="fullscreen-venue-swiper" class="fixed inset-0 z-60 bg-black/50 backdrop-blur hidden items-center justify-center">
        <div class="swiper gallery-fullpage-swiper w-full h-screen">
            <div class="swiper-wrapper">
              ${category.gallerySlides
                .map(renderFullscreenSwiperSlide)
                .join("")}
            </div>

            <button class="swiper-button-next absolute z-2 top-1/2 -translate-y-1/2 right-9 text-white cursor-pointer"></button>
            <button class="swiper-button-prev absolute z-2 top-1/2 rotate-180 -translate-y-1/2 left-9 text-white cursor-pointer"></button>
        </div>

        <button id="close-swiper" class="absolute top-4 right-4 z-2 text-white text-3xl cursor-pointer">✕</button>
    </div>

  `;
};

const renderFullscreenSwiperSlide = image => {
  return `
      <div class="swiper-slide">
       <div class="flex h-full items-center justify-center">
         <img src="${image}" class="object-contain container h-full" loading="lazy" alt="Площадка для мероприятий в Москве">
       </div>
      </div>
    `;
};
