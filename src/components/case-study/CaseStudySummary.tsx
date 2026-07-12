import type { ContentBlock } from "../../lib/parseCaseStudyMarkdown";
import Container from "../Container";
import ContentBlocks from "./ContentBlocks";
import KeyMetricsRow from "./KeyMetricsRow";

const SUMMARY_LABEL =
  "text-[15px] font-medium text-[#a9a9a9] tracking-[-0.45px] leading-[1.65] uppercase";

type MetricItem = {
  title: string;
  body: string;
};

type CaseStudySummaryProps = {
  tldr: ContentBlock[];
  metrics: MetricItem[];
  callout: ContentBlock[];
};

export default function CaseStudySummary({
  tldr,
  metrics,
  callout,
}: CaseStudySummaryProps) {
  return (
    <Container variant="reading" className="px-[40px] pb-[140px]">
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[14px]">
          <p className={SUMMARY_LABEL}>TL;DR</p>
          <ContentBlocks blocks={tldr} />
        </div>

        <div className="flex flex-col gap-[14px]">
          <p className={SUMMARY_LABEL}>Key Metrics</p>
          <KeyMetricsRow metrics={metrics} />
        </div>

        {callout.length > 0 && <ContentBlocks blocks={callout} />}
      </div>
    </Container>
  );
}
