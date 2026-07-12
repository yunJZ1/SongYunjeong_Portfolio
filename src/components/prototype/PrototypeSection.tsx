import type { CaseStudyPrototypeConfig } from "../../types/caseStudyPrototype";
import {
  PROJECT01_BLOCK_GAP_CLASS,
  PROJECT01_SECTION_INNER_GAP_CLASS,
  PROJECT01_SECTION_LABEL_CLASS,
  PROJECT01_SECTION_TITLE_CLASS,
} from "../case-study/project01/project01Styles";
import PrototypeEditorialBlock from "./PrototypeEditorialBlock";

type PrototypeSectionProps = {
  config: CaseStudyPrototypeConfig;
};

export default function PrototypeSection({ config }: PrototypeSectionProps) {
  return (
    <section
      id={config.sectionDomId}
      className={`scroll-mt-[96px] ${PROJECT01_BLOCK_GAP_CLASS}`}
    >
      <div className={PROJECT01_SECTION_INNER_GAP_CLASS}>
        <p className={PROJECT01_SECTION_LABEL_CLASS}>{config.label}</p>
        <h2 className={PROJECT01_SECTION_TITLE_CLASS}>{config.title}</h2>
        <p className="font-pretendard text-[15px] md:text-[16px] font-normal text-[#606060] tracking-[-0.32px] leading-[1.7] max-w-[720px]">
          {config.description}
        </p>
      </div>

      <div className="mt-[40px] md:mt-[48px] flex flex-col gap-[64px] md:gap-[80px]">
        {config.blocks.map((block) => (
          <PrototypeEditorialBlock key={block.id} block={block} />
        ))}
      </div>
    </section>
  );
}
