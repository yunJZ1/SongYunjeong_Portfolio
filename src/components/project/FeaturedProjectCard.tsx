import type { CaseStudyPillLabel } from "../../data/caseStudyCardLabels";
import PillBadgeGroup from "./PillBadgeGroup";

export type FeaturedProjectCardData = {
  id: string;
  title: string;
  category: string;
  year?: string;
  description: string;
  coverGradient?: string;
  coverImageSrc?: string;
  labels?: CaseStudyPillLabel[];
  onClick?: () => void;
};

type FeaturedProjectCardProps = FeaturedProjectCardData;

export default function FeaturedProjectCard({
  title,
  description,
  coverGradient,
  coverImageSrc,
  labels,
  onClick,
}: FeaturedProjectCardProps) {
  const content = (
    <>
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[8px] bg-[#f5f5f5]">
        {coverImageSrc ? (
          <img
            src={coverImageSrc}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${coverGradient ?? "from-[#1a1a2e] to-[#16213e]"} flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-[1.02]`}
          >
            <span className="text-[13px] font-medium text-white/40 tracking-[-0.26px]">
              Cover Image
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 gap-[8px] pt-[16px]">
        <h3 className="font-pretendard text-[16px] font-semibold text-[#171719] tracking-[-0.32px] leading-[1.4] min-h-[44px] line-clamp-2 group-hover:underline underline-offset-4 decoration-[#d4d4d4] group-hover:decoration-[#171719] transition-colors">
          {title}
        </h3>
        {description && (
          <p className="font-pretendard text-[14px] font-normal text-[#606060] tracking-[-0.28px] leading-[1.6] line-clamp-2">
            {description}
          </p>
        )}
        {labels && labels.length > 0 ? <PillBadgeGroup labels={labels} /> : null}
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
