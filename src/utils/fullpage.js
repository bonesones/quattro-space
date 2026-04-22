export const initFullPage = ({
  container,
  onSectionChange,
  beforeSectionChange
} = {}) => {
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

  const updateBodyScroll = index => {
    const isLast = index === sections.length - 1;

    document.body.classList.toggle("lg:overflow-hidden", !isLast);
    document.documentElement.classList.toggle("lg:overflow-hidden", !isLast);
  };

  updateBodyScroll(currentIndex);

  if (typeof onSectionChange === "function") {
    onSectionChange(currentIndex, currentIndex);
  }

  const getMaxAnimationDuration = el => {
    const elements = [el, ...el.querySelectorAll("[data-animate]")];
    let max = 0;

    elements.forEach(el => {
      const style = getComputedStyle(el);
      const durations = (style.animationDuration || "0s")
        .split(",")
        .map(s => parseFloat(s) * 1000);
      const delays = (style.animationDelay || "0s")
        .split(",")
        .map(s => parseFloat(s) * 1000);

      durations.forEach((d, i) => {
        const total = d + (delays[i] || 0);
        if (total > max) max = total;
      });
    });

    return max;
  };

  const scrollToElementInSection = (section, elementId) => {
    const targetElement = section.querySelector(`#${elementId}`);
    if (targetElement) {
      const sectionRect = section.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();
      const targetScrollTop =
        section.scrollTop + (targetRect.top - sectionRect.top);

      section.scrollTo({
        top: Math.max(0, targetScrollTop),
        behavior: "smooth"
      });
      return true;
    }
    return false;
  };

  const goTo = (nextIndex, targetElementId = null) => {
    if (isAnimating || nextIndex < 0 || nextIndex >= sections.length) return;

    if (typeof beforeSectionChange === "function") {
      const result = beforeSectionChange(currentIndex, nextIndex);
      if (result === false) return;
    }

    isAnimating = true;

    const current = sections[currentIndex];
    const next = sections[nextIndex];

    if (nextIndex < currentIndex) {
      next.classList.add("active", "is-entering-back");
      current.classList.add("is-leaving-back");
    } else {
      next.classList.add("active", "is-entering");
      current.classList.add("is-leaving");
    }

    const maxDuration = Math.max(
      getMaxAnimationDuration(current),
      getMaxAnimationDuration(next),
      1000
    );

    setTimeout(() => {
      if (nextIndex < currentIndex) {
        current.classList.remove("active", "is-leaving-back");
        next.classList.remove("is-entering-back");
      } else {
        current.classList.remove("active", "is-leaving");
        next.classList.remove("is-entering");
      }

      sections[currentIndex].scrollTop = 0;

      currentIndex = nextIndex;
      isAnimating = false;

      updateBodyScroll(currentIndex);

      // Если передан ID элемента, скроллим к нему внутри активной секции
      if (targetElementId) {
        scrollToElementInSection(sections[currentIndex], targetElementId);
      }

      if (onSectionChange) onSectionChange(currentIndex, nextIndex);
    }, maxDuration);
  };

  const handleInitialHash = () => {
    const hash = window.location.hash;

    if (!hash) return;

    const targetId = hash.slice(1);

    const activeSection = container.querySelector("section.active");

    // Сначала проверяем, не является ли хэш ID самой секции
    const targetSectionIndex = Array.from(sections).findIndex(
      s => s.id === targetId
    );

    if (targetSectionIndex !== -1) {
      // Если это ID секции, просто переходим к ней
      setTimeout(() => {
        goTo(targetSectionIndex);
        document.body.scrollTop = 0;
        sections[targetSectionIndex].scrollTop = 0;
        window.scrollTo({ top: 0 });
        history.replaceState(
          null,
          null,
          window.location.pathname + window.location.search
        );
      }, 50);
      return;
    }

    // Ищем элемент с таким ID внутри любой секции
    let foundSectionIndex = -1;
    let foundElement = null;

    for (let i = 0; i < sections.length; i++) {
      const element = sections[i].querySelector(`#${targetId}`);
      if (element) {
        foundSectionIndex = i;
        foundElement = element;
        break;
      }
    }

    if (foundSectionIndex === -1) return;

    if (
      activeSection &&
      Array.from(sections).indexOf(activeSection) === foundSectionIndex
    ) {
      setTimeout(() => {
        scrollToElementInSection(activeSection, targetId);
        history.pushState(null, null, " ");
      }, 50);
      return;
    }

    setTimeout(() => {
      goTo(foundSectionIndex, targetId);
      document.body.scrollTop = 0;
      sections[foundSectionIndex].scrollTop = 0;
      window.scrollTo({ top: 0 });
      history.pushState(null, null, " ");
    }, 50);
  };

  handleInitialHash();

  window.addEventListener("hashchange", handleInitialHash);

  window.addEventListener(
    "wheel",
    e => {
      if (Math.abs(e.deltaY) < 30 || isAnimating) return;

      const now = Date.now();
      if (now - lastScrollTime < SCROLL_DELAY) return;
      lastScrollTime = now;

      const section = sections[currentIndex];
      const scrollTop = section.scrollTop;

      const isLastSection = currentIndex === sections.length - 1;

      const atBottom =
        scrollTop + section.clientHeight >= section.scrollHeight - 1;

      const atTop = scrollTop <= 0;

      const rect = section.getBoundingClientRect();
      const lastAtTop = rect.top >= -1;

      if (e.deltaY > 0 && (!section.scrollHeight || atBottom)) {
        goTo(currentIndex + 1);
        return;
      }

      if (e.deltaY < 0 && isLastSection && lastAtTop) {
        goTo(currentIndex - 1);
        return;
      }

      if (e.deltaY < 0 && (!section.scrollHeight || atTop) && !isLastSection) {
        goTo(currentIndex - 1);
        return;
      }
    },
    { passive: true }
  );

  sections.forEach(section =>
    section.addEventListener("click", e => {
      if (isAnimating) return;

      if (e.target.closest("a, button, input, label, select, textarea, form"))
        return;

      const now = Date.now();
      if (now - lastScrollTime < SCROLL_DELAY) return;
      lastScrollTime = now;

      const half = window.innerWidth / 2;

      if (e.clientX < half) {
        goTo(currentIndex - 1);
      } else {
        goTo(currentIndex + 1);
      }
    })
  );
};
