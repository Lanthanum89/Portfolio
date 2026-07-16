const ALL = 'all';

export function initProjectFilter(): void {
  const bar = document.querySelector<HTMLElement>('[data-filter-bar]');
  const cards = document.querySelectorAll<HTMLElement>('[data-language]');

  if (!bar || cards.length === 0) return;

  const buttons = bar.querySelectorAll<HTMLButtonElement>('button[data-filter]');
  const groups = document.querySelectorAll<HTMLElement>('[data-category-group]');

  const applyFilter = (language: string): void => {
    cards.forEach((card) => {
      const matches = language === ALL || card.dataset.language === language;
      card.classList.toggle('is-hidden', !matches);
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
}
