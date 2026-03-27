export function getKitchenNodes(root = document) {
  const pageRoot = root.querySelector(".kitchen");
  const desktopHeader = root.querySelector(".desktop-header");
  const kitchenPageSwiper = root.querySelector(".kitchen-page-swiper");

  return {
    pageRoot,
    desktopHeader,
    kitchenPageSwiper,
  };
}

