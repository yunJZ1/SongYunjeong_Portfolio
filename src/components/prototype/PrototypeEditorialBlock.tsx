import type { PrototypeEditorialBlockConfig } from "../../types/caseStudyPrototype";
import { PROJECT01_BODY_CLASS } from "../case-study/project01/project01Styles";
import PrototypeHeroPanel from "./PrototypeHeroPanel";

type PrototypeEditorialBlockProps = {
  block: PrototypeEditorialBlockConfig;
};

export default function PrototypeEditorialBlock({
  block,
}: PrototypeEditorialBlockProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-[32px] lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] lg:gap-[40px] xl:gap-[48px]">
      <div className="flex min-h-full flex-col justify-center gap-[16px] pt-[8px] lg:max-w-[320px] lg:py-[24px]">
        {block.heading && (
          <h3 className="font-pretendard text-[18px] font-medium text-[#171719] tracking-[-0.36px] leading-[1.4]">
            {block.heading}
          </h3>
        )}
        {block.description && (
          <p className={PROJECT01_BODY_CLASS}>{block.description}</p>
        )}
      </div>

      <PrototypeHeroPanel screen={block.screen} />
    </div>
  );
}
