interface StoryData {
  name: string;
  description: string;
  url: string;
  problem: string;
  attempts: string[];
  challenge?: string;
  tradeoffs?: string;
  next?: string;
  hindsight?: string;
}

interface OptionalField {
  section: HTMLElement;
  text: HTMLElement;
}

export function initStoryModal(): void {
  const dialog = document.querySelector<HTMLDialogElement>('#story-modal');
  if (!dialog) return;

  const filename = dialog.querySelector<HTMLElement>('[data-story-filename]');
  const nameEl = dialog.querySelector<HTMLElement>('[data-story-name]');
  const descriptionEl = dialog.querySelector<HTMLElement>('[data-story-description]');
  const problemEl = dialog.querySelector<HTMLElement>('[data-story-problem]');
  const attemptsEl = dialog.querySelector<HTMLOListElement>('[data-story-attempts]');
  const cta = dialog.querySelector<HTMLAnchorElement>('[data-story-cta]');
  const closeButton = dialog.querySelector<HTMLButtonElement>('[data-story-close]');

  const optionalFields: Record<'challenge' | 'tradeoffs' | 'next' | 'hindsight', OptionalField | null> = {
    challenge: getOptionalField(dialog, 'challenge'),
    tradeoffs: getOptionalField(dialog, 'tradeoffs'),
    next: getOptionalField(dialog, 'next'),
    hindsight: getOptionalField(dialog, 'hindsight'),
  };

  if (
    !filename ||
    !nameEl ||
    !descriptionEl ||
    !problemEl ||
    !attemptsEl ||
    !cta ||
    !closeButton ||
    Object.values(optionalFields).some((field) => field === null)
  ) {
    return;
  }

  const setOptional = (field: OptionalField | null, value: string | undefined): void => {
    if (!field) return;
    if (value) {
      field.text.textContent = value;
      field.section.hidden = false;
    } else {
      field.section.hidden = true;
    }
  };

  const openWith = (data: StoryData): void => {
    filename.textContent = `${data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.story`;
    nameEl.textContent = data.name;
    descriptionEl.textContent = data.description;
    problemEl.textContent = data.problem;

    attemptsEl.innerHTML = '';
    data.attempts.forEach((attempt, index) => {
      const li = document.createElement('li');
      const label = document.createElement('span');
      label.className = 'story-modal__attempt-label mono';
      label.textContent = `version ${index + 1}`;
      const p = document.createElement('p');
      p.textContent = attempt;
      li.append(label, p);
      attemptsEl.appendChild(li);
    });

    setOptional(optionalFields.challenge, data.challenge);
    setOptional(optionalFields.tradeoffs, data.tradeoffs);
    setOptional(optionalFields.next, data.next);
    setOptional(optionalFields.hindsight, data.hindsight);

    cta.href = data.url;
    dialog.showModal();
  };

  document.querySelectorAll<HTMLButtonElement>('[data-story-trigger]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      try {
        openWith(JSON.parse(trigger.dataset.story ?? '{}'));
      } catch {
        // malformed story data, nothing to show
      }
    });
  });

  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}

function getOptionalField(dialog: HTMLDialogElement, name: string): OptionalField | null {
  const section = dialog.querySelector<HTMLElement>(`[data-story-${name}-section]`);
  const text = dialog.querySelector<HTMLElement>(`[data-story-${name}]`);
  if (!section || !text) return null;
  return { section, text };
}
