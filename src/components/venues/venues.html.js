export const venuesTemplate = `<section
  class="px-main lg:px-main [@media(max-height:1000px)]:lg:items-start"
  id="venues"
  style="--enter: fadeIn 1.4s ease both"
>
  <div class="h-full lg:mt-16 2xl:container mx-auto">
    <h2
      class="text-title-lg-sm lg:text-title-md xl:text-title-lg lg:text-left uppercase text-center font-grotesk lg:mt-8 relative z-10"
      data-animate
      style="
        --enter: fadeFromBottomVH 1s ease 0.8s both;
        --leave: fadeToTopWithOpacity 1.3s ease both;
      "
    >
      Площадки
    </h2>

    <div
      id="venues-list-container"
      class="relative z-10 mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-main justify-items-center lg:justify-items-start lg:pb-28"
      data-animate
      style="--leave: fadeOut 1.4s ease both"
    >
      <!-- Зал «Шале» -->
      <article class="w-full max-md:max-w-86.25 flex flex-col h-full">
        <div class="w-full aspect-345/276 lg:aspect-627/538 overflow-hidden rounded-main">
          <img src="/images/venues/shale_main.webp" class="w-full h-full object-cover" loading="lazy" alt="Зал «Шале»" />
        </div>

        <div class="grid grid-cols-4 mt-main lg:mt-10 lg:px-main flex-1">
          <h3 class="text-subtitle-lg-sm font-extrabold col-span-4 xl:col-span-3">Зал «Шале»</h3>

          <span class="hidden xl:inline col-span-1 self-center text-2xl font-medium justify-self-end text-accent-pink">до 400 чел</span>

          <a href="/shale.html" class="flex gap-2 text-lg text-accent-pink hover:text-black col-span-2">
            подробнее
            <svg class="h-7.5 w-10" aria-hidden="true">
              <use href="/sprite.svg#arrow-right"></use>
            </svg>
          </a>

          <span class="xl:hidden mt-2 text-xl font-medium justify-self-end text-accent-pink col-span-2">до 400 чел</span>
        </div>
      </article>

      <!-- Зал «Мансарда» -->
      <article class="w-full max-md:max-w-86.25 flex flex-col h-full">
        <div class="w-full aspect-345/276 lg:aspect-627/538 overflow-hidden rounded-main">
          <img src="/images/venues/mansarda_main.webp" class="w-full h-full object-cover" loading="lazy" alt="Зал «Мансарда»" />
        </div>

        <div class="grid grid-cols-4 mt-main lg:mt-10 lg:px-main flex-1">
          <h3 class="text-subtitle-lg-sm font-extrabold col-span-4 xl:col-span-3">Зал «Мансарда»</h3>

          <span class="hidden xl:inline col-span-1 self-center text-2xl font-medium justify-self-end text-accent-pink">до 120 чел</span>

          <a href="#" class="flex gap-2 text-lg text-accent-pink hover:text-black col-span-2">
            подробнее
            <svg class="h-7.5 w-10" aria-hidden="true">
              <use href="/sprite.svg#arrow-right"></use>
            </svg>
          </a>

          <span class="xl:hidden mt-2 text-xl font-medium justify-self-end text-accent-pink col-span-2">до 120 чел</span>
        </div>
      </article>

      <!-- Малый Конференц-зал -->
      <article class="w-full max-md:max-w-86.25 flex flex-col h-full">
        <div class="w-full aspect-345/276 lg:aspect-627/538 overflow-hidden rounded-main">
          <img src="/images/venues/small_conf_main.webp" class="w-full h-full object-cover" loading="lazy" alt="Малый Конференц-зал" />
        </div>

        <div class="grid grid-cols-4 mt-main lg:mt-10 lg:px-main flex-1">
          <h3 class="text-subtitle-lg-sm font-extrabold col-span-4 xl:col-span-3">Малый Конференц-зал</h3>

          <span class="hidden xl:inline col-span-1 self-center text-2xl font-medium justify-self-end text-accent-pink">до 150 чел</span>

          <a href="#" class="flex gap-2 text-lg text-accent-pink hover:text-black col-span-2">
            подробнее
            <svg class="h-7.5 w-10" aria-hidden="true">
              <use href="/sprite.svg#arrow-right"></use>
            </svg>
          </a>

          <span class="xl:hidden mt-2 text-xl font-medium justify-self-end text-accent-pink col-span-2">до 150 чел</span>
        </div>
      </article>

      <!-- Конференц-зал -->
      <article class="w-full max-md:max-w-86.25 flex flex-col h-full">
        <div class="w-full aspect-345/276 lg:aspect-627/538 overflow-hidden rounded-main">
          <img src="/images/venues/conf_main.webp" class="w-full h-full object-cover" loading="lazy" alt="Конференц-зал" />
        </div>

        <div class="grid grid-cols-4 mt-main lg:mt-10 lg:px-main flex-1">
          <h3 class="text-subtitle-lg-sm font-extrabold col-span-4 xl:col-span-3">Конференц-зал</h3>

          <span class="hidden xl:inline col-span-1 self-center text-2xl font-medium justify-self-end text-accent-pink">до 250 чел</span>

          <a href="#" class="flex gap-2 text-lg text-accent-pink hover:text-black col-span-2">
            подробнее
            <svg class="h-7.5 w-10" aria-hidden="true">
              <use href="/sprite.svg#arrow-right"></use>
            </svg>
          </a>

          <span class="xl:hidden mt-2 text-xl font-medium justify-self-end text-accent-pink col-span-2">до 250 чел</span>
        </div>
      </article>

      <!-- Зал «Компас» -->
      <article class="w-full max-md:max-w-86.25 flex flex-col h-full">
        <div class="w-full aspect-345/276 lg:aspect-627/538 overflow-hidden rounded-main">
          <img src="/images/venues/compas_main.webp" class="w-full h-full object-cover" loading="lazy" alt="Зал «Компас»" />
        </div>

        <div class="grid grid-cols-4 mt-main lg:mt-10 lg:px-main flex-1">
          <h3 class="text-subtitle-lg-sm font-extrabold col-span-4 xl:col-span-3">Зал «Компас»</h3>

          <span class="hidden xl:inline col-span-1 self-center text-2xl font-medium justify-self-end text-accent-pink">до 60 чел</span>

          <a href="#" class="flex gap-2 text-lg text-accent-pink hover:text-black col-span-2">
            подробнее
            <svg class="h-7.5 w-10" aria-hidden="true">
              <use href="/sprite.svg#arrow-right"></use>
            </svg>
          </a>

          <span class="xl:hidden mt-2 text-xl font-medium justify-self-end text-accent-pink col-span-2">до 60 чел</span>
        </div>
      </article>

      <!-- Форма записи на просмотр (только на десктопе) -->
      <article class="hidden lg:block">
        <svg class="w-36 h-32 ml-auto text-accent-pink">
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
            class="bg-accent-pink text-white text-body-base py-4 rounded-main hover:shadow-pink focus:outline-none uppercase cursor-pointer"
          >
            Записаться на просмотр
          </button>
        </form>
      </article>
    </div>
  </div>
</section>`;
