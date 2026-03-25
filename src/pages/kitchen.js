export const renderKitchenPage = () => {
  return `
       <section class="mt-16.5 lg:mt-20 lg:items-start lg:overflow-x-hidden"
        style="--leave: fadeToTop 1.6s ease both">
        <div class="lg:min-h-screen lg:pb-40">
            <button type="button" class="lg:hidden back-button px-main">
            <svg class="w-7 h-5">
            <use href="/sprite.svg#arrow-left"></use>
            </svg>
            </button>

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
                    <a href="/#services">Услуги</a>
                    </li>
                    /
                    <li>
                    <a href="/kitchen.html">Кухня</a>
                    </li>
                </ol>
            </nav>


            <h1 class="text-title-lg-sm leading-normal lg:text-title-md xl:text-title-lg uppercase font-grotesk text-center lg:text-left lg:mt-6 2xl:container mx-auto lg:px-main">Кухня</h1>

            <img src="/images/kitchen-rotated.webp" fetchpriority="high" class="w-full max-w-100 mx-auto h-255 mt-6 lg:hidden" />

            <img src="/images/kitchen-main.webp" fetchpriority="high" class="w-full mt-6 hidden lg:block" data-animate style="--leave: scaleUp 1.4s ease both" />
        </div>
      </section>
      
      <section class="mt-25 lg:mt-20 px-main lg:items-start" style="--enter: fadeIn 1.6s ease both; --leave: fadeToTop 1.6s ease both">
       <div class="2xl:container w-full lg:pb-32">
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
                <a href="/#services">Услуги</a>
                </li>
                /
                <li>
                <a href="/kitchen.html">Кухня</a>
                </li>
            </ol>
        </nav>


        <div class="swiper kitchen-page-swiper max-w-245! mx-auto lg:mt-9">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="slider-inner flex! flex-col items-center gap-4 w-full h-full">
            <span class="text-subtitle-lg text-accent-pink font-medium">01/</span>
            <img src="/images/swiper/knife.webp" class="w-full h-full rounded-main" alt="Подача «из под ножа»" loading="lazy" />
            <span class="text-subtitle-md mt-2 lg:mt-12 font-extrabold">Подача «из под ножа»</span>
            <p class="text-lg mt-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.</p>
            </div>
          </div>

           <div class="swiper-slide">
              <div class="slider-inner flex! flex-col items-center gap-4">
                <span class="text-subtitle-lg text-accent-pink font-medium">02/</span>
                <img src="/images/swiper/food.webp" class="w-full h-full rounded-main" alt="Свежие продукты" loading="lazy" />
                <span class="text-subtitle-md mt-2 lg:mt-12 font-extrabold">Свежие продукты</span>
                <p class="text-lg mt-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.</p>
              </div>
          </div>

            <div class="swiper-slide">
              <div class="slider-inner flex! flex-col items-center gap-4">
                <span class="text-subtitle-lg text-accent-pink font-medium">03/</span>
                <img src="/images/swiper/snack.webp" class="w-full h-full rounded-main" alt="Фуршетное меню" loading="lazy" />
                <span class="text-subtitle-md mt-2 lg:mt-12 font-extrabold">Фуршетное меню</span>
                <p class="text-lg mt-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.</p>
            </div>
          </div>

            <div class="swiper-slide">
              <div class="slider-inner flex! flex-col items-center gap-4">
                <span class="text-subtitle-lg text-accent-pink font-medium">04/</span>
                <img src="/images/swiper/salad.webp" class="w-full h-full rounded-main" alt="Банкетное меню" loading="lazy" />
                <span class="text-subtitle-md mt-2 lg:mt-12 font-extrabold">Банкетное меню</span>
                <p class="text-lg mt-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.</p>
            </div>
          </div>

         <div class="swiper-slide">
            <div class="slider-inner flex! flex-col items-center gap-4">
              <span class="text-subtitle-lg text-accent-pink font-medium">05/</span>
              <img src="/images/swiper/tray.webp" class="w-full h-full rounded-main" alt="Премиум сервис" loading="lazy" />
              <span class="text-subtitle-md mt-2 lg:mt-12 font-extrabold">Премиум сервис</span>
              <p class="text-lg mt-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.</p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination relative! mt-8"></div>
      </div>
      </section>

      <section class="mt-25 lg:mt-20 px-main lg:items-start" style="--enter: fadeFromBottom 1.6s ease both; --leave: fadeToTop 1.6s ease both">
       <div class="2xl:container w-full lg:pb-32">
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
                <a href="/#services">Услуги</a>
                </li>
                /
                <li>
                <a href="/kitchen.html">Кухня</a>
                </li>
            </ol>
        </nav>


        <h2 class="flex lg:hidden flex-col gap-2 items-center text-center"><span class="text-subtitle-md uppercase">Авторская кухня</span><span class="text-xl font-bold">от шеф-повара QUATTRO-SPACE</span></h2>

        <div class="lg:flex gap-12 items-center lg:mt-18">
          <img src="/images/kitchen/dish-rotated.webp" class="w-57 mx-auto mt-4 lg:hidden" alt="Авторская кухня" loading="lazy" />
          <img src="/images/kitchen/dish.webp" class="max-lg:hidden basis-1/2 min-w-0" alt="Авторская кухня" loading="lazy" />

          <div class="basis-1/2">
            <h2 class="max-lg:hidden flex flex-col items-start text-start"><span class="text-subtitle-lg uppercase">Авторская кухня</span><span class="text-subtitle-md">от шеф-повара QUATTRO-SPACE</span></h2>

            <p class="mt-10 text-lg">
            Curabitur at varius nulla. Phasellus tristique a diam quis molestie. Proin ut velit consectetur, luctus lacus non, rutrum dolor. Ut vel risus non massa vehicula pulvinar. Sed laoreet molestie dui, vestibulum luctus ante tempor ac. Phasellus efficitur aliquam hendrerit. Vestibulum vitae est at libero lobortis gravida. Ut nec auctor est.
            </p>

            <a class="text-center w-full max-w-125 py-4 rounded-main bg-accent-pink uppercase text-white block mt-14">Собрать меню онлайн</a>
          </div>
        </div>
       </div>
      </section>

      <section class="mt-25 lg:mt-20 px-main lg:items-start" style="--enter: fadeFromBottom 1.6s ease both; --leave: fadeToTop 1.6s ease both">
       <div class="2xl:container w-full lg:pb-32">
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
                <a href="/#services">Услуги</a>
                </li>
                /
                <li>
                <a href="/kitchen.html">Кухня</a>
                </li>
            </ol>
        </nav>


       <div class="lg:flex lg:mt-18 items-center gap-30">
         <img src="/images/kitchen/man.webp" loading="lazy" class="w-full h-100 lg:h-full basis-1/2 min-w-0 object-cover rounded-main">

          <div class="basis-1/2">
            <p class="text-subtitle-md text-justify mt-10">
            «Cras lobortis, mi at porttitor semper, nulla dui venenatis diam, et luctus quam sapien ultricies sem». 
            </p>

            <div class="text-lg lg:text-base mt-6 lg:mt-2 lg:w-fit lg:ml-auto"><span class="text-accent-pink lg:font-extrabold">Александр.</span> Шеф-повар QUATTRO SPACE</div>
          </div>
       </div>
       </section>

       <section class="mt-25 lg:mt-20 lg:items-start overflow-x-hidden" style="--enter: fadeFromBottom 1.6s ease both; --leave: fadeToTop 1.6s ease both">
        <div class="w-full h-full">
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
                <a href="/#services">Услуги</a>
                </li>
                /
                <li>
                <a href="/kitchen.html">Кухня</a>
                </li>
            </ol>
        </nav>

        <h2 class="text-subtitle-md lg:text-subtitle-lg uppercase text-center 2xl:container mx-auto">Меню</h2>

        <div class="mt-6 w-full bg-linear-to-b from-[#22252B] to-[#111111] py-10 px-15 lg:px-0" >
          <div class="w-full 2xl:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-14 place-items-center lg:px-25">
               <div class=" flex flex-col items-center">
           <img src="/images/kitchen/snack.webp" loading="lazy" class="w-full object-cover" />

           <a href="#" class="flex items-center gap-2 text-white hover:text-accent-pink uppercase">
            закуски

            <svg class="w-10 h-7.5">
              <use href="/sprite.svg#arrow-right"></use>
            </svg>
           </a>
          </div>

           <div class=" flex flex-col items-center">
           <img src="/images/kitchen/salad.webp" loading="lazy" class="w-full object-cover" />

           <a href="#" class="flex items-center gap-2 text-white hover:text-accent-pink uppercase">
            салаты

            <svg class="w-10 h-7.5">
              <use href="/sprite.svg#arrow-right"></use>
            </svg>
           </a>
          </div>

           <div class=" flex flex-col items-center">
           <img src="/images/kitchen/hot.webp" loading="lazy" class="w-full object-cover" />

           <a href="#" class="flex items-center gap-2 text-white hover:text-accent-pink uppercase">
            горячее

            <svg class="w-10 h-7.5">
              <use href="/sprite.svg#arrow-right"></use>
            </svg>
           </a>
          </div>

           <div class=" flex flex-col items-center">
           <img src="/images/kitchen/garnish.webp" loading="lazy" class="w-full object-cover" />

           <a href="#" class="flex items-center gap-2 text-white hover:text-accent-pink uppercase">
            гарниры

            <svg class="w-10 h-7.5">
              <use href="/sprite.svg#arrow-right"></use>
            </svg>
           </a>
          </div>

           <div class=" flex flex-col items-center">
           <img src="/images/kitchen/dessert.webp" loading="lazy" class="w-full object-cover" />

           <a href="#" class="flex items-center gap-2 text-white hover:text-accent-pink uppercase">
            десерты

            <svg class="w-10 h-7.5">
              <use href="/sprite.svg#arrow-right"></use>
            </svg>
           </a>
          </div>

           <div class=" flex flex-col items-center">
           <img src="/images/kitchen/drinks.webp" loading="lazy" class="w-full object-cover" />

           <a href="#" class="flex items-center gap-2 text-white hover:text-accent-pink uppercase">
            напитки

            <svg class="w-10 h-7.5">
              <use href="/sprite.svg#arrow-right"></use>
            </svg>
           </a>
          </div>

           <div class="flex flex-col items-center">
           <img src="/images/kitchen/additional.webp" loading="lazy" class="w-full object-cover" />

           <a href="#" class="flex items-center gap-2 text-white hover:text-accent-pink uppercase">
            доп услуги

            <svg class="w-10 h-7.5">
              <use href="/sprite.svg#arrow-right"></use>
            </svg>
           </a>
          </div>

          <a class="max-lg:hidden self-end bg-accent-pink text-white py-4 rounded-main text-center w-full" href='#'>
           Собрать меню онлайн
          </a>
          </div>
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
                    <a href="/#services">Услуги</a>
                    </li>
                    /
                    <li>
                    <a href="/kitchen.html">Кухня</a>
                    </li>
                </ol>
            </nav>


            <div class="h-full mt-25 lg:mt-12 max-w-260 mx-auto px-main">
            <h2 class="text-subtitle-md lg:text-[40px] uppercase text-center">
              Оставить заявку на просчет меню
            </h2>

            <span class="text-center text-3xl lg:text-2xl font-medium max-lg:hidden mx-auto block w-fit">Для отправки заявки введите необходимые данные в поля для ввода</span>

            <form
              method="post"
              action="#"
              aria-label="Форма записи на просмотр"
              class="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-6"
              data-animate
              style="--enter: fadeFromBottom 1.6s ease 0.2s both"
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
                  Собрать меню онлайн
              </button>

              <a href="/" download class="max-lg:hidden border border-black text-accent-pink text-body-base py-4 rounded-main uppercase basis-1/2 text-center">
               Скачать меню в формате PDF
              </a>
            </div>

            <a href="/" download class="text-base flex lg:hidden flex-col items-center gap-2 mt-6 uppercase">
              Скачать меню в PDF-формате
              <svg class="w-10 h-10 text-accent-pink">
                <use href="/sprite.svg#import"></use>
              </svg>
            </a>
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
                        <div class="swiper-slide h-100! w-1/2! shrink-0! cursor-pointer transition-[margin-right]! duration-300!">
                          <img src="/images/venues/compas_main.webp" class="w-full h-full object-cover loading="lazy" alt="Площадка для мероприятий в Москве">
                      </div>
                    
                      <div class="swiper-slide h-100! w-1/2! shrink-0! cursor-pointer transition-[margin-right]! duration-300!">
                          <img src="/images/venues/conf_main.webp" class="w-full h-full object-cover loading="lazy" alt="Площадка для мероприятий в Москве">
                      </div>
                    
                      <div class="swiper-slide h-100! w-1/2! shrink-0! cursor-pointer transition-[margin-right]! duration-300!">
                          <img src="/images/venues/mansarda_main.webp" class="w-full h-full object-cover loading="lazy" alt="Площадка для мероприятий в Москве">
                      </div>
                    
                      <div class="swiper-slide h-100! w-1/2! shrink-0! cursor-pointer transition-[margin-right]! duration-300!">
                          <img src="/images/venues/small_conf_main.webp" class="w-full h-full object-cover loading="lazy" alt="Площадка для мероприятий в Москве">
                      </div>
                    
                      <div class="swiper-slide h-100! w-1/2! shrink-0! cursor-pointer transition-[margin-right]! duration-300!">
                          <img src="/images/venues/compas_main.webp" class="w-full h-full object-cover loading="lazy" alt="Площадка для мероприятий в Москве">
                      </div>
                    
                      <div class="swiper-slide h-100! w-1/2! shrink-0! cursor-pointer transition-[margin-right]! duration-300!">
                          <img src="/images/venues/conf_main.webp" class="w-full h-full object-cover loading="lazy" alt="Площадка для мероприятий в Москве">
                      </div>
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
                 <div class="swiper-slide">
                    <div class="flex h-full items-center justify-center">
                      <img src="/images/venues/compas_main.webp" class="object-contain container h-full" loading="lazy" alt="Площадка для мероприятий в Москве">
                    </div>
                    </div>
                  
                    <div class="swiper-slide">
                    <div class="flex h-full items-center justify-center">
                      <img src="/images/venues/conf_main.webp" class="object-contain container h-full" loading="lazy" alt="Площадка для мероприятий в Москве">
                    </div>
                    </div>
                  
                    <div class="swiper-slide">
                    <div class="flex h-full items-center justify-center">
                      <img src="/images/venues/mansarda_main.webp" class="object-contain container h-full" loading="lazy" alt="Площадка для мероприятий в Москве">
                    </div>
                    </div>
                  
                    <div class="swiper-slide">
                    <div class="flex h-full items-center justify-center">
                      <img src="/images/venues/small_conf_main.webp" class="object-contain container h-full" loading="lazy" alt="Площадка для мероприятий в Москве">
                    </div>
                    </div>
                  
                    <div class="swiper-slide">
                    <div class="flex h-full items-center justify-center">
                      <img src="/images/venues/compas_main.webp" class="object-contain container h-full" loading="lazy" alt="Площадка для мероприятий в Москве">
                    </div>
                    </div>
                  
                    <div class="swiper-slide">
                    <div class="flex h-full items-center justify-center">
                      <img src="/images/venues/conf_main.webp" class="object-contain container h-full" loading="lazy" alt="Площадка для мероприятий в Москве">
                    </div>
                    </div>
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
