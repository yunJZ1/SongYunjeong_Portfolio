import type { ContentBlock } from "../../lib/parseCaseStudyMarkdown";
import Callout from "./Callout";
import ImagePlaceholder from "./ImagePlaceholder";

const BODY_CLASS =
  "font-pretendard text-[17px] font-normal text-[#606060] tracking-[-0.51px] leading-[1.71]";

const WIDE_WRAP = "w-full";

type ContentBlocksProps = {
  blocks: ContentBlock[];
  tone?: "default" | "featured";
};

function isWideBlock(block: ContentBlock): boolean {
  return block.type === "image" || block.type === "chart";
}

function renderBlock(
  block: ContentBlock,
  index: number,
  bodyClass: string,
  quoteClass: string,
) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className={bodyClass}>
          {block.text}
        </p>
      );

    case "callout":
      return (
        <Callout key={index}>
          {block.parts.map((part, partIndex) =>
            part.kind === "quote" ? (
              <p key={partIndex} className={quoteClass}>
                &ldquo;{part.text}&rdquo;
              </p>
            ) : (
              <p key={partIndex}>{part.text}</p>
            ),
          )}
        </Callout>
      );

    case "quote":
      return (
        <Callout key={index}>
          <p className={quoteClass}>&ldquo;{block.text}&rdquo;</p>
        </Callout>
      );

    case "image":
    case "chart":
      return <ImagePlaceholder key={index} label={block.label} />;

    case "metric":
      if (!block.body) {
        return (
          <h3
            key={index}
            className="font-pretendard text-[24px] font-semibold text-[#171719] tracking-[-0.72px] leading-[1.4]"
          >
            {block.title}
          </h3>
        );
      }
      return (
        <div key={index} className="flex flex-col gap-[8px]">
          <p className="font-pretendard text-[24px] font-semibold text-[#171719] tracking-[-0.72px] leading-[1.4]">
            {block.title}
          </p>
          <p className={bodyClass}>{block.body}</p>
        </div>
      );

    case "subsubsection":
      return (
        <div key={index} className="flex flex-col gap-[8px]">
          <p className="font-pretendard text-[17px] font-semibold text-[#171719] tracking-[-0.51px]">
            {block.title}
          </p>
          <p className={bodyClass}>{block.body}</p>
        </div>
      );

    case "tldr-item":
      return (
        <p key={index} className={bodyClass}>
          <span className="font-semibold text-[#171719]">
            {block.label} ·{" "}
          </span>
          {block.body}
        </p>
      );

    case "divider":
      return (
        <hr key={index} className="border-0 h-px w-full bg-[#e7e7e7]" />
      );

    default:
      return null;
  }
}

export default function ContentBlocks({
  blocks,
  tone = "default",
}: ContentBlocksProps) {
  const bodyClass =
    tone === "featured"
      ? "font-pretendard text-[17px] font-normal text-[#d1d5db] tracking-[-0.51px] leading-[1.71]"
      : BODY_CLASS;
  const quoteClass =
    tone === "featured"
      ? "text-white font-semibold italic"
      : "text-[#171719] font-semibold italic";

  return (
    <div className="flex flex-col gap-[40px]">
      {blocks.map((block, index) => (
        <div
          key={index}
          className={isWideBlock(block) ? WIDE_WRAP : undefined}
        >
          {renderBlock(block, index, bodyClass, quoteClass)}
        </div>
      ))}
    </div>
  );
}
