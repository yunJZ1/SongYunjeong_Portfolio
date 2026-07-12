import { getAllCuratedDetailProjects } from "./getCuratedDetailHero";

export function getCuratedProjectNeighbors(projectId: string): {
  previous?: { id: string; title: string };
  next?: { id: string; title: string };
} {
  const projects = getAllCuratedDetailProjects();
  const index = projects.findIndex((project) => project.id === projectId);

  if (index === -1) return {};

  return {
    previous:
      index > 0
        ? {
            id: projects[index - 1].id,
            title: projects[index - 1].title,
          }
        : undefined,
    next:
      index < projects.length - 1
        ? {
            id: projects[index + 1].id,
            title: projects[index + 1].title,
          }
        : undefined,
  };
}
