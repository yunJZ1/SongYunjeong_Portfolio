import type { CaseStudyArchiveCategory } from "./caseStudyListCategory";

export type { CaseStudyArchiveCategory } from "./caseStudyListCategory";

type ClassifyInput = {
  id: string;
  meta: string;
  tags: string[];
  subtitle: string;
};

const PRODUCT_RESEARCH_SIGNAL =
  /\bthesis\b|\bacademic project\b|\barchives of design research\b|\bresearch paper\b|master'?s thesis|\bconference paper\b|\bscopus\b|\bdesign research journal\b|^published\b|\bpublished\s*\/|\bpublication\b/i;

const PRODUCT_CASES_SIGNAL =
  /commercial project|product design|service design|ux\/ui|\bai product\b|product discovery|product validation|usability testing|ux evaluation|\bux research\b/i;

export function classifyCaseStudyArchive({
  meta,
  tags,
  subtitle,
}: ClassifyInput): CaseStudyArchiveCategory {
  const corpus = [meta, subtitle, ...tags].join(" ");

  if (PRODUCT_CASES_SIGNAL.test(corpus)) {
    return "product-cases";
  }

  if (PRODUCT_RESEARCH_SIGNAL.test(corpus)) {
    return "product-research";
  }

  return "product-cases";
}
