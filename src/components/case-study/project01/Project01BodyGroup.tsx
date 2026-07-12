import type { ReactNode } from "react";
import type { CaseStudySection } from "../../../lib/parseCaseStudyMarkdown";
import Project01BodySection from "./Project01BodySection";
import Project01ContentBlocks from "./Project01ContentBlocks";
import Project01PageLayout from "./Project01PageLayout";
import { PROJECT01_TRACK_CLASS } from "./project01Styles";

type Project01BodyGroupProps = {
  sections: CaseStudySection[];
  navigation: ReactNode;
};

export default function Project01BodyGroup({
  sections,
  navigation,
}: Project01BodyGroupProps) {
  return (
    <section className={PROJECT01_TRACK_CLASS}>
      <Project01PageLayout sidebar={navigation}>
        <div className="flex flex-col gap-[96px] md:gap-[108px]">
          {sections.map((section) => (
            <Project01BodySection
              key={section.id}
              id={section.id}
              label={section.label}
              title={section.title}
            >
              <Project01ContentBlocks blocks={section.blocks} />
            </Project01BodySection>
          ))}
        </div>
      </Project01PageLayout>
    </section>
  );
}
