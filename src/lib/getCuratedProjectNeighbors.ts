import {
  CASE_STUDY_AI_WORKFLOW_PROJECTS,
  CASE_STUDY_PRODUCT_CASE_PROJECTS,
  type CuratedProjectDisplay,
} from "../data/curatedProjectDisplay";
import {
  CASE_STUDY_LIST_CATEGORIES,
  type CaseStudyListCategory,
} from "./caseStudyListCategory";

const TBU_WORKFLOW_CARD_ID = "build-validate";

const DETAIL_NAV_CATEGORY_ORDER: CaseStudyListCategory[] = [
  "product-cases",
  "ai-workflow",
  "product-research",
];

const DETAIL_PROJECT_CATEGORY: Record<string, CaseStudyListCategory> = {
  "ad-placement": "product-cases",
  "case-04-1": "product-cases",
  "case-04-2": "product-cases",
  "build-validate": "ai-workflow",
  "discover-structure": "ai-workflow",
};

export type CuratedProjectNeighbor =
  | {
      type: "project";
      id: string;
      title: string;
    }
  | {
      type: "category";
      category: CaseStudyListCategory;
      title: string;
    };

function getCategoryLabel(category: CaseStudyListCategory): string {
  const match = CASE_STUDY_LIST_CATEGORIES.find((item) => item.id === category);
  return match ? `[${match.label}]` : `[${category}]`;
}

function getNavigableProjectsInCategory(
  category: CaseStudyListCategory,
): CuratedProjectDisplay[] {
  switch (category) {
    case "product-cases":
      return CASE_STUDY_PRODUCT_CASE_PROJECTS;
    case "ai-workflow":
      return CASE_STUDY_AI_WORKFLOW_PROJECTS.filter(
        (project) => project.id !== TBU_WORKFLOW_CARD_ID,
      );
    case "product-research":
      return [];
  }
}

function getPreviousCategory(
  category: CaseStudyListCategory,
): CaseStudyListCategory | undefined {
  const index = DETAIL_NAV_CATEGORY_ORDER.indexOf(category);
  if (index <= 0) return undefined;
  return DETAIL_NAV_CATEGORY_ORDER[index - 1];
}

function getNextCategory(
  category: CaseStudyListCategory,
): CaseStudyListCategory | undefined {
  const index = DETAIL_NAV_CATEGORY_ORDER.indexOf(category);
  if (index === -1 || index >= DETAIL_NAV_CATEGORY_ORDER.length - 1) {
    return undefined;
  }
  return DETAIL_NAV_CATEGORY_ORDER[index + 1];
}

export function getCuratedProjectNeighbors(projectId: string): {
  previous?: CuratedProjectNeighbor;
  next?: CuratedProjectNeighbor;
} {
  const category = DETAIL_PROJECT_CATEGORY[projectId];
  if (!category) return {};

  const navigableProjects = getNavigableProjectsInCategory(category);
  const index = navigableProjects.findIndex((project) => project.id === projectId);

  if (index === -1) return {};

  const previous =
    index > 0
      ? {
          type: "project" as const,
          id: navigableProjects[index - 1].id,
          title: navigableProjects[index - 1].title,
        }
      : (() => {
          const previousCategory = getPreviousCategory(category);
          return previousCategory
            ? {
                type: "category" as const,
                category: previousCategory,
                title: getCategoryLabel(previousCategory),
              }
            : undefined;
        })();

  const next =
    index < navigableProjects.length - 1
      ? {
          type: "project" as const,
          id: navigableProjects[index + 1].id,
          title: navigableProjects[index + 1].title,
        }
      : (() => {
          const nextCategory = getNextCategory(category);
          return nextCategory
            ? {
                type: "category" as const,
                category: nextCategory,
                title: getCategoryLabel(nextCategory),
              }
            : undefined;
        })();

  return { previous, next };
}
