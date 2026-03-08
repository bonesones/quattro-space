export const initFullPage = ({ onSectionChange } = {}) => {
    const sections = document.querySelectorAll(".home section");
    if (!sections.length) return;

    let currentIndex = 0;
    let isAnimating = false;
    let lastScrollTime = 0;
    const SCROLL_DELAY = 900;

    const animations = Array.from(sections).map((_, i) => [
      `animate-current-section-${i}`,
      `animate-next-section-${i}`,
    ]);

    sections.forEach((el, i) => {
      el.classList.add("fullpage-section");
      if (i === 0) el.classList.add("active");
    });

    if (onSectionChange) {
      setTimeout(() => {
        onSectionChange(0, 0);
      }, 0);
    }

    const canScrollSection = (deltaY) => {
      const section = sections[currentIndex];

      if (
        currentIndex === 0 &&
        !section.classList.contains("initial-second")
      ) {

        return false;
      }

      const scrollTop = section.scrollTop;
      const scrollHeight = section.scrollHeight;
      const height = section.clientHeight;
      const atBottom = scrollTop + height >= scrollHeight - 1;
      const isScrollable = scrollHeight > height;
      if (deltaY < 0) return false;
      if (isScrollable && !atBottom) return false;
      return true;
    };

    const goTo = (nextIndex) => {
      if (isAnimating || nextIndex < 0 || nextIndex >= sections.length) return;

      isAnimating = true;
      const current = sections[currentIndex];
      const next = sections[nextIndex];

      const animOut = animations[currentIndex]?.[0] || "fadeOut";
      const animIn = animations[currentIndex]?.[1] || "fadeFromBottom";

      next.classList.add("active");
      current.classList.add(animOut);
      next.classList.add(animIn);

      const animatedElements = [next, ...next.querySelectorAll("*")].filter(
        (el) =>
          getComputedStyle(el).animationName &&
          getComputedStyle(el).animationName !== "none",
      );

      let finishedCount = animatedElements.length + 1;
      const handleEnd = () => {
        finishedCount--;

        if (finishedCount <= 0) {
          current.classList.remove(animOut, "active");
          next.classList.remove(animIn);
          currentIndex = nextIndex;
          isAnimating = false;
          if (onSectionChange) onSectionChange(currentIndex, nextIndex);
        }
      };

      animatedElements.forEach((el) =>
        el.addEventListener("animationend", handleEnd, { once: true }),
      );
      
      current.addEventListener("animationend", handleEnd, { once: true });

      const maxDuration = Math.max(
        ...animatedElements.map((el) => {
          const style = getComputedStyle(el);
          return (
            ((parseFloat(style.animationDuration) || 0) +
              (parseFloat(style.animationDelay) || 0)) *
            1000
          );
        }),
        3500,
      );
      setTimeout(() => {
        if (isAnimating) handleEnd();
      }, maxDuration);
    };

    document.querySelectorAll('a[href^="#"]').forEach((link) =>
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href").slice(1);
        const targetIndex = Array.from(sections).findIndex(
          (s) => s.id === targetId,
        );
        if (targetIndex === -1) return;
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
        if (canScrollSection(e.deltaY)) goTo(currentIndex + 1);
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