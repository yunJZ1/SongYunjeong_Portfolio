import thumbnail01 from "../assets/product-research-thumbnails/thumbnail-01.png";
import thumbnail02 from "../assets/product-research-thumbnails/thumbnail-02.png";
import thumbnail03 from "../assets/product-research-thumbnails/thumbnail-03.png";
import thumbnail04 from "../assets/product-research-thumbnails/thumbnail-04.png";
import thumbnail05 from "../assets/product-research-thumbnails/thumbnail-05.png";

import { CASE_STUDY_PRODUCT_RESEARCH_PROJECTS } from "./curatedProjectDisplay";

// Source images: docs/projects/case study/Thumnail/[Product Research] #1–#5

const PRODUCT_RESEARCH_THUMBNAILS_BY_INDEX = [
  thumbnail01,
  thumbnail02,
  thumbnail03,
  thumbnail04,
  thumbnail05,
] as const;

const PRODUCT_RESEARCH_THUMBNAIL_BY_ID = Object.fromEntries(
  CASE_STUDY_PRODUCT_RESEARCH_PROJECTS.map((project, index) => [
    project.id,
    PRODUCT_RESEARCH_THUMBNAILS_BY_INDEX[index],
  ]),
);

export function getProductResearchThumbnail(caseId: string): string | undefined {
  return PRODUCT_RESEARCH_THUMBNAIL_BY_ID[caseId];
}
