import type { CaseStudyListCategory } from "../lib/caseStudyListCategory";

export type CaseStudyPillVariant =
  | "year"
  | "published"
  | "commercial"
  | "award-winning"
  | "ai-built-prototype"
  | "tbu"
  | "careers"
  | "ma-labs"
  | "etc";

export type CaseStudyPillLabel = {
  variant: CaseStudyPillVariant;
  label: string;
};

const CARD_LABELS: Record<
  CaseStudyListCategory,
  Record<string, CaseStudyPillLabel[]>
> = {
  "product-cases": {
    "ad-placement": [
      { variant: "year", label: "2026" },
      { variant: "published", label: "Published" },
    ],
    "case-04-1": [
      { variant: "year", label: "2025" },
      { variant: "commercial", label: "Commercial" },
    ],
    "case-04-2": [
      { variant: "year", label: "2025" },
      { variant: "commercial", label: "Commercial" },
    ],
  },
  "ai-workflow": {
    "build-validate": [{ variant: "year", label: "2026" }],
    "discover-structure": [
      { variant: "year", label: "2026" },
      { variant: "ai-built-prototype", label: "AI-built Prototype" },
    ],
  },
  "product-research": {
    "case-02": [
      { variant: "year", label: "2023" },
      { variant: "award-winning", label: "Award-Winning" },
    ],
    "case-03": [
      { variant: "year", label: "2023" },
      { variant: "published", label: "Published" },
    ],
    "ad-placement": [
      { variant: "year", label: "2025" },
      { variant: "award-winning", label: "Award-Winning" },
    ],
    "case-04-1": [
      { variant: "year", label: "2025" },
      { variant: "published", label: "Published" },
    ],
    "case-04-2": [
      { variant: "year", label: "2023" },
      { variant: "published", label: "Published" },
    ],
  },
};

export function getCaseStudyCardLabels(
  category: CaseStudyListCategory,
  projectId: string,
): CaseStudyPillLabel[] {
  return CARD_LABELS[category][projectId] ?? [];
}

const HOME_FEATURED_LABELS: Record<
  "product-cases" | "ai-workflow",
  Record<string, CaseStudyPillLabel[]>
> = {
  "product-cases": {
    "ad-placement": [
      { variant: "year", label: "2026" },
      { variant: "published", label: "Published" },
    ],
    "case-04-1": [
      { variant: "year", label: "2025" },
      { variant: "commercial", label: "Commercial" },
    ],
    "case-04-2": [
      { variant: "year", label: "2025" },
      { variant: "commercial", label: "Commercial" },
    ],
  },
  "ai-workflow": {
    "build-validate": [
      { variant: "year", label: "2026" },
      { variant: "tbu", label: "TBU" },
    ],
    "discover-structure": [
      { variant: "year", label: "2026" },
      { variant: "ai-built-prototype", label: "AI-built Prototype" },
    ],
  },
};

export function getHomeFeaturedCardLabels(
  section: "product-cases" | "ai-workflow",
  projectId: string,
): CaseStudyPillLabel[] {
  return HOME_FEATURED_LABELS[section][projectId] ?? [];
}
