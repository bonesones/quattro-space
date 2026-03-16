export const servicesTemplate = `<section
  class="lg:top-20 px-main lg:px-9 [@media(max-height:1000px)]:lg:items-start lg:overflow-y-auto"
  id="services"
  style="--enter: fadeFromBottom 0.9s ease 0.6s both"
>
  <div class="2xl:container mx-auto">
    <h2
      class="text-title-lg-sm lg:text-title-md xl:text-title-lg lg:text-left uppercase text-center font-grotesk"
      data-animate
      style="--leave: fadeToTopWithOpacity 1.9s ease both"
    >
      Услуги
    </h2>

    <div
      class="mt-10 lg:pb-52 space-y-10 lg:space-y-8"
      id="services-list-container"
    >
      <!-- Услуга 1: Онлайн-конструктор мероприятий -->
      <article class="group service-item flex flex-col lg:flex-row lg:items-stretch lg:gap-12" 
        data-animate 
        style="--leave: fadeToRight 1.9s ease both">
        <div class="service-image w-full max-lg:h-62.5 lg:w-1/2 lg:shrink-0 lg:self-stretch rounded-main transition-all duration-500 bg-[#C4C4C4]"></div>

        <div class="mt-main lg:mt-0 lg:w-1/2">
          <button 
            type="button" 
            class="text-xl lg:text-2xl w-full uppercase font-medium flex justify-between gap-6 items-center text-start border-b pb-8 cursor-pointer"
            data-accordion-target
          >
            <span>Онлайн-конструктор мероприятий</span>

            <svg 
              class="w-10 h-10 transition-transform duration-300 group-[.is-open]:rotate-45 shrink-0"
              data-accordion-icon
            >
              <use href="/sprite.svg#plus"></use>
            </svg>
          </button>

          <div 
            class="accordion-content overflow-hidden transition-[max-height] group-[.is-open]:h-auto duration-500 ease-in-out">
            <div class="overflow-hidden pt-main space-y-main">

              <p class="service-description text-xl lg:text-2xl font-bold">
                Для максимально быстрого бронирования лучших площадок мы подготовили для Вас <span>онлайн-конструктор ТЗ:</span>
              </p>

              <ul class="accordion-list dash-list text-lg lg:text-base space-y-main">
                <li><span>Удобная фильтрация по всем нужным критериям</span> по Вашему ТЗ позволит быстро собрать все данные о меропроприятии в единый документ для бронирования</li>
                <li><span>Составление меню для мероприятия онлайн</span> дает возможность сразу выбрать формат подачи блюд (банкет,фуршет),а так же их количество и время подачи под нужный тайминг мероприятия</li>
                <li><span>Возможность сохранения и корректировки данных в личном кабинете</span> позволит Вам быстро внести необходимые изменения в бронирование</li>
              </ul>

              <a 
                href="#" 
                class="block text-center uppercase lg:normal-case text-base w-full lg:w-1/2 ml-auto cursor-pointer bg-accent-pink hover:shadow-pink rounded-main py-4 text-white"
              >
                Открыть конструктор
              </a>

            </div>
          </div>
        </div>
      </article>

      <!-- Услуга 2: Личный кабинет постоянного клиента -->
      <article class="group service-item flex flex-col lg:flex-row lg:items-stretch lg:gap-12" 
        data-animate 
        style="--leave: fadeToLeft 1.9s ease both">
        <div class="service-image w-full max-lg:h-62.5 lg:w-1/2 lg:shrink-0 lg:self-stretch rounded-main transition-all duration-500 bg-[#C4C4C4]"></div>

        <div class="mt-main lg:mt-0 lg:w-1/2">
          <button 
            type="button" 
            class="text-xl lg:text-2xl w-full uppercase font-medium flex justify-between gap-6 items-center text-start border-b pb-8 cursor-pointer"
            data-accordion-target
          >
            <span>Личный кабинет постоянного клиента</span>

            <svg 
              class="w-10 h-10 transition-transform duration-300 group-[.is-open]:rotate-45 shrink-0"
              data-accordion-icon
            >
              <use href="/sprite.svg#plus"></use>
            </svg>
          </button>

          <div 
            class="accordion-content overflow-hidden transition-[max-height] group-[.is-open]:h-auto duration-500 ease-in-out">
            <div class="overflow-hidden pt-main space-y-main">

              <p class="service-description text-xl lg:text-2xl font-bold">
                Специально для ивент-агентств команда Quattro space создала <span>личный кабинет</span> постоянного клиента:
              </p>

              <ul class="accordion-list dash-list text-lg lg:text-base space-y-main">
                <li><span>История мероприятий и бронирований</span> будут всегда отображены в личном кабинете</li>
                <li><span>Сохранение предварительного ТЗ и меню кухни на мероприятие</span> будет доступно после составления ТЗ через наш онлайн-сборщик с возможностью редактирования данных в режиме онлайн</li>
                <li><span>Онлайн ввод и редактирование реквизитов,</span> а так же, хранение и загрузка документов позволят быстро согласовать бронирование с менеджером</li>
                <li><span>Персональные условия (скидки, бонусы, статус)</span> будут отображаться в личном кабинете с возможностью отслеживания обновлений</li>
                <li><span>Контакты личного менеджера и канал связи с ним</span> так же будут закреплены в Вашем личном кабинете</li>
              </ul>

              <a 
                href="#" 
                class="block text-center uppercase lg:normal-case text-base w-full lg:w-1/2 ml-auto cursor-pointer bg-accent-pink hover:shadow-pink rounded-main py-4 text-white"
              >
                Личный кабинет
              </a>

            </div>
          </div>
        </div>
      </article>

      <!-- Услуга 3: Собственная кухня -->
      <article class="group service-item flex flex-col lg:flex-row lg:items-stretch lg:gap-12" 
        data-animate 
        style="--leave: fadeToRight 1.9s ease both">
        <img
          src="/images/kitchen-service.webp"
          class="service-image w-full max-lg:h-62.5 lg:w-1/2 lg:shrink-0 lg:self-stretch object-cover object-center rounded-main transition-all duration-500"
          loading="lazy"
          alt="Собственная кухня"
        />

        <div class="mt-main lg:mt-0 lg:w-1/2">
          <button 
            type="button" 
            class="text-xl lg:text-2xl w-full uppercase font-medium flex justify-between gap-6 items-center text-start border-b pb-8 cursor-pointer"
            data-accordion-target
          >
            <span>Собственная кухня</span>

               <svg 
              class="w-10 h-10 transition-transform duration-300 group-[.is-open]:rotate-45 shrink-0"
              data-accordion-icon
            >
              <use href="/sprite.svg#plus"></use>
            </svg>
          </button>

          <div 
            class="accordion-content overflow-hidden transition-[max-height] group-[.is-open]:h-auto duration-500 ease-in-out">
            <div class="overflow-hidden pt-main space-y-main">

              <p class="service-description text-xl lg:text-2xl font-bold">
                Собственная кухня ресторанного уровня прямо на площадке:
              </p>

              <ul class="accordion-list dash-list text-lg lg:text-base space-y-main">
                <li><span>Quisque suscipit</span> metus non mattis commodo. Maecenas ac tempus dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                <li><span>Integer tempus</span> varius dui vel tempor. Fusce id aliquet diam, quis pellentesque diam. Cras sagittis blandit ipsum, in euismod felis condimentum quis.</li>
                <li><span>Vestibulum</span> non enim at diam viverra feugiat. Phasellus porttitor, metus sit amet sollicitudin feugiat, ligula odio tempor sapien, in placerat dui felis at enim.</li>
              </ul>

              <a 
                href="#" 
                class="block text-center uppercase lg:normal-case text-base w-full lg:w-1/2 ml-auto cursor-pointer bg-accent-pink hover:shadow-pink rounded-main py-4 text-white"
              >
                Составить меню
              </a>

            </div>
          </div>
        </div>
      </article>

      <!-- Услуга 4: Техническое сопровождение -->
      <article class="group service-item flex flex-col lg:flex-row lg:items-stretch lg:gap-12" 
        data-animate 
        style="--leave: fadeToLeft 1.9s ease both">
        <img
          src="/images/tech-support.webp"
          class="service-image w-full max-lg:h-62.5 lg:w-1/2 lg:shrink-0 lg:self-stretch object-cover object-center rounded-main transition-all duration-500"
          loading="lazy"
          alt="Техническое сопровождение"
        />

        <div class="mt-main lg:mt-0 lg:w-1/2">
          <button 
            type="button" 
            class="text-xl lg:text-2xl w-full uppercase font-medium flex justify-between gap-6 items-center text-start border-b pb-8 cursor-pointer"
            data-accordion-target
          >
            <span>Техническое сопровождение</span>

              <svg 
              class="w-10 h-10 transition-transform duration-300 group-[.is-open]:rotate-45 shrink-0"
              data-accordion-icon
            >
              <use href="/sprite.svg#plus"></use>
            </svg>
          </button>

          <div 
            class="accordion-content overflow-hidden transition-[max-height] group-[.is-open]:h-auto duration-500 ease-in-out">
            <div class="overflow-hidden pt-main space-y-main">

              <p class="service-description text-xl lg:text-2xl font-bold">
                Команда Quattro space предоставляет <span class='text-accent-pink'>полное техническое сопровождение под ключ:</span>
              </p>

              <ul class="accordion-list dash-list text-lg lg:text-base space-y-main">
                <li><span>Звуковое оборудование:</span> акустические системы, микрофоны, пульты управления звуком, чтобы звук был чистым и качественным.</li>
                <li><span>Освещение:</span> световые эффекты, спецэффекты для организации атмосферы и поддержания интереса аудитории.</li>
                <li><span>Видео-оборудование:</span> проекторы, экраны, видеостены, 3d визуализация, камеры для воспроизведения презентаций, трансляции видеоматериалов, интерактивных игр и других видео контентов.</li>
                <li><span>Сценические декорации:</span> подиумы, спецэффекты для придания шоу выразительности и эффектности.</li>
                <li><span>Технический персонал:</span> опытные звукорежиссеры, светотехники, видеооператоры, специалисты, которые обеспечат стабильную работу оборудования.</li>
                <li><span>Координация технического продакшна</span> и взаимодействие с другими службами для согласованной работы всего оборудования.</li>
              </ul>

              <a 
                href="#" 
                class="block text-center uppercase lg:normal-case text-base w-full lg:w-1/2 ml-auto cursor-pointer bg-accent-pink hover:shadow-pink rounded-main py-4 text-white"
              >
                Перейти в раздел
              </a>

            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>`;
