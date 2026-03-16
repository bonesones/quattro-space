// src/components/kitchen/kitchen.html.js
export const kitchenTemplate = `<section
  class="lg:top-20 mx-auto w-full [@media(max-height:1000px)]:lg:items-start lg:px-0 lg:overflow-x-hidden"
  id="kitchen-container"
  style="
    --enter: fadeFromBottom 1.8s ease 0.4s both;
    --leave: fadeToTop 1.5s ease both;
  "
>
  <div class="h-full space-y-10 lg:mt-24 lg:w-full">
    <h2
      class="text-subtitle-lg-sm font-medium lg:text-title-sm uppercase text-center"
    >
      Собственная авторская кухня
    </h2>

    <img
      src="/images/kitchen-main-mobile.webp"
      alt="Собственная авторская кухня"
      class="h-133.75 object-cover lg:hidden w-full"
      loading="lazy"
    />

    <img
      src="/images/kitchen-main.webp"
      alt="Собственная авторская кухня"
      class="h-137.5 object-cover hidden lg:block w-full main-image lg:mt-20"
      data-animate
      style="--leave: scaleUp 1.4s ease both"
      loading="lazy"
    />

    <div
      class="flex flex-col items-center mx-main 2xl:mx-auto 2xl:container lg:pb-40"
    >
      <!-- Мобильный Swiper -->
      <div class="swiper kitchen-swiper w-1/2 md:w-1/3 lg:hidden!">
        <div class="swiper-wrapper">
          <!-- Слайд 1: Подача «из под ножа» -->
          <div class="swiper-slide flex! flex-col items-center gap-2">
            <span class="text-subtitle-md text-accent-pink font-medium">01/</span>
            <span>Подача «из под ножа»</span>
            <img src="/images/swiper/knife.webp" class="w-full h-full rounded-main mt-4" alt="Подача «из под ножа»" />
          </div>

          <!-- Слайд 2: Свежие продукты -->
          <div class="swiper-slide flex! flex-col items-center gap-2">
            <span class="text-subtitle-md text-accent-pink font-medium">02/</span>
            <span>Свежие продукты</span>
            <img src="/images/swiper/food.webp" class="w-full h-full rounded-main mt-4" alt="Свежие продукты" />
          </div>

          <!-- Слайд 3: Фуршетное меню -->
          <div class="swiper-slide flex! flex-col items-center gap-2">
            <span class="text-subtitle-md text-accent-pink font-medium">03/</span>
            <span>Фуршетное меню</span>
            <img src="/images/swiper/knife.webp" class="w-full h-full rounded-main mt-4" alt="Фуршетное меню" />
          </div>

          <!-- Слайд 4: Банкетное меню -->
          <div class="swiper-slide flex! flex-col items-center gap-2">
            <span class="text-subtitle-md text-accent-pink font-medium">04/</span>
            <span>Банкетное меню</span>
            <img src="/images/swiper/tray.webp" class="w-full h-full rounded-main mt-4" alt="Банкетное меню" />
          </div>

          <!-- Слайд 5: Премиум сервис -->
          <div class="swiper-slide flex! flex-col items-center gap-2">
            <span class="text-subtitle-md text-accent-pink font-medium">05/</span>
            <span>Премиум сервис</span>
            <img src="/images/swiper/knife.webp" class="w-full h-full rounded-main mt-4" alt="Премиум сервис" />
          </div>
        </div>
        <div class="swiper-pagination relative! mt-5"></div>
      </div>

      <!-- Десктопная версия (flex контейнер) -->
      <div id="kitchen-container" class="hidden lg:flex justify-center gap-8">
        <!-- Элемент 1: Подача «из под ножа» -->
        <div class="flex flex-col items-center gap-2 w-45.5">
          <span class="text-subtitle-md text-accent-pink font-medium">01/</span>
          <span>Подача «из под ножа»</span>
          <img src="/images/swiper/knife.webp" class="w-full h-full rounded-main mt-4" alt="Подача «из под ножа»" />
        </div>

        <!-- Элемент 2: Свежие продукты -->
        <div class="flex flex-col items-center gap-2 w-45.5">
          <span class="text-subtitle-md text-accent-pink font-medium">02/</span>
          <span>Свежие продукты</span>
          <img src="/images/swiper/food.webp" class="w-full h-full rounded-main mt-4" alt="Свежие продукты" />
        </div>

        <!-- Элемент 3: Фуршетное меню -->
        <div class="flex flex-col items-center gap-2 w-45.5">
          <span class="text-subtitle-md text-accent-pink font-medium">03/</span>
          <span>Фуршетное меню</span>
          <img src="/images/swiper/knife.webp" class="w-full h-full rounded-main mt-4" alt="Фуршетное меню" />
        </div>

        <!-- Элемент 4: Банкетное меню -->
        <div class="flex flex-col items-center gap-2 w-45.5">
          <span class="text-subtitle-md text-accent-pink font-medium">04/</span>
          <span>Банкетное меню</span>
          <img src="/images/swiper/tray.webp" class="w-full h-full rounded-main mt-4" alt="Банкетное меню" />
        </div>

        <!-- Элемент 5: Премиум сервис -->
        <div class="flex flex-col items-center gap-2 w-45.5">
          <span class="text-subtitle-md text-accent-pink font-medium">05/</span>
          <span>Премиум сервис</span>
          <img src="/images/swiper/knife.webp" class="w-full h-full rounded-main mt-4" alt="Премиум сервис" />
        </div>
      </div>

      <a
        class="text-base lg:hidden uppercase block py-4 bg-accent-pink text-white text-center rounded-main w-full mt-10 cursor-pointer"
      >
        Перейти в раздел
      </a>

      <a
        class="hidden lg:flex gap-4 items-center uppercase text-subtitle-md-sm mx-auto mt-8 hover:text-accent-pink cursor-pointer lg:mb-10"
      >
        Собрать меню онлайн

        <svg class="w-10 h-7.5">
          <use href="/sprite.svg#arrow-right"></use>
        </svg>
      </a>
    </div>
  </div>
</section>`;
