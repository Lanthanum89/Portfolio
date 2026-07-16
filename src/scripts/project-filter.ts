const ALL = 'all';

export function initProjectFilter(): void {
  const root = document.querySelector<HTMLElement>('[data-projects-root]');
  const bar = document.querySelector<HTMLElement>('[data-filter-bar]');

  if (!root || !bar) return;

  const cards = root.querySelectorAll<HTMLElement>('[data-languages]');
  const groups = root.querySelectorAll<HTMLElement>('[data-category-group]');
  const barButtons = bar.querySelectorAll<HTMLButtonElement>('button[data-filter]');
  const tagButtons = root.querySelectorAll<HTMLButtonElement>('button[data-filter-tag]');
  const status = root.querySelector<HTMLElement>('[data-active-filter]');
  const statusLabel = status?.querySelector<HTMLElement>('[data-active-filter-label]');

  if (cards.length === 0) return;

  const cardMatches = (card: HTMLElement, value: string): boolean => {
    const languages = card.dataset.languages?.split('|') ?? [];
    if (languages.includes(value)) return true;
    const tools = card.dataset.tools?.split('|') ?? [];
    return tools.includes(value);
  };

  const applyFilter = (value: string): void => {
    cards.forEach((card) => {
      const matches = value === ALL || cardMatches(card, value);
      const rank = Number(card.dataset.previewRank ?? '0');
      const withinPreviewCap = value !== ALL || rank < 3;
      card.classList.toggle('is-hidden', !(matches && withinPreviewCap));
    });

    groups.forEach((group) => {
      const hasVisibleCard = group.querySelector('[data-languages]:not(.is-hidden)');
      group.classList.toggle('is-empty', !hasVisibleCard);
    });

    barButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.filter === value));
    });

    if (status && statusLabel) {
      if (value === ALL) {
        status.hidden = true;
      } else {
        statusLabel.textContent = value;
        status.hidden = false;
      }
    }
  };

  barButtons.forEach((button) => {
    button.addEventListener('click', () => {
      applyFilter(button.dataset.filter ?? ALL);
    });
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  tagButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.dataset.filterTag ?? ALL;
      applyFilter(value);
      bar.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' });
    });
  });

  status?.querySelector('[data-clear-filter]')?.addEventListener('click', () => {
    applyFilter(ALL);
  });

  applyFilter(ALL);
}
