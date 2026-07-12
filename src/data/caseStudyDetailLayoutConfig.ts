type CaseStudyDetailLayoutConfig = {
  hideHeroImage?: boolean;
  highlightMetricCards?: boolean;
};

const CASE_STUDY_DETAIL_LAYOUT_BY_ID: Record<string, CaseStudyDetailLayoutConfig> =
  {
    "ad-placement": {
      hideHeroImage: true,
      highlightMetricCards: true,
    },
    "case-04-1": {
      hideHeroImage: true,
      highlightMetricCards: true,
    },
    "case-04-2": {
      hideHeroImage: true,
      highlightMetricCards: true,
    },
    "discover-structure": {
      hideHeroImage: true,
    },
  };

export function getCaseStudyDetailLayoutConfig(
  caseId: string,
): CaseStudyDetailLayoutConfig | undefined {
  return CASE_STUDY_DETAIL_LAYOUT_BY_ID[caseId];
}
