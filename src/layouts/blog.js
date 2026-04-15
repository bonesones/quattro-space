import { renderBreadcrumbs } from "@/shared/ui/breadcrumbs/breadcrumbs.js";

export const BlogLayout = () => {
  return ` 
    <div class="mt-16.5 lg:mt-26 ">
        <button type="button" class="lg:hidden back-button px-main container mx-auto">
            <svg class="w-7 h-5">
            <use href="/sprite.svg#arrow-left"></use>
            </svg>
        </button>
    
        <div class="container mx-auto max-lg:hidden px-main">
        ${renderBreadcrumbs([
          { href: "/", label: "Главная", isHome: true },
          { href: "/blogs.html", label: "Блог" },
          {
            href: `/blog.html`,
            label: "Технические решения для открытых площадок"
          }
        ])}
        </div>
    
        <h1 class="container mx-auto text-subtitle-sm lg:text-subtitle-lg font-medium text-center uppercase mt-4 lg:mt-6 px-main">
            Технические решения для открытых площадок
        </h1>

        <div class="px-main container mx-auto">
            <img src="/images/about-us-main.webp" class="w-full h-56 lg:h-100 rounded-main object-cover mt-6" alt="Изображение блога" />
        </div>

        <div class="mt-10 container mx-auto px-main">
            <div class="text-lg flex gap-8">
             <div>
                <div class="space-y-4">
                    <p>
                       <strong>Проведение мероприятий на открытых площадках</strong> требует безупречного технического подхода, поскольку от него зависит комфорт гостей, безопасность, общее впечатление. 
                    </p>

                    <p>
                      В отличие от стационарных залов, где акустика, свет, коммуникации уже являются частью архитектуры, <strong>открытая площадка для мероприятий</strong> — это свободное пространство, на котором с нуля создаётся комфортная, безопасная среда. Качество технического обеспечения определяет успех всего события, будь то корпоративный праздник, фестиваль, презентация продукта или частное торжество.
                    </p>

                    <p>
                        Профессиональный подход к оснащению уличной локации позволяет нивелировать ненастную погоду, обеспечить слышимость, видимость из любой точки. Современные технологии превращают пустое пространство в полноценную ивент-зону, где каждая деталь работает на общую идею.
                    </p>
                </div>

                <div class="mt-20 text-lg">
                    <h2 class="text-center uppercase text-xl lg:text-subtitle-md font-medium">
                        Ключевые аспекты технического обеспечения
                    </h2>

                    <p class="mt-6">
                        Важная задача при работе на свежем воздухе — создать инфраструктуру, которая будет не только функциональной, но и устойчивой к внешним факторам. Правильно подобранные технические решения помогают реализовать все запланированные элементы программы.
                    </p>

                    <div class="mt-8 lg:mt-12">
                        <div class="flex flex-col items-center gap-2">
                            <img src="/images/icons/sound.svg" class="w-10 h-10" />
                            <h3 class="uppercase text-body-lg lg:text-2xl">Звуковое оборудование</h3>
                        </div>

                        <p class="mt-6">
                            Звук в открытом пространстве ведёт себя совершенно иначе, чем в помещении. Отсутствие стен, которые отражают звуковые волны, приводит к быстрому рассеиванию звука. Поэтому для уличных событий требуется применение более мощного, специализированного оборудования. Главная цель — добиться равномерного, чистого, разборчивого звука на всей территории, чтобы каждый гость, независимо от его расположения, хорошо слышал музыку, речь спикеров.
                        </p>

                        <div class="flex flex-col 2xl:flex-row lg:gap-6">
                            <img src="/images/about-us-main.webp" class="w-full h-72 rounded-main object-cover mt-6" alt="Изображение блога" />
                            <div class="mt-6 space-y-4">
                                <p>Для этого используются линейные массивы — вертикальные кластеры акустических систем, которые позволяют точно направить звуковой поток на аудиторию, снижая звуковое загрязнение за пределами площадки. Мощные сабвуферы обеспечивают плотное, насыщенное звучание на низких частотах, что особенно важно для музыкальных событий, создавая необходимую динамику.</p>
                                <p>Для больших территорий применяется система распределённого звука, когда дополнительные колонки устанавливаются по периметру на специальных задержках, синхронизируясь с основной сценой. Защита коммутации от влаги — обязательное условие для уличной эксплуатации.</p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 lg:mt-12">
                         <div class="flex flex-col items-center gap-2">
                            <img src="/images/icons/lightning.svg" class="w-10 h-10" />
                            <h3 class="uppercase text-body-lg lg:text-2xl">Световое оборудование</h3>
                        </div>

                        <p class="mt-6">
                           Свет на уличных ивентах выполняет несколько функций: обеспечивает базовую видимость с наступлением темноты, зонирует пространство и создает уникальную атмосферу.<strong> Мероприятие на летней площадке</strong> получает совершенно новое прочтение с наступлением сумерек. Оборудование должно обладать высокой мощностью, чтобы быть эффективным, а также иметь класс защиты от погодных условий не ниже IP65. Для динамичного освещения сцены применяются интеллектуальные приборы (вращающиеся головы Wash, Spot, Beam), которые создают движущиеся лучи, текстурные узоры, меняют цвет. Для равномерной заливки больших пространств светом используются мощные прожекторы.
                        </p>

                        <p class="mt-4">
                            Особую роль в декоре играет архитектурное освещение (LED-бар — светодиодные линейные светильники). Это инструмент, который решает сразу три задачи: формирует брендовый контур, помогает навигации и задаёт атмосферу. Линейные светильники с узкой или широкой оптикой выделяют грани сцены, перила террасы, фасады и барные стойки. Для городской среды это особенно важно: контур считывается на дистанции, фоторяд получается выразительным, зрители легче ориентируются.
                        </p>
                    </div>

                    <div class="mt-8 lg:mt-12">
                         <div class="flex flex-col items-center gap-2">
                            <svg class="w-10 h-10 text-accent-pink">
                                <use href="/sprite.svg#screen"></use>
                            </svg>
                            <h3 class="uppercase text-body-lg lg:text-2xl">Видеооборудование</h3>
                        </div>

                        <p class="mt-6">
                         Использование видеоконтента — часть современных ивентов. Для трансляции видео, презентаций или логотипов на площадке для мероприятий устанавливаются светодиодные экраны. Основной параметр для такого экрана — высокая яркость, которая обеспечивает читаемость изображения даже при ярком дневном свете. Модульная конструкция позволяет собирать экраны практически любого размера, формы, что дает свободу для режиссерских, дизайнерских решений. Качественный экран становится центральным визуальным элементом.
                        </p>
                    </div>
                  </div>
                </div>

                <aside class="hidden lg:block w-87.5 shrink-0">
                    <h2 class="text-subtitle-md uppercase text-center">Другие статьи</h2>
                    
                    <ul class="mt-6 space-y-6">
                        <li>
                            <article class="bg-[#EBE9EA] rounded-main w-full p-6 space-y-8 lg:space-y-10">
                                <img src="/images/about-us-main.webp" class="w-full h-62.5 rounded-main object-cover" alt="Изображение блога" />

                                <div class="space-y-4 lg:space-y-6">
                                    <h2 class="text-subtitle-sm line-clamp-2">Технические решения для открытых площадок</h2>
                                    <p class="line-clamp-3 lg:line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.</p>
                                </div>

                                <div class="flex justify-between items-center">
                                    <a href="#" class="bg-accent-pink px-8 py-3 text-center text-white rounded-2xl">Подробнее</a>

                                    <span class="text-body-lg font-medium">09.10.2025</span>
                                </div>
                            </article>
                        </li>

                          <li>
                            <article class="bg-[#EBE9EA] rounded-main w-full p-6 space-y-8 lg:space-y-10">
                                <img src="/images/about-us-main.webp" class="w-full h-62.5 rounded-main object-cover" alt="Изображение блога" />

                                <div class="space-y-4 lg:space-y-6">
                                    <h2 class="text-subtitle-sm line-clamp-2">Технические решения для открытых площадок</h2>
                                    <p class="line-clamp-3 lg:line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.</p>
                                </div>

                                <div class="flex justify-between items-center">
                                    <a href="#" class="bg-accent-pink px-8 py-3 text-center text-white rounded-2xl">Подробнее</a>

                                    <span class="text-body-lg font-medium">09.10.2025</span>
                                </div>
                            </article>
                        </li>

                          <li>
                            <article class="bg-[#EBE9EA] rounded-main w-full p-6 space-y-8 lg:space-y-10">
                                <img src="/images/about-us-main.webp" class="w-full h-62.5 rounded-main object-cover" alt="Изображение блога" />

                                <div class="space-y-4 lg:space-y-6">
                                    <h2 class="text-subtitle-sm line-clamp-2">Технические решения для открытых площадок</h2>
                                    <p class="line-clamp-3 lg:line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.</p>
                                </div>

                                <div class="flex justify-between items-center">
                                    <a href="#" class="bg-accent-pink px-8 py-3 text-center text-white rounded-2xl">Подробнее</a>

                                    <span class="text-body-lg font-medium">09.10.2025</span>
                                </div>
                            </article>
                        </li>
                        
                    </ul>
                </aside>
            </div>

              <div class="mt-20">
                    <h2 class="text-center uppercase text-2xl lg:text-subtitle-lg font-medium">
                        Почему мы?
                    </h2>

                    <ul class="mt-6 text-body-lg lg:text-xl font-medium space-y-6 flex flex-col lg:flex-row items-center justify-center lg:gap-8">
                        <li class="flex flex-col items-center text-center gap-2">
                            <svg class="w-20 h-19 text-accent-pink">
                                <use href="/sprite.svg#kremlin"></use>
                            </svg>
                            <span>
                                Центр Москвы <br> Мясницкая 13с20
                            </span>
                        </li>

                         <li class="flex flex-col items-center text-center gap-2">
                            <svg class="w-20 h-19 text-accent-pink">
                                <use href="/sprite.svg#kremlin"></use>
                            </svg>
                            <span>
                                5 просторных залов <br> в одном комплексе
                            </span>
                        </li>

                         <li class="flex flex-col items-center text-center gap-2">
                            <svg class="w-20 h-19 text-accent-pink">
                                <use href="/sprite.svg#tech-support"></use>
                            </svg>
                            <span>
                                Собственное оборудование <br> и технический персонал
                            </span>
                        </li>

                         <li class="flex flex-col items-center text-center gap-2">
                            <svg class="w-20 h-19 text-accent-pink">
                                <use href="/sprite.svg#kremlin"></use>
                            </svg>
                            <span>
                                Полный спектр <br> дополнительных услуг <br> под ключ
                            </span>
                        </li>
                    </ul>
                </div>

                <div class="mt-20 text-lg">
                    <img src="/images/about-us-main.webp" class="w-full h-62.5 rounded-main object-cover mt-6" alt="Изображение блога" />

                    <div class="flex flex-col items-center gap-2 mt-8">
                        <img src="/images/icons/scene.svg" class="w-10 h-10" />
                        <h3 class="uppercase text-body-lg lg:text-2xl">Сценические конструкции</h3>
                    </div>

                    <p class="mt-6">
                        Сцена — это центр любого события. К конструкциям для уличного использования предъявляются повышенные требования безопасности. Они должны быть не только прочными, устойчивыми, но и способными выдерживать значительные ветровые, весовые нагрузки от светового, звукового, видеооборудования. Модульные сценические комплексы позволяют быстро монтировать подиумы нужного размера, высоты. Обязательным элементом для уличной сцены является крыша, которая защищает артистов, аппаратуру от осадков. Все несущие конструкции, включая фермовые башни для подвеса оборудования, должны иметь сертификаты, а их монтаж должен производиться с учётом всех норм безопасности.
                    </p>
                </div>

                <div class="mt-20 text-lg">
                    <h2 class="text-center uppercase text-xl lg:text-subtitle-md font-medium">Технические решения для мероприятий для открытых площадок</h2>

                    <p class="mt-6">
                        Успех ивента на свежем воздухе зависит от слаженной работы всех технических компонентов. Это единая система, где звук, свет, видео, сцена дополняют друг друга, работая на общую цель. <strong>Аренда открытой</strong> <a href="#" class="text-accent-pink underline">площадки для мероприятия</a> — это лишь первый шаг. Второй, не менее важный — её грамотное техническое оснащение. Важнейшим элементом является автономное энергоснабжение. Стабильное электричество — основа работы всего оборудования. Для этого используются генераторы необходимой мощности, а также системы распределения питания, которые обеспечивают безопасное подключение каждого прибора. Прокладка кабельных трасс требует особого внимания: все кабели должны быть надёжно защищены специальными капами, чтобы избежать повреждения коммуникаций.
                    </p>

                    <p class="mt-4">
                        Несмотря на всю привлекательность мероприятий под открытым небом, их техническая подготовка сопряжена со множеством сложностей, от акустических расчётов до зависимости от погоды. Поэтому во многих случаях более надёжной и практичной альтернативой становятся проверенные залы с выходом на веранду. Такие площадки, как <a href="#" class="text-accent-pink underline">зал «Мансарда»</a> в <b>Quattro Space</b>, предлагают идеальный компромисс: основная программа проходит в комфортном, полностью оборудованном помещении, а свежий воздух и неформальная атмосфера доступны на террасе. Этот подход снимает риски, связанные с организацией мероприятий на полностью открытых площадках, но сохраняет при этом ощущение летнего праздника.
                    </p>
                </div>
        </div>

        <section class="container mx-auto px-main mt-20 w-fit">
            <div class="h-full max-w-260">
                <h2 class="text-subtitle-md lg:text-subtitle-lg uppercase text-center">
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
                    class="px-4 py-4.5 bg-gray rounded-[10px] outline-none placeholder-black lg:order-1"
                    placeholder="Имя"
                    required
                />

                <input
                    type="tel"
                    name="phone"
                    class="phone-input px-4 py-4.5 bg-gray rounded-[10px] outline-none placeholder-black lg:order-2"
                    placeholder="Телефон"
                    required
                />

                <textarea
                    name="comment"
                    rows="3"
                    class="px-4 py-4.5 bg-gray rounded-[10px] outline-none placeholder-black lg:order-3"
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
                    class="bg-accent-pink text-white text-body-base py-4 rounded-[10px] lg:rounded-main hover:shadow-pink focus:outline-none uppercase cursor-pointer mt-3.5 lg:mt-0 lg:order-7 lg:col-start-2 lg:w-full"
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
            </div>
        </section>

        <section class="container mx-auto px-main mt-20 lg:hidden">
            <h2 class="text-subtitle-sm lg:text-subtitle-lg uppercase text-center">Другие статьи</h2>

            <div class="blogs-swiper swiper mt-6">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                         <article class="bg-[#EBE9EA] rounded-main w-full p-6 space-y-8 lg:space-y-10">
                            <img src="/images/about-us-main.webp" class="w-full h-62.5 rounded-main object-cover" alt="Изображение блога" />

                            <div class="space-y-4 lg:space-y-6">
                                <h2 class="text-subtitle-sm lg:text-subtitle-md line-clamp-2">Технические решения для открытых площадок</h2>
                                <p class="line-clamp-3 lg:line-clamp-2 lg:text-subtitle-md-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.</p>
                            </div>

                            <div class="flex justify-between items-center">
                                <a href="#" class="bg-accent-pink px-8 py-3 text-center text-white rounded-2xl">Подробнее</a>

                                <span class="text-body-lg lg:text-subtitle-md-sm font-medium">09.10.2025</span>
                            </div>
                        </article>
                    </div>

                    <div class="swiper-slide">
                         <article class="bg-[#EBE9EA] rounded-main w-full p-6 space-y-8 lg:space-y-10">
                            <img src="/images/about-us-main.webp" class="w-full h-62.5 rounded-main object-cover" alt="Изображение блога" />

                            <div class="space-y-4 lg:space-y-6">
                                <h2 class="text-subtitle-sm lg:text-subtitle-md line-clamp-2">Технические решения для открытых площадок</h2>
                                <p class="line-clamp-3 lg:line-clamp-2 lg:text-subtitle-md-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.</p>
                            </div>

                            <div class="flex justify-between items-center">
                                <a href="#" class="bg-accent-pink px-8 py-3 text-center text-white rounded-2xl">Подробнее</a>

                                <span class="text-body-lg lg:text-subtitle-md-sm font-medium">09.10.2025</span>
                            </div>
                        </article>
                    </div>

                    <div class="swiper-slide">
                         <article class="bg-[#EBE9EA] rounded-main w-full p-6 space-y-8 lg:space-y-10">
                            <img src="/images/about-us-main.webp" class="w-full h-62.5 rounded-main object-cover" alt="Изображение блога" />

                            <div class="space-y-4 lg:space-y-6">
                                <h2 class="text-subtitle-sm lg:text-subtitle-md line-clamp-2">Технические решения для открытых площадок</h2>
                                <p class="line-clamp-3 lg:line-clamp-2 lg:text-subtitle-md-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.</p>
                            </div>

                            <div class="flex justify-between items-center">
                                <a href="#" class="bg-accent-pink px-8 py-3 text-center text-white rounded-2xl">Подробнее</a>

                                <span class="text-body-lg lg:text-subtitle-md-sm font-medium">09.10.2025</span>
                            </div>
                        </article>
                    </div>

                    <div class="swiper-slide">
                         <article class="bg-[#EBE9EA] rounded-main w-full p-6 space-y-8 lg:space-y-10">
                            <img src="/images/about-us-main.webp" class="w-full h-62.5 rounded-main object-cover" alt="Изображение блога" />

                            <div class="space-y-4 lg:space-y-6">
                                <h2 class="text-subtitle-sm lg:text-subtitle-md line-clamp-2">Технические решения для открытых площадок</h2>
                                <p class="line-clamp-3 lg:line-clamp-2 lg:text-subtitle-md-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.</p>
                            </div>

                            <div class="flex justify-between items-center">
                                <a href="#" class="bg-accent-pink px-8 py-3 text-center text-white rounded-2xl">Подробнее</a>

                                <span class="text-body-lg lg:text-subtitle-md-sm font-medium">09.10.2025</span>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            <div class="blogs-swiper-pagination swiper-pagination relative! mt-8 flex justify-center"></div>
        </section>

        <div class="w-full h-72 lg:h-100 bg-gray my-14 lg:mt-20 lg:mb-25">
        </div>
      </div>
        `;
};
