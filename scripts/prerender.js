import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getAssetPaths = distPath => {
  try {
    const manifestPath = path.join(distPath, ".vite/manifest.json");
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

    const mainEntry = Object.values(manifest).find(
      entry => entry.isEntry || entry.name === "main"
    );

    if (mainEntry) {
      return {
        js: `/${mainEntry.file}`,
        css: mainEntry.css ? `/${mainEntry.css[0]}` : "/css/main.css"
      };
    }
  } catch (error) {
    console.warn("⚠ Manifest not found, using default paths");
  }

  return {
    js: "/js/main.js",
    css: "/css/main.css"
  };
};

const renderLayout = async (page, assetPaths) => {
  const { renderHeader } = await import("../src/components/header/header.js");
  const { renderFooter } = await import("../src/components/footer/footer.js");

  const header = renderHeader();
  const footer = renderFooter();

  return `<!doctype html>
<html lang="ru" class="scroll-smooth lg:h-full">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Добро пожаловать в Quattro Space — уникальное место, где каждая деталь создана для того, чтобы сделать ваше событие незабываемым."
    />
    <title>${page.title}</title>
    <script type="module" crossorigin src="${assetPaths.js}"></script>
    <link rel="stylesheet" crossorigin href="${assetPaths.css}">
  </head>

  <body
    data-page="${page.slug}"
    class="font-roboto lg:bg-[url(/images/site-bg.webp)] bg-repeat-y lg:h-full"
  >
    <div id="app" class="${page.slug} lg:h-screen lg:relative">
      ${header}
      <main class="lg:min-h-screen">
        ${page.content}
      </main>
      ${footer}
    </div>
  </body>
</html>`;
};

async function prerender() {
  try {
    const dist = path.resolve(__dirname, "../dist");
    await fs.ensureDir(dist);

    const assetPaths = getAssetPaths(dist);
    console.log("📦 Asset paths:", assetPaths);

    const { PAGES } = await import("../src/pages/pagesConfig.js");

    console.log("📄 Найдены страницы:", Object.keys(PAGES));

    for (const [slug, page] of Object.entries(PAGES)) {
      console.log(`🔄 Рендеринг ${slug}...`);

      const content = page.render ? page.render() : page.content || "";

      console.log(`📊 Content length: ${content.length}`);

      const html = await renderLayout(
        {
          title: page.title,
          content: content,
          slug: slug
        },
        assetPaths
      );

      const fileName = slug === "home" ? "index.html" : `${slug}.html`;
      const filePath = path.join(dist, fileName);

      await fs.writeFile(filePath, html, "utf-8");

      console.log(`✅ Сгенерирован: ${fileName} (${content.length} символов)`);
    }

    console.log("✨ Предрендеринг завершен!");
  } catch (error) {
    console.error("❌ Ошибка предрендеринга:", error);
    process.exit(1);
  }
}

prerender();
