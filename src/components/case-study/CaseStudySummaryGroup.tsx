import type { ContentBlock } from "../../lib/parseCaseStudyMarkdown";
import {
  CENTERED_BODY_TRACK_CLASS,
  EDITORIAL_ROW_CLASS,
  LABEL_COLUMN_CLASS,
  READING_COLUMN_CLASS,
  SECTION_LABEL_CLASS,
} from "./CaseStudyPage";
import CaseStudyDivider from "./CaseStudyDivider";
import ContentBlocks from "./ContentBlocks";
import KeyMetricsRow from "./KeyMetricsRow";
import TldrTable from "./TldrTable";

type MetricItem = {
  title: string;
  body: string;
};

type CaseStudySummaryGroupProps = {
  tldr: ContentBlock[];
  metrics: MetricItem[];
  callout: ContentBlock[];
};

export default function CaseStudySummaryGroup({
  tldr,
  metrics,
  callout,
}: CaseStudySummaryGroupProps) {
  return (
    <section className="flex flex-col gap-[64px]">
      <div className={`${CENTERED_BODY_TRACK_CLASS} ${EDITORIAL_ROW_CLASS}`}>
        <div className={LABEL_COLUMN_CLASS}>
          <p className={SECTION_LABEL_CLASS}>TL;DR</p>
        </div>
        <div className={READING_COLUMN_CLASS}>
          <TldrTable blocks={tldr} />
        </div>
      </div>

      <CaseStudyDivider />

      <div className={`${CENTERED_BODY_TRACK_CLASS} ${EDITORIAL_ROW_CLASS}`}>
        <div className={LABEL_COLUMN_CLASS}>
          <p className={SECTION_LABEL_CLASS}>Key Metrics</p>
        </div>
        <div className={`${READING_COLUMN_CLASS} pt-[16px]`}>
          <KeyMetricsRow metrics={metrics} />
        </div>
      </div>

      {callout.length > 0 && (
        <div
          className={`${CENTERED_BODY_TRACK_CLASS} ${EDITORIAL_ROW_CLASS} pt-[24px] pb-[16px]`}
        >
          <div className={`${LABEL_COLUMN_CLASS} hidden lg:block`} aria-hidden="true" />
          <div className={READING_COLUMN_CLASS}>
            <ContentBlocks blocks={callout} />
          </div>
        </div>
      )}
    </section>
  );
}
