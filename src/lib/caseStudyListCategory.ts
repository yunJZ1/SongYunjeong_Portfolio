export type CaseStudyListCategory =
  | "product-cases"
  | "ai-workflow"
  | "product-research";

export const CASE_STUDY_LIST_CATEGORIES: {
  id: CaseStudyListCategory;
  label: string;
}[] = [
  { id: "product-cases", label: "Product Cases" },
  { id: "ai-workflow", label: "AI Workflow" },
  { id: "product-research", label: "Product Research" },
];

export const DEFAULT_CASE_STUDY_CATEGORY: CaseStudyListCategory =
  "product-cases";

export type CaseStudyArchiveCategory = Exclude<
  CaseStudyListCategory,
  "ai-workflow"
>;

export function isCaseStudyListCategory(
  value: string | null,
): value is CaseStudyListCategory {
  return (
    value === "product-cases" ||
    value === "ai-workflow" ||
    value === "product-research"
  );
}
