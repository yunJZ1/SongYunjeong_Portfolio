import case01Md from "../../docs/projects/case study/case 01/content.md?raw";
import case02Md from "../../docs/projects/case study/case 02/content.md?raw";
import case03Md from "../../docs/projects/case study/case 03/content.md?raw";
import case04_1Md from "../../docs/projects/case study/case 04-1/content.md?raw";
import case04_2Md from "../../docs/projects/case study/case 04-2/content.md?raw";
import discoverStructureMd from "../../docs/projects/case study/discover-structure/content.md?raw";

const CASE_STUDY_CONTENT_BY_ID: Record<string, string> = {
  "ad-placement": case01Md,
  "case-02": case02Md,
  "case-03": case03Md,
  "case-04-1": case04_1Md,
  "case-04-2": case04_2Md,
  "discover-structure": discoverStructureMd,
};

export function getCaseStudyContentMd(projectId: string): string | undefined {
  const content = CASE_STUDY_CONTENT_BY_ID[projectId];
  if (!content?.trim()) return undefined;
  return content;
}
