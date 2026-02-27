export function BaseLayout({ header, footer, content }) {
  const container = document.getElementById("app");

  if (!container) return;

  container.innerHTML = `
    ${header}
    <main>
      ${content}
    </main>
    ${footer}
  `;
}
