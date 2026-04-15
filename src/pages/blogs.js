import { renderBreadcrumbs } from "@/shared/ui/breadcrumbs/breadcrumbs.js";

export const renderBlogsPage = () => {
  return `
  <div class="mt-16.5 lg:mt-26 ">
    <button type="button" class="lg:hidden back-button px-main container mx-auto">
        <svg class="w-7 h-5">
        <use href="/sprite.svg#arrow-left"></use>
        </svg>
    </button>
  
    <div class="container mx-auto max-lg:hidden">
      ${renderBreadcrumbs([
        { href: "/", label: "Главная", isHome: true },
        { href: "/blogs.html", label: "Блог" }
      ])}
    </div>

    <h1 class="container mx-auto text-subtitle-lg lg:leading-none leading-normal font-normal lg:text-title-md xl:text-title-lg uppercase font-grotesk lg:mt-6 px-main">
    Блог
    </h1>

    <section class="grid container mx-auto grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-14 lg:gap-x-8 mt-6 lg:mt-14 px-main">
        <article class="bg-[#EBE9EA] rounded-main w-full p-6 space-y-8 lg:space-y-10">
            <img src="/images/about-us-main.webp" class="w-full h-62.5 rounded-main object-cover" alt="Изображение блога" />

            <div class="space-y-4 lg:space-y-6">
                <h2 class="text-subtitle-sm lg:text-subtitle-md line-clamp-2">Технические решения для открытых площадок</h2>
                <p class="line-clamp-3 lg:line-clamp-2 lg:text-subtitle-md-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.</p>
            </div>

            <div class="flex justify-between items-center">
                <a href="/blog.html" class="bg-accent-pink px-8 py-3 text-center text-white rounded-2xl">Подробнее</a>

                <span class="text-body-lg lg:text-subtitle-md-sm font-medium">09.10.2025</span>
            </div>
        </article>

        <article class="bg-[#EBE9EA] rounded-main w-full p-6 space-y-8 lg:space-y-10">
            <img src="/images/about-us-main.webp" class="w-full h-62.5 rounded-main object-cover" alt="Изображение блога" />

            <div class="space-y-4 lg:space-y-6">
                <h2 class="text-subtitle-sm lg:text-subtitle-md line-clamp-2">Технические решения для открытых площадок</h2>
                <p class="line-clamp-3 lg:line-clamp-2 lg:text-subtitle-md-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.</p>
            </div>

            <div class="flex justify-between items-center">
                <a href="/blog.html" class="bg-accent-pink px-8 py-3 text-center text-white rounded-2xl">Подробнее</a>

                <span class="text-body-lg lg:text-subtitle-md-sm font-medium">09.10.2025</span>
            </div>
        </article>


        <article class="bg-[#EBE9EA] rounded-main w-full p-6 space-y-8 lg:space-y-10">
            <img src="/images/about-us-main.webp" class="w-full h-62.5 rounded-main object-cover" alt="Изображение блога" />

            <div class="space-y-4 lg:space-y-6">
                <h2 class="text-subtitle-sm lg:text-subtitle-md line-clamp-2">Технические решения для открытых площадок</h2>
                <p class="line-clamp-3 lg:line-clamp-2 lg:text-subtitle-md-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.</p>
            </div>

            <div class="flex justify-between items-center">
                <a href="/blog.html" class="bg-accent-pink px-8 py-3 text-center text-white rounded-2xl">Подробнее</a>

                <span class="text-body-lg lg:text-subtitle-md-sm font-medium">09.10.2025</span>
            </div>
        </article>


        <article class="bg-[#EBE9EA] rounded-main w-full p-6 space-y-8 lg:space-y-10">
            <img src="/images/about-us-main.webp" class="w-full h-62.5 rounded-main object-cover" alt="Изображение блога" />

            <div class="space-y-4 lg:space-y-6">
                <h2 class="text-subtitle-sm lg:text-subtitle-md line-clamp-2">Технические решения для открытых площадок</h2>
                <p class="line-clamp-3 lg:line-clamp-2 lg:text-subtitle-md-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu vel diam sodales ultricies. Ut varius molestie accumsan. Vestibulum hendrerit felis vitae venenatis euismod.</p>
            </div>

            <div class="flex justify-between items-center">
                <a href="/blog.html" class="bg-accent-pink px-8 py-3 text-center text-white rounded-2xl">Подробнее</a>

                <span class="text-body-lg lg:text-subtitle-md-sm font-medium">09.10.2025</span>
            </div>
        </article>


        <div class="flex gap-6 items-center mx-auto mt-4 lg:col-span-2">
            <button type="button" class="cursor-pointer">
                <svg class="w-12.5 h-12.5 rotate-90">
                    <use href="/sprite.svg#arrow-down"></use>
                </svg>
            </button>

            <div class="text-subtitle-md">
                <span class="text-accent-pink">1</span>
                / 9
            </div>

            <button type="button" class="cursor-pointer">
                <svg class="w-12.5 h-12.5 -rotate-90">
                    <use href="/sprite.svg#arrow-down"></use>
                </svg>
            </button>
        </div>
    </section>

    <div class="w-full h-72 lg:h-100 bg-gray my-14 lg:mt-20 lg:mb-25">
    </div>
  </div>`;
};
