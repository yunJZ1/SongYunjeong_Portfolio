import Project01PageLayout from "./Project01PageLayout";
import {
  PROJECT01_DIVIDER_CLASS,
  PROJECT01_SECTION_GAP_CLASS,
  PROJECT01_SECTION_LABEL_CLASS,
  PROJECT01_TRACK_CLASS,
} from "./project01Styles";

type MetricItem = {
  title: string;
  body: string;
};

type Project01KeyMetricsProps = {
  metrics: MetricItem[];
};

const METRIC_CELL_CLASS = [
  "flex flex-col gap-[8px] px-[20px] py-[28px]",
  "border-[#e5e5e5]",
  "border-b last:border-b-0",
  "sm:border-b sm:border-r",
  "sm:[&:nth-child(2n)]:border-r-0",
  "sm:[&:nth-child(-n+2)]:border-b",
  "sm:[&:nth-child(n+3)]:border-b-0",
  "lg:border-b-0 lg:border-r",
  "lg:[&:nth-child(4n)]:border-r-0",
].join(" ");

export default function Project01KeyMetrics({ metrics }: Project01KeyMetricsProps) {
  return (
    <section className={`${PROJECT01_TRACK_CLASS} ${PROJECT01_SECTION_GAP_CLASS}`}>
      <Project01PageLayout>
        <p className={PROJECT01_SECTION_LABEL_CLASS}>Key Metrics</p>
      </Project01PageLayout>

      <hr className={`${PROJECT01_DIVIDER_CLASS} mt-[28px] md:mt-[32px]`} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.title} className={METRIC_CELL_CLASS}>
            <p className="font-pretendard text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-[#171719] tracking-[-0.64px] leading-[1.2]">
              {metric.title}
            </p>
            <p className="font-pretendard text-[13px] md:text-[14px] font-normal text-[#737373] tracking-[-0.28px] leading-[1.65]">
              {metric.body}
            </p>
          </div>
        ))}
      </div>

      <hr className={PROJECT01_DIVIDER_CLASS} />
    </section>
  );
}
