import type { ContentBlock } from "../lib/parseCaseStudyMarkdown";
import type { CuratedDetailHero } from "./getCuratedDetailHero";

export function buildDetailMetaChips(
  parsedChips: string[],
  hero: CuratedDetailHero,
): string[] {
  if (parsedChips.length > 0) {
    return parsedChips;
  }

  const chips: string[] = [];

  if (hero.year) {
    chips.push(hero.year);
  }

  if (hero.category) {
    chips.push(hero.category);
  }

  return chips;
}

export function extractMetricItems(
  keyMetrics: ContentBlock[],
): { title: string; body: string }[] {
  return keyMetrics
    .filter(
      (block): block is Extract<ContentBlock, { type: "metric" }> =>
        block.type === "metric" &&
        Boolean(block.title.trim() || block.body.trim()),
    )
    .map((block) => ({
      title: block.title,
      body: block.body,
    }));
}

export function extractMetricCallouts(
  keyMetrics: ContentBlock[],
): ContentBlock[] {
  return keyMetrics.filter((block) => block.type === "callout");
}
