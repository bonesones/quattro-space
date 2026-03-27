function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function renderBreadcrumbs(items) {
  return `
    <nav aria-label="Навигационная цепочка" class="hidden lg:block text-body-sm lg:mt-6">
      <ol class="breadcrumbs flex gap-2">
        ${items
          .map((item, idx) => {
            const isFirst = idx === 0;
            const prefix = isFirst ? "" : "/\n";

            if (item.isHome) {
              return `${prefix}
                <li>
                  <a href="${escapeHtml(item.href)}" class="flex items-center gap-2.5">
                    <svg class="w-3.25 h-3">
                      <use href="/sprite.svg#breadcrumb"></use>
                    </svg>
                    ${escapeHtml(item.label)}
                  </a>
                </li>
              `;
            }

            return `${prefix}
              <li>
                <a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>
              </li>
            `;
          })
          .join("")}
      </ol>
    </nav>
  `;
}

