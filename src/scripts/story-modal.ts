interface StoryData {
  name: string;
  description: string;
  url: string;
  problem: string;
  attempts: string[];
  challenge?: string;
  next?: string;
}

export function initStoryModal(): void {
  const dialog = document.querySelector<HTMLDialogElement>('#story-modal');
  if (!dialog) return;

  const filename = dialog.querySelector<HTMLElement>('[data-story-filename]');
  const nameEl = dialog.querySelector<HTMLElement>('[data-story-name]');
  const descriptionEl = dialog.querySelector<HTMLElement>('[data-story-description]');
  const problemEl = dialog.querySelector<HTMLElement>('[data-story-problem]');
  const attemptsEl = dialog.querySelector<HTMLOListElement>('[data-story-attempts]');
  const challengeSection = dialog.querySelector<HTMLElement>('[data-story-challenge-section]');
  const challengeEl = dialog.querySelector<HTMLElement>('[data-story-challenge]');
  const nextSection = dialog.querySelector<HTMLElement>('[data-story-next-section]');
  const nextEl = dialog.querySelector<HTMLElement>('[data-story-next]');
  const cta = dialog.querySelector<HTMLAnchorElement>('[data-story-cta]');
  const closeButton = dialog.querySelector<HTMLButtonElement>('[data-story-close]');

  if (
    !filename ||
    !nameEl ||
    !descriptionEl ||
    !problemEl ||
    !attemptsEl ||
    !challengeSection ||
    !challengeEl ||
    !nextSection ||
    !nextEl ||
    !cta ||
    !closeButton
  ) {
    return;
  }

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
      label.textContent = `attempt ${index + 1}`;
      const p = document.createElement('p');
      p.textContent = attempt;
      li.append(label, p);
      attemptsEl.appendChild(li);
    });

    if (data.challenge) {
      challengeEl.textContent = data.challenge;
      challengeSection.hidden = false;
    } else {
      challengeSection.hidden = true;
    }

    if (data.next) {
      nextEl.textContent = data.next;
      nextSection.hidden = false;
    } else {
      nextSection.hidden = true;
    }

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
