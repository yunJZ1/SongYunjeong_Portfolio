const CASE_STUDY_DETAIL_KEYWORD_CHIPS: Record<string, string[]> = {
  "ad-placement": [
    "Commercial Project (NDA)",
    "2026",
    "Team (Undisclosed Client, 국내 전자회사)",
    "UX 리서처 2명 · 인터랙션 디자이너 4명 (본인 포함, 클라이언트 3명)",
    "Product Research & Strategy",
    "기여도 20%",
  ],
  "case-04-2": [
    "Commercial Project (NDA)",
    "2026",
    "Team (Undisclosed Client, 국내 전자회사)",
    "UX 리서처 3명 · 인터랙션·제품 디자이너 4명 (본인 포함, 클라이언트 3명)",
    "Product Validation & UX Evaluation",
    "기여도 30%",
  ],
};

export function getCaseStudyDetailKeywordChips(
  caseId: string,
  fallback: string[],
): string[] {
  return CASE_STUDY_DETAIL_KEYWORD_CHIPS[caseId] ?? fallback;
}
