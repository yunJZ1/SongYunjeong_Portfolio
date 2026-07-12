type MetricItem = {
  title: string;
  body: string;
};

type KeyMetricsRowProps = {
  metrics: MetricItem[];
};

export default function KeyMetricsRow({ metrics }: KeyMetricsRowProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[#e7e7e7] gap-[32px] lg:gap-0">
      {metrics.map((metric, index) => (
        <div
          key={metric.title}
          className={`flex flex-col gap-[12px] lg:px-[24px] ${
            index === 0 ? "lg:pl-0" : ""
          } ${index === metrics.length - 1 ? "lg:pr-0" : ""}`}
        >
          <p className="font-pretendard text-[38px] font-semibold text-[#171719] tracking-[-0.54px] leading-[1.35]">
            {metric.title}
          </p>
          <p className="font-pretendard text-[15px] font-normal text-[#606060] tracking-[-0.45px] leading-[1.65]">
            {metric.body}
          </p>
        </div>
      ))}
    </div>
  );
}
