export function initPageOutline(): void {
  const root = document.querySelector<HTMLElement>('[data-page-outline]');
  const toggle = root?.querySelector<HTMLButtonElement>('[data-outline-toggle]');
  const links = root?.querySelectorAll<HTMLAnchorElement>('[data-outline-link]');

  if (!root || !toggle || !links || links.length === 0) return;

  toggle.addEventListener('click', () => {
    const isOpen = root.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (root.classList.contains('is-open') && !root.contains(event.target as Node)) {
      root.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      root.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  const sections = Array.from(links)
    .map((link) => {
      const id = link.getAttribute('href')?.slice(1);
      return id ? document.getElementById(id) : null;
    })
    .filter((section): section is HTMLElement => Boolean(section));

  if (sections.length === 0) return;

  const setActive = (id: string): void => {
    links.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
