export const footerTemplate = `<footer class="border-t border-slate-800 relative px-main py-10">
  <img
    src="/video/bg-video-pink-fallback.webp"
    class="absolute top-0 left-0 w-full h-full object-cover footer-fallback"
    alt="fallback"
    loading="lazy"
  />

  <video
    autoplay
    muted
    loop
    playsinline
    class="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="/video/bg-video-pink.mp4" type="video/mp4" />
  </video>

  <div class="relative z-10 flex flex-col items-center container mx-auto">
    <svg class="text-accent-pink lg:text-white w-50 lg:w-69 h-7">
      <use href="/sprite.svg#logo"></use>
    </svg>

    <div
      class="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-18 lg:mt-20"
    >
      <ul
        class="text-white mt-25 lg:mt-0 font-extrabold lg:font-medium text-lg lg:text-subtitle-sm flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-18 w-full"
      >
        <li class="flex flex-col lg:flex-row items-center gap-4">
          <svg class="w-6 lg:w-9 h-6 lg:h-9">
            <use href="/sprite.svg#phone"></use>
          </svg>

          <address class="not-italic">
            <a
              href="tel:+74994441908"
              aria-label="Позвонить +7 (499) 444-19-08"
              class="not-italic"
            >
              +7 (499) 444-19-08
            </a>
          </address>
        </li>

        <li class="flex flex-col lg:flex-row items-center gap-4">
          <svg class="w-6 lg:w-9 h-6 lg:h-9">
            <use href="/sprite.svg#mail"></use>
          </svg>

          <address class="not-italic">
            <a
              href="mailto:Info@quattro.space"
              aria-label="Написать письмо на Info@quattro.space"
            >
              Info@quattro.space
            </a>
          </address>
        </li>

        <li class="flex flex-col lg:flex-row items-center gap-4">
          <svg class="w-6 lg:w-9 h-6 lg:h-9">
            <use href="/sprite.svg#location"></use>
          </svg>

          <address class="not-italic">
            <a
              href="https://yandex.ru/maps/-/CPuUa-kt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Открыть адрес Москва, ул. Мясницкая, 13, с. 20 на Яндекс.Картах"
            >
              Москва, ул. Мясницкая, 13, с. 20
            </a>
          </address>
        </li>
      </ul>

      <div class="flex gap-4 justify-center">
        <svg
          class="w-10 lg:w-9 h-10 lg:h-9 bg-black rounded-lg border border-white"
        >
          <use href="/sprite.svg#max"></use>
        </svg>

        <svg class="w-10 lg:w-9 h-10 lg:h-9 text-white">
          <use href="/sprite.svg#telegram"></use>
        </svg>
      </div>
    </div>

    <div
      class="w-full mt-6 lg:mt-16 bg-white/10 rounded-main px-10 py-6 lg:p-8 text-lg backdrop-blur-sm backdrop-saturate-100 backdrop-contrast-75 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
    >
      <!-- Мобильная версия футера (аккордеон) -->
      <div class="lg:hidden space-y-4 mobile-footer">
        <!-- Главная страница -->
        <div class="text-white">
          <button class="flex justify-between w-full items-center accordion-btn cursor-pointer">
            <span class="text-xl font-bold">Главная страница</span>
            <svg class="w-7.5 h-7.5 transition-transform duration-300">
              <use href="/sprite.svg#arrow-down"></use>
            </svg>
          </button>
          <div class="overflow-hidden max-h-0 transition-all duration-300 accordion-content">
            <ul class="mt-4 flex flex-col items-center gap-4 text-lg">
              <li class="text-center"><a href="/#about-us">О нас</a></li>
              <li class="text-center"><a href="/#venues">Площадки</a></li>
              <li class="text-center"><a href="/#services">Услуги</a></li>
              <li class="text-center"><a href="/#reviews">Отзывы</a></li>
              <li class="text-center"><a href="#">Контакты</a></li>
            </ul>
          </div>
        </div>

        <!-- Залы -->
        <div class="text-white">
          <button class="flex justify-between w-full items-center accordion-btn cursor-pointer">
            <span class="text-xl font-bold">Залы</span>
            <svg class="w-7.5 h-7.5 transition-transform duration-300">
              <use href="/sprite.svg#arrow-down"></use>
            </svg>
          </button>
          <div class="overflow-hidden max-h-0 transition-all duration-300 accordion-content">
            <ul class="mt-4 flex flex-col items-center gap-4 text-lg">
              <li class="text-center"><a href="/shale.html">Зал «Шале»</a></li>
              <li class="text-center"><a href="#">Зал «Мансарда»</a></li>
              <li class="text-center"><a href="#">Зал «Компас»</a></li>
              <li class="text-center"><a href="#">Конференц-зал</a></li>
              <li class="text-center"><a href="#">Малый конференц-зал</a></li>
            </ul>
          </div>
        </div>

        <!-- Услуги -->
        <div class="text-white">
          <button class="flex justify-between w-full items-center accordion-btn cursor-pointer">
            <span class="text-xl font-bold">Услуги</span>
            <svg class="w-7.5 h-7.5 transition-transform duration-300">
              <use href="/sprite.svg#arrow-down"></use>
            </svg>
          </button>
          <div class="overflow-hidden max-h-0 transition-all duration-300 accordion-content">
            <ul class="mt-4 flex flex-col items-center gap-4 text-lg">
              <li class="text-center"><a href="#">Онлайн-конструктор мероприятий</a></li>
              <li class="text-center"><a href="#">Личный кабинет</a></li>
              <li class="text-center"><a href="#">Собственная кухня</a></li>
              <li class="text-center"><a href="#">Техническое сопровождение</a></li>
              <li class="text-center"><a href="#">Ивент-менеджер</a></li>
            </ul>
          </div>
        </div>

        <!-- Прочее -->
        <div class="text-white">
          <button class="flex justify-between w-full items-center accordion-btn cursor-pointer">
            <span class="text-xl font-bold">Прочее</span>
            <svg class="w-7.5 h-7.5 transition-transform duration-300">
              <use href="/sprite.svg#arrow-down"></use>
            </svg>
          </button>
          <div class="overflow-hidden max-h-0 transition-all duration-300 accordion-content">
            <ul class="mt-4 flex flex-col items-center gap-4 text-lg">
              <li class="text-center"><a href="#">Контакты</a></li>
              <li class="text-center"><a href="#">Условия договора оказания услуг</a></li>
              <li class="text-center"><a href="#">Политика конфиденциальности</a></li>
              <li class="text-center"><a href="#">Политика использования cookie-файлов</a></li>
              <li class="text-center"><a href="#">Политика обработки персональных данных</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Десктопная версия футера -->
      <div class="hidden lg:flex justify-between desktop-footer">
        <!-- Главная страница -->
        <div class="text-white flex flex-col items-start gap-6">
          <span class="font-extrabold text-2xl">Главная страница</span>
          <ul class="mt-4 flex flex-col items-start gap-4 text-white text-body-base">
            <li><a href="/#about-us">О нас</a></li>
            <li><a href="/#venues">Площадки</a></li>
            <li><a href="/#services">Услуги</a></li>
            <li><a href="/#reviews">Отзывы</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>

        <!-- Залы -->
        <div class="text-white flex flex-col items-start gap-6">
          <span class="font-extrabold text-2xl">Залы</span>
          <ul class="mt-4 flex flex-col items-start gap-4 text-white text-body-base">
            <li><a href="/shale.html">Зал «Шале»</a></li>
            <li><a href="#">Зал «Мансарда»</a></li>
            <li><a href="#">Зал «Компас»</a></li>
            <li><a href="#">Конференц-зал</a></li>
            <li><a href="#">Малый конференц-зал</a></li>
          </ul>
        </div>

        <!-- Услуги -->
        <div class="text-white flex flex-col items-start gap-6">
          <span class="font-extrabold text-2xl">Услуги</span>
          <ul class="mt-4 flex flex-col items-start gap-4 text-white text-body-base">
            <li><a href="#">Онлайн-конструктор мероприятий</a></li>
            <li><a href="#">Личный кабинет</a></li>
            <li><a href="#">Собственная кухня</a></li>
            <li><a href="#">Техническое сопровождение</a></li>
            <li><a href="#">Ивент-менеджер</a></li>
          </ul>
        </div>

        <!-- Прочее -->
        <div class="text-white flex flex-col items-start gap-6">
          <span class="font-extrabold text-2xl">Прочее</span>
          <ul class="mt-4 flex flex-col items-start gap-4 text-white text-body-base">
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Условия договора оказания услуг</a></li>
            <li><a href="#">Политика конфиденциальности</a></li>
            <li><a href="#">Политика использования cookie-файлов</a></li>
            <li><a href="#">Политика обработки персональных данных</a></li>
          </ul>
        </div>
      </div>
    </div>

    <span class="text-base font-extrabold text-white mt-30"
      >QUATTRO SPACE © {{year}}</span
    >
  </div>
</footer>`;
