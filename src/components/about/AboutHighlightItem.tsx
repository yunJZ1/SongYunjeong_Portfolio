type AboutHighlightItemProps = {
  title: string;
  description: string;
};

export default function AboutHighlightItem({
  title,
  description,
}: AboutHighlightItemProps) {
  return (
    <div className="flex flex-col gap-[16px]">
      <h3 className="font-pretendard text-[24px] font-semibold text-[#171719] tracking-[-0.72px] leading-[1.4]">
        {title}
      </h3>
      <p className="font-pretendard text-[17px] font-normal text-[#606060] tracking-[-0.51px] leading-[1.71]">
        {description}
      </p>
    </div>
  );
}
