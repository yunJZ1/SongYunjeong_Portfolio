type ProjectHeroProps = {
  title: string;
  description: string;
  summary?: string;
  meta?: string;
  ctaLabel?: string;
};

export default function ProjectHero({
  title,
  description,
  summary,
  meta,
  ctaLabel = "View project",
}: ProjectHeroProps) {
  return (
    <div className="flex flex-col gap-[16px] min-w-0">
      {meta && (
        <p className="text-[12px] font-medium text-[#a9a9a9] tracking-[0.06em] uppercase leading-none">
          {meta}
        </p>
      )}
      <h2 className="font-pretendard text-[28px] md:text-[32px] font-medium text-[#171719] tracking-[-0.64px] leading-[1.25] transition-colors duration-300 group-hover:text-[#000000]">
        {title}
      </h2>
      <p className="font-pretendard text-[15px] font-normal text-[#606060] tracking-[-0.3px] leading-[1.7] max-w-[42ch]">
        {description}
      </p>
      {summary && (
        <p className="font-pretendard text-[14px] font-normal text-[#a9a9a9] tracking-[-0.28px] leading-[1.65] max-w-[42ch]">
          {summary}
        </p>
      )}
      <span className="text-[14px] font-medium text-[#171719] tracking-[-0.28px] underline underline-offset-4 decoration-[#d4d4d4] group-hover:decoration-[#171719] transition-colors duration-300 self-start">
        {ctaLabel}
      </span>
    </div>
  );
}
