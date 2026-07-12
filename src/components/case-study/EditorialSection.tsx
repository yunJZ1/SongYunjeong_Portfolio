import type { ReactNode } from "react";
import Container from "../Container";
import SectionHeading from "./SectionHeading";

type EditorialSectionProps = {
  id?: string;
  label: string;
  title?: string;
  children: ReactNode;
  className?: string;
  nested?: boolean;
};

export default function EditorialSection({
  id,
  label,
  title,
  children,
  className = "",
  nested = false,
}: EditorialSectionProps) {
  const content = (
    <div className="flex flex-col gap-[40px]">
      <Container variant="reading">
        <SectionHeading label={label} title={title} />
      </Container>
      <Container variant="reading">{children}</Container>
    </div>
  );

  if (nested) {
    return (
      <section id={id} className={`scroll-mt-[96px] ${className}`.trim()}>
        {content}
      </section>
    );
  }

  return (
    <Container
      variant="editorial"
      as="section"
      id={id}
      className={`scroll-mt-[96px] ${className}`.trim()}
    >
      {content}
    </Container>
  );
}
