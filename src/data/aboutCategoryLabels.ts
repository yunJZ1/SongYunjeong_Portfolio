import type { CaseStudyPillVariant } from "./caseStudyCardLabels";
import type { AboutSectionCategory } from "../lib/buildAboutPageSections";

export const ABOUT_CATEGORY_PILLS: Record<
  AboutSectionCategory,
  { variant: CaseStudyPillVariant; label: string }
> = {
  careers: { variant: "careers", label: "Careers" },
  awards: { variant: "award-winning", label: "Awards" },
  "ma-labs": { variant: "ma-labs", label: "MA & Labs" },
  etc: { variant: "etc", label: "ETC" },
};
