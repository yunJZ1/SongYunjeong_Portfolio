import type {
  CaseStudySection,
  ContentBlock,
} from "./parseCaseStudyMarkdown";

function blockHasContent(block: ContentBlock): boolean {
  switch (block.type) {
    case "paragraph":
      return block.text.trim().length > 0;
    case "callout":
      return block.parts.some((part) => part.text.trim().length > 0);
    case "quote":
      return block.text.trim().length > 0;
    case "image":
    case "chart":
      return block.label.trim().length > 0;
    case "subheading":
      return block.text.trim().length > 0;
    case "subsubsection":
      return block.title.trim().length > 0 || block.body.trim().length > 0;
    case "metric":
      return block.title.trim().length > 0 || block.body.trim().length > 0;
    case "tldr-item":
      return block.label.trim().length > 0 || block.body.trim().length > 0;
    case "divider":
      return false;
    default:
      return false;
  }
}

export function filterPopulatedSections(
  sections: CaseStudySection[],
): CaseStudySection[] {
  return sections.filter((section) =>
    section.blocks.some((block) => blockHasContent(block)),
  );
}

export function filterPopulatedBlocks(blocks: ContentBlock[]): ContentBlock[] {
  return blocks.filter((block) => blockHasContent(block));
}
