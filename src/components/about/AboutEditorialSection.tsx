import type { ReactNode } from "react";
import Container from "../Container";
import {
  CENTERED_BODY_TRACK_CLASS,
  EDITORIAL_ROW_CLASS,
  LABEL_COLUMN_CLASS,
  READING_COLUMN_CLASS,
  SECTION_LABEL_CLASS,
} from "../case-study/CaseStudyPage";

type ContainerVariant = "hero" | "editorial" | "reading";

const SHELL_VARIANT: Record<ContainerVariant, ContainerVariant> = {
  hero: "editorial",
  editorial: "editorial",
  reading: "editorial",
};

type AboutEditorialSectionProps = {
  label: string;
  containerVariant?: ContainerVariant;
  children: ReactNode;
};

export default function AboutEditorialSection({
  label,
  containerVariant = "editorial",
  children,
}: AboutEditorialSectionProps) {
  return (
    <Container variant={SHELL_VARIANT[containerVariant]} as="section">
      <div className={`${CENTERED_BODY_TRACK_CLASS} ${EDITORIAL_ROW_CLASS}`}>
        <div className={LABEL_COLUMN_CLASS}>
          <p className={SECTION_LABEL_CLASS}>{label}</p>
        </div>
        <div className={`${READING_COLUMN_CLASS} flex flex-col gap-[40px]`}>
          {children}
        </div>
      </div>
    </Container>
  );
}
