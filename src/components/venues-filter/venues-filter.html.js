export const venueFilterTemplate = `<section
  class="lg:absoulute lg:inset-0 px-main lg:pt-16 w-full lg:flex lg:items-center lg:justify-center max-lg:scroll-mt-20 lg:overflow-y-hidden"
  id="section-2"
  style="--leave: fadeToTopWithOpacity 2s ease both"
>
  <div data-animate style="--enter: fadeFromBottomVH 1.4s ease 0.4s both">
    <h2
      class="uppercase font-medium text-subtitle-lg-sm lg:text-subtitle-lg lg leading-sectionTitle text-center"
    >
      Быстрый подбор площадки
    </h2>

    <form
      class="filter-form venue-filter-form mt-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:justify-items-center gap-y-10 md:max-w-247 mx-auto"
    >
      <fieldset class="flex flex-col gap-6">
        <legend
          class="text-subtitle-sm lg:text-subtitle-md text-center font-medium"
        >
          По мероприятию
        </legend>

        <div
          id="event-types-container"
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 lg:gap-y-4 gap-x-6 mt-6 lg:mt-8"
        >
          <!-- Тимбилдинг -->
          <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
            <input type="checkbox" name="event_type" value="teamBuilding" class="hidden peer">
            <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
              <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                <use href="/sprite.svg#check"></use>
              </svg>
            </div>
            <span class="flex-1">Тимбилдинг</span>
          </label>

          <!-- Лекция -->
          <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
            <input type="checkbox" name="event_type" value="lection" class="hidden peer">
            <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
              <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                <use href="/sprite.svg#check"></use>
              </svg>
            </div>
            <span class="flex-1">Лекция</span>
          </label>

          <!-- Фуршет -->
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

          <!-- Банкет -->
          <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
            <input type="checkbox" name="event_type" value="banquet" class="hidden peer">
            <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
              <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                <use href="/sprite.svg#check"></use>
              </svg>
            </div>
            <span class="flex-1">Банкет</span>
          </label>

          <!-- Вебинар -->
          <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
            <input type="checkbox" name="event_type" value="webInn" class="hidden peer">
            <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
              <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                <use href="/sprite.svg#check"></use>
              </svg>
            </div>
            <span class="flex-1">Вебинар</span>
          </label>

          <!-- Выставка -->
          <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
            <input type="checkbox" name="event_type" value="event" class="hidden peer">
            <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
              <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                <use href="/sprite.svg#check"></use>
              </svg>
            </div>
            <span class="flex-1">Выставка</span>
          </label>

          <!-- Семинар -->
          <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
            <input type="checkbox" name="event_type" value="seminar" class="hidden peer">
            <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
              <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                <use href="/sprite.svg#check"></use>
              </svg>
            </div>
            <span class="flex-1">Семинар</span>
          </label>

          <!-- Конференция -->
          <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
            <input type="checkbox" name="event_type" value="conference" class="hidden peer">
            <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
              <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                <use href="/sprite.svg#check"></use>
              </svg>
            </div>
            <span class="flex-1">Конференция</span>
          </label>

          <!-- Презентация -->
          <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
            <input type="checkbox" name="event_type" value="presentation" class="hidden peer">
            <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
              <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                <use href="/sprite.svg#check"></use>
              </svg>
            </div>
            <span class="flex-1">Презентация</span>
          </label>

          <!-- Бизнес-завтрак -->
          <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
            <input type="checkbox" name="event_type" value="businessBreak" class="hidden peer">
            <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
              <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                <use href="/sprite.svg#check"></use>
              </svg>
            </div>
            <span class="flex-1">Бизнес-завтрак</span>
          </label>

          <!-- Корпоратив -->
          <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
            <input type="checkbox" name="event_type" value="corporate" class="hidden peer">
            <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
              <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                <use href="/sprite.svg#check"></use>
              </svg>
            </div>
            <span class="flex-1">Корпоратив</span>
          </label>
        </div>
      </fieldset>

      <fieldset class="flex flex-col gap-6">
        <legend
          class="text-subtitle-md-sm lg:text-subtitle-md text-center font-medium"
        >
          По вместимости
        </legend>

        <div
          id="venue-capacity-container"
          class="grid grid-cols-1 gap-y-6 lg:gap-y-4 mt-6 lg:mt-8"
        >
          <!-- До 60 человек -->
          <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
            <input type="checkbox" name="venue_capacity" value="60" class="hidden peer">
            <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
              <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                <use href="/sprite.svg#check"></use>
              </svg>
            </div>
            <span class="flex-1">До 60 человек</span>
          </label>

          <!-- От 60 до 120 человек -->
          <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
            <input type="checkbox" name="venue_capacity" value="60-120" class="hidden peer">
            <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
              <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                <use href="/sprite.svg#check"></use>
              </svg>
            </div>
            <span class="flex-1">От 60 до 120 человек</span>
          </label>

          <!-- От 120 до 150 человек -->
          <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
            <input type="checkbox" name="venue_capacity" value="120-150" class="hidden peer">
            <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
              <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                <use href="/sprite.svg#check"></use>
              </svg>
            </div>
            <span class="flex-1">От 120 до 150 человек</span>
          </label>

          <!-- От 150 до 250 человек -->
          <label class="flex items-center gap-3 lg:gap-2 cursor-pointer">
            <input type="checkbox" name="venue_capacity" value="150-250" class="hidden peer">
            <div class="w-9 lg:w-4.5 h-9 lg:h-4.5 shrink-0 border-2 border-accent-pink resize-none rounded-xl lg:rounded-md flex items-center justify-center peer-checked:[&_svg]:block">
              <svg class="w-4 lg:w-2 h-3 lg:h-1.25 hidden fill-current text-accent-pink">
                <use href="/sprite.svg#check"></use>
              </svg>
            </div>
            <span class="flex-1">От 150 до 250 человек</span>
          </label>

          <!-- От 250 до 400 человек -->
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

      <button
        type="submit"
        class="bg-accent-pink justify-self-center lg:col-span-2 max-w-156.75 w-full text-center text-white py-4 rounded-main uppercase text-base cursor-pointer hover:shadow-pink"
      >
        Подобрать площадку
      </button>
    </form>
  </div>
</section>`;
