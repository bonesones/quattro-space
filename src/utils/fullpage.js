export const initFullPage = ({ container, onSectionChange } = {}) => {
  if (!container) throw new Error("Fullpage container is not defined");

  const sections = container.querySelectorAll("section");
  if (!sections.length) return;

  let currentIndex = 0;
  let isAnimating = false;
  let lastScrollTime = 0;
  const SCROLL_DELAY = 900;

  sections.forEach((el, i) => {
    el.classList.add("fullpage-section");
    if (i === 0) el.classList.add("active");
  });

  if (onSectionChange) setTimeout(() => onSectionChange(0, 0), 0);

  const updateBodyScroll = (index) => {
    const isLast = index === sections.length - 1;
    document.body.classList.toggle("lg:overflow-hidden", !isLast);
    document.body.classList.toggle("lg:overflow-y-auto", isLast);
  };

  const getMaxAnimationDuration = (el) => {
    const elements = [el, ...el.querySelectorAll("[data-animate]")];
    let max = 0;

    elements.forEach((el) => {
      const style = getComputedStyle(el);
      const durations = (style.animationDuration || "0s")
        .split(",")
        .map((s) => parseFloat(s) * 1000);
      const delays = (style.animationDelay || "0s")
        .split(",")
        .map((s) => parseFloat(s) * 1000);

      durations.forEach((d, i) => {
        const total = d + (delays[i] || 0);
        if (total > max) max = total;
      });
    });

    return max;
  };

  const goTo = (nextIndex) => {
    if (isAnimating || nextIndex < 0 || nextIndex >= sections.length) return;

    isAnimating = true;

    const current = sections[currentIndex];
    const next = sections[nextIndex];

    current.classList.add("is-leaving");
    next.classList.add("active", "is-entering");

    const maxDuration = Math.max(
      getMaxAnimationDuration(current),
      getMaxAnimationDuration(next),
      1000,
    );

    setTimeout(() => {
      current.classList.remove("active", "is-leaving");
      next.classList.remove("is-entering");

      currentIndex = nextIndex;
      isAnimating = false;

      updateBodyScroll(currentIndex);
      if (onSectionChange) onSectionChange(currentIndex, nextIndex);
    }, maxDuration);
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) =>
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").slice(1);
      const targetIndex = Array.from(sections).findIndex(
        (s) => s.id === targetId,
      );
      if (targetIndex === -1) return;
      if (targetIndex === currentIndex) return;
      e.preventDefault();
      goTo(targetIndex);
    }),
  );

  window.addEventListener(
    "wheel",
    (e) => {
      if (Math.abs(e.deltaY) < 30 || isAnimating) return;
      const now = Date.now();
      if (now - lastScrollTime < SCROLL_DELAY) return;
      lastScrollTime = now;
      const section = sections[currentIndex];
      const scrollTop = section.scrollTop;
      const atBottom =
        scrollTop + section.clientHeight >= section.scrollHeight - 1;
      if (e.deltaY > 0 && (!section.scrollHeight || atBottom)) {
        goTo(currentIndex + 1);
      }
    },
    { passive: true },
  );

  sections.forEach((section) =>
    section.addEventListener("click", (e) => {
      if (isAnimating) return;
      if (e.target.closest("a, button, input, label, select, textarea, form"))
        return;
      const now = Date.now();
      if (now - lastScrollTime < SCROLL_DELAY) return;
      lastScrollTime = now;
      goTo(currentIndex + 1);
    }),
  );
};
