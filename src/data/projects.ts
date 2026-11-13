export type Project = {
  title: string;
  overview: string;
  problem: string;
  architecture: string;
  decisions: string;
  implementation: string;
  stack: string;
  status: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: 'dungeon-gen',
    overview:
      'C++20 dungeon generator that turns a seed into a room graph with a main path, side branches, doors, and keys.',
    problem:
      'Need level-like pacing instead of a freely explorable tile maze: reachable boss path, controlled shortcuts, and keys that cannot spawn behind their own doors.',
    architecture:
      'Standard-library core library for generation, queries, and session movement; optional SDL2 + ImGui viewer; CLI for ASCII/JSON; invariant tests in CI.',
    decisions:
      'Represent the dungeon as a room graph rather than carved tiles; reject branch reconnects that violate shortcutRatio; drop illegal doors instead of shipping unsolvable maps.',
    implementation:
      'Selection-stack main path, segmented branch growth, shortest-path shortcut checks, then content fill. Deterministic per seed with retry offsets on hard failures.',
    stack: 'C++20, CMake, optional SDL2/ImGui, GitHub Actions',
    status: 'A generator and a small viewer. It is not a game.',
    links: [
      { label: 'Source code', href: 'https://github.com/nangongbee/dungeon-gen' },
      { label: 'Write-up', href: '/2026/11/12/dungeon-with-a-main-path/' },
    ],
  },
  {
    title: 'fox-core',
    overview:
      'The bootstrap for a Node.js game-service process: lifecycle, plugins, and configuration.',
    problem:
      'Start a service process in a fixed order, without putting gameplay inside the framework.',
    architecture:
      'Application.start() emits app-init, app-inited, app-loaded, app-run, and app-running. Files in app/hook are registered after app-init.',
    decisions:
      'This package does not contain room rules, protocol, or business configuration. Directory conventions live in fox.',
    implementation:
      'Published as @find_bumblebee/fox-core. It requires Node.js 20 or newer.',
    stack: 'Node.js',
    status: 'Framework core. It does not ship a game.',
    links: [
      { label: 'Source code', href: 'https://github.com/nangongbee/fox-core' },
      { label: 'npm', href: 'https://www.npmjs.com/package/@find_bumblebee/fox-core' },
    ],
  },
  {
    title: 'fox',
    overview:
      'Directory conventions for a game-service process, built on fox-core.',
    problem:
      'Give controllers, services, events, and scheduled tasks a stable place in the process.',
    architecture:
      'It loads app/controller, app/service, app/event, app/crontab, and app/hook. Controller methods are registered under names such as user/ping. Event functions are bound with app.on. A crontab entry needs both a cron string and a task function.',
    decisions:
      'fox-core owns the lifecycle. fox owns the layout. Game rules stay outside both packages.',
    implementation:
      'Published as @find_bumblebee/fox. It requires Node.js 20 or newer.',
    stack: 'Node.js, node-schedule',
    status: 'Framework conventions. The package has no game content.',
    links: [
      { label: 'Source code', href: 'https://github.com/nangongbee/fox' },
      { label: 'npm', href: 'https://www.npmjs.com/package/@find_bumblebee/fox' },
    ],
  },
];
