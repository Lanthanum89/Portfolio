export type Category = 'Data & ML' | 'Games' | 'Tools & Apps';

export interface Project {
  name: string;
  slug: string;
  description: string;
  url: string;
  language: string;
  ext: string;
  tools: string[];
  category: Category;
  featured?: boolean;
}

// Featured projects mirror the pinned repos on github.com/Lanthanum89, in the same order.
// Everything else is sourced from the same account, most-recently-pushed first.
export const projects: Project[] = [
  {
    name: 'F1 2025 ML Champion Predictor',
    slug: 'f1-2025-ml-champion-predictor',
    description:
      'A machine learning system that predicts the Formula 1 2025 World Championship winner from historical race data, driver performance metrics, and feature engineering.',
    url: 'https://github.com/Lanthanum89/F1-2025-ML-Champion-Predictor',
    language: 'Jupyter Notebook',
    ext: 'ipynb',
    tools: ['Machine Learning', 'f1'],
    category: 'Data & ML',
    featured: true,
  },
  {
    name: 'ML: Predicting Gamer Behaviour',
    slug: 'ml-predicting-gamer-behaviour',
    description:
      'Machine learning for player segmentation and engagement prediction, using a synthetic dataset of 30,000 simulated players modelled on real-world gaming analytics.',
    url: 'https://github.com/Lanthanum89/ML-predicting-gamer-behaviour',
    language: 'Jupyter Notebook',
    ext: 'ipynb',
    tools: ['Machine Learning', 'Gaming Analytics'],
    category: 'Data & ML',
    featured: true,
  },
  {
    name: 'SoundTracks (Spotify Stats App)',
    slug: 'spotify-stats-app',
    description:
      'A locally hosted web app that connects to your Spotify account to display personalised listening statistics, top tracks, top artists, genre distributions, and recent history.',
    url: 'https://github.com/Lanthanum89/spotify-stats-app',
    language: 'JavaScript',
    ext: 'js',
    tools: ['Spotify API'],
    category: 'Tools & Apps',
    featured: true,
  },
  {
    name: 'Squish Pop',
    slug: 'squish-pop',
    description:
      'A kawaii balloon-popping PWA built for my daughter, with a pastel palette, blind-box collectibles, and a collect-em-all album.',
    url: 'https://github.com/Lanthanum89/squish-pop',
    language: 'JavaScript',
    ext: 'js',
    tools: ['PWA', 'Game Design'],
    category: 'Games',
    featured: true,
  },
  {
    name: 'Swim Progression App',
    slug: 'swim-progression-app',
    description:
      'A mobile-friendly swim progress tracker built for a friend. Log each swim and watch cumulative distance move along real-world routes, with milestone celebrations.',
    url: 'https://github.com/Lanthanum89/Swim-Progression-App',
    language: 'HTML',
    ext: 'html',
    tools: ['PWA', 'Fitness Tracker'],
    category: 'Tools & Apps',
    featured: true,
  },
  {
    name: 'TFL Route Planner',
    slug: 'tfl-route-planner',
    description:
      'An offline GUI app built with Python and tkinter to plan routes on the London Underground, ready to be extended with live TfL APIs.',
    url: 'https://github.com/Lanthanum89/TFL-route-planner',
    language: 'Python',
    ext: 'py',
    tools: ['tkinter', 'London Underground'],
    category: 'Tools & Apps',
    featured: true,
  },
  {
    name: 'Sound Stars',
    slug: 'sound-stars',
    description:
      'A phonics flashcard app built for the UK Year 1 national phonics screening check, designed to make revision playful for early readers.',
    url: 'https://github.com/Lanthanum89/Sound-Stars',
    language: 'TypeScript',
    ext: 'ts',
    tools: ['Education'],
    category: 'Tools & Apps',
  },
  {
    name: 'The Little Garden Arcade',
    slug: 'the-little-garden-arcade',
    description:
      'A hub of gentle, tap-to-play garden mini-games with no drag-and-drop, ever — every interaction is tap-to-select then tap-to-place, so it stays accessible regardless of fine motor control.',
    url: 'https://github.com/Lanthanum89/The-Little-Garden-Arcade',
    language: 'JavaScript',
    ext: 'js',
    tools: ['Accessibility', 'Game Design'],
    category: 'Games',
  },
  {
    name: 'Spotify Analysis',
    slug: 'spotify-analysis',
    description:
      'A Python analysis of Spotify Extended Streaming History data, digging into listening patterns, musical evolution, and behavioural trends over time.',
    url: 'https://github.com/Lanthanum89/spotify-analysis',
    language: 'Jupyter Notebook',
    ext: 'ipynb',
    tools: ['Data Analysis', 'Spotify'],
    category: 'Data & ML',
  },
  {
    name: 'Turbo Tackle',
    slug: 'turbo-tackle',
    description:
      'A retro pixel-art racer for kids — dodge the footballs. Built as a PWA with Node.js and hosted on GitHub Pages.',
    url: 'https://github.com/Lanthanum89/turbo-tackle',
    language: 'JavaScript',
    ext: 'js',
    tools: ['PWA', 'Node.js', 'Game Design'],
    category: 'Games',
  },
  {
    name: 'The Bindicator',
    slug: 'the-bindicator',
    description:
      'Never miss bin day again. A neighbourhood-shareable bin day checker with colour-coded bin icons and a full browsable calendar.',
    url: 'https://github.com/Lanthanum89/the-Bindicator',
    language: 'HTML',
    ext: 'html',
    tools: ['Utility'],
    category: 'Tools & Apps',
  },
];

export const categoryOrder: Category[] = ['Data & ML', 'Games', 'Tools & Apps'];
