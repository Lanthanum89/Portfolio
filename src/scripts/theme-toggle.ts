type Theme = 'dark' | 'light';

export function initThemeToggle(): void {
  const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  if (!button) return;

  const setLabel = (theme: Theme): void => {
    button.textContent = theme === 'light' ? '[light]' : '[dark]';
    button.setAttribute('aria-pressed', String(theme === 'light'));
    button.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`);
  };

  const current = (document.documentElement.dataset.theme as Theme) ?? 'dark';
  setLabel(current);

  button.addEventListener('click', () => {
    const next: Theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    setLabel(next);
  });
}
