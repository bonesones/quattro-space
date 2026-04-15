export function applyHomeDesktopHeaderStyle(header, nextIndex) {
  if (!header) return;

  const desktopHeader = header.querySelector(".desktop-header");

  if (nextIndex === 0 || nextIndex === 1) {
    console.log(nextIndex);
    header.classList.remove("bg-black");
    desktopHeader.classList.add("pt-12.5", "px-12");
    desktopHeader.classList.remove("px-main", "py-6");
  } else {
    header.classList.add("bg-black");
    desktopHeader.classList.remove("pt-12.5", "px-12");
    desktopHeader.classList.add("px-main", "py-6");
  }
}
