import { HOME_AI_WORKFLOW_CARDS } from "../data/homeAiWorkflow";
import {
  CASE_STUDY_AI_WORKFLOW_PROJECTS,
  CASE_STUDY_PRODUCT_CASE_PROJECTS,
  CASE_STUDY_PRODUCT_RESEARCH_PROJECTS,
  type CuratedProjectDisplay,
} from "../data/curatedProjectDisplay";
import { getFeaturedCaseStudies } from "../data/featuredCaseStudies";
import type { FeaturedCaseStudyCard } from "../data/featuredCaseStudies";

type WorkflowCard = (typeof HOME_AI_WORKFLOW_CARDS)[number];

export type CuratedCaseEntry = {
  type: "curated-case";
  id: string;
  title: string;
  description: string;
  meta: string;
  study?: FeaturedCaseStudyCard;
};

export type CuratedWorkflowEntry = {
  type: "curated-workflow";
  id: string;
  title: string;
  description: string;
  workflow?: WorkflowCard;
};

export type CuratedArchiveEntry = CuratedCaseEntry | CuratedWorkflowEntry;

const studyMap = new Map(
  getFeaturedCaseStudies().map((study) => [study.id, study]),
);

function resolveMeta(project: CuratedProjectDisplay): string {
  if (project.year && project.category) {
    return `${project.year}・${project.category}`;
  }

  return project.category ?? "Case Study";
}

function buildCuratedCaseEntries(
  projects: CuratedProjectDisplay[],
): CuratedCaseEntry[] {
  return projects.map((project) => {
    const study = studyMap.get(project.id);

    return {
      type: "curated-case",
      id: project.id,
      title: project.title,
      description: project.description,
      meta: resolveMeta(project),
      study,
    };
  });
}

function buildCuratedWorkflowEntries(
  projects: CuratedProjectDisplay[],
): CuratedWorkflowEntry[] {
  return projects.map((project) => ({
    type: "curated-workflow" as const,
    id: project.id,
    title: project.title,
    description: project.description,
    workflow: HOME_AI_WORKFLOW_CARDS.find((card) => card.id === project.id),
  }));
}

export function buildCuratedArchiveEntries(
  category: "product-cases" | "ai-workflow" | "product-research",
): CuratedArchiveEntry[] {
  if (category === "ai-workflow") {
    return buildCuratedWorkflowEntries(CASE_STUDY_AI_WORKFLOW_PROJECTS);
  }

  if (category === "product-cases") {
    return buildCuratedCaseEntries(CASE_STUDY_PRODUCT_CASE_PROJECTS);
  }

  return buildCuratedCaseEntries(CASE_STUDY_PRODUCT_RESEARCH_PROJECTS);
}
