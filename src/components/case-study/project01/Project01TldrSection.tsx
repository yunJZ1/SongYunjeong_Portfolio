import type { ContentBlock } from "../../../lib/parseCaseStudyMarkdown";
import Project01PageLayout from "./Project01PageLayout";
import {
  PROJECT01_DIVIDER_CLASS,
  PROJECT01_SECTION_GAP_CLASS,
  PROJECT01_SECTION_LABEL_CLASS,
  PROJECT01_TRACK_CLASS,
} from "./project01Styles";

const ROW_LABEL_CLASS =
  "font-pretendard text-[14px] font-semibold text-[#171719] tracking-[-0.28px] leading-[1.5]";

const ROW_BODY_CLASS =
  "font-pretendard text-[15px] md:text-[16px] font-normal text-[#606060] tracking-[-0.32px] leading-[1.7]";

type Project01TldrSectionProps = {
  blocks: ContentBlock[];
};

export default function Project01TldrSection({ blocks }: Project01TldrSectionProps) {
  const items = blocks.filter(
    (block): block is Extract<ContentBlock, { type: "tldr-item" }> =>
      block.type === "tldr-item",
  );

  if (items.length === 0) {
    return null;
  }

  return (
    <section className={`${PROJECT01_TRACK_CLASS} ${PROJECT01_SECTION_GAP_CLASS}`}>
      <Project01PageLayout>
        <p className={PROJECT01_SECTION_LABEL_CLASS}>TL;DR</p>
      </Project01PageLayout>

      <div className="mt-[28px] md:mt-[32px]">
        {items.map((item, index) => (
          <div key={item.label}>
            {index > 0 && <hr className={PROJECT01_DIVIDER_CLASS} />}
            <Project01PageLayout>
              <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-[20px] sm:gap-[36px] py-[30px] items-start">
                <p className={ROW_LABEL_CLASS}>{item.label}</p>
                <p className={ROW_BODY_CLASS}>{item.body}</p>
              </div>
            </Project01PageLayout>
          </div>
        ))}
      </div>
    </section>
  );
}
