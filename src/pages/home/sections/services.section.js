import { initServices } from "@/components/services/services.js";

export function initHomeServicesSection({ servicesListContainer }) {
  if (servicesListContainer) initServices(servicesListContainer);
}

