import { getCaseStudyPrototypeConfig } from "../data/caseStudyPrototypeConfig";
import type { CaseStudyNavItem } from "./buildCaseStudyNav";
import { buildProject01Nav } from "./buildProject01Nav";

export function buildCaseStudyDetailNav(
  caseId: string,
  bodyNav: CaseStudyNavItem[],
): CaseStudyNavItem[] {
  const navItems = buildProject01Nav(bodyNav);
  const prototypeConfig = getCaseStudyPrototypeConfig(caseId);

  if (!prototypeConfig) {
    return navItems;
  }

  const introIndex = navItems.findIndex((item) => item.id === "intro");
  const insertAt = introIndex === -1 ? 0 : introIndex + 1;

  const prototypeNavItem: CaseStudyNavItem = {
    id: "prototype",
    label: prototypeConfig.navLabel,
    sections: [prototypeConfig.sectionDomId],
  };

  return [
    ...navItems.slice(0, insertAt),
    prototypeNavItem,
    ...navItems.slice(insertAt),
  ];
}
