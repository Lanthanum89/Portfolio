const ALL = 'all';

export function initProjectFilter(): void {
  const root = document.querySelector<HTMLElement>('[data-projects-root]');
  const bar = document.querySelector<HTMLElement>('[data-filter-bar]');

  if (!root || !bar) return;

  const cards = root.querySelectorAll<HTMLElement>('[data-language]');
  const groups = root.querySelectorAll<HTMLElement>('[data-category-group]');
  const buttons = bar.querySelectorAll<HTMLButtonElement>('button[data-filter]');

  if (cards.length === 0) return;

  const applyFilter = (language: string): void => {
    cards.forEach((card) => {
      const matchesLanguage = language === ALL || card.dataset.language === language;
      const rank = Number(card.dataset.previewRank ?? '0');
      const withinPreviewCap = language !== ALL || rank < 3;
      card.classList.toggle('is-hidden', !(matchesLanguage && withinPreviewCap));
    });

    groups.forEach((group) => {
      const hasVisibleCard = group.querySelector('[data-language]:not(.is-hidden)');
      group.classList.toggle('is-empty', !hasVisibleCard);
    });

    buttons.forEach((button) => {
      const isActive = button.dataset.filter === language;
      button.setAttribute('aria-pressed', String(isActive));
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      applyFilter(button.dataset.filter ?? ALL);
    });
  });

  applyFilter(ALL);
}
