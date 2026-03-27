import { categories } from "@/data/categories.js";
import { CategoryLayout } from "@/layouts/category.js";

export const renderBusinessPage = () => {
  const category = categories.find(venue => venue.id === "business");
  return CategoryLayout(category);
};
