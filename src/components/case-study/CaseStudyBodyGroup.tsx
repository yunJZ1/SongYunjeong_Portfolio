import type { ReactNode } from "react";
import type { CaseStudySection } from "../../lib/parseCaseStudyMarkdown";
import {
  CENTERED_BODY_TRACK_CLASS,
  READING_COLUMN_CLASS,
} from "./CaseStudyPage";
import CaseStudyBodySection from "./CaseStudyBodySection";
import ContentBlocks from "./ContentBlocks";

type CaseStudyBodyGroupProps = {
  sections: CaseStudySection[];
  navigation: ReactNode;
};

export default function CaseStudyBodyGroup({
  sections,
  navigation,
}: CaseStudyBodyGroupProps) {
  return (
    <section className={`${CENTERED_BODY_TRACK_CLASS} flex gap-[80px]`}>
      <aside className="hidden lg:block w-[220px] shrink-0">{navigation}</aside>

      <div className={`${READING_COLUMN_CLASS} flex flex-col gap-[140px]`}>
        {sections.map((section) => (
          <CaseStudyBodySection
            key={section.id}
            id={section.id}
            label={section.label}
            title={section.title}
          >
            <ContentBlocks blocks={section.blocks} />
          </CaseStudyBodySection>
        ))}
      </div>
    </section>
  );
}
