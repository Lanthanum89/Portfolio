const HELP_TEXT = [
  'available commands:',
  '  help          show this list',
  '  whoami        who am I?',
  '  about         a bit more about me',
  '  projects      jump to featured projects',
  '  ls            list project files',
  '  contact       how to reach me',
  '  github        open my GitHub profile',
  '  theme         toggle light/dark theme',
  '  clear         clear this terminal',
];

export function initTerminal(): void {
  const root = document.querySelector<HTMLElement>('[data-terminal]');
  const output = document.querySelector<HTMLElement>('[data-terminal-output]');
  const input = document.querySelector<HTMLInputElement>('[data-terminal-input]');

  if (!root || !output || !input) return;

  let files: string[] = [];
  try {
    files = JSON.parse(root.dataset.terminalFiles ?? '[]');
  } catch {
    files = [];
  }

  const history: string[] = [];
  let historyIndex = -1;

  const scrollToBottom = (): void => {
    output.scrollTop = output.scrollHeight;
  };

  const printLines = (lines: string[], variant: 'output' | 'echo' = 'output'): void => {
    lines.forEach((line) => {
      const p = document.createElement('p');
      p.className = variant === 'echo' ? 'terminal__line terminal__line--echo' : 'terminal__line';
      p.textContent = line;
      output.appendChild(p);
    });

    while (output.children.length > 240) {
      output.removeChild(output.firstChild as ChildNode);
    }

    scrollToBottom();
  };

  const scrollToSection = (id: string): void => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const setTheme = (theme: 'dark' | 'light'): void => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    document.querySelector<HTMLButtonElement>('[data-theme-toggle]')?.dispatchEvent(new Event('sync-label'));
    const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
    if (button) {
      const next = theme === 'light' ? 'dark' : 'light';
      button.textContent = `[${next}]`;
      button.setAttribute('aria-pressed', String(theme === 'light'));
    }
  };

  const run = (raw: string): void => {
    const command = raw.trim();
    printLines([`laura@portfolio:~$ ${command}`], 'echo');

    if (command.length > 0) {
      history.push(command);
      historyIndex = history.length;
    }

    const [name, ...rest] = command.toLowerCase().split(/\s+/).filter(Boolean);
    const arg = rest.join(' ');

    switch (name) {
      case undefined:
        break;
      case 'help':
        printLines(HELP_TEXT);
        break;
      case 'whoami':
        printLines(['Laura Norwood — developer who loves data, game design, and making cool things.']);
        break;
      case 'about':
        printLines([
          'I build small, purposeful software — accessibility-minded games for my kids,',
          "data-driven analysis tools, and everyday utilities. Scrolling to 'about'...",
        ]);
        scrollToSection('#about');
        break;
      case 'projects':
        printLines(["Here's what I've built. Scrolling to featured projects..."]);
        scrollToSection('#projects');
        break;
      case 'ls':
        printLines([files.join('  ')]);
        break;
      case 'contact':
        printLines([
          'Instagram: @codermumuk',
          'LinkedIn: linkedin.com/in/laura-norwood',
          'GitHub: github.com/Lanthanum89',
        ]);
        scrollToSection('#contact');
        break;
      case 'github':
        window.open('https://github.com/Lanthanum89', '_blank', 'noreferrer');
        printLines(['Opening github.com/Lanthanum89...']);
        break;
      case 'theme':
        if (arg === 'dark' || arg === 'light') {
          setTheme(arg);
          printLines([`Switched to ${arg} theme.`]);
        } else {
          const current = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
          const next = current === 'light' ? 'dark' : 'light';
          setTheme(next);
          printLines([`Switched to ${next} theme.`]);
        }
        break;
      case 'clear':
        output.innerHTML = '';
        break;
      case 'sudo':
        if (arg === 'make me a sandwich') {
          printLines(['Okay.']);
        } else {
          printLines(["Nice try. This terminal doesn't do sudo."]);
        }
        break;
      default:
        printLines([`command not found: ${name}. Type 'help' for a list of commands.`]);
    }
  };

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const value = input.value;
      input.value = '';
      run(value);
      return;
    }

    if (event.key === 'ArrowUp') {
      if (history.length === 0) return;
      event.preventDefault();
      historyIndex = Math.max(0, historyIndex - 1);
      input.value = history[historyIndex] ?? '';
      return;
    }

    if (event.key === 'ArrowDown') {
      if (history.length === 0) return;
      event.preventDefault();
      historyIndex = Math.min(history.length, historyIndex + 1);
      input.value = history[historyIndex] ?? '';
    }
  });

  root.addEventListener('click', () => input.focus());
}
