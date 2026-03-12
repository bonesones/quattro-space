export const VenueLayout = (venue, breadcrumbs) => {
    return `
        <section class="pt-16.5 px-main">
            <svg class="w-7 h-5">
                <use href="/sprite.svg#arrow-left"></use>
            </svg>

            <h1 class="text-[40px] leading-normal lg:text-title-md xl:text-title-lg uppercase font-grotesk text-center">${venue.title}</h1>

            <img src=${venue.shalePageImage} fetchpriority="high" class="w-full rounded-main mt-6 h-71.25 object-cover" />

            <div class="grid grid-cols-5 gap-4 mt-6">
                ${venue.amenities.map((el) => {
                    return `
                        <div class="flex flex-col items-center gap-2">
                            <svg class="w-12.5 h-12.5 text-accent-pink">
                                <use href="/sprite.svg#${el.icon}"></use>
                            </svg>
                            <span class="text-base font-extrabold">${el.title}</span>
                            <span class="text-xs">${el.description ? el.description : ""}</span>
                        </div>
                    `
                }).join('')}
            </div>

            <div class="flex flex-wrap gap-2 mt-10">
                ${venue.events.map((event) => {
                    return `
                    <span class="text-base p-2.5 bg-gray rounded-[10px]">${event}</span>
                    `
                }).join('')}
            </div>

            <p class="text-center text-lg mt-10">
                ${venue.description}
            </p>

            <div class="text-xl font-bold text-center mt-10">
                Стоимость от <span class="text-accent-pink">${venue.price} руб/час</span>
            </div>

            <button type="button" class="w-full py-4 rounded-main border border-accent-pink ${venue.isSelected ? "bg-accent-pink text-white" : ""} text-base text-center mt-4">${venue.isSelected ? "Выбрано" : "Выбрать эту площадку"}</button>

            <p class="text-lg font-extrabold text-center mt-6   ">
                Итоговая стоимость аренды зависит от продолжительности аренды и сезона. Актуальную цену уточняйте у менеджера. Минимальный срок аренды — 6 часов.
            </p>
        </section>
    `;
}