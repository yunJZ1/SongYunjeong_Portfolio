export type FeaturedProjectCardData = {
  id: string;
  title: string;
  category: string;
  year?: string;
  description: string;
  coverGradient: string;
  onClick?: () => void;
};

type FeaturedProjectCardProps = FeaturedProjectCardData;

export default function FeaturedProjectCard({
  title,
  category,
  year,
  description,
  coverGradient,
  onClick,
}: FeaturedProjectCardProps) {
  const meta = year ? `${category} · ${year}` : category;

  const content = (
    <>
      <div className="relative w-full aspect-square overflow-hidden rounded-[8px] bg-[#f5f5f5]">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${coverGradient} flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-[1.02]`}
        >
          <span className="text-[13px] font-medium text-white/40 tracking-[-0.26px]">
            Cover Image
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-[8px] pt-[16px]">
        <h3 className="font-pretendard text-[16px] font-semibold text-[#171719] tracking-[-0.32px] leading-[1.4] min-h-[44px] line-clamp-2 group-hover:underline underline-offset-4 decoration-[#d4d4d4] group-hover:decoration-[#171719] transition-colors">
          {title}
        </h3>
        <p className="text-[13px] font-medium text-[#a9a9a9] tracking-[-0.26px] leading-none">
          {meta}
        </p>
        {description && (
          <p className="font-pretendard text-[14px] font-normal text-[#606060] tracking-[-0.28px] leading-[1.6] line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="group flex flex-col h-full w-full text-left bg-transparent border-0 p-0 cursor-pointer"
      >
        {content}
      </button>
    );
  }

  return (
    <article className="group flex flex-col h-full w-full">
      {content}
    </article>
  );
}
