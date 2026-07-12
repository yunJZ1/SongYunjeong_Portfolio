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

  if (prototypeConfig.placementSectionId) {
    const placementIndex = navItems.findIndex((item) =>
      item.sections.includes(prototypeConfig.placementSectionId!),
    );

    if (placementIndex === -1) {
      return navItems;
    }

    const placementItem = navItems[placementIndex];
    const nextSections = [
      ...placementItem.sections,
      prototypeConfig.sectionDomId,
    ] as const;

    return [
      ...navItems.slice(0, placementIndex),
      { ...placementItem, sections: nextSections },
      ...navItems.slice(placementIndex + 1),
    ];
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
