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
  /** ISO timestamp of the repo's last push, used to sort the "all projects" list. */
  pushedAt: string;
  featured?: boolean;
}

// Featured projects mirror the pinned repos on github.com/Lanthanum89, in the same order.
// Everything else is sourced from the same account.
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
    pushedAt: '2026-07-09T01:59:21Z',
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
    pushedAt: '2026-07-09T02:00:13Z',
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
    pushedAt: '2026-07-09T02:00:59Z',
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
    pushedAt: '2026-07-15T09:26:37Z',
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
    pushedAt: '2026-07-09T02:01:13Z',
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
    pushedAt: '2026-07-09T02:01:17Z',
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
    pushedAt: '2026-07-10T22:08:37Z',
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
    pushedAt: '2026-07-09T02:52:54Z',
  },
  {
    name: 'Premier League 2003/04: The Invincibles',
    slug: 'premier-league-2003-2004-data-analysis',
    description:
      "An in-depth analysis of Arsenal's unbeaten \"Invincibles\" title-winning 2003/04 Premier League season, exploring team and match statistics and visualising performance trends with pandas and matplotlib.",
    url: 'https://github.com/Lanthanum89/Premier-League-2003-2004-Data-Analysis',
    language: 'Jupyter Notebook',
    ext: 'ipynb',
    tools: ['Data Analysis', 'pandas'],
    category: 'Data & ML',
    pushedAt: '2026-07-09T02:00:23Z',
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
    pushedAt: '2026-07-09T02:01:30Z',
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
    pushedAt: '2026-07-09T02:01:21Z',
  },
  {
    name: 'Lewis Hamilton: 2020 Season Review',
    slug: 'f1-analysis',
    description:
      "A FastF1-powered analysis of Lewis Hamilton's race wins across the 2020 Formula 1 season.",
    url: 'https://github.com/Lanthanum89/f1-analysis',
    language: 'Jupyter Notebook',
    ext: 'ipynb',
    tools: ['Data Analysis', 'FastF1'],
    category: 'Data & ML',
    pushedAt: '2026-07-09T01:59:22Z',
  },
  {
    name: 'F1 Lap Time Analyser',
    slug: 'f1-lap-time-analyser',
    description:
      'A Formula 1 session analysis tool with both a CLI and an interactive web GUI, built on FastF1 data.',
    url: 'https://github.com/Lanthanum89/f1-lap-time-analyser',
    language: 'Python',
    ext: 'py',
    tools: ['Data Analysis', 'FastF1'],
    category: 'Data & ML',
    pushedAt: '2026-07-09T01:59:25Z',
  },
  {
    name: 'Wolves History',
    slug: 'wolves-history',
    description:
      'A Python GUI for exploring Wolverhampton Wanderers stats, fixtures, results, and player information via free football APIs.',
    url: 'https://github.com/Lanthanum89/wolves-history',
    language: 'Python',
    ext: 'py',
    tools: ['Data Analysis', 'Football APIs'],
    category: 'Data & ML',
    pushedAt: '2026-07-09T02:03:04Z',
  },
  {
    name: 'FPL Analyser',
    slug: 'fpl-analyser',
    description:
      'A GUI for Fantasy Premier League that displays player statistics and suggests optimal teams based on current form and value.',
    url: 'https://github.com/Lanthanum89/fpl-analyser',
    language: 'Python',
    ext: 'py',
    tools: ['Data Analysis', 'FPL'],
    category: 'Data & ML',
    pushedAt: '2026-07-09T01:59:33Z',
  },
  {
    name: 'Instagram Analytics',
    slug: 'instagram-analytics',
    description:
      'A Python GUI for analysing Instagram account performance using the Meta Graph API.',
    url: 'https://github.com/Lanthanum89/instagram-analytics',
    language: 'Python',
    ext: 'py',
    tools: ['Data Analysis', 'Meta Graph API'],
    category: 'Data & ML',
    pushedAt: '2026-07-09T01:59:50Z',
  },
  {
    name: 'Snake',
    slug: 'snake',
    description:
      'A classic Snake game with a nostalgic Nokia 3310 aesthetic, built with Python and Pygame.',
    url: 'https://github.com/Lanthanum89/Snake',
    language: 'Python',
    ext: 'py',
    tools: ['Pygame', 'Game Design'],
    category: 'Games',
    pushedAt: '2026-07-09T02:00:46Z',
  },
  {
    name: 'Emerald City',
    slug: 'emerald-city',
    description:
      'A whimsical turtle-graphics adventure following a wandering yellow brick road through a pixel-art Emerald City to find the Wizard.',
    url: 'https://github.com/Lanthanum89/emerald-city',
    language: 'Python',
    ext: 'py',
    tools: ['Turtle Graphics', 'Game Design'],
    category: 'Games',
    pushedAt: '2026-07-09T01:59:15Z',
  },
  {
    name: 'Bohemian Rhapsody Visualiser',
    slug: 'bohemian-rhapsody',
    description:
      'A MIDI-driven music visualiser inspired by Queen\'s "Bohemian Rhapsody" — geometric particle bursts, sparkle effects for dramatic moments, and a playful ML model that predicts whether the next note will be high or low.',
    url: 'https://github.com/Lanthanum89/bohemian-rhapsody',
    language: 'Python',
    ext: 'py',
    tools: ['MIDI', 'Creative Coding'],
    category: 'Games',
    pushedAt: '2026-07-09T01:58:31Z',
  },
  {
    name: 'Roblox Experience',
    slug: 'roblox-dev',
    description:
      'A complete Roblox mini-experience showcasing modular Lua scripting, data persistence, and gameplay mechanics.',
    url: 'https://github.com/Lanthanum89/roblox-dev',
    language: 'Lua',
    ext: 'lua',
    tools: ['Roblox', 'Game Design'],
    category: 'Games',
    pushedAt: '2026-07-09T02:00:40Z',
  },
  {
    name: 'Dobble Algorithm',
    slug: 'dobble-algorithm',
    description:
      "A work-in-progress generator built around the Dobble (Spot It!) card game's symbol-matching puzzle — actively evolving, so check back for updates.",
    url: 'https://github.com/Lanthanum89/dobble-algorithm',
    language: 'HTML',
    ext: 'html',
    tools: ['Puzzle Generation'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T01:59:11Z',
  },
  {
    name: 'Console Cocktails',
    slug: 'console-cocktails',
    description:
      'A Python console app that fetches a random cocktail recipe from TheCocktailDB API, displays it, and saves it as JSON.',
    url: 'https://github.com/Lanthanum89/Console_Cocktails',
    language: 'Python',
    ext: 'py',
    tools: ['API Integration'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T02:24:12Z',
  },
  {
    name: 'Word Cloud Generator',
    slug: 'word-cloud',
    description:
      'A GUI app that generates a word cloud from any website — enter a URL and it fetches, processes, and visualises the content.',
    url: 'https://github.com/Lanthanum89/word-cloud',
    language: 'Python',
    ext: 'py',
    tools: ['Data Visualisation'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T02:03:07Z',
  },
  {
    name: 'Video Gaming Hub — Database',
    slug: 'video-gaming-hub-db',
    description:
      'A MySQL database for a fictional video game store — platforms, customers, games, and purchases, with example data, queries, and stored procedures for sales analysis and loyalty schemes.',
    url: 'https://github.com/Lanthanum89/Video-Gaming-Hub_DB',
    language: 'SQL',
    ext: 'sql',
    tools: ['MySQL', 'Database Design'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T02:02:49Z',
  },
  {
    name: 'Video Gaming Hub — API',
    slug: 'video-gaming-hub-api',
    description:
      'A Flask REST API for managing a video game lending system — games, customers, and loans, backed by a MySQL database.',
    url: 'https://github.com/Lanthanum89/Video-Gaming-Hub_API',
    language: 'Python',
    ext: 'py',
    tools: ['Flask', 'REST API'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T02:02:47Z',
  },
  {
    name: 'Spotify Stats (Desktop)',
    slug: 'spotify-stats',
    description:
      'A Python GUI showing your Spotify listening stats — top artists, tracks, and genres — over different time periods.',
    url: 'https://github.com/Lanthanum89/spotify-stats',
    language: 'Python',
    ext: 'py',
    tools: ['Spotify API', 'Tkinter'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T02:00:57Z',
  },
  {
    name: 'Calculator',
    slug: 'python-gui-calculator',
    description: 'A modern, feature-rich calculator built with Python and Tkinter.',
    url: 'https://github.com/Lanthanum89/Python_GUI-Calculator',
    language: 'Python',
    ext: 'py',
    tools: ['Tkinter'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T02:00:32Z',
  },
  {
    name: 'JavaScript Grocery Store',
    slug: 'javascript-grocery-store',
    description:
      'A client-side grocery store app with a product catalog, shopping cart, wishlist, and order history.',
    url: 'https://github.com/Lanthanum89/javascript-grocery-store',
    language: 'JavaScript',
    ext: 'js',
    tools: ['Web App'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T01:59:52Z',
  },
  {
    name: 'GitHub–Notion Sync',
    slug: 'github-notion-sync-files',
    description:
      'A simple, free way to keep a Notion database in sync with GitHub repos tagged with the "portfolio" topic.',
    url: 'https://github.com/Lanthanum89/github-notion-sync-files',
    language: 'Python',
    ext: 'py',
    tools: ['Notion API', 'Automation'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T01:59:41Z',
  },
  {
    name: 'Get Repos',
    slug: 'get-repos',
    description: 'A GUI app to fetch and display GitHub repositories for any user.',
    url: 'https://github.com/Lanthanum89/get-repos',
    language: 'Python',
    ext: 'py',
    tools: ['GitHub API'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T01:59:39Z',
  },
  {
    name: 'Gaming Backlog',
    slug: 'gaming-backlog-web-app',
    description:
      'A full-stack web app built with ASP.NET Core 9 to track, manage, and visualise a personal gaming backlog.',
    url: 'https://github.com/Lanthanum89/GamingBacklogWebApp',
    language: 'HTML',
    ext: 'html',
    tools: ['ASP.NET Core', 'C#'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T01:59:38Z',
  },
  {
    name: 'Darts Calculator',
    slug: 'darts-calculator',
    description:
      'A darts checkout calculator that suggests optimal finishing combinations for any score between 2 and 170 — CLI, GUI, and web versions.',
    url: 'https://github.com/Lanthanum89/darts-calculator',
    language: 'HTML',
    ext: 'html',
    tools: ['CLI', 'GUI', 'Web'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T01:58:51Z',
  },
  {
    name: 'Binary Clock',
    slug: 'binary-clock',
    description:
      'A binary clock available as a web app, PowerShell widget, and native Windows and Android apps.',
    url: 'https://github.com/Lanthanum89/binary-clock',
    language: 'CSS',
    ext: 'css',
    tools: ['Cross-platform'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T01:58:29Z',
  },
  {
    name: 'Budget Tracker (Web)',
    slug: 'budget-tracker-web-app',
    description:
      'An ASP.NET Core Razor Pages app to track expenses, set a budget, and stay on target.',
    url: 'https://github.com/Lanthanum89/BudgetTrackerWebApp',
    language: 'HTML',
    ext: 'html',
    tools: ['ASP.NET Core', 'Razor Pages'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T01:58:35Z',
  },
  {
    name: 'Budget Tracker (Console)',
    slug: 'budget-tracker-app',
    description:
      'A console-based budget tracker built with C# and .NET 9 — fixed expenses and variable spending across categories.',
    url: 'https://github.com/Lanthanum89/BudgetTrackerApp',
    language: 'C#',
    ext: 'cs',
    tools: ['.NET'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T01:58:33Z',
  },
];

export const categoryOrder: Category[] = ['Data & ML', 'Tools & Apps', 'Games'];

/** How many projects to show per category before a language filter is applied. */
export const CATEGORY_PREVIEW_LIMIT = 3;
