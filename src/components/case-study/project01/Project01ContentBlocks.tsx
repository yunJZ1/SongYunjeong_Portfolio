import type { ContentBlock } from "../../../lib/parseCaseStudyMarkdown";
import { getCaseStudyContentEmbed } from "../../../data/caseStudyContentEmbeds";
import { getCaseStudyContentImage } from "../../../data/caseStudyContentImages";
import Project01Callout from "./Project01Callout";
import Project01Image from "./Project01Image";
import Project01ImagePlaceholder from "./Project01ImagePlaceholder";
import {
  PROJECT01_BODY_CLASS,
  PROJECT01_CONTENT_GAP_CLASS,
  PROJECT01_DIVIDER_CLASS,
  PROJECT01_SUBHEADING_CLASS,
} from "./project01Styles";

type Project01ContentBlocksProps = {
  blocks: ContentBlock[];
  caseId?: string;
};

function isWideBlock(block: ContentBlock): boolean {
  return block.type === "image" || block.type === "chart" || block.type === "embed";
}

function renderBlock(block: ContentBlock, index: number, caseId?: string) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className={PROJECT01_BODY_CLASS}>
          {block.text}
        </p>
      );

    case "callout":
      return (
        <Project01Callout key={index}>
          {block.parts.map((part, partIndex) =>
            part.kind === "quote" ? (
              <p
                key={partIndex}
                className="text-[#171719] font-medium italic"
              >
                &ldquo;{part.text}&rdquo;
              </p>
            ) : (
              <p key={partIndex}>{part.text}</p>
            ),
          )}
        </Project01Callout>
      );

    case "quote":
      return (
        <Project01Callout key={index}>
          <p className="text-[#171719] font-medium italic">
            &ldquo;{block.text}&rdquo;
          </p>
        </Project01Callout>
      );

    case "embed": {
      if (!caseId) return null;
      const embed = getCaseStudyContentEmbed(caseId, block.id);
      return embed ? <div key={index}>{embed}</div> : null;
    }

    case "image":
    case "chart": {
      if (block.type === "image" && block.assetKey && caseId) {
        const src = getCaseStudyContentImage(caseId, block.assetKey);
        if (src) {
          return <Project01Image key={index} src={src} />;
        }
      }

      if (block.type === "image" && !block.assetKey) {
        return <Project01ImagePlaceholder key={index} label={block.label} />;
      }

      return null;
    }

    case "metric":
      if (!block.body) {
        return (
          <h3
            key={index}
            className="font-pretendard text-[20px] font-semibold text-[#171719] tracking-[-0.4px] leading-[1.4]"
          >
            {block.title}
          </h3>
        );
      }
      return (
        <div key={index} className="flex flex-col gap-[8px]">
          <p className="font-pretendard text-[20px] font-semibold text-[#171719] tracking-[-0.4px] leading-[1.4]">
            {block.title}
          </p>
          <p className={PROJECT01_BODY_CLASS}>{block.body}</p>
        </div>
      );

    case "subsubsection":
      return (
        <div key={index} className="flex flex-col gap-[8px]">
          <p className={PROJECT01_SUBHEADING_CLASS}>{block.title}</p>
          <p className={PROJECT01_BODY_CLASS}>{block.body}</p>
        </div>
      );

    case "tldr-item":
      return (
        <p key={index} className={PROJECT01_BODY_CLASS}>
          <span className="font-semibold text-[#171719]">
            {block.label} ·{" "}
          </span>
          {block.body}
        </p>
      );

    case "divider":
      return <hr key={index} className={PROJECT01_DIVIDER_CLASS} />;

    default:
      return null;
  }
}

export default function Project01ContentBlocks({
  blocks,
  caseId,
}: Project01ContentBlocksProps) {
  return (
    <div className={PROJECT01_CONTENT_GAP_CLASS}>
      {blocks.map((block, index) => (
        <div
          key={index}
          className={isWideBlock(block) ? "w-full" : undefined}
        >
          {renderBlock(block, index, caseId)}
        </div>
      ))}
    </div>
  );
}
