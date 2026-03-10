export function BaseLayout({ header, footer, content, initFns = [] }) {
  const container = document.getElementById("app");

  if (!container) return;

  container.innerHTML = `
    ${header}
    <main class="lg:min-h-screen">
      ${content}
    </main>
    ${footer}
  `;

  initFns.forEach((fn) => fn());
}
