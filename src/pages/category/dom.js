export function getCategoryNodes(root = document) {
  const pageRoot = root.querySelector(".business");
  const desktopHeader = root.querySelector(".desktop-header");

  return {
    pageRoot,
    desktopHeader,
  };
}

