import image11 from "../assets/case-study/ad-placement/1-1.png";
import image12 from "../assets/case-study/ad-placement/1-2.png";

// Source images: docs/projects/case study/case 01/img/1-1.png, 1-2.png

const AD_PLACEMENT_CONTENT_IMAGES: Record<string, string> = {
  "1-1": image11,
  "1-2": image12,
};

export function getCaseStudyContentImage(
  caseId: string,
  assetKey: string,
): string | undefined {
  if (caseId !== "ad-placement") {
    return undefined;
  }

  return AD_PLACEMENT_CONTENT_IMAGES[assetKey];
}
