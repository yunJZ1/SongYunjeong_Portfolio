import FeaturedProjectCard, {
  type FeaturedProjectCardData,
} from "./FeaturedProjectCard";

type FeaturedProjectsSectionProps = {
  id: string;
  title: string;
  projects: FeaturedProjectCardData[];
  onMoreClick?: () => void;
};

export default function FeaturedProjectsSection({
  id,
  title,
  projects,
  onMoreClick,
}: FeaturedProjectsSectionProps) {
  return (
    <section id={id} className="scroll-mt-[24px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px]">
        <div className="flex items-end justify-between gap-[24px] mb-[40px] md:mb-[48px]">
          <h2 className="font-pretendard text-[32px] md:text-[36px] font-semibold text-[#171719] tracking-[-1.08px] leading-[1.3]">
            {title}
          </h2>
          {onMoreClick && (
            <button
              type="button"
              onClick={onMoreClick}
              className="shrink-0 text-[14px] font-medium text-[#606060] tracking-[-0.28px] leading-none bg-transparent border-0 p-0 cursor-pointer hover:text-[#171719] hover:underline underline-offset-4 transition-colors"
            >
              More
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] lg:gap-[40px] items-stretch">
          {projects.map((project) => (
            <FeaturedProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export type { FeaturedProjectCardData };
