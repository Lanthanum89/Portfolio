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

  if (cards.length === 0) return;

  const selected = new Set<string>();

  const cardMatchesAny = (card: HTMLElement): boolean => {
    const languages = card.dataset.languages?.split('|') ?? [];
    const tools = card.dataset.tools?.split('|') ?? [];
    for (const value of selected) {
      if (languages.includes(value) || tools.includes(value)) return true;
    }
    return false;
  };

  const render = (): void => {
    const isDefault = selected.size === 0;

    cards.forEach((card) => {
      const matches = isDefault || cardMatchesAny(card);
      const rank = Number(card.dataset.previewRank ?? '0');
      const withinPreviewCap = !isDefault || rank < 3;
      card.classList.toggle('is-hidden', !(matches && withinPreviewCap));
    });

    groups.forEach((group) => {
      const hasVisibleCard = group.querySelector('[data-languages]:not(.is-hidden)');
      group.classList.toggle('is-empty', !hasVisibleCard);
    });

    barButtons.forEach((button) => {
      const value = button.dataset.filter ?? ALL;
      const isActive = value === ALL ? isDefault : selected.has(value);
      button.setAttribute('aria-pressed', String(isActive));
    });

    if (!status) return;

    status.innerHTML = '';
    if (isDefault) {
      status.hidden = true;
      return;
    }
    status.hidden = false;

    const label = document.createElement('span');
    label.className = 'active-filter__label';
    label.textContent = 'filtering by';
    status.appendChild(label);

    selected.forEach((value) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'active-filter__chip';
      chip.textContent = `${value} ×`;
      chip.addEventListener('click', () => {
        selected.delete(value);
        render();
      });
      status.appendChild(chip);
    });

    const clearAll = document.createElement('button');
    clearAll.type = 'button';
    clearAll.className = 'active-filter__clear';
    clearAll.textContent = 'clear all';
    clearAll.addEventListener('click', () => {
      selected.clear();
      render();
    });
    status.appendChild(clearAll);
  };

  const toggle = (value: string): void => {
    if (value === ALL) {
      selected.clear();
    } else if (selected.has(value)) {
      selected.delete(value);
    } else {
      selected.add(value);
    }
    render();
  };

  barButtons.forEach((button) => {
    button.addEventListener('click', () => {
      toggle(button.dataset.filter ?? ALL);
    });
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  tagButtons.forEach((button) => {
    button.addEventListener('click', () => {
      toggle(button.dataset.filterTag ?? ALL);
      bar.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' });
    });
  });

  render();
}
