import { normalizeCaseStudyMarkdown } from "./normalizeCaseStudyMarkdown";

type CalloutPart =
  | { kind: "text"; text: string }
  | { kind: "quote"; text: string };

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "callout"; parts: CalloutPart[] }
  | { type: "quote"; text: string }
  | { type: "image"; label: string }
  | { type: "chart"; label: string }
  | { type: "subheading"; text: string }
  | { type: "subsubsection"; title: string; body: string }
  | { type: "metric"; title: string; body: string }
  | { type: "tldr-item"; label: string; body: string }
  | { type: "divider" };

export type CaseStudySection = {
  id: string;
  label: string;
  title?: string;
  blocks: ContentBlock[];
};

export type ParsedCaseStudy = {
  projectName: string;
  hero: {
    title: string;
    subtitle: string;
    meta: string;
    metaChips: string[];
  };
  tldr: ContentBlock[];
  keyMetrics: ContentBlock[];
  sections: CaseStudySection[];
};

const STRUCTURAL_SECTION_LABELS = new Set(["Hero", "TL;DR", "Key Metrics"]);

export function slugifyCaseStudyLabel(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type MarkdownSection = {
  label: string;
  body: string;
};

function splitH2Sections(markdown: string): MarkdownSection[] {
  const sections: MarkdownSection[] = [];

  for (const part of markdown.split(/\n(?=## )/)) {
    const match = part.match(/^## (.+)\n([\s\S]*)$/);
    if (!match) continue;

    sections.push({
      label: match[1].trim(),
      body: match[2].trim(),
    });
  }

  return sections;
}

function parseMetaChips(meta: string): string[] {
  return meta
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean);
}

function stripSectionSeparator(body: string): string {
  return body.replace(/\n---\s*$/, "").trim();
}

function parseBlocks(body: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  const lines = body.split("\n");
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i += 1;
      continue;
    }

    if (line === "---") {
      blocks.push({ type: "divider" });
      i += 1;
      continue;
    }

    if (line === "[CALLOUT]") {
      const parts: CalloutPart[] = [];
      i += 1;
      while (i < lines.length && lines[i].trim() !== "[/CALLOUT]") {
        const calloutLine = lines[i].trim();
        if (calloutLine.startsWith("> ")) {
          parts.push({ kind: "quote", text: calloutLine.slice(2) });
        } else if (calloutLine) {
          parts.push({ kind: "text", text: calloutLine });
        }
        i += 1;
      }
      if (parts.length > 0) {
        blocks.push({ type: "callout", parts });
      }
      i += 1;
      continue;
    }

    const imageMatch = line.match(/^\[IMAGE_PLACEHOLDER:\s*(.+)\]$/);
    if (imageMatch) {
      blocks.push({ type: "image", label: imageMatch[1].trim() });
      i += 1;
      continue;
    }

    const chartMatch = line.match(/^\[CHART_PLACEHOLDER:\s*(.+)\]$/);
    if (chartMatch) {
      blocks.push({ type: "chart", label: chartMatch[1].trim() });
      i += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      const title = line.slice(4).trim();
      i += 1;
      const subLines: string[] = [];
      while (i < lines.length) {
        const next = lines[i].trim();
        if (
          next.startsWith("### ") ||
          next.startsWith("#### ") ||
          next === "[CALLOUT]" ||
          next.startsWith("[IMAGE_PLACEHOLDER:") ||
          next.startsWith("[CHART_PLACEHOLDER:") ||
          next === "---"
        ) {
          break;
        }
        if (next) subLines.push(next);
        i += 1;
      }
      blocks.push({ type: "metric", title, body: subLines.join(" ") });
      continue;
    }

    if (line.startsWith("#### ")) {
      const title = line.slice(5).trim();
      i += 1;
      const subLines: string[] = [];
      while (i < lines.length) {
        const next = lines[i].trim();
        if (
          next.startsWith("### ") ||
          next.startsWith("#### ") ||
          next === "[CALLOUT]" ||
          next.startsWith("[IMAGE_PLACEHOLDER:") ||
          next.startsWith("[CHART_PLACEHOLDER:") ||
          next === "---"
        ) {
          break;
        }
        if (next) subLines.push(next);
        i += 1;
      }
      blocks.push({
        type: "subsubsection",
        title,
        body: subLines.join(" "),
      });
      continue;
    }

    if (line.startsWith("> ")) {
      blocks.push({ type: "quote", text: line.slice(2) });
      i += 1;
      continue;
    }

    const paragraphLines = [line];
    i += 1;
    while (i < lines.length) {
      const next = lines[i].trim();
      if (
        !next ||
        next.startsWith("#") ||
        next === "[CALLOUT]" ||
        next.startsWith("[IMAGE_PLACEHOLDER:") ||
        next.startsWith("[CHART_PLACEHOLDER:") ||
        next === "---"
      ) {
        break;
      }
      paragraphLines.push(next);
      i += 1;
    }
    blocks.push({ type: "paragraph", text: paragraphLines.join(" ") });
  }

  return blocks;
}

function findSectionBody(
  sections: MarkdownSection[],
  label: string,
): string {
  return sections.find((section) => section.label === label)?.body ?? "";
}

function parseHeroSection(body: string) {
  const title = body.match(/### Title\n([\s\S]*?)(?=\n### )/)?.[1]?.trim() ?? "";
  const subtitle =
    body.match(/### Subtitle\n([\s\S]*?)(?=\n### )/)?.[1]?.trim() ?? "";
  const meta = body.match(/### Meta\n([\s\S]*?)(?=\n### |\n---|$)/)?.[1]?.trim() ?? "";
  const metaChips = parseMetaChips(meta);

  return { title, subtitle, meta, metaChips };
}

function parseTldrSection(body: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  let currentLabel = "";
  let currentLines: string[] = [];

  const flush = () => {
    if (!currentLabel) return;
    blocks.push({
      type: "tldr-item",
      label: currentLabel,
      body: currentLines.join("\n").trim(),
    });
  };

  for (const line of body.split("\n")) {
    const headingMatch = line.match(/^### (.+)$/);
    if (headingMatch) {
      flush();
      currentLabel = headingMatch[1].trim();
      currentLines = [];
      continue;
    }

    if (currentLabel) {
      currentLines.push(line);
    }
  }

  flush();
  return blocks;
}

function parseBodySection(section: MarkdownSection): CaseStudySection {
  const titleMatch = section.body.match(/^### (.+)\n/);
  const title = titleMatch?.[1]?.trim();
  const contentBody = stripSectionSeparator(
    title ? section.body.slice(titleMatch![0].length).trim() : section.body,
  );

  return {
    id: `section-${slugifyCaseStudyLabel(section.label)}`,
    label: section.label,
    title,
    blocks: parseBlocks(contentBody),
  };
}

export function parseCaseStudyMarkdown(rawMarkdown: string): ParsedCaseStudy {
  const markdown = normalizeCaseStudyMarkdown(rawMarkdown);
  const projectName = markdown.match(/^# (.+)$/m)?.[1]?.trim() ?? "";
  const h2Sections = splitH2Sections(markdown);

  const hero = parseHeroSection(findSectionBody(h2Sections, "Hero"));
  const tldr = parseTldrSection(
    stripSectionSeparator(findSectionBody(h2Sections, "TL;DR")),
  );
  const keyMetrics = parseBlocks(findSectionBody(h2Sections, "Key Metrics"));

  const sections = h2Sections
    .filter((section) => !STRUCTURAL_SECTION_LABELS.has(section.label))
    .map(parseBodySection);

  return {
    projectName,
    hero,
    tldr,
    keyMetrics,
    sections,
  };
}
