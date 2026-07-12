import case01Md from "../../docs/projects/case study/case 01/content.md?raw";
import case02Md from "../../docs/projects/case study/case 02/content.md?raw";
import case03Md from "../../docs/projects/case study/case 03/content.md?raw";
import case04_1Md from "../../docs/projects/case study/case 04-1/content.md?raw";
import case04_2Md from "../../docs/projects/case study/case 04-2/content.md?raw";
import { parseCaseStudyMarkdown } from "../lib/parseCaseStudyMarkdown";
import {
  classifyCaseStudyArchive,
  type CaseStudyArchiveCategory,
} from "../lib/classifyCaseStudyArchive";

export type FeaturedCaseStudyCard = {
  id: string;
  subtitle: string;
  desc: string;
  tags: string[];
  meta: string;
  archiveCategory: CaseStudyArchiveCategory;
  featuredOrder: number;
};

type CaseStudySource = {
  id: string;
  content: string;
  featured: boolean;
  featuredOrder: number;
};

const CASE_STUDY_SOURCES: CaseStudySource[] = [
  { id: "ad-placement", content: case01Md, featured: true, featuredOrder: 1 },
  { id: "case-02", content: case02Md, featured: true, featuredOrder: 2 },
  { id: "case-03", content: case03Md, featured: true, featuredOrder: 3 },
  { id: "case-04-1", content: case04_1Md, featured: true, featuredOrder: 4 },
  { id: "case-04-2", content: case04_2Md, featured: true, featuredOrder: 5 },
];

function buildTagsFromMeta(meta: string): string[] {
  if (!meta.trim()) return [];

  const parts = meta
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean);
  const year = parts.find((part) => /20\d{2}/.test(part)) ?? "";
  const category =
    parts.find(
      (part) =>
        /design|research|ux|ai|portfolio/i.test(part) && !/20\d{2}/.test(part),
    ) ?? parts[2] ?? "";

  if (year && category) {
    return [`${year}・${category}`];
  }

  return [meta];
}

function toFeaturedCard(source: CaseStudySource): FeaturedCaseStudyCard {
  const parsed = parseCaseStudyMarkdown(source.content);
  const tags = buildTagsFromMeta(parsed.hero.meta);

  return {
    id: source.id,
    subtitle: parsed.hero.title || parsed.projectName,
    desc: parsed.hero.subtitle,
    tags,
    meta: parsed.hero.meta,
    archiveCategory: classifyCaseStudyArchive({
      id: source.id,
      meta: parsed.hero.meta,
      tags,
      subtitle: parsed.hero.subtitle,
    }),
    featuredOrder: source.featuredOrder,
  };
}

export function getFeaturedCaseStudies(): FeaturedCaseStudyCard[] {
  return CASE_STUDY_SOURCES.filter((source) => source.featured)
    .sort((a, b) => a.featuredOrder - b.featuredOrder)
    .map(toFeaturedCard);
}

export function getFeaturedCaseStudiesByCategory(
  category: CaseStudyArchiveCategory,
): FeaturedCaseStudyCard[] {
  return getFeaturedCaseStudies().filter(
    (study) => study.archiveCategory === category,
  );
}

export function getFeaturedCaseStudyNeighbors(caseId: string): {
  previous?: FeaturedCaseStudyCard;
  next?: FeaturedCaseStudyCard;
} {
  const cases = getFeaturedCaseStudies();
  const index = cases.findIndex((study) => study.id === caseId);
  if (index === -1) return {};

  return {
    previous: index > 0 ? cases[index - 1] : undefined,
    next: index < cases.length - 1 ? cases[index + 1] : undefined,
  };
}

function featuredGridItemClass(): string {
  return "lg:col-span-2";
}

export function getFeaturedGridItemClass(): string {
  return featuredGridItemClass();
}
