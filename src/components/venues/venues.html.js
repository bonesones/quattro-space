export const venuesTemplate = `<section
  class="px-main lg:px-9 [@media(max-height:1000px)]:lg:items-start"
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
    ></div>
  </div>
</section>`;
