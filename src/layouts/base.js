export function BaseLayout({ header, footer, content, initFns = [] }) {
  const container = document.getElementById("app");

  if (!container) return;

  const hasContent = container.children.length > 0;

  if (!hasContent) {
    container.innerHTML = `
      ${header}
      <main class="lg:min-h-screen">
        ${content}
      </main>
      ${footer}
    `;
  } else {
    const hasHeader = container.querySelector("header");
    const hasFooter = container.querySelector("footer");
    const hasMain = container.querySelector("main");

    if (!hasHeader && header) {
      container.insertAdjacentHTML("afterbegin", header);
    }

    if (!hasFooter && footer) {
      container.insertAdjacentHTML("beforeend", footer);
    }

    if (!hasMain && content) {
      const mainElement = document.createElement("main");
      mainElement.className = "lg:min-h-screen";
      mainElement.innerHTML = content;

      if (hasHeader) {
        container.insertBefore(mainElement, container.querySelector("footer"));
      } else {
        container.appendChild(mainElement);
      }
    }
  }

  initFns.forEach((fn) => {
    try {
      fn();
    } catch (error) {
      console.error("Error in init function:", error);
    }
  });
}
