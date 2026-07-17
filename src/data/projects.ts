export type Category = 'Data & ML' | 'Sport' | 'Games' | 'Tools & Apps';

export interface Project {
  name: string;
  slug: string;
  description: string;
  url: string;
  /** All languages GitHub reports for the repo, ordered by share of code. */
  languages: string[];
  ext: string;
  tools: string[];
  category: Category;
  /** ISO timestamp of the repo's last push, used to sort the "all projects" list. */
  pushedAt: string;
  featured?: boolean;
  /** Always sorts first within its category, ahead of more recently pushed projects. */
  spotlight?: boolean;
  /** Optional narrative shown behind a "the story" disclosure on the card. DRAFT copy, not yet fact-checked. */
  story?: {
    problem: string;
    attempts: string[];
    challenge?: string;
    next?: string;
  };
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
    languages: ['Jupyter Notebook', 'Python'],
    ext: 'ipynb',
    tools: ['Machine Learning', 'f1'],
    category: 'Sport',
    pushedAt: '2026-07-09T01:59:21Z',
    featured: true,
    story: {
      problem: 'Predicting an F1 champion from gut feel is fun at the pub, not so convincing as an engineer.',
      attempts: [
        'Started with a simple model on raw championship standings.',
        'Layered in historical race data and driver performance metrics, then spent most of the time on feature engineering rather than the model itself.',
      ],
      challenge: 'Getting from "a model that runs" to a model whose predictions you\'d actually trust, given how noisy a single F1 season is.',
      next: 'Feed in live 2025 race results as the season progresses, instead of a one-shot prediction.',
    },
  },
  {
    name: 'ML: Predicting Gamer Behaviour',
    slug: 'ml-predicting-gamer-behaviour',
    description:
      'Machine learning for player segmentation and engagement prediction, using a synthetic dataset of 30,000 simulated players modelled on real-world gaming analytics.',
    url: 'https://github.com/Lanthanum89/ML-predicting-gamer-behaviour',
    languages: ['Jupyter Notebook'],
    ext: 'ipynb',
    tools: ['Machine Learning', 'Gaming Analytics'],
    category: 'Data & ML',
    pushedAt: '2026-07-09T02:00:13Z',
    featured: true,
    story: {
      problem: 'Wanted to practice real player-segmentation techniques without access to an actual studio\'s live data.',
      attempts: [
        'Built a synthetic dataset of 30,000 simulated players modelled on real-world gaming analytics.',
        'Used it to test segmentation and engagement-prediction approaches end to end.',
      ],
      challenge: 'Making the synthetic data realistic enough that the patterns the model finds would actually generalise.',
      next: 'Try the same pipeline against a real, messier dataset.',
    },
  },
  {
    name: 'SoundTracks (Spotify Stats App)',
    slug: 'spotify-stats-app',
    description:
      'A locally hosted web app that connects to your Spotify account to display personalised listening statistics, top tracks, top artists, genre distributions, and recent history.',
    url: 'https://github.com/Lanthanum89/spotify-stats-app',
    languages: ['JavaScript', 'CSS', 'HTML'],
    ext: 'js',
    tools: ['Spotify API'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T02:00:59Z',
    featured: true,
    story: {
      problem: 'Spotify Wrapped only happens once a year, and I wanted to see my stats whenever I felt like it.',
      attempts: [
        'Started as a script that just pulled top tracks.',
        'Grew into a full locally hosted web app with genre distributions and recent history, once top tracks alone wasn\'t enough.',
      ],
      challenge: 'Working within Spotify\'s API and auth flow for something that was only ever going to run on my own machine.',
      next: 'A hosted version that doesn\'t need to run locally.',
    },
  },
  {
    name: 'Squish Pop',
    slug: 'squish-pop',
    description:
      'A kawaii balloon-popping PWA built for my daughter, with a pastel palette, blind-box collectibles, and a collect-em-all album.',
    url: 'https://github.com/Lanthanum89/squish-pop',
    languages: ['JavaScript', 'CSS', 'HTML'],
    ext: 'js',
    tools: ['PWA', 'Game Design'],
    category: 'Games',
    pushedAt: '2026-07-15T09:26:37Z',
    featured: true,
    story: {
      problem: 'My daughter wanted a game that was just enjoyable: nothing to lose, no fail state, nothing stressful.',
      attempts: [
        'Started with a simple pop mechanic and a pastel palette.',
        'Added blind-box collectibles and a collect-em-all album so there was a reason to keep coming back.',
      ],
      challenge: 'Making a PWA that felt like a real, polished app on a small screen rather than a browser toy, for a five-year-old\'s attention span.',
      next: 'More collectible sets, and an in-game shop.',
    },
  },
  {
    name: 'Swim Progression App',
    slug: 'swim-progression-app',
    description:
      'A mobile-friendly swim progress tracker built for a friend. Log each swim and watch cumulative distance move along real-world routes, with milestone celebrations.',
    url: 'https://github.com/Lanthanum89/Swim-Progression-App',
    languages: ['JavaScript', 'HTML'],
    ext: 'js',
    tools: ['PWA', 'Fitness Tracker'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T02:01:13Z',
    featured: true,
    story: {
      problem: 'A friend wanted to see her swim distance add up to something real, not just a number in a spreadsheet.',
      attempts: [
        'Started with a simple distance log.',
        'Mapped cumulative distance onto real-world routes so every swim visibly moved her further along, with milestone celebrations to mark the distance.',
      ],
      challenge: 'Making the progress feel motivating rather than just a bigger number, on a screen she\'d actually check after a swim.',
      next: 'Let her pick her own route, instead of a fixed one.',
    },
  },
  {
    name: 'TFL Route Planner',
    slug: 'tfl-route-planner',
    description:
      'An offline GUI app built with Python and tkinter to plan routes on the London Underground, ready to be extended with live TfL APIs.',
    url: 'https://github.com/Lanthanum89/TFL-route-planner',
    languages: ['Python'],
    ext: 'py',
    tools: ['tkinter', 'London Underground'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T02:01:17Z',
    featured: true,
    story: {
      problem: 'Wanted a route planner that didn\'t need a live API call for something as static as the tube map.',
      attempts: [
        'Built the core routing logic and a Python and tkinter GUI to work entirely offline.',
      ],
      challenge: 'Modelling the Underground network in a way that was simple enough to reason about but still gave correct routes.',
      next: 'Wire it up to live TfL APIs for real-time disruptions.',
    },
  },
  {
    name: 'Sound Stars',
    slug: 'sound-stars',
    description:
      'A phonics flashcard app built for the UK Year 1 national phonics screening check, designed to make revision playful for early readers.',
    url: 'https://github.com/Lanthanum89/Sound-Stars',
    languages: ['TypeScript', 'CSS', 'HTML', 'JavaScript'],
    ext: 'ts',
    tools: ['Education'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-10T22:08:37Z',
    story: {
      problem: 'Phonics revision for the Year 1 screening check is important and, for a five or six-year-old, deeply boring.',
      attempts: [
        'Started with plain digital flashcards.',
        'Reworked them to be playful rather than test-like, so revision didn\'t feel like revision.',
      ],
      challenge: 'Keeping it genuinely playful without losing the actual phonics structure the screening check tests.',
      next: 'More sound sets covering the full phonics phases.',
    },
  },
  {
    name: 'The Little Garden Arcade',
    slug: 'the-little-garden-arcade',
    description:
      'A hub of gentle, tap-to-play garden mini-games with no drag-and-drop, ever. Every interaction is tap-to-select then tap-to-place, so it stays accessible regardless of fine motor control.',
    url: 'https://github.com/Lanthanum89/The-Little-Garden-Arcade',
    languages: ['JavaScript', 'HTML', 'CSS'],
    ext: 'js',
    tools: ['Accessibility', 'Game Design'],
    category: 'Games',
    pushedAt: '2026-07-09T02:52:54Z',
    story: {
      problem: 'Drag-and-drop looks great in a demo and fails the first small child, or anyone without precise fine motor control, who tries to use it.',
      attempts: [
        'Started with one drag-based mini-game, the usual approach.',
        'Rebuilt the whole interaction model around tap-to-select then tap-to-place instead, and made it the rule for every game in the hub, not just a workaround for one.',
      ],
      challenge: 'Making tap-to-select feel as immediate as drag-and-drop, instead of like a compromise.',
      next: 'More mini-games under the same no-drag-and-drop rule.',
    },
  },
  {
    name: 'Premier League 2003/04: The Invincibles',
    slug: 'premier-league-2003-2004-data-analysis',
    description:
      "An in-depth analysis of Arsenal's unbeaten \"Invincibles\" title-winning 2003/04 Premier League season, exploring team and match statistics and visualising performance trends with pandas and matplotlib.",
    url: 'https://github.com/Lanthanum89/Premier-League-2003-2004-Data-Analysis',
    languages: ['Jupyter Notebook'],
    ext: 'ipynb',
    tools: ['Data Analysis', 'pandas'],
    category: 'Sport',
    pushedAt: '2026-07-09T02:00:23Z',
    story: {
      problem: 'Wanted to know what an unbeaten Premier League season actually looks like in the numbers, not just the highlight reel.',
      attempts: [
        'Pulled together team and match statistics for the season.',
        'Used pandas and matplotlib to visualise the performance trends behind the unbeaten run.',
      ],
      challenge: 'Finding the stats that actually explained the Invincibles run, rather than just restating that they won a lot.',
      next: 'Compare the season against other unbeaten runs in Europe.',
    },
  },
  {
    name: 'Turbo Tackle',
    slug: 'turbo-tackle',
    description:
      'A retro pixel-art racer for kids: dodge the footballs. Built as a PWA with Node.js and hosted on GitHub Pages.',
    url: 'https://github.com/Lanthanum89/turbo-tackle',
    languages: ['JavaScript', 'CSS', 'HTML'],
    ext: 'js',
    tools: ['PWA', 'Node.js', 'Game Design'],
    category: 'Games',
    pushedAt: '2026-07-09T02:01:30Z',
    story: {
      problem: 'Wanted a simple, fast game for kids that didn\'t need an app store install.',
      attempts: [
        'Built it as a retro pixel-art racer with a single dodge-the-footballs mechanic.',
        'Packaged it as a PWA with Node.js so it installs straight from GitHub Pages.',
      ],
      challenge: 'Keeping the difficulty curve fair for a young player without making it boring after five minutes.',
      next: 'More levels and a couple more obstacle types.',
    },
  },
  {
    name: 'The Bindicator',
    slug: 'the-bindicator',
    description:
      'Never miss bin day again. A neighbourhood-shareable bin day checker with colour-coded bin icons and a full browsable calendar.',
    url: 'https://github.com/Lanthanum89/the-Bindicator',
    languages: ['JavaScript', 'HTML'],
    ext: 'js',
    tools: ['Utility'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T02:01:21Z',
    spotlight: true,
    story: {
      problem: 'My street kept missing bin day, mine included. Everyone had their own half-working way of remembering it.',
      attempts: [
        'Started as a reminder just for myself.',
        'Realised the real fix was making it something the whole street could glance at, so it became a shareable page with colour-coded bin icons and a full browsable calendar.',
      ],
      challenge: 'Keeping it dead simple. A bin tracker that takes more effort than remembering bin day defeats the point.',
      next: 'Push notifications, so it reaches you instead of you having to remember to open it.',
    },
  },
  {
    name: 'Lewis Hamilton: 2020 Season Review',
    slug: 'f1-analysis',
    description:
      "A FastF1-powered analysis of Lewis Hamilton's race wins across the 2020 Formula 1 season.",
    url: 'https://github.com/Lanthanum89/f1-analysis',
    languages: ['Jupyter Notebook'],
    ext: 'ipynb',
    tools: ['Data Analysis', 'FastF1'],
    category: 'Sport',
    pushedAt: '2026-07-09T01:59:22Z',
    story: {
      problem: 'Wanted to look past the final standings and see what actually won Hamilton each race in 2020.',
      attempts: [
        'Pulled race data with FastF1.',
        'Broke down each win individually rather than just summarising the season as a whole.',
      ],
      challenge: 'Working with FastF1\'s raw telemetry data cleanly enough to make the analysis readable rather than a wall of numbers.',
      next: 'Extend the same analysis to another driver\'s season.',
    },
  },
  {
    name: 'F1 Lap Time Analyser',
    slug: 'f1-lap-time-analyser',
    description:
      'A Formula 1 session analysis tool with both a CLI and an interactive web GUI, built on FastF1 data.',
    url: 'https://github.com/Lanthanum89/f1-lap-time-analyser',
    languages: ['Python'],
    ext: 'py',
    tools: ['Data Analysis', 'FastF1'],
    category: 'Sport',
    pushedAt: '2026-07-09T01:59:25Z',
    story: {
      problem: 'Wanted to explore F1 lap time data properly, on the couch, not just from a terminal.',
      attempts: [
        'Started as a CLI tool on top of FastF1 data.',
        'Added an interactive web GUI once the CLI proved the data pipeline worked.',
      ],
      challenge: 'Keeping both interfaces sharing the same core analysis logic instead of drifting apart.',
      next: 'Add session-to-session comparison.',
    },
  },
  {
    name: 'FPL Analyser',
    slug: 'fpl-analyser',
    description:
      'A GUI for Fantasy Premier League that displays player statistics and suggests optimal teams based on current form and value.',
    url: 'https://github.com/Lanthanum89/fpl-analyser',
    languages: ['Python'],
    ext: 'py',
    tools: ['Data Analysis', 'FPL'],
    category: 'Sport',
    pushedAt: '2026-07-09T01:59:33Z',
    story: {
      problem: 'Fantasy Premier League team selection is really a small optimisation problem wearing a football shirt.',
      attempts: [
        'Pulled player statistics into a GUI.',
        'Added team suggestions based on current form and value once browsing the raw stats wasn\'t enough on its own.',
      ],
      challenge: 'Balancing "optimal on paper" against picks that actually make sense given price and form volatility.',
      next: 'Factor in fixture difficulty, not just current form.',
    },
  },
  {
    name: 'Instagram Analytics',
    slug: 'instagram-analytics',
    description:
      'A Python GUI for analysing Instagram account performance using the Meta Graph API.',
    url: 'https://github.com/Lanthanum89/instagram-analytics',
    languages: ['Python', 'Batchfile'],
    ext: 'py',
    tools: ['Data Analysis', 'Meta Graph API'],
    category: 'Data & ML',
    pushedAt: '2026-07-09T01:59:50Z',
    story: {
      problem: 'Wanted a clearer view of account performance than Instagram\'s own in-app stats give you.',
      attempts: [
        'Built a Python GUI on top of the Meta Graph API to pull the underlying data directly.',
      ],
      challenge: 'Working within the Meta Graph API\'s constraints and rate limits for something meant to be checked casually.',
      next: 'Track trends over time instead of a single snapshot.',
    },
  },
  {
    name: 'Snake',
    slug: 'snake',
    description:
      'A classic Snake game with a nostalgic Nokia 3310 aesthetic, built with Python and Pygame.',
    url: 'https://github.com/Lanthanum89/Snake',
    languages: ['Python'],
    ext: 'py',
    tools: ['Pygame', 'Game Design'],
    category: 'Games',
    pushedAt: '2026-07-09T02:00:46Z',
    story: {
      problem: 'Wanted a small, complete project to properly learn Pygame, not another to-do list app.',
      attempts: [
        'Built the classic Snake mechanic first.',
        'Styled it with a Nokia 3310 aesthetic to make a well-worn tutorial project feel like mine.',
      ],
      challenge: 'Getting the movement and collision feel right, which is most of what makes Snake actually fun.',
      next: 'A couple of alternate modes, like a speed-up mode.',
    },
  },
  {
    name: 'Emerald City',
    slug: 'emerald-city',
    description:
      'A whimsical turtle-graphics adventure following a wandering yellow brick road through a pixel-art Emerald City to find the Wizard.',
    url: 'https://github.com/Lanthanum89/emerald-city',
    languages: ['Python'],
    ext: 'py',
    tools: ['Turtle Graphics', 'Game Design'],
    category: 'Games',
    pushedAt: '2026-07-09T01:59:15Z',
    story: {
      problem: 'Wanted to see how far Python\'s turtle graphics could be pushed past the usual square-and-circle tutorials.',
      attempts: [
        'Started with a basic path-drawing turtle script.',
        'Built it out into a full pixel-art Emerald City with a yellow brick road to follow.',
      ],
      challenge: 'Getting genuinely pixel-art visuals out of a tool designed for simple line drawing.',
      next: 'More scenes along the road.',
    },
  },
  {
    name: 'Bohemian Rhapsody Visualiser',
    slug: 'bohemian-rhapsody',
    description:
      'A MIDI-driven music visualiser inspired by Queen\'s "Bohemian Rhapsody", with geometric particle bursts, sparkle effects for dramatic moments, and a playful ML model that predicts whether the next note will be high or low.',
    url: 'https://github.com/Lanthanum89/bohemian-rhapsody',
    languages: ['Python'],
    ext: 'py',
    tools: ['MIDI', 'Creative Coding'],
    category: 'Games',
    pushedAt: '2026-07-09T01:58:31Z',
    story: {
      problem: 'Wanted a music visualiser that reacted to the actual structure of a song, not just its volume.',
      attempts: [
        'Started with basic MIDI-driven particle bursts.',
        'Added sparkle effects for the song\'s dramatic moments, then a playful ML model that predicts whether the next note will be high or low, just to see if it could.',
      ],
      challenge: 'Getting the visuals to land on the song\'s actual dramatic beats instead of just reacting to loudness.',
      next: 'Try it against a second song to see how well it generalises.',
    },
  },
  {
    name: 'Roblox Experience',
    slug: 'roblox-dev',
    description:
      'A complete Roblox mini-experience showcasing modular Lua scripting, data persistence, and gameplay mechanics.',
    url: 'https://github.com/Lanthanum89/roblox-dev',
    languages: ['Lua'],
    ext: 'lua',
    tools: ['Roblox', 'Game Design'],
    category: 'Games',
    pushedAt: '2026-07-09T02:00:40Z',
    story: {
      problem: 'Wanted to understand how a "real" Roblox experience is actually structured, not just a single script.',
      attempts: [
        'Built out modular Lua scripting so systems didn\'t all live in one file.',
        'Added data persistence and core gameplay mechanics on top of that structure.',
      ],
      challenge: 'Keeping the Lua modules cleanly separated as the experience grew, instead of everything becoming one script.',
      next: 'More gameplay mechanics on top of the same persistence layer.',
    },
  },
  {
    name: 'Dobble Algorithm',
    slug: 'dobble-algorithm',
    description:
      "A work-in-progress generator built around the Dobble (Spot It!) card game's symbol-matching puzzle. Actively evolving, so check back for updates.",
    url: 'https://github.com/Lanthanum89/dobble-algorithm',
    languages: ['HTML'],
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
    languages: ['Python'],
    ext: 'py',
    tools: ['API Integration'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T02:24:12Z',
    story: {
      problem: 'Wanted a quick, low-stakes excuse to try out a public API end to end.',
      attempts: [
        'Built a console app that fetches a random cocktail recipe from TheCocktailDB API.',
        'Added saving each recipe as JSON so it wasn\'t just a one-off lookup.',
      ],
      challenge: 'Handling the API\'s inconsistent recipe data cleanly enough to save it reliably.',
      next: 'A simple way to browse saved recipes back.',
    },
  },
  {
    name: 'Word Cloud Generator',
    slug: 'word-cloud',
    description:
      'A GUI app that generates a word cloud from any website: enter a URL and it fetches, processes, and visualises the content.',
    url: 'https://github.com/Lanthanum89/word-cloud',
    languages: ['Python'],
    ext: 'py',
    tools: ['Data Visualisation'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T02:03:07Z',
    story: {
      problem: 'Wanted a fast, visual way to see what a page was actually about before reading the whole thing.',
      attempts: [
        'Built a GUI that takes a URL, fetches the page, and processes the text.',
        'Visualised the result as a word cloud rather than a table of word counts.',
      ],
      challenge: 'Cleaning up fetched web content enough that the word cloud reflected the article, not the site\'s navigation and boilerplate.',
      next: 'Let it summarise multiple URLs into one comparison cloud.',
    },
  },
  {
    name: 'Video Gaming Hub: Database',
    slug: 'video-gaming-hub-db',
    description:
      'A MySQL database for a fictional video game store: platforms, customers, games, and purchases, with example data, queries, and stored procedures for sales analysis and loyalty schemes.',
    url: 'https://github.com/Lanthanum89/Video-Gaming-Hub_DB',
    languages: ['SQL'],
    ext: 'sql',
    tools: ['MySQL', 'Database Design'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T02:02:49Z',
    story: {
      problem: 'Wanted a proper multi-table schema to practice on, not another single-table tutorial database.',
      attempts: [
        'Modelled platforms, customers, games, and purchases as a fictional video game store.',
        'Added stored procedures for sales analysis and loyalty schemes on top of the base schema.',
      ],
      challenge: 'Designing relationships that supported real queries, like loyalty schemes, without over-normalising the schema into uselessness.',
      next: 'Pair it with the Video Gaming Hub API as a live backend.',
    },
  },
  {
    name: 'Video Gaming Hub: API',
    slug: 'video-gaming-hub-api',
    description:
      'A Flask REST API for managing a video game lending system: games, customers, and loans, backed by a MySQL database.',
    url: 'https://github.com/Lanthanum89/Video-Gaming-Hub_API',
    languages: ['Python'],
    ext: 'py',
    tools: ['Flask', 'REST API'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T02:02:47Z',
    story: {
      problem: 'Wanted to build a REST API against a real relational schema instead of an in-memory list.',
      attempts: [
        'Built a Flask API for a game lending system: games, customers, and loans.',
        'Backed it with a MySQL database rather than mocking the data.',
      ],
      challenge: 'Modelling loans so the API can\'t return a game as both available and out on loan at the same time.',
      next: 'Connect it to the Video Gaming Hub database project properly and add auth.',
    },
  },
  {
    name: 'Spotify Stats (Desktop)',
    slug: 'spotify-stats',
    description:
      'A Python GUI showing your Spotify listening stats: top artists, tracks, and genres, over different time periods.',
    url: 'https://github.com/Lanthanum89/spotify-stats',
    languages: ['Python', 'PowerShell', 'Batchfile'],
    ext: 'py',
    tools: ['Spotify API', 'Tkinter'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T02:00:57Z',
    story: {
      problem: 'Built before SoundTracks, when I wanted the same idea as a desktop app rather than a web one.',
      attempts: [
        'Built a Python GUI showing top artists, tracks, and genres.',
        'Added different time periods so it wasn\'t just a single fixed snapshot.',
      ],
      challenge: 'Working with Spotify\'s OAuth flow inside a desktop app rather than a browser.',
      next: 'Superseded by the web version, SoundTracks, which is where the active work is now.',
    },
  },
  {
    name: 'Calculator',
    slug: 'python-gui-calculator',
    description: 'A modern, feature-rich calculator built with Python and Tkinter.',
    url: 'https://github.com/Lanthanum89/Python_GUI-Calculator',
    languages: ['Python'],
    ext: 'py',
    tools: ['Tkinter'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T02:00:32Z',
    story: {
      problem: 'Wanted a proper Tkinter project that went beyond the tutorial four-function calculator.',
      attempts: [
        'Started from the standard four-function calculator tutorial.',
        'Kept adding features until it was a genuinely modern, feature-rich calculator rather than the tutorial version.',
      ],
      challenge: 'Handling calculator edge cases, like chained operations and invalid input, without the logic turning to spaghetti.',
      next: 'Add a history of previous calculations.',
    },
  },
  {
    name: 'JavaScript Grocery Store',
    slug: 'javascript-grocery-store',
    description:
      'A client-side grocery store app with a product catalog, shopping cart, wishlist, and order history.',
    url: 'https://github.com/Lanthanum89/javascript-grocery-store',
    languages: ['JavaScript', 'CSS', 'HTML'],
    ext: 'js',
    tools: ['Web App'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T01:59:52Z',
    story: {
      problem: 'Wanted to practice state management in plain JavaScript before reaching for a framework.',
      attempts: [
        'Started with a product catalog and shopping cart.',
        'Added a wishlist and order history once the core cart state was solid.',
      ],
      challenge: 'Keeping cart, wishlist, and order history in sync without a framework doing it for me.',
      next: 'Persist state properly instead of resetting on refresh.',
    },
  },
  {
    name: 'GitHub–Notion Sync',
    slug: 'github-notion-sync-files',
    description:
      'A simple, free way to keep a Notion database in sync with GitHub repos tagged with the "portfolio" topic.',
    url: 'https://github.com/Lanthanum89/github-notion-sync-files',
    languages: ['Python'],
    ext: 'py',
    tools: ['Notion API', 'Automation'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T01:59:41Z',
    story: {
      problem: 'Kept manually copying repo details into Notion every time I started a new project, and kept forgetting.',
      attempts: [
        'Built a script to pull repos tagged with the "portfolio" topic from GitHub.',
        'Synced them straight into a Notion database, so the manual copying step just stopped happening.',
      ],
      challenge: 'Keeping the sync idempotent so re-running it doesn\'t create duplicate Notion entries.',
      next: 'Run it on a schedule instead of manually.',
    },
  },
  {
    name: 'Get Repos',
    slug: 'get-repos',
    description: 'A GUI app to fetch and display GitHub repositories for any user.',
    url: 'https://github.com/Lanthanum89/get-repos',
    languages: ['Python', 'Batchfile'],
    ext: 'py',
    tools: ['GitHub API'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T01:59:39Z',
    story: {
      problem: 'Wanted a quicker way to browse someone\'s GitHub repos than clicking through the website.',
      attempts: [
        'Built a GUI that fetches and displays repositories for any given username.',
      ],
      challenge: 'Handling the GitHub API\'s rate limits gracefully for something meant to be used casually.',
      next: 'Add filtering by language or last-updated date.',
    },
  },
  {
    name: 'Gaming Backlog',
    slug: 'gaming-backlog-web-app',
    description:
      'A full-stack web app built with ASP.NET Core 9 to track, manage, and visualise a personal gaming backlog.',
    url: 'https://github.com/Lanthanum89/GamingBacklogWebApp',
    languages: ['HTML', 'C#', 'CSS', 'JavaScript'],
    ext: 'html',
    tools: ['ASP.NET Core', 'C#'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T01:59:38Z',
    story: {
      problem: 'My actual gaming backlog lived in my head and was getting embarrassingly long.',
      attempts: [
        'Built a full-stack ASP.NET Core 9 app to track and manage it properly.',
        'Added visualisation on top of the raw tracking, so the backlog was something I could actually look at, not just a list.',
      ],
      challenge: 'Learning ASP.NET Core 9\'s newer patterns properly rather than defaulting to older tutorials.',
      next: 'Add a "what should I play next" suggestion based on the backlog.',
    },
  },
  {
    name: 'Darts Calculator',
    slug: 'darts-calculator',
    description:
      'A darts checkout calculator that suggests optimal finishing combinations for any score between 2 and 170. Available as CLI, GUI, and web versions.',
    url: 'https://github.com/Lanthanum89/darts-calculator',
    languages: ['HTML', 'Python'],
    ext: 'py',
    tools: ['CLI', 'GUI', 'Web'],
    category: 'Sport',
    pushedAt: '2026-07-09T01:58:51Z',
    story: {
      problem: 'Wanted to stop doing checkout maths in my head mid-game.',
      attempts: [
        'Built the core checkout logic for scores between 2 and 170 first.',
        'Shipped it three ways, as a CLI, a GUI, and a web version, once the core logic worked.',
      ],
      challenge: 'Covering every valid checkout combination correctly, including the finishes that have to end on a double.',
      next: 'Track real games and checkout success rate over time.',
    },
  },
  {
    name: 'Binary Clock',
    slug: 'binary-clock',
    description:
      'A binary clock available as a web app, PowerShell widget, and native Windows and Android apps.',
    url: 'https://github.com/Lanthanum89/binary-clock',
    languages: ['CSS', 'JavaScript', 'PowerShell', 'HTML', 'Kotlin', 'Batchfile', 'C#'],
    ext: 'css',
    tools: ['Cross-platform'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T01:58:29Z',
    spotlight: true,
    story: {
      problem: 'A normal clock felt like a boring project. A clock you have to decode felt more interesting.',
      attempts: [
        'Built it first as a web app.',
        'Ported the same idea to a PowerShell widget, then native Windows and Android apps, mostly to see how the same small idea held up across four very different platforms.',
      ],
      challenge: 'Keeping the actual binary-time logic consistent across four completely different platforms and languages.',
      next: 'A watch face version.',
    },
  },
  {
    name: 'Budget Tracker (Web)',
    slug: 'budget-tracker-web-app',
    description:
      'An ASP.NET Core Razor Pages app to track expenses, set a budget, and stay on target.',
    url: 'https://github.com/Lanthanum89/BudgetTrackerWebApp',
    languages: ['HTML', 'C#', 'CSS', 'JavaScript'],
    ext: 'html',
    tools: ['ASP.NET Core', 'Razor Pages'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T01:58:35Z',
    story: {
      problem: 'Wanted an honest, simple view of whether I was on budget, without a finance app trying to sell me something.',
      attempts: [
        'Built it with ASP.NET Core Razor Pages to track expenses and set a budget.',
        'Kept the feature set deliberately small: log expenses, set a budget, see if you\'re on target.',
      ],
      challenge: 'Resisting the urge to add every finance-app feature and keeping it to what I\'d actually use.',
      next: 'Add simple month-to-month comparison.',
    },
  },
  {
    name: 'Budget Tracker (Console)',
    slug: 'budget-tracker-app',
    description:
      'A console-based budget tracker built with C# and .NET 9, tracking fixed expenses and variable spending across categories.',
    url: 'https://github.com/Lanthanum89/BudgetTrackerApp',
    languages: ['C#'],
    ext: 'cs',
    tools: ['.NET'],
    category: 'Tools & Apps',
    pushedAt: '2026-07-09T01:58:33Z',
    story: {
      problem: 'Wanted the same budget tracking idea as a console app first, before building the web version.',
      attempts: [
        'Built it in C# and .NET 9, tracking fixed expenses and variable spending across categories.',
      ],
      challenge: 'Separating fixed expenses from variable spending in a way that was actually useful to look at, not just two lists.',
      next: 'Superseded by the web version, which is where the active work is now.',
    },
  },
];

export const categoryOrder: Category[] = ['Data & ML', 'Sport', 'Tools & Apps', 'Games'];

/** How many projects to show per category before a language filter is applied. */
export const CATEGORY_PREVIEW_LIMIT = 3;
