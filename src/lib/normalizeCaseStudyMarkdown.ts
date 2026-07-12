/**
 * Converts frontmatter-based case study markdown (04-1, 04-2) into the
 * ## Hero / ## TL;DR structure expected by parseCaseStudyMarkdown.
 * Case Study 01 markdown is returned unchanged.
 */

type Frontmatter = {
  title: string;
  subtitle: string;
  category: string;
  year: string;
  team: string;
  role: string;
  contribution: string;
  keywords: string[];
};

function isFrontmatterFormat(markdown: string): boolean {
  return markdown.trimStart().startsWith("---");
}

function splitFrontmatter(markdown: string): {
  frontmatter: Frontmatter;
  body: string;
} {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return {
      frontmatter: {
        title: "",
        subtitle: "",
        category: "",
        year: "",
        team: "",
        role: "",
        contribution: "",
        keywords: [],
      },
      body: markdown,
    };
  }

  const raw = match[1];
  const body = match[2].trim();
  const frontmatter: Frontmatter = {
    title: "",
    subtitle: "",
    category: "",
    year: "",
    team: "",
    role: "",
    contribution: "",
    keywords: [],
  };

  let inKeywords = false;

  for (const line of raw.split("\n")) {
    const trimmed = line.trim();

    if (trimmed === "keywords:") {
      inKeywords = true;
      continue;
    }

    if (inKeywords) {
      const keywordMatch = trimmed.match(/^- (.+)$/);
      if (keywordMatch) {
        frontmatter.keywords.push(keywordMatch[1].trim());
        continue;
      }
      inKeywords = false;
    }

    const kvMatch = trimmed.match(/^([\w]+):\s*(.*)$/);
    if (!kvMatch) continue;

    const key = kvMatch[1];
    const value = kvMatch[2].trim();

    if (key === "title") frontmatter.title = value;
    if (key === "subtitle") frontmatter.subtitle = value;
    if (key === "category") frontmatter.category = value;
    if (key === "year") frontmatter.year = value;
    if (key === "team") frontmatter.team = value;
    if (key === "role") frontmatter.role = value;
    if (key === "contribution") frontmatter.contribution = value;
  }

  return { frontmatter, body };
}

type MarkdownH1Section = {
  label: string;
  body: string;
};

function splitH1Sections(body: string): MarkdownH1Section[] {
  const sections: MarkdownH1Section[] = [];
  let currentLabel = "";
  let currentLines: string[] = [];

  const flush = () => {
    if (!currentLabel) return;
    sections.push({
      label: currentLabel,
      body: currentLines.join("\n").trim(),
    });
  };

  for (const line of body.split("\n")) {
    const headingMatch = line.match(/^# (.+)$/);
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
  return sections;
}

function buildHeroSection(frontmatter: Frontmatter): string {
  const metaParts = [
    frontmatter.category,
    frontmatter.year,
    frontmatter.role,
    frontmatter.contribution,
    ...frontmatter.keywords,
  ].filter(Boolean);

  const meta = metaParts.join(" / ");

  return [
    "## Hero",
    "",
    "### Title",
    frontmatter.title,
    "",
    "### Subtitle",
    frontmatter.subtitle,
    "",
    "### Meta",
    meta,
    "",
    "---",
    "",
  ].join("\n");
}

function convertTldrSection(sections: MarkdownH1Section[]): string {
  const section = findH1Section(sections, "TL;DR");
  if (!section) return "";

  const converted = section.body.replace(/^## (.+)\n/gm, "### $1\n");

  return `## TL;DR\n\n${converted}\n\n---\n\n`;
}

function convertKeyMetricsSection(sections: MarkdownH1Section[]): string {
  const section = findH1Section(sections, "Key Metrics");
  if (!section) return "";

  let content = section.body;

  const quoteMatch = content.match(/\n> ([\s\S]*)$/);
  let callout = "";
  if (quoteMatch) {
    callout = `\n\n[CALLOUT]\n${quoteMatch[1].trim()}\n[/CALLOUT]`;
    content = content.slice(0, quoteMatch.index).trim();
  }

  const metricBlocks = content
    .split(/\n---\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  const metrics = metricBlocks
    .map((block) => block.replace(/^## (.+)\n/, "### $1\n"))
    .join("\n\n");

  return `## Key Metrics\n\n${metrics}${callout}\n\n---\n\n`;
}

function convertBodySectionContent(content: string): string {
  let converted = content;
  const titleMatch = converted.match(/^## (.+)\n/);

  if (titleMatch) {
    const titleLine = titleMatch[0];
    const rest = converted.slice(titleLine.length);
    converted = `### ${titleMatch[1]}\n${rest.replace(/^### /gm, "#### ")}`;
  } else {
    converted = converted.replace(/^### /gm, "#### ");
  }

  return converted.trim();
}

function convertBodySections(sections: MarkdownH1Section[]): string {
  const skip = new Set(["TL;DR", "Key Metrics"]);

  return sections
    .filter((section) => !skip.has(section.label))
    .map((section) => {
      const content = convertBodySectionContent(section.body);
      return `## ${section.label}\n\n${content}`;
    })
    .join("\n\n---\n\n");
}

function findH1Section(
  sections: MarkdownH1Section[],
  label: string,
): MarkdownH1Section | undefined {
  return sections.find((section) => section.label === label);
}

export function normalizeCaseStudyMarkdown(markdown: string): string {
  if (!isFrontmatterFormat(markdown)) {
    return markdown;
  }

  const { frontmatter, body } = splitFrontmatter(markdown);
  const h1Sections = splitH1Sections(body);

  const hero = buildHeroSection(frontmatter);
  const tldr = convertTldrSection(h1Sections);
  const metrics = convertKeyMetricsSection(h1Sections);
  const bodySections = convertBodySections(h1Sections);

  return `# ${frontmatter.title}\n\n${hero}${tldr}${metrics}${bodySections}`;
}
