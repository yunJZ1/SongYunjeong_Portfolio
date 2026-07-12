const PRODUCT_RESEARCH_FIELD_META: Record<string, string> = {
  "case-02": "Product Design & Research",
  "case-03": "Product Design & Research",
  "ad-placement": "Interaction Design",
  "case-04-1": "Interaction Design",
  "case-04-2": "Product Design & Research",
};

export function getProductResearchFieldMeta(projectId: string): string | undefined {
  return PRODUCT_RESEARCH_FIELD_META[projectId];
}
