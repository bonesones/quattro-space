import { initKitchen } from "@/components/kitchen/kitchen.js";

export function initHomeKitchenSection({ kitchenContainer }) {
  if (kitchenContainer) initKitchen(kitchenContainer);
}

