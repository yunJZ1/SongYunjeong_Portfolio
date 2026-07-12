import type { CaseStudyNavItem } from "./buildCaseStudyNav";

export const PROJECT01_INTRO_SECTION_ID = "project01-intro";

export function buildProject01Nav(
  bodyNav: CaseStudyNavItem[],
): CaseStudyNavItem[] {
  return [
    {
      id: "intro",
      label: "Intro",
      sections: [PROJECT01_INTRO_SECTION_ID],
    },
    ...bodyNav,
  ];
}
