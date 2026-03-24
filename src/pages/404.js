export const render404Page = () => {
  return `
    <div class="h-[90vh] lg:h-screen">
            <img
            src="/video/bg-video-pink-fallback.webp"
            class="absolute top-0 left-0 w-full h-full object-cover video-fallback"
            alt="fallback"
            loading="lazy"
        />
      <video src='/video/bg-video-pink.mp4' autoplay loop muted playsinline class='absolute top-0 left-0 w-full h-full object-cover'></video>
    <div class="mt-22 relative z-2 w-fit mx-auto lg:hidden">
        <svg class="w-75 h-7.5 text-white">
         <use href="/sprite.svg#logo"></use>
        </svg>
    </div>

    <div class="relative z-2 flex flex-col items-center justify-center h-full bottom-14 lg:bottom-0 px-main lg:px-0 max-w-153.75 mx-auto">
        <span class="text-[175px] lg:text-[375px] bg-[linear-gradient(to_bottom,#FFFFFF,#FC8CC0,#D40063,#97094B)] bg-clip-text text-transparent">404</span>
        <span class="text-white text-base lg:text-subtitle-md font-medium relative bottom-12 lg:bottom-26">Похоже, такой страницы не существует!</span>
        <a href="/" class="bg-accent-pink py-4 rounded-main text-center text-white w-full uppercase relative lg:bottom-20">Вернуться на главную</a>
    </div>
    </div>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("video");
  video?.play().catch(() => {
    const img = document.querySelector(".video-fallback");

    if (img && video) {
      video.parentNode.replaceChild(img, video);
    }
  });
});
