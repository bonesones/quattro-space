export function getHomeNodes(root = document) {
  const homeRoot = root.querySelector(".home");
  const header = root.querySelector("header");

  const venuesListContainer = root.getElementById("venues-list-container");
  const kitchenContainer = root.getElementById("kitchen-container");
  const servicesListContainer = root.getElementById("services-list-container");

  const contactDateInput = root.getElementById("contact-date");
  const customDateDisplay = root.getElementById("custom-date-display");

  return {
    homeRoot,
    header,
    venuesListContainer,
    kitchenContainer,
    servicesListContainer,
    contactDateInput,
    customDateDisplay
  };
}
