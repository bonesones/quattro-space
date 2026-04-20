import { initBlogSwipers } from "./sections/swipers.section.js";

export function initBlogPage() {
  if (typeof window === "undefined") return;
  initBlogSwipers();
}

