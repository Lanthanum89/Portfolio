export interface Project {
  name: string;
  description: string;
  url: string;
  tags: string[];
  featured?: boolean;
}

// Sourced from github.com/Lanthanum89 — kept roughly in order of most recently pushed.
export const projects: Project[] = [
  {
    name: 'Squish Pop',
    description:
      'A kawaii balloon-popping PWA built for my daughter, with a pastel pink/blue palette, Kpop energy, blind-box collectibles, and a collect-em-all album.',
    url: 'https://github.com/Lanthanum89/squish-pop',
    tags: ['PWA', 'JavaScript', 'Game Design'],
    featured: true,
  },
  {
    name: 'Sound Stars',
    description:
      'A phonics flashcard app built for the UK Year 1 national phonics screening check, designed to make revision playful for early readers.',
    url: 'https://github.com/Lanthanum89/Sound-Stars',
    tags: ['TypeScript', 'Education'],
    featured: true,
  },
  {
    name: 'The Little Garden Arcade',
    description:
      'A hub of gentle, tap-to-play garden mini-games with no drag-and-drop, ever — every interaction is tap-to-select then tap-to-place, so it stays accessible regardless of fine motor control.',
    url: 'https://github.com/Lanthanum89/The-Little-Garden-Arcade',
    tags: ['JavaScript', 'Accessibility', 'Game Design'],
    featured: true,
  },
  {
    name: 'Spotify Analysis',
    description:
      'A comprehensive Python analysis of Spotify Extended Streaming History data, digging into listening patterns, musical evolution, and behavioural trends over time.',
    url: 'https://github.com/Lanthanum89/spotify-analysis',
    tags: ['Python', 'Data Analysis', 'Jupyter'],
    featured: true,
  },
  {
    name: 'Turbo Tackle',
    description:
      'A retro pixel-art racer for kids — dodge the footballs. Built as a PWA with Node.js and hosted on GitHub Pages.',
    url: 'https://github.com/Lanthanum89/turbo-tackle',
    tags: ['PWA', 'Node.js', 'Game Design'],
  },
  {
    name: 'The Bindicator',
    description:
      'Never miss bin day again. A neighbourhood-shareable bin day checker with colour-coded bin icons and a full browsable calendar.',
    url: 'https://github.com/Lanthanum89/the-Bindicator',
    tags: ['HTML', 'Utility'],
  },
];
