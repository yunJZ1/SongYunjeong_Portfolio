type AboutHighlightCardProps = {
  title: string;
  description: string;
};

export default function AboutHighlightCard({
  title,
  description,
}: AboutHighlightCardProps) {
  return (
    <div className="flex flex-col gap-[8px] px-[24px] py-[24px] border border-[#e4e4e4] rounded-[12px] bg-white">
      <p className="font-pretendard text-[16px] font-semibold text-[#171719] tracking-[-0.32px] leading-[1.35]">
        {title}
      </p>
      <p className="font-pretendard text-[14px] font-normal text-[#606060] tracking-[-0.28px] leading-[1.65]">
        {description}
      </p>
    </div>
  );
}
