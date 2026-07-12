import type { ReactNode } from "react";
import {
  PROJECT01_SECTION_INNER_GAP_CLASS,
  PROJECT01_SECTION_LABEL_CLASS,
  PROJECT01_SECTION_TITLE_CLASS,
} from "./project01Styles";

type Project01BodySectionProps = {
  id?: string;
  label: string;
  title?: string;
  children: ReactNode;
};

export default function Project01BodySection({
  id,
  label,
  title,
  children,
}: Project01BodySectionProps) {
  return (
    <section id={id} className="scroll-mt-[96px] flex flex-col gap-[28px]">
      <div className={`${PROJECT01_SECTION_INNER_GAP_CLASS}`}>
        <p className={PROJECT01_SECTION_LABEL_CLASS}>{label}</p>
        {title && <h2 className={PROJECT01_SECTION_TITLE_CLASS}>{title}</h2>}
      </div>
      {children}
    </section>
  );
}
