import {
  CASE_STUDY_PRODUCT_RESEARCH_PROJECTS,
  HOME_AI_WORKFLOW_PROJECTS,
  HOME_CASE_STUDY_PROJECTS,
  type CuratedProjectDisplay,
} from "../data/curatedProjectDisplay";

export type CuratedDetailHero = {
  id: string;
  title: string;
  subtitle: string;
  sectionLabel: string;
  category?: string;
  year?: string;
};

type CuratedSource = {
  project: CuratedProjectDisplay;
  sectionLabel: string;
};

const CURATED_DETAIL_SOURCES: CuratedSource[] = [
  ...HOME_CASE_STUDY_PROJECTS.map(
    (project): CuratedSource => ({ project, sectionLabel: "Case Study" }),
  ),
  ...HOME_AI_WORKFLOW_PROJECTS.map(
    (project): CuratedSource => ({ project, sectionLabel: "AI Workflow" }),
  ),
  ...CASE_STUDY_PRODUCT_RESEARCH_PROJECTS.map(
    (project): CuratedSource => ({
      project,
      sectionLabel: "Product Research",
    }),
  ),
];

export function getCuratedDetailHero(
  projectId: string,
): CuratedDetailHero | undefined {
  const match = CURATED_DETAIL_SOURCES.find(
    (source) => source.project.id === projectId,
  );

  if (!match) return undefined;

  return {
    id: match.project.id,
    title: match.project.title,
    subtitle: match.project.description,
    sectionLabel: match.sectionLabel,
    category: match.project.category,
    year: match.project.year,
  };
}

export function getAllCuratedDetailProjects(): CuratedProjectDisplay[] {
  const seen = new Set<string>();
  const projects: CuratedProjectDisplay[] = [];

  for (const source of CURATED_DETAIL_SOURCES) {
    if (seen.has(source.project.id)) continue;
    seen.add(source.project.id);
    projects.push(source.project);
  }

  return projects;
}
