import { renderHomePage } from "./home.js";
import { renderShalePage } from "./venues/shale.js";
import { renderBusinessPage } from "./categories/business.js";
import { render404Page } from "./404.js";
import { renderKitchenPage } from "./kitchen.js";
import { renderBlogsPage } from "./blogs.js";
import { renderBlogPage } from "./blog.js";

export const PAGES = {
  home: {
    render: renderHomePage,
    get content() {
      return this.render();
    }
  },
  shale: {
    render: renderShalePage,
    get content() {
      return this.render();
    }
  },
  business: {
    render: renderBusinessPage,
    get content() {
      return this.render();
    }
  },
  404: {
    render: render404Page,
    get content() {
      return this.render();
    }
  },
  kitchen: {
    render: renderKitchenPage,
    get content() {
      return this.render();
    }
  },
  blogs: {
    render: renderBlogsPage,
    get content() {
      return this.render();
    }
  },
  blog: {
    render: renderBlogPage,
    get content() {
      return this.render();
    }
  }
};
