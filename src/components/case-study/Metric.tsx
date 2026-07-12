type MetricProps = {
  title: string;
  body: string;
};

export default function Metric({ title, body }: MetricProps) {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="font-pretendard text-[24px] font-semibold text-[#171719] tracking-[-0.72px] leading-[1.4]">
        {title}
      </p>
      <p className="font-pretendard text-[17px] font-normal text-[#606060] tracking-[-0.51px] leading-[1.71]">
        {body}
      </p>
    </div>
  );
}
