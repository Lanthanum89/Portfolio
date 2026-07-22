export type Category = 'Data & ML' | 'Sport' | 'Games' | 'Tools & Apps';

export interface Project {
  name: string;
  slug: string;
  description: string;
  url: string;
  /** All languages GitHub reports for the repo, ordered by share of code. */
  languages: string[];
  tools: string[];
  /** A project can belong to more than one category, e.g. an F1 ML model is both Sport and Data & ML. */
  categories: Category[];
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
    tradeoffs?: string;
    next?: string;
    hindsight?: string;
  };
}

// Featured projects mirror the pinned repos on github.com/Lanthanum89, in the same order.
// Everything else is sourced from the same account.
export const projects: Project[] = [
  {
    name: 'F1 2025 ML Champion Predictor',
    slug: 'f1-2025-ml-champion-predictor',
    description:
      'Can historical race data actually predict next year\'s champion? A machine learning system using driver performance metrics and feature engineering to find out.',
    url: 'https://github.com/Lanthanum89/F1-2025-ML-Champion-Predictor',
    languages: ['Jupyter Notebook', 'Python'],
    tools: ['Machine Learning', 'f1'],
    categories: ['Sport', 'Data & ML'],
    pushedAt: '2026-07-09T01:59:21Z',
    featured: true,
    story: {
      problem: 'Predicting an F1 champion from gut feel is fun at the pub, not so convincing as an engineer.',
      attempts: [
        'Started with a simple model on raw championship standings.',
        'Layered in historical race data and driver performance metrics, then spent most of the time on feature engineering rather than the model itself.',
      ],
      challenge: 'Getting from "a model that runs" to a model whose predictions you\'d actually trust, given how noisy a single F1 season is.',
      tradeoffs: 'Chose feature engineering over a more complex model architecture, since better inputs mattered more than a fancier algorithm for a single season of data.',
      next: 'Feed in live 2025 race results as the season progresses, instead of a one-shot prediction.',
      hindsight: 'I\'d hold out a proper validation set from the start instead of eyeballing predictions against results as they came in.',
    },
  },
  {
    name: 'ML: Predicting Gamer Behaviour',
    slug: 'ml-predicting-gamer-behaviour',
    description:
      'I wanted to practice real player-segmentation techniques without real player data. Machine learning for engagement prediction, trained on a synthetic dataset of 30,000 simulated players.',
    url: 'https://github.com/Lanthanum89/ML-predicting-gamer-behaviour',
    languages: ['Jupyter Notebook'],
    tools: ['Machine Learning', 'Gaming Analytics'],
    categories: ['Data & ML'],
    pushedAt: '2026-07-09T02:00:13Z',
    featured: true,
    story: {
      problem: 'Wanted to practice real player-segmentation techniques without access to an actual studio\'s live data.',
      attempts: [
        'Built a synthetic dataset of 30,000 simulated players modelled on real-world gaming analytics.',
        'Used it to test segmentation and engagement-prediction approaches end to end.',
      ],
      challenge: 'Making the synthetic data realistic enough that the patterns the model finds would actually generalise.',
      tradeoffs: 'Chose a synthetic dataset over scraping real platforms, trading realism for something I could legally and ethically use end to end.',
      next: 'Try the same pipeline against a real, messier dataset.',
      hindsight: 'I\'d introduce more deliberate noise and edge cases into the synthetic data, real player behaviour is messier than anything I modelled.',
    },
  },
  {
    name: 'SoundTracks (Spotify Stats App)',
    slug: 'spotify-stats-app',
    description:
      'Spotify Wrapped only happens once a year. I wanted my listening data all year round. A fully static, responsive web app with top tracks, artists, and a deep analysis tab — genre and popularity breakdowns, quadrant scatter charts, and more — installable on your phone, no backend required.',
    url: 'https://github.com/Lanthanum89/spotify-stats-app',
    languages: ['JavaScript', 'CSS', 'HTML'],
    tools: ['Spotify API', 'PWA'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-22T09:58:39Z',
    featured: true,
    story: {
      problem: 'Spotify Wrapped only happens once a year, and I wanted to see my stats whenever I felt like it.',
      attempts: [
        'Started as a script that just pulled top tracks.',
        'Grew into a full locally hosted web app with genre distributions and recent history, once top tracks alone wasn\'t enough.',
        'Rebuilt the auth flow as backend-free Authorization Code + PKCE and made the layout fully responsive, so it could be deployed as a static site and used from a phone instead of only running locally.',
        'Kept expanding the analysis tab once the data was live and genuinely fun to dig into: popularity and duration breakdowns, day-of-week activity, and a set of quadrant scatter charts (popularity vs. personal rank, duration vs. popularity, followers vs. popularity) for both tracks and artists.',
      ],
      challenge: 'Working within Spotify\'s API and auth flow without a server to hold a Client Secret, once I decided to actually host it instead of keeping it local-only. Later, being honest in the UI about which stats update with the range selector (genuinely computed by Spotify) versus which are always just the last 50 streams (Spotify\'s hard cap on play history) — the two were easy to conflate at a glance.',
      tradeoffs: 'Chose to migrate from a server-held Client Secret to browser-side PKCE auth, trading a small Express backend for something deployable anywhere static files are served, GitHub Pages included.',
      next: 'Track changes in top tracks and artists over time, instead of only ever showing a live snapshot.',
      hindsight: 'I did eventually split the OAuth handling into its own module — should have done that from the very first version instead of untangling it from the rest of the app later.',
    },
  },
  {
    name: '429: Too Many Tabs',
    slug: '429-too-many-tabs',
    description:
      'One screen instead of five browser tabs. A retro LED clock, a binary clock, a month calendar, to-do list, email, and Spotify all on one glanceable dashboard for a phone or tablet propped up on a desk — no backend, installable as a PWA or a sideloaded Android APK.',
    url: 'https://github.com/Lanthanum89/429-Too-Many-Tabs',
    languages: ['TypeScript', 'CSS', 'Java', 'HTML'],
    tools: ['PWA', 'Google Calendar API', 'Gmail API', 'Spotify API', 'Capacitor'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-22T10:38:24Z',
    featured: true,
    story: {
      problem: 'Wanted one screen to glance at on a tablet propped up on a desk, instead of switching between a clock, a calendar, email, and Spotify.',
      attempts: [
        'Started with a "modes, not themes" idea: Working/Chilling/Gaming layouts that changed which widgets showed and how big they were.',
        'Wired up Google Calendar and Gmail (read-only) and a Spotify "now playing" widget via Authorization Code + PKCE, so none of it needed a backend or a stored secret.',
        'Wrapped it with Capacitor for a sideloadable Android APK, built entirely in CI since the dev environment has no route to the Android SDK.',
        'Dropped the whole modes concept for one glanceable page once switching modes turned out to be more friction than the layout problem it solved — replaced the agenda-list calendar with an actual month-view grid, and added a retro LED-style clock plus a binary clock in the same format as my Binary Clock project.',
        'Redesigned the visual language twice (mid-century modern, then dark lilac to match SoundTracks) and made the layout properly adaptive: it fits entirely on one screen on a tablet in landscape, no scrolling, at any width from a small tablet up to an ultrawide monitor.',
      ],
      challenge: 'Getting Google and Spotify auth to both survive page reloads without a backend to hold a session. Google\'s implicit flow has no refresh token, so tokens are cached in localStorage and the widgets restore silently if the cached token\'s still valid, instead of forcing a reconnect on every navigation.',
      tradeoffs: 'Chose to drop mode-switching entirely rather than keep patching it — one well-designed responsive layout turned out simpler to reason about than a set of layouts that all had to stay in sync with each other.',
      next: 'Tap-to-cycle widget sizes, or a proper drag-and-resize layout, instead of a fixed grid.',
      hindsight: 'I\'d have picked the final dark-lilac look and the single-page layout from the start — the modes concept and the mid-century redesign were both fully working detours before landing on what actually felt right.',
    },
  },
  {
    name: 'Squish Pop',
    slug: 'squish-pop',
    description:
      'Built because my daughter wanted a balloon game she couldn\'t lose. A kawaii popping PWA with a pastel palette, blind-box collectibles, and a collect-em-all album.',
    url: 'https://github.com/Lanthanum89/squish-pop',
    languages: ['JavaScript', 'CSS', 'HTML'],
    tools: ['PWA', 'Game Design'],
    categories: ['Games'],
    pushedAt: '2026-07-15T09:26:37Z',
    featured: true,
    story: {
      problem: 'My daughter wanted a game that was just enjoyable: nothing to lose, no fail state, nothing stressful.',
      attempts: [
        'Started with a simple pop mechanic and a pastel palette.',
        'Added blind-box collectibles and a collect-em-all album so there was a reason to keep coming back.',
      ],
      challenge: 'Making a PWA that felt like a real, polished app on a small screen rather than a browser toy, for a five-year-old\'s attention span.',
      tradeoffs: 'Chose a fixed set of collectibles over a random-generation system, so my daughter could realistically complete the album instead of chasing an endless list.',
      next: 'More collectible sets, and an in-game shop.',
      hindsight: 'I\'d add save-state syncing earlier. Losing progress on a cleared browser cache was the first real bug she found.',
    },
  },
  {
    name: 'Swim Progression App',
    slug: 'swim-progression-app',
    description:
      'A friend wanted her swim distance to add up to something more than a number in a spreadsheet. A mobile-friendly tracker that maps cumulative distance onto real-world routes, with milestone celebrations.',
    url: 'https://github.com/Lanthanum89/Swim-Progression-App',
    languages: ['JavaScript', 'HTML'],
    tools: ['PWA', 'Fitness Tracker'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-09T02:01:13Z',
    featured: true,
    story: {
      problem: 'A friend wanted to see her swim distance add up to something real, not just a number in a spreadsheet.',
      attempts: [
        'Started with a simple distance log.',
        'Mapped cumulative distance onto real-world routes so every swim visibly moved her further along, with milestone celebrations to mark the distance.',
      ],
      challenge: 'Making the progress feel motivating rather than just a bigger number, on a screen she\'d actually check after a swim.',
      tradeoffs: 'Chose a fixed route over letting her pick her own, trading flexibility for something I could ship quickly and she could start using straight away.',
      next: 'Let her pick her own route, instead of a fixed one.',
      hindsight: 'I\'d ask what would actually motivate her to keep logging swims before building the milestone system, not after.',
    },
  },
  {
    name: 'TFL Route Planner',
    slug: 'tfl-route-planner',
    description:
      'Why call a live API for something as static as the tube map? An offline route planner for the London Underground, originally a Python and tkinter GUI, now also a TypeScript PWA.',
    url: 'https://github.com/Lanthanum89/TFL-route-planner',
    languages: ['Python', 'TypeScript'],
    tools: ['tkinter', 'PWA', 'London Underground'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-09T02:01:17Z',
    featured: true,
    story: {
      problem: 'Wanted a route planner that didn\'t need a live API call for something as static as the tube map.',
      attempts: [
        'Built the core routing logic and a Python and tkinter GUI to work entirely offline.',
      ],
      challenge: 'Modelling the Underground network in a way that was simple enough to reason about but still gave correct routes.',
      tradeoffs: 'Chose to model the network as static offline data rather than call a live API, trading real-time accuracy for something that works without a connection.',
      next: 'Wire it up to live TfL APIs for real-time disruptions.',
      hindsight: 'I\'d design the data model to plug in live TfL APIs from the start, rather than needing to retrofit it later.',
    },
  },
  {
    name: 'Sound Stars',
    slug: 'sound-stars',
    description:
      'Phonics revision for the Year 1 screening check is important, and deeply boring for a six-year-old. A flashcard app designed to make it playful for early readers.',
    url: 'https://github.com/Lanthanum89/Sound-Stars',
    languages: ['TypeScript', 'CSS', 'HTML', 'JavaScript'],
    tools: ['Education'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-10T22:08:37Z',
    story: {
      problem: 'Phonics revision for the Year 1 screening check is important and, for a five or six-year-old, deeply boring.',
      attempts: [
        'Started with plain digital flashcards.',
        'Reworked them to be playful rather than test-like, so revision didn\'t feel like revision.',
      ],
      challenge: 'Keeping it genuinely playful without losing the actual phonics structure the screening check tests.',
      tradeoffs: 'Chose flashcards over a full game, since the actual phonics screening check tests recall, not gameplay skill.',
      next: 'More sound sets covering the full phonics phases.',
      hindsight: 'I\'d build in a simple progress view for a parent to check, rather than just for the child using it.',
    },
  },
  {
    name: 'The Little Garden Arcade',
    slug: 'the-little-garden-arcade',
    description:
      'Drag-and-drop looks great in a demo and fails the first child without precise fine motor control. A hub of gentle, tap-to-play garden mini-games, accessible by design.',
    url: 'https://github.com/Lanthanum89/The-Little-Garden-Arcade',
    languages: ['JavaScript', 'HTML', 'CSS'],
    tools: ['Accessibility', 'Game Design'],
    categories: ['Games'],
    pushedAt: '2026-07-09T02:52:54Z',
    story: {
      problem: 'Drag-and-drop looks great in a demo and fails the first small child, or anyone without precise fine motor control, who tries to use it.',
      attempts: [
        'Started with one drag-based mini-game, the usual approach.',
        'Rebuilt the whole interaction model around tap-to-select then tap-to-place instead, and made it the rule for every game in the hub, not just a workaround for one.',
      ],
      challenge: 'Making tap-to-select feel as immediate as drag-and-drop, instead of like a compromise.',
      tradeoffs: 'Chose tap-to-select over drag-and-drop everywhere, even where drag-and-drop would have been faster to build, because accessibility was the actual point of the project.',
      next: 'More mini-games under the same no-drag-and-drop rule.',
      hindsight: 'I\'d user-test the tap targets with an actual small child earlier. What feels obviously tappable to an adult isn\'t always obvious to a five-year-old.',
    },
  },
  {
    name: 'Premier League 2003/04: The Invincibles',
    slug: 'premier-league-2003-2004-data-analysis',
    description:
      "What does an unbeaten Premier League season actually look like in the numbers? An in-depth analysis of Arsenal's Invincibles season with pandas and matplotlib.",
    url: 'https://github.com/Lanthanum89/Premier-League-2003-2004-Data-Analysis',
    languages: ['Jupyter Notebook'],
    tools: ['Data Analysis', 'pandas'],
    categories: ['Sport', 'Data & ML'],
    pushedAt: '2026-07-09T02:00:23Z',
    story: {
      problem: 'Wanted to know what an unbeaten Premier League season actually looks like in the numbers, not just the highlight reel.',
      attempts: [
        'Pulled together team and match statistics for the season.',
        'Used pandas and matplotlib to visualise the performance trends behind the unbeaten run.',
      ],
      challenge: 'Finding the stats that actually explained the Invincibles run, rather than just restating that they won a lot.',
      tradeoffs: 'Chose a single historic season over building a general-purpose football analysis tool, trading reusability for depth on one specific story.',
      next: 'Compare the season against other unbeaten runs in Europe.',
      hindsight: 'I\'d pull in more contextual data, like injuries and fixture congestion, rather than relying on match statistics alone.',
    },
  },
  {
    name: 'Turbo Tackle',
    slug: 'turbo-tackle',
    description:
      'Wanted a game for kids that didn\'t need an app store install. A retro pixel-art racer built as a PWA, hosted on GitHub Pages.',
    url: 'https://github.com/Lanthanum89/turbo-tackle',
    languages: ['JavaScript', 'CSS', 'HTML'],
    tools: ['PWA', 'Node.js', 'Game Design'],
    categories: ['Games'],
    pushedAt: '2026-07-09T02:01:30Z',
    story: {
      problem: 'Wanted a simple, fast game for kids that didn\'t need an app store install.',
      attempts: [
        'Built it as a retro pixel-art racer with a single dodge-the-footballs mechanic.',
        'Packaged it as a PWA with Node.js so it installs straight from GitHub Pages.',
      ],
      challenge: 'Keeping the difficulty curve fair for a young player without making it boring after five minutes.',
      tradeoffs: 'Chose a single simple mechanic over multiple game modes, trading variety for something that felt polished and finished rather than half-built.',
      next: 'More levels and a couple more obstacle types.',
      hindsight: 'I\'d add difficulty settings from the start. Right now it\'s tuned for roughly one skill level.',
    },
  },
  {
    name: 'The Bindicator',
    slug: 'the-bindicator',
    description:
      'Never miss bin day again. My street kept forgetting, mine included. A neighbourhood-shareable checker with colour-coded bin icons and a full browsable calendar.',
    url: 'https://github.com/Lanthanum89/the-Bindicator',
    languages: ['JavaScript', 'HTML'],
    tools: ['Utility'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-09T02:01:21Z',
    spotlight: true,
    story: {
      problem: 'My street kept missing bin day, mine included. Everyone had their own half-working way of remembering it.',
      attempts: [
        'Started as a reminder just for myself.',
        'Realised the real fix was making it something the whole street could glance at, so it became a shareable page with colour-coded bin icons and a full browsable calendar.',
      ],
      challenge: 'Keeping it dead simple. A bin tracker that takes more effort than remembering bin day defeats the point.',
      tradeoffs: 'Chose a shareable static page over a full account system, since a bin day checker doesn\'t need logins to be useful, just something to glance at.',
      next: 'Push notifications, so it reaches you instead of you having to remember to open it.',
      hindsight: 'I\'d add push notifications in the first version rather than treating them as a nice-to-have, they\'re really the whole point of a reminder tool.',
    },
  },
  {
    name: 'Lewis Hamilton: 2020 Season Review',
    slug: 'f1-analysis',
    description:
      "What actually won Hamilton each race in 2020, beyond the final standings? A FastF1-powered breakdown of his race wins across the season.",
    url: 'https://github.com/Lanthanum89/f1-analysis',
    languages: ['Jupyter Notebook'],
    tools: ['Data Analysis', 'FastF1'],
    categories: ['Sport', 'Data & ML'],
    pushedAt: '2026-07-09T01:59:22Z',
    story: {
      problem: 'Wanted to look past the final standings and see what actually won Hamilton each race in 2020.',
      attempts: [
        'Pulled race data with FastF1.',
        'Broke down each win individually rather than just summarising the season as a whole.',
      ],
      challenge: 'Working with FastF1\'s raw telemetry data cleanly enough to make the analysis readable rather than a wall of numbers.',
      tradeoffs: 'Chose to analyse one driver\'s season in depth over a broader multi-driver comparison, trading breadth for a clearer, more focused story.',
      next: 'Extend the same analysis to another driver\'s season.',
      hindsight: 'I\'d structure the notebook so the per-race breakdown could be reused for a different driver without rewriting most of it.',
    },
  },
  {
    name: 'F1 Lap Time Analyser',
    slug: 'f1-lap-time-analyser',
    description:
      'Wanted to explore F1 lap time data properly, not just from a terminal. A session analysis tool with both a CLI and an interactive web GUI, built on FastF1 data.',
    url: 'https://github.com/Lanthanum89/f1-lap-time-analyser',
    languages: ['Python'],
    tools: ['Data Analysis', 'FastF1'],
    categories: ['Sport', 'Data & ML'],
    pushedAt: '2026-07-09T01:59:25Z',
    story: {
      problem: 'Wanted to explore F1 lap time data properly, on the couch, not just from a terminal.',
      attempts: [
        'Started as a CLI tool on top of FastF1 data.',
        'Added an interactive web GUI once the CLI proved the data pipeline worked.',
      ],
      challenge: 'Keeping both interfaces sharing the same core analysis logic instead of drifting apart.',
      tradeoffs: 'Chose to build both a CLI and a web GUI on the same core logic, trading extra effort for flexibility over picking one interface and committing to it.',
      next: 'Add session-to-session comparison.',
      hindsight: 'I\'d write the core analysis as a proper library from the start, instead of extracting it out of the CLI after the GUI needed it too.',
    },
  },
  {
    name: 'FPL Analyser',
    slug: 'fpl-analyser',
    description:
      'Fantasy Premier League team selection is really an optimisation problem wearing a football shirt. A GUI that displays player statistics and suggests teams based on form and value.',
    url: 'https://github.com/Lanthanum89/fpl-analyser',
    languages: ['Python'],
    tools: ['Data Analysis', 'FPL'],
    categories: ['Sport', 'Data & ML'],
    pushedAt: '2026-07-09T01:59:33Z',
    story: {
      problem: 'Fantasy Premier League team selection is really a small optimisation problem wearing a football shirt.',
      attempts: [
        'Pulled player statistics into a GUI.',
        'Added team suggestions based on current form and value once browsing the raw stats wasn\'t enough on its own.',
      ],
      challenge: 'Balancing "optimal on paper" against picks that actually make sense given price and form volatility.',
      tradeoffs: 'Chose current form and value over more advanced projections, trading sophistication for something simple enough to trust and actually use weekly.',
      next: 'Factor in fixture difficulty, not just current form.',
      hindsight: 'I\'d weight recent form more heavily than season-long averages, form matters more in Fantasy Premier League than the stats suggested.',
    },
  },
  {
    name: 'Instagram Analytics',
    slug: 'instagram-analytics',
    description:
      'Wanted a clearer view of account performance than Instagram\'s own stats give you. A Python GUI for analysing performance using the Meta Graph API.',
    url: 'https://github.com/Lanthanum89/instagram-analytics',
    languages: ['Python', 'Batchfile'],
    tools: ['Data Analysis', 'Meta Graph API'],
    categories: ['Data & ML'],
    pushedAt: '2026-07-09T01:59:50Z',
    story: {
      problem: 'Wanted a clearer view of account performance than Instagram\'s own in-app stats give you.',
      attempts: [
        'Built a Python GUI on top of the Meta Graph API to pull the underlying data directly.',
      ],
      challenge: 'Working within the Meta Graph API\'s constraints and rate limits for something meant to be checked casually.',
      tradeoffs: 'Chose the official Meta Graph API over scraping, trading some data completeness for something that wouldn\'t break the moment Instagram changed their site.',
      next: 'Track trends over time instead of a single snapshot.',
      hindsight: 'I\'d cache API responses locally from the start, instead of hitting rate limits partway through a session.',
    },
  },
  {
    name: 'Snake',
    slug: 'snake',
    description:
      'Wanted a proper project to learn Pygame, not another to-do list app. A classic Snake game with a nostalgic Nokia 3310 aesthetic.',
    url: 'https://github.com/Lanthanum89/Snake',
    languages: ['Python'],
    tools: ['Pygame', 'Game Design'],
    categories: ['Games'],
    pushedAt: '2026-07-09T02:00:46Z',
    story: {
      problem: 'Wanted a small, complete project to properly learn Pygame, not another to-do list app.',
      attempts: [
        'Built the classic Snake mechanic first.',
        'Styled it with a Nokia 3310 aesthetic to make a well-worn tutorial project feel like mine.',
      ],
      challenge: 'Getting the movement and collision feel right, which is most of what makes Snake actually fun.',
      tradeoffs: 'Chose to stick close to the classic ruleset rather than add new mechanics, since the point was learning Pygame properly, not reinventing the game.',
      next: 'A couple of alternate modes, like a speed-up mode.',
      hindsight: 'I\'d separate the game loop from the rendering earlier, they ended up more tangled than they needed to be.',
    },
  },
  {
    name: 'Emerald City',
    slug: 'emerald-city',
    description:
      'How far can Python\'s turtle graphics really be pushed? A whimsical adventure following a yellow brick road through a pixel-art Emerald City.',
    url: 'https://github.com/Lanthanum89/emerald-city',
    languages: ['Python'],
    tools: ['Turtle Graphics', 'Game Design'],
    categories: ['Games'],
    pushedAt: '2026-07-09T01:59:15Z',
    story: {
      problem: 'Wanted to see how far Python\'s turtle graphics could be pushed past the usual square-and-circle tutorials.',
      attempts: [
        'Started with a basic path-drawing turtle script.',
        'Built it out into a full pixel-art Emerald City with a yellow brick road to follow.',
      ],
      challenge: 'Getting genuinely pixel-art visuals out of a tool designed for simple line drawing.',
      tradeoffs: 'Chose turtle graphics over a proper 2D engine, trading performance and polish for the challenge of pushing a genuinely simple tool further than usual.',
      next: 'More scenes along the road.',
      hindsight: 'I\'d plan the scene layout on paper first. A lot of the turtle-path code was trial and error I could have avoided.',
    },
  },
  {
    name: 'Bohemian Rhapsody Visualiser',
    slug: 'bohemian-rhapsody',
    description:
      'Wanted a music visualiser that reacted to a song\'s structure, not just its volume. A MIDI-driven visualiser with particle bursts and an ML model predicting the next note.',
    url: 'https://github.com/Lanthanum89/bohemian-rhapsody',
    languages: ['Python'],
    tools: ['MIDI', 'Creative Coding'],
    categories: ['Games'],
    pushedAt: '2026-07-09T01:58:31Z',
    story: {
      problem: 'Wanted a music visualiser that reacted to the actual structure of a song, not just its volume.',
      attempts: [
        'Started with basic MIDI-driven particle bursts.',
        'Added sparkle effects for the song\'s dramatic moments, then a playful ML model that predicts whether the next note will be high or low, just to see if it could.',
      ],
      challenge: 'Getting the visuals to land on the song\'s actual dramatic beats instead of just reacting to loudness.',
      tradeoffs: 'Chose MIDI over raw audio analysis, trading the ability to visualise any song for much more reliable, structured note data to work with.',
      next: 'Try it against a second song to see how well it generalises.',
      hindsight: 'I\'d build the ML high/low note predictor as a genuinely separate, testable component instead of bolting it onto the visualiser code.',
    },
  },
  {
    name: 'Dobble Algorithm',
    slug: 'dobble-algorithm',
    description:
      "How do you even generate a valid Dobble deck, where any two cards share exactly one symbol? A generator built around the game's symbol-matching puzzle, now also available as a TypeScript PWA.",
    url: 'https://github.com/Lanthanum89/dobble-algorithm',
    languages: ['HTML', 'TypeScript'],
    tools: ['Puzzle Generation', 'PWA'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-09T01:59:11Z',
    story: {
      problem: 'How do you even generate a valid Dobble deck, where any two cards share exactly one symbol?',
      attempts: [
        'Started by brute-forcing symbol combinations to see how quickly that broke down.',
        'Switched to a proper combinatorial design once brute force stopped scaling with deck size.',
        'Added a TypeScript PWA on top of the same generation logic.',
      ],
      challenge: 'Keeping every single pair of cards down to exactly one shared symbol, small errors in the underlying maths compound fast as the deck grows.',
      tradeoffs: 'Chose a proper combinatorial structure over ad-hoc symbol shuffling, more upfront maths, but no risk of duplicate or missing matches sneaking in.',
      next: 'Let players choose their own symbol set and deck size.',
      hindsight: 'I underestimated how unforgiving this puzzle is. Get the underlying structure wrong and it fails silently rather than obviously.',
    },
  },
  {
    name: 'Console Cocktails',
    slug: 'console-cocktails',
    description:
      'Wanted a quick, low-stakes excuse to try a public API end to end. A console app that fetches a random cocktail recipe and saves it as JSON.',
    url: 'https://github.com/Lanthanum89/Console_Cocktails',
    languages: ['Python'],
    tools: ['API Integration'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-09T02:24:12Z',
    story: {
      problem: 'Wanted a quick, low-stakes excuse to try out a public API end to end.',
      attempts: [
        'Built a console app that fetches a random cocktail recipe from TheCocktailDB API.',
        'Added saving each recipe as JSON so it wasn\'t just a one-off lookup.',
      ],
      challenge: 'Handling the API\'s inconsistent recipe data cleanly enough to save it reliably.',
      tradeoffs: 'Chose a console app over a GUI, since the whole point was practicing the API integration itself, not building an interface around it.',
      next: 'A simple way to browse saved recipes back.',
      hindsight: 'I\'d validate the API\'s data more defensively from the start, a few recipes had fields that didn\'t match what I expected.',
    },
  },
  {
    name: 'Word Cloud Generator',
    slug: 'word-cloud',
    description:
      'Wanted a faster way to see what a page was about before reading the whole thing. A GUI that fetches, processes, and visualises any website\'s content as a word cloud.',
    url: 'https://github.com/Lanthanum89/word-cloud',
    languages: ['Python'],
    tools: ['Data Visualisation'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-09T02:03:07Z',
    story: {
      problem: 'Wanted a fast, visual way to see what a page was actually about before reading the whole thing.',
      attempts: [
        'Built a GUI that takes a URL, fetches the page, and processes the text.',
        'Visualised the result as a word cloud rather than a table of word counts.',
      ],
      challenge: 'Cleaning up fetched web content enough that the word cloud reflected the article, not the site\'s navigation and boilerplate.',
      tradeoffs: 'Chose simple frequency-based word clouds over more advanced NLP techniques, trading nuance for something fast and easy to reason about.',
      next: 'Let it summarise multiple URLs into one comparison cloud.',
      hindsight: 'I\'d filter out site navigation and boilerplate text at the fetch stage, rather than cleaning it up after the fact.',
    },
  },
  {
    name: 'Video Gaming Hub: Database',
    slug: 'video-gaming-hub-db',
    description:
      'Wanted a proper multi-table schema to practice on, not another single-table tutorial. A MySQL database for a fictional game store, with stored procedures for sales analysis and loyalty schemes.',
    url: 'https://github.com/Lanthanum89/Video-Gaming-Hub_DB',
    languages: ['SQL'],
    tools: ['MySQL', 'Database Design'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-09T02:02:49Z',
    story: {
      problem: 'Wanted a proper multi-table schema to practice on, not another single-table tutorial database.',
      attempts: [
        'Modelled platforms, customers, games, and purchases as a fictional video game store.',
        'Added stored procedures for sales analysis and loyalty schemes on top of the base schema.',
      ],
      challenge: 'Designing relationships that supported real queries, like loyalty schemes, without over-normalising the schema into uselessness.',
      tradeoffs: 'Chose a fictional store over modelling a real one, trading realism for full control over the schema and data without worrying about privacy.',
      next: 'Pair it with the Video Gaming Hub API as a live backend.',
      hindsight: 'I\'d write the stored procedures before finishing the schema, a couple of the query patterns I actually needed changed how I\'d design the tables.',
    },
  },
  {
    name: 'Video Gaming Hub: API',
    slug: 'video-gaming-hub-api',
    description:
      'Wanted to build a REST API against a real relational schema, not an in-memory list. A Flask API for a game lending system, backed by a MySQL database.',
    url: 'https://github.com/Lanthanum89/Video-Gaming-Hub_API',
    languages: ['Python'],
    tools: ['Flask', 'REST API'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-09T02:02:47Z',
    story: {
      problem: 'Wanted to build a REST API against a real relational schema instead of an in-memory list.',
      attempts: [
        'Built a Flask API for a game lending system: games, customers, and loans.',
        'Backed it with a MySQL database rather than mocking the data.',
      ],
      challenge: 'Modelling loans so the API can\'t return a game as both available and out on loan at the same time.',
      tradeoffs: 'Chose Flask over a heavier framework, since a lending system with three entities didn\'t need much more than clean routing and a database connection.',
      next: 'Connect it to the Video Gaming Hub database project properly and add auth.',
      hindsight: 'I\'d add authentication from the start rather than as a follow-up, it changes how you design every endpoint.',
    },
  },
  {
    name: 'Spotify Stats (Desktop)',
    slug: 'spotify-stats',
    description:
      'The desktop version of the idea, before SoundTracks became the web app I actually use. A Python GUI showing top artists, tracks, and genres over different time periods.',
    url: 'https://github.com/Lanthanum89/spotify-stats',
    languages: ['Python', 'PowerShell', 'Batchfile'],
    tools: ['Spotify API', 'Tkinter'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-09T02:00:57Z',
    story: {
      problem: 'Built before SoundTracks, when I wanted the same idea as a desktop app rather than a web one.',
      attempts: [
        'Built a Python GUI showing top artists, tracks, and genres.',
        'Added different time periods so it wasn\'t just a single fixed snapshot.',
      ],
      challenge: 'Working with Spotify\'s OAuth flow inside a desktop app rather than a browser.',
      tradeoffs: 'Chose Tkinter over a web stack for the desktop version, trading a more modern interface for something that didn\'t need a browser or a server.',
      next: 'Superseded by the web version, SoundTracks, which is where the active work is now.',
      hindsight: 'Looking back, I\'d have gone straight to a web app. The desktop version taught me the idea worked, but SoundTracks is where I\'d actually invest more effort now.',
    },
  },
  {
    name: 'Calculator',
    slug: 'python-gui-calculator',
    description:
      'Wanted a Tkinter project that went past the tutorial four-function calculator. A modern, feature-rich calculator built with Python and Tkinter.',
    url: 'https://github.com/Lanthanum89/Python_GUI-Calculator',
    languages: ['Python'],
    tools: ['Tkinter'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-09T02:00:32Z',
    story: {
      problem: 'Wanted a proper Tkinter project that went beyond the tutorial four-function calculator.',
      attempts: [
        'Started from the standard four-function calculator tutorial.',
        'Kept adding features until it was a genuinely modern, feature-rich calculator rather than the tutorial version.',
      ],
      challenge: 'Handling calculator edge cases, like chained operations and invalid input, without the logic turning to spaghetti.',
      tradeoffs: 'Chose to keep expanding the tutorial project rather than start from scratch, so I could see clearly how each feature changed the existing code.',
      next: 'Add a history of previous calculations.',
      hindsight: 'I\'d design the operation-chaining logic properly from the start rather than patching it in as edge cases came up.',
    },
  },
  {
    name: 'JavaScript Grocery Store',
    slug: 'javascript-grocery-store',
    description:
      'Wanted to understand state management before reaching for a framework to do it for me. A client-side store app with a product catalog, shopping cart, wishlist, and order history.',
    url: 'https://github.com/Lanthanum89/javascript-grocery-store',
    languages: ['JavaScript', 'CSS', 'HTML'],
    tools: ['Web App'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-09T01:59:52Z',
    story: {
      problem: 'Wanted to practice state management in plain JavaScript before reaching for a framework.',
      attempts: [
        'Started with a product catalog and shopping cart.',
        'Added a wishlist and order history once the core cart state was solid.',
      ],
      challenge: 'Keeping cart, wishlist, and order history in sync without a framework doing it for me.',
      tradeoffs: 'Chose plain JavaScript over a framework on purpose, trading convenience for actually understanding what a framework\'s state management would be doing for me.',
      next: 'Persist state properly instead of resetting on refresh.',
      hindsight: 'I\'d reach for a simple state pattern, like a single store object, from the start rather than passing state between functions.',
    },
  },
  {
    name: 'GitHub–Notion Sync',
    slug: 'github-notion-sync-files',
    description:
      'Kept manually copying repo details into Notion, and kept forgetting. A script that keeps a Notion database in sync with GitHub repos tagged "portfolio".',
    url: 'https://github.com/Lanthanum89/github-notion-sync-files',
    languages: ['Python'],
    tools: ['Notion API', 'Automation'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-09T01:59:41Z',
    story: {
      problem: 'Kept manually copying repo details into Notion every time I started a new project, and kept forgetting.',
      attempts: [
        'Built a script to pull repos tagged with the "portfolio" topic from GitHub.',
        'Synced them straight into a Notion database, so the manual copying step just stopped happening.',
      ],
      challenge: 'Keeping the sync idempotent so re-running it doesn\'t create duplicate Notion entries.',
      tradeoffs: 'Chose topic-tag based syncing over a manually maintained list, trading a bit of setup for never having to remember to update Notion again.',
      next: 'Run it on a schedule instead of manually.',
      hindsight: 'I\'d make the sync idempotent from the very first version. I only added that safeguard after it duplicated a few entries.',
    },
  },
  {
    name: 'Get Repos',
    slug: 'get-repos',
    description:
      'Wanted a faster way to browse someone\'s GitHub repos than clicking through the website. A GUI app to fetch and display GitHub repositories for any user.',
    url: 'https://github.com/Lanthanum89/get-repos',
    languages: ['Python', 'Batchfile'],
    tools: ['GitHub API'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-09T01:59:39Z',
    story: {
      problem: 'Wanted a quicker way to browse someone\'s GitHub repos than clicking through the website.',
      attempts: [
        'Built a GUI that fetches and displays repositories for any given username.',
      ],
      challenge: 'Handling the GitHub API\'s rate limits gracefully for something meant to be used casually.',
      tradeoffs: 'Chose a simple GUI over a full dashboard, since the actual need was just browsing repos quickly, not analysing them.',
      next: 'Add filtering by language or last-updated date.',
      hindsight: 'I\'d add basic caching so repeated lookups for the same username didn\'t eat into the API rate limit as fast.',
    },
  },
  {
    name: 'Gaming Backlog',
    slug: 'gaming-backlog-web-app',
    description:
      'My actual gaming backlog lived in my head, and it was getting embarrassingly long. A full-stack ASP.NET Core 9 app to track, manage, and visualise it.',
    url: 'https://github.com/Lanthanum89/GamingBacklogWebApp',
    languages: ['HTML', 'C#', 'CSS', 'JavaScript'],
    tools: ['ASP.NET Core', 'C#'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-09T01:59:38Z',
    story: {
      problem: 'My actual gaming backlog lived in my head and was getting embarrassingly long.',
      attempts: [
        'Built a full-stack ASP.NET Core 9 app to track and manage it properly.',
        'Added visualisation on top of the raw tracking, so the backlog was something I could actually look at, not just a list.',
      ],
      challenge: 'Learning ASP.NET Core 9\'s newer patterns properly rather than defaulting to older tutorials.',
      tradeoffs: 'Chose ASP.NET Core over a framework I already knew well, trading speed of delivery for the chance to actually learn its newer patterns properly.',
      next: 'Add a "what should I play next" suggestion based on the backlog.',
      hindsight: 'I\'d design the visualisation views before the data model, I ended up reshaping the schema once I knew what I actually wanted to see.',
    },
  },
  {
    name: 'Darts Calculator',
    slug: 'darts-calculator',
    description:
      'Wanted to stop doing checkout maths in my head mid-game. A calculator that suggests optimal finishes for any score between 2 and 170, now shipped as CLI, GUI, web, and a TypeScript PWA.',
    url: 'https://github.com/Lanthanum89/darts-calculator',
    languages: ['HTML', 'Python', 'TypeScript'],
    tools: ['CLI', 'GUI', 'Web', 'PWA'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-09T01:58:51Z',
    story: {
      problem: 'Wanted to stop doing checkout maths in my head mid-game.',
      attempts: [
        'Built the core checkout logic for scores between 2 and 170 first.',
        'Shipped it three ways, as a CLI, a GUI, and a web version, once the core logic worked.',
        'Added a fourth interface later, a TypeScript PWA, on top of the same core logic.',
      ],
      challenge: 'Covering every valid checkout combination correctly, including the finishes that have to end on a double.',
      tradeoffs: 'Chose to ship three interfaces on one core logic module, trading extra build time for not having to maintain three separate checkout calculators.',
      next: 'Track real games and checkout success rate over time.',
      hindsight: 'I\'d write tests for the checkout combinations first. I found edge cases by playing real games that I should have caught earlier.',
    },
  },
  {
    name: 'Binary Clock',
    slug: 'binary-clock',
    description:
      'A normal clock felt like a boring project. A clock you have to decode felt more interesting. Available as a web app, PowerShell widget, and native Windows and Android apps.',
    url: 'https://github.com/Lanthanum89/binary-clock',
    languages: ['CSS', 'JavaScript', 'PowerShell', 'HTML', 'Kotlin', 'Batchfile', 'C#'],
    tools: ['Cross-platform'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-09T01:58:29Z',
    spotlight: true,
    story: {
      problem: 'A normal clock felt like a boring project. A clock you have to decode felt more interesting.',
      attempts: [
        'Built it first as a web app.',
        'Ported the same idea to a PowerShell widget, then native Windows and Android apps, mostly to see how the same small idea held up across four very different platforms.',
      ],
      challenge: 'Keeping the actual binary-time logic consistent across four completely different platforms and languages.',
      tradeoffs: 'Chose to rebuild the same idea natively on each platform rather than wrap one codebase, trading reuse for actually learning each platform\'s basics properly.',
      next: 'A watch face version.',
      hindsight: 'I\'d define the binary-time logic as a shared spec up front, each platform ended up with a slightly different interpretation of it that I had to reconcile.',
    },
  },
  {
    name: 'Budget Tracker (Web)',
    slug: 'budget-tracker-web-app',
    description:
      'Wanted an honest view of whether I was on budget, without a finance app trying to sell me something. An ASP.NET Core Razor Pages app to track expenses and stay on target.',
    url: 'https://github.com/Lanthanum89/BudgetTrackerWebApp',
    languages: ['HTML', 'C#', 'CSS', 'JavaScript'],
    tools: ['ASP.NET Core', 'Razor Pages'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-09T01:58:35Z',
    story: {
      problem: 'Wanted an honest, simple view of whether I was on budget, without a finance app trying to sell me something.',
      attempts: [
        'Built it with ASP.NET Core Razor Pages to track expenses and set a budget.',
        'Kept the feature set deliberately small: log expenses, set a budget, see if you\'re on target.',
      ],
      challenge: 'Resisting the urge to add every finance-app feature and keeping it to what I\'d actually use.',
      tradeoffs: 'Chose Razor Pages over a full SPA framework, since a small budget tracker didn\'t need client-side routing or a heavy JavaScript build step.',
      next: 'Add simple month-to-month comparison.',
      hindsight: 'I\'d add basic category tagging from the start rather than one flat list of expenses, categories are the first thing I wanted once I was using it for real.',
    },
  },
  {
    name: 'Budget Tracker (Console)',
    slug: 'budget-tracker-app',
    description:
      'The console version of the idea, before the web app became the one I actually use. Built with C# and .NET 9, tracking fixed expenses and variable spending across categories.',
    url: 'https://github.com/Lanthanum89/BudgetTrackerApp',
    languages: ['C#'],
    tools: ['.NET'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-09T01:58:33Z',
    story: {
      problem: 'Wanted the same budget tracking idea as a console app first, before building the web version.',
      attempts: [
        'Built it in C# and .NET 9, tracking fixed expenses and variable spending across categories.',
      ],
      challenge: 'Separating fixed expenses from variable spending in a way that was actually useful to look at, not just two lists.',
      tradeoffs: 'Chose a console app first over building the web version straight away, so I could get the actual expense-tracking logic right before worrying about any interface.',
      next: 'Superseded by the web version, which is where the active work is now.',
      hindsight: 'Looking back, I\'d have gone straight to the web version. The console app was a useful stepping stone, but it\'s not the one I actually use now.',
    },
  },
  {
    name: '429: Too Many Tabs',
    slug: '429-too-many-tabs',
    description:
      "How many apps does it take to check the time, your calendar, and what's playing? A read-only dashboard for a phone or tablet propped on a desk: clock, binary clock, calendar, to-do list, email, and Spotify, all on one glanceable screen, no backend required.",
    url: 'https://github.com/Lanthanum89/429-Too-Many-Tabs',
    languages: ['TypeScript', 'CSS', 'HTML'],
    tools: ['PWA', 'Capacitor', 'Google Calendar API', 'Gmail API', 'Spotify API'],
    categories: ['Tools & Apps'],
    pushedAt: '2026-07-22T10:38:59Z',
    story: {
      problem: 'Wanted one screen to glance at instead of unlocking five different apps just to check the time, the calendar, and what was playing.',
      attempts: [
        'Started with a single clock widget, then kept adding one glanceable thing at a time: a binary clock, a calendar, a to-do list, email, and Spotify.',
        'Wired up Google Calendar, Gmail, and Spotify as read-only widgets, all client-side, with no backend to host or maintain.',
        'Wrapped the same build with Capacitor to also ship as an Android app, so it works as a proper home-screen dashboard, not just a browser tab.',
      ],
      challenge: 'Getting three separate OAuth flows, Google Calendar, Gmail, and Spotify, all working client-side with no server to hold a secret.',
      tradeoffs: 'Chose read-only everywhere, no writing back to any connected account, trading away some usefulness for something safe to leave running unattended on a screen.',
      next: 'More layout options, so a tablet propped in landscape and a phone propped in portrait don\'t have to look identical.',
      hindsight: 'I\'d pick one OAuth strategy for all three services before wiring up the first one. Doing Spotify\'s PKCE flow after already committing to a different pattern for Google meant redoing work.',
    },
  },
];

export const categoryOrder: Category[] = ['Data & ML', 'Sport', 'Tools & Apps', 'Games'];

/** How many projects to show per category before a language filter is applied. */
export const CATEGORY_PREVIEW_LIMIT = 3;
