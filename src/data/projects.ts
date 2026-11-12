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

/** Public projects ready for documentation. Empty until a project is ready. */
export const projects: Project[] = [];
