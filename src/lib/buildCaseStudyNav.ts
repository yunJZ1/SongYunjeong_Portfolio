import type { CaseStudySection } from "./parseCaseStudyMarkdown";
import { slugifyCaseStudyLabel } from "./parseCaseStudyMarkdown";

export type CaseStudyNavItem = {
  id: string;
  label: string;
  sections: readonly string[];
};

export function buildCaseStudyNav(
  sections: CaseStudySection[],
): CaseStudyNavItem[] {
  return sections.map((section) => ({
    id: slugifyCaseStudyLabel(section.label),
    label: section.label,
    sections: [section.id],
  }));
}
