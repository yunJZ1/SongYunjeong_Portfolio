import { getFeaturedCaseStudies } from "../data/featuredCaseStudies";
import { PUBLICATIONS } from "../data/publications";
import type { ParsedAbout } from "./parseAboutMarkdown";

export type AboutNavCategory =
  | "strength"
  | "careers"
  | "awards"
  | "ma-labs"
  | "etc";

export const ABOUT_NAV_CATEGORIES: { id: AboutNavCategory; label: string }[] = [
  { id: "strength", label: "Strength" },
  { id: "careers", label: "Careers" },
  { id: "awards", label: "Awards" },
  { id: "ma-labs", label: "MA & Labs" },
  { id: "etc", label: "ETC" },
];

export type AboutSectionItem = {
  title: string;
  description: string;
  href?: string;
  meta?: string;
};

export type AboutPageSection = {
  id: AboutNavCategory;
  label: string;
  items: AboutSectionItem[];
};

function findHighlight(aboutData: ParsedAbout, title: string) {
  return aboutData.highlights.find((item) => item.title === title);
}

function toItems(metrics: { title: string; body: string }[]): AboutSectionItem[] {
  return metrics.map((metric) => ({
    title: metric.title,
    description: metric.body,
  }));
}

function buildStrengthSection(aboutData: ParsedAbout): AboutPageSection {
  const endToEnd = findHighlight(aboutData, "End-to-End");
  const aiNative = findHighlight(aboutData, "AI-Native");
  const productThinking = findHighlight(aboutData, "Product Thinking");
  const cases = findHighlight(aboutData, "7+");

  const items: AboutSectionItem[] = [];

  if (endToEnd) {
    items.push({ title: "End-to-End", description: endToEnd.body });
  }
  if (aiNative) {
    items.push({ title: "AI-native Workflow", description: aiNative.body });
  }
  if (productThinking) {
    items.push({ title: "Product Thinking", description: productThinking.body });
  }
  if (cases) {
    items.push({ title: "Research & Validation", description: cases.body });
  }

  return { id: "strength", label: "Strength", items };
}

function buildCareersSection(aboutData: ParsedAbout): AboutPageSection {
  return {
    id: "careers",
    label: "Careers",
    items: toItems(aboutData.careers),
  };
}

function buildAwardsSection(aboutData: ParsedAbout): AboutPageSection {
  const items = toItems(aboutData.awards);

  PUBLICATIONS.forEach((publication) => {
    items.push({
      title: publication.title,
      description: `${publication.category} · ${publication.publishedDate}`,
      href: publication.href,
      meta: "Publication",
    });
  });

  getFeaturedCaseStudies().forEach((project) => {
    items.push({
      title: project.subtitle,
      description: project.desc,
      meta: "Selected Project",
    });
  });

  return { id: "awards", label: "Awards", items };
}

function buildMaLabsSection(aboutData: ParsedAbout): AboutPageSection {
  return {
    id: "ma-labs",
    label: "MA & Labs",
    items: toItems(aboutData.maLabs),
  };
}

function buildEtcSection(aboutData: ParsedAbout): AboutPageSection {
  return {
    id: "etc",
    label: "ETC",
    items: toItems(aboutData.etc),
  };
}

export function buildAboutPageSections(aboutData: ParsedAbout): AboutPageSection[] {
  return [
    buildStrengthSection(aboutData),
    buildCareersSection(aboutData),
    buildAwardsSection(aboutData),
    buildMaLabsSection(aboutData),
    buildEtcSection(aboutData),
  ];
}
