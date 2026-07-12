import type { ReactNode } from "react";

/** Centered body track: TOC (220px) + gap (80px) + reading (900px) */
export const CENTERED_BODY_TRACK_CLASS = "w-full max-w-[1200px] mx-auto";

/** Spacer matching TOC width so hero/summary align with body reading column */
export const TOC_SPACER_CLASS = "hidden lg:block w-[220px] shrink-0";

/** Main reading column — shared by hero, summary, and body */
export const READING_COLUMN_CLASS = "flex-1 min-w-0 w-full max-w-[900px]";

/** Left label column — TL;DR, Key Metrics (220px on desktop) */
export const LABEL_COLUMN_CLASS = "w-full lg:w-[220px] shrink-0";

/** Editorial section label — TL;DR, Key Metrics, and all body sections */
export const SECTION_LABEL_CLASS =
  "text-[15px] font-medium text-[#a9a9a9] tracking-[-0.45px] leading-[1.65] uppercase";

/** Editorial two-column row: label column + reading column */
export const EDITORIAL_ROW_CLASS =
  "flex flex-col lg:flex-row gap-[14px] lg:gap-[80px]";

const TOP_PADDING_CLASS = {
  default: "pt-[64px]",
  spacious: "pt-[96px]",
  editorial: "pt-[120px] md:pt-[140px]",
  compact: "pt-[80px] md:pt-[96px]",
} as const;

type TopPaddingVariant = keyof typeof TOP_PADDING_CLASS;

type CaseStudyPageProps = {
  children: ReactNode;
  topPaddingVariant?: TopPaddingVariant;
};

export default function CaseStudyPage({
  children,
  topPaddingVariant = "default",
}: CaseStudyPageProps) {
  return (
    <article className="w-full">
      <div
        className={`flex flex-col px-[40px] pb-[140px] ${TOP_PADDING_CLASS[topPaddingVariant]}`}
      >
        {children}
      </div>
    </article>
  );
}
