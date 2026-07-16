export function initScrollReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (targets.length === 0) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const delayByParent = new Map<Element, number>();
  targets.forEach((el) => {
    const parent = el.parentElement;
    const index = parent ? (delayByParent.get(parent) ?? 0) : 0;
    if (parent) delayByParent.set(parent, index + 1);
    el.style.setProperty('--reveal-delay', `${Math.min(index, 6) * 60}ms`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}
