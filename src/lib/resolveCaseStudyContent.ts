import { buildCaseStudyNav } from "./buildCaseStudyNav";
import {
  parseCaseStudyMarkdown,
  type CaseStudySection,
  type ParsedCaseStudy,
} from "./parseCaseStudyMarkdown";

export type ResolvedCaseStudyContent = {
  parsed: ParsedCaseStudy;
  bodySections: CaseStudySection[];
  navItems: ReturnType<typeof buildCaseStudyNav>;
};

export function resolveCaseStudyContent(
  contentMd: string,
): ResolvedCaseStudyContent {
  const parsed = parseCaseStudyMarkdown(contentMd);
  const bodySections = parsed.sections;

  return {
    parsed,
    bodySections,
    navItems: buildCaseStudyNav(bodySections),
  };
}
