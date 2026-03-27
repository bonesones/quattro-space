export function applyHomeDesktopHeaderStyle(header, nextIndex) {
  if (!header) return;

  if (nextIndex === 0 || nextIndex === 1) {
    header.classList.remove("lg:bg-black", "pt-6", "px-main");
    header.classList.add("pt-12.5", "px-12");
  } else {
    header.classList.add("lg:bg-black", "pt-6", "px-main");
    header.classList.remove("pt-12.5", "px-12");
  }
}

