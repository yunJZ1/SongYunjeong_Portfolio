const PRODUCT_RESEARCH_PUBLICATION_LINKS: Record<string, string> = {
  "case-02":
    "https://ifdesign.com/en/winner-ranking/project/hnc-patient-centered-communication-platform/553339",
  "case-03":
    "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003000245",
  "ad-placement":
    "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003000245",
  "case-04-1":
    "https://link.springer.com/chapter/10.1007/978-981-95-0289-9_54",
  "case-04-2":
    "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002948062",
};

export function getProductResearchPublicationLink(
  projectId: string,
): string | undefined {
  return PRODUCT_RESEARCH_PUBLICATION_LINKS[projectId];
}
