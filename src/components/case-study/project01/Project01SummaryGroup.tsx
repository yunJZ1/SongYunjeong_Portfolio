import type { ContentBlock } from "../../../lib/parseCaseStudyMarkdown";
import Project01ContentBlocks from "./Project01ContentBlocks";
import Project01KeyMetrics from "./Project01KeyMetrics";
import Project01PageLayout from "./Project01PageLayout";
import Project01TldrSection from "./Project01TldrSection";
import {
  PROJECT01_SECTION_GAP_CLASS,
  PROJECT01_TRACK_CLASS,
} from "./project01Styles";

type MetricItem = {
  title: string;
  body: string;
};

type Project01SummaryGroupProps = {
  tldr: ContentBlock[];
  metrics: MetricItem[];
  callout: ContentBlock[];
};

export default function Project01SummaryGroup({
  tldr,
  metrics,
  callout,
}: Project01SummaryGroupProps) {
  return (
    <>
      <Project01TldrSection blocks={tldr} />
      <Project01KeyMetrics metrics={metrics} />

      {callout.length > 0 && (
        <div className={`${PROJECT01_TRACK_CLASS} ${PROJECT01_SECTION_GAP_CLASS}`}>
          <Project01PageLayout>
            <Project01ContentBlocks blocks={callout} />
          </Project01PageLayout>
        </div>
      )}
    </>
  );
}
