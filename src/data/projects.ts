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
    status: 'Public',
    links: [
      { label: 'GitHub', href: 'https://github.com/nangongbee/dungeon-gen' },
      { label: 'Write-up', href: '/2026/11/12/dungeon-with-a-main-path/' },
    ],
  },
];
