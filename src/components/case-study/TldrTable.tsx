import type { ContentBlock } from "../../lib/parseCaseStudyMarkdown";

const ROW_LABEL_CLASS =
  "font-pretendard text-[17px] font-semibold text-[#171719] tracking-[-0.51px] leading-[1.71] shrink-0 w-full sm:w-[120px]";

const ROW_BODY_CLASS =
  "font-pretendard text-[17px] font-normal text-[#606060] tracking-[-0.51px] leading-[1.71] flex-1 min-w-0";

type TldrTableProps = {
  blocks: ContentBlock[];
};

export default function TldrTable({ blocks }: TldrTableProps) {
  const items = blocks.filter(
    (block): block is Extract<ContentBlock, { type: "tldr-item" }> =>
      block.type === "tldr-item",
  );

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <div key={item.label}>
          {index > 0 && (
            <hr className="border-0 h-px w-full bg-[#e7e7e7]" />
          )}
          <div className="flex flex-col sm:flex-row sm:gap-[24px] py-[28px]">
            <p className={ROW_LABEL_CLASS}>{item.label}</p>
            <p className={ROW_BODY_CLASS}>{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
