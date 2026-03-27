export function getVenueNodes(root = document) {
  const pageRoot = root.querySelector(".shale");
  const desktopHeader = root.querySelector(".desktop-header");

  return {
    pageRoot,
    desktopHeader,
  };
}

