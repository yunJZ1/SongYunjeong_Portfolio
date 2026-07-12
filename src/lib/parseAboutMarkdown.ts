export type AboutMetric = {
  title: string;
  body: string;
};

export type AboutLabeledItem = {
  label: string;
  body: string;
};

export type ParsedAbout = {
  hero: {
    role: string;
    name: string;
    description: string[];
  };
  highlights: AboutMetric[];
  background: AboutLabeledItem[];
  strength: AboutMetric[];
  currently: string;
  careers: AboutMetric[];
  awards: AboutMetric[];
  maLabs: AboutMetric[];
  etc: AboutMetric[];
};

function extractSection(markdown: string, sectionName: string): string {
  for (const part of markdown.split(/\n(?=## )/)) {
    const match = part.match(/^## (.+)\n([\s\S]*)$/);
    if (match && match[1].trim() === sectionName) {
      return match[2].trim();
    }
  }
  return "";
}

function extractSubfield(body: string, field: string): string {
  const match = body.match(
    new RegExp(`#### ${field}\\n([\\s\\S]*?)(?=\\n#### |$)`),
  );
  return match?.[1]?.trim() ?? "";
}

function parseParagraphs(text: string): string[] {
  return text
    .split(/\n\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function parseSubsections(body: string): AboutMetric[] {
  const items: AboutMetric[] = [];

  for (const match of body.matchAll(/### (.+)\n([\s\S]*?)(?=\n### |\n---|$)/g)) {
    items.push({
      title: match[1].trim(),
      body: match[2].trim().replace(/\n+/g, " "),
    });
  }

  return items;
}

function parseLabeledItems(body: string): AboutLabeledItem[] {
  const items: AboutLabeledItem[] = [];

  for (const match of body.matchAll(/### (.+)\n([\s\S]*?)(?=\n### |\n---|$)/g)) {
    items.push({
      label: match[1].trim(),
      body: match[2].trim().replace(/\n+/g, " "),
    });
  }

  return items;
}

export function parseAboutMarkdown(markdown: string): ParsedAbout {
  const moreBody = extractSection(markdown, "More");
  const heroBody =
    moreBody.match(/### Hero\n([\s\S]*)/)?.[1]?.replace(/\n---\s*$/, "").trim() ??
    "";

  const role = extractSubfield(heroBody, "Title");
  const name = extractSubfield(heroBody, "Name");
  const description = parseParagraphs(extractSubfield(heroBody, "Description"));

  const highlights = parseSubsections(extractSection(markdown, "Highlights"));
  const background = parseLabeledItems(extractSection(markdown, "Background"));
  const strength = parseSubsections(extractSection(markdown, "Strength"));
  const currently = extractSection(markdown, "Currently").trim();
  const careers = parseSubsections(extractSection(markdown, "Careers"));
  const awards = parseSubsections(extractSection(markdown, "Awards"));
  const maLabs = parseSubsections(extractSection(markdown, "MA & Labs"));
  const etc = parseSubsections(extractSection(markdown, "ETC"));

  return {
    hero: { role, name, description },
    highlights,
    background,
    strength,
    currently,
    careers,
    awards,
    maLabs,
    etc,
  };
}
