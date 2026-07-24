export function initPageOutline(): void {
  const root = document.querySelector<HTMLElement>('[data-page-outline]');
  const toggle = root?.querySelector<HTMLButtonElement>('[data-outline-toggle]');
  const closeButton = root?.querySelector<HTMLButtonElement>('[data-outline-close]');
  const backdrop = root?.querySelector<HTMLElement>('[data-outline-backdrop]');
  const drawer = root?.querySelector<HTMLElement>('.page-outline__drawer');
  const links = root?.querySelectorAll<HTMLAnchorElement>('[data-outline-link]');

  if (!root || !toggle || !closeButton || !backdrop || !drawer || !links || links.length === 0) return;

  const open = (): void => {
    root.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    drawer.removeAttribute('inert');
    closeButton.focus();
  };

  const close = (): void => {
    root.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('inert', '');
    toggle.focus();
  };

  toggle.addEventListener('click', () => {
    if (root.classList.contains('is-open')) close();
    else open();
  });

  closeButton.addEventListener('click', close);
  backdrop.addEventListener('click', close);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && root.classList.contains('is-open')) close();
  });

  links.forEach((link) => {
    link.addEventListener('click', close);
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
