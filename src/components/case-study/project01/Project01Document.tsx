import type { ReactNode } from "react";
import AboutHighlightCard from "../../about/AboutHighlightCard";
import type {
  CaseStudySection,
  ContentBlock,
} from "../../../lib/parseCaseStudyMarkdown";
import { PROJECT01_INTRO_SECTION_ID } from "../../../lib/buildProject01Nav";
import Project01BodySection from "./Project01BodySection";
import Project01ContentBlocks from "./Project01ContentBlocks";
import {
  PROJECT01_BLOCK_GAP_CLASS,
  PROJECT01_CHIP_CLASS,
  PROJECT01_CHIP_PRIMARY_CLASS,
  PROJECT01_CONTENT_CLASS,
  PROJECT01_DIVIDER_CLASS,
  PROJECT01_INTRO_GAP_CLASS,
  PROJECT01_LABEL_CONTENT_GAP_CLASS,
  PROJECT01_LAYOUT_GAP_CLASS,
  PROJECT01_METRIC_CARD_CLASS,
  PROJECT01_METRICS_GRID_CLASS,
  PROJECT01_ROW_GRID_CLASS,
  PROJECT01_ROW_PADDING_CLASS,
  PROJECT01_SECTION_INNER_GAP_CLASS,
  PROJECT01_SECTION_LABEL_CLASS,
  PROJECT01_BODY_SECTION_GAP_CLASS,
  PROJECT01_SIDEBAR_CLASS,
  PROJECT01_TRACK_CLASS,
} from "./project01Styles";

type MetricItem = {
  title: string;
  body: string;
};

type Project01DocumentProps = {
  caseId?: string;
  sectionLabel?: string;
  title: string;
  subtitle: string;
  chips: string[];
  tldr: ContentBlock[];
  metrics: MetricItem[];
  callout: ContentBlock[];
  sections: CaseStudySection[];
  navigation: ReactNode;
  afterIntro?: ReactNode;
  hideHeroImage?: boolean;
  highlightMetricCards?: boolean;
  sectionAppendix?: Record<string, ReactNode>;
};

const TLDR_ROW_LABEL_CLASS =
  "font-pretendard text-[14px] font-semibold text-[#171719] tracking-[-0.28px] leading-[1.5]";

const TLDR_ROW_BODY_CLASS =
  "font-pretendard text-[15px] md:text-[16px] font-normal text-[#606060] tracking-[-0.32px] leading-[1.7]";

export default function Project01Document({
  caseId,
  sectionLabel = "Case Study",
  title,
  subtitle,
  chips,
  tldr,
  metrics,
  callout,
  sections,
  navigation,
  afterIntro,
  hideHeroImage = false,
  highlightMetricCards = false,
  sectionAppendix,
}: Project01DocumentProps) {
  const tldrItems = tldr.filter(
    (block): block is Extract<ContentBlock, { type: "tldr-item" }> =>
      block.type === "tldr-item",
  );

  return (
    <article className={PROJECT01_TRACK_CLASS}>
      <div className={`flex ${PROJECT01_LAYOUT_GAP_CLASS}`}>
        <aside
          className={`hidden lg:block ${PROJECT01_SIDEBAR_CLASS} shrink-0`}
          aria-label="Case study navigation"
        >
          <div className="sticky top-[96px]">{navigation}</div>
        </aside>

        <div className={PROJECT01_CONTENT_CLASS}>
          <section
            id={PROJECT01_INTRO_SECTION_ID}
            className="scroll-mt-[96px] flex flex-col"
          >
            <div className={PROJECT01_SECTION_INNER_GAP_CLASS}>
              <p className={PROJECT01_SECTION_LABEL_CLASS}>{sectionLabel}</p>

              <h1 className="font-pretendard text-[36px] md:text-[42px] lg:text-[48px] font-medium text-[#171719] tracking-[-0.96px] leading-[1.25]">
                {title}
              </h1>

              {subtitle && (
                <p className="font-pretendard text-[17px] md:text-[18px] font-normal text-[#606060] tracking-[-0.36px] leading-[1.55]">
                  {subtitle}
                </p>
              )}

              {chips.length > 0 && (
                <div className="flex flex-wrap gap-[8px]">
                  {chips.map((chip, index) => (
                    <span
                      key={chip}
                      className={
                        index === 0
                          ? PROJECT01_CHIP_PRIMARY_CLASS
                          : PROJECT01_CHIP_CLASS
                      }
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              )}

              {!hideHeroImage && (
                <div className="w-full aspect-[16/9] rounded-[16px] bg-[#f5f5f5] overflow-hidden flex items-center justify-center">
                  <span className="text-[12px] font-medium text-[#bdbdbd] tracking-[-0.24px]">
                    Hero Visual
                  </span>
                </div>
              )}
            </div>

            {tldrItems.length > 0 && (
              <div className={PROJECT01_INTRO_GAP_CLASS}>
                <p className={PROJECT01_SECTION_LABEL_CLASS}>TL;DR</p>

                <div className={PROJECT01_LABEL_CONTENT_GAP_CLASS}>
                  {tldrItems.map((item, index) => (
                    <div key={item.label}>
                      {index > 0 && <hr className={PROJECT01_DIVIDER_CLASS} />}
                      <div
                        className={`${PROJECT01_ROW_GRID_CLASS} ${PROJECT01_ROW_PADDING_CLASS}`}
                      >
                        <p className={TLDR_ROW_LABEL_CLASS}>{item.label}</p>
                        <p className={TLDR_ROW_BODY_CLASS}>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {metrics.length > 0 && (
              <div className={PROJECT01_INTRO_GAP_CLASS}>
                <p className={PROJECT01_SECTION_LABEL_CLASS}>Key Metrics</p>

                <div
                  className={`${PROJECT01_LABEL_CONTENT_GAP_CLASS} ${
                    highlightMetricCards
                      ? "grid grid-cols-1 sm:grid-cols-2 gap-[16px]"
                      : PROJECT01_METRICS_GRID_CLASS
                  }`}
                >
                  {metrics.map((metric) =>
                    highlightMetricCards ? (
                      <AboutHighlightCard
                        key={metric.title}
                        title={metric.title}
                        description={metric.body}
                      />
                    ) : (
                      <div key={metric.title} className={PROJECT01_METRIC_CARD_CLASS}>
                        <p className="font-pretendard text-[24px] md:text-[28px] font-semibold text-[#171719] tracking-[-0.64px] leading-[1.25] break-words">
                          {metric.title}
                        </p>
                        <p className="font-pretendard text-[13px] md:text-[14px] font-normal text-[#737373] tracking-[-0.28px] leading-[1.65] break-words">
                          {metric.body}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </section>

          {afterIntro}

          {callout.length > 0 && (
            <div className={PROJECT01_BLOCK_GAP_CLASS}>
              <Project01ContentBlocks blocks={callout} caseId={caseId} />
            </div>
          )}

          {sections.length > 0 && (
            <div className={PROJECT01_BLOCK_GAP_CLASS}>
              <div className={PROJECT01_BODY_SECTION_GAP_CLASS}>
                {sections.map((section) => (
                  <Project01BodySection
                    key={section.id}
                    id={section.id}
                    label={section.label}
                    title={section.title}
                  >
                    <Project01ContentBlocks
                      blocks={section.blocks}
                      caseId={caseId}
                    />
                    {sectionAppendix?.[section.id]}
                  </Project01BodySection>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
