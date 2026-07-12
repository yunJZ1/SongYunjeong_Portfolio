import thumbnail01 from "../assets/product-case-thumbnails/thumbnail-01.png";
import thumbnail02 from "../assets/product-case-thumbnails/thumbnail-02.png";
import thumbnail03 from "../assets/product-case-thumbnails/thumbnail-03.png";

import { CASE_STUDY_PRODUCT_CASE_PROJECTS } from "./curatedProjectDisplay";

// Source images: docs/projects/case study/Thumnail/[Product Case] #1–#3/Thumnail.png

const PRODUCT_CASE_THUMBNAILS_BY_INDEX = [
  thumbnail01,
  thumbnail02,
  thumbnail03,
] as const;

const PRODUCT_CASE_THUMBNAIL_BY_ID = Object.fromEntries(
  CASE_STUDY_PRODUCT_CASE_PROJECTS.map((project, index) => [
    project.id,
    PRODUCT_CASE_THUMBNAILS_BY_INDEX[index],
  ]),
);

export function getProductCaseThumbnail(caseId: string): string | undefined {
  return PRODUCT_CASE_THUMBNAIL_BY_ID[caseId];
}
