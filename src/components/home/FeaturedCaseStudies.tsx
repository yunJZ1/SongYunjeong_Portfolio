import {
  getFeaturedCaseStudies,
  getFeaturedGridItemClass,
} from "../../data/featuredCaseStudies";

type FeaturedCaseStudiesProps = {
  onOpenCase: (id: string) => void;
};

function parseCategory(tags: string[]): string {
  const categoryTag = tags.find((tag) => tag.includes("・"));
  if (!categoryTag) return "Case Study";
  const parts = categoryTag.split("・").map((part) => part.trim());
  return parts.slice(1).join(" · ") || parts[0];
}

function parseYear(tags: string[]): string {
  const dateTag = tags[0] ?? "";
  const yearMatch = dateTag.match(/20\d{2}/);
  return yearMatch?.[0] ?? "";
}

const COVER_GRADIENTS = [
  "from-[#1a1a2e] to-[#16213e]",
  "from-[#2d3436] to-[#636e72]",
  "from-[#0f3460] to-[#533483]",
  "from-[#1b4332] to-[#2d6a4f]",
  "from-[#3d155f] to-[#7b2cbf]",
];

const featuredCaseStudies = getFeaturedCaseStudies();

export default function FeaturedCaseStudies({
  onOpenCase,
}: FeaturedCaseStudiesProps) {
  return (
    <section id="featured-case-studies" className="scroll-mt-[24px]">
      <div className="max-w-[1480px] mx-auto px-[40px]">
        <h2 className="text-[36px] font-semibold text-[#171719] tracking-[-1.08px] leading-[1.3] mb-[64px]">
          Featured Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-[40px] lg:gap-[48px]">
          {featuredCaseStudies.map((study, index) => (
            <div
              key={study.id}
              className={getFeaturedGridItemClass()}
            >
              <button
                type="button"
                onClick={() => onOpenCase(study.id)}
                className="group text-left flex flex-col gap-[28px] bg-transparent border-0 p-0 cursor-pointer w-full"
              >
                <div
                  className={`w-full aspect-[16/10] rounded-[20px] bg-gradient-to-br ${COVER_GRADIENTS[index % COVER_GRADIENTS.length]} flex items-center justify-center overflow-hidden`}
                >
                  <span className="text-[15px] font-medium text-white/40 tracking-[-0.45px]">
                    Cover Image
                  </span>
                </div>
                <div className="flex flex-col gap-[12px]">
                  <h3 className="font-pretendard text-[24px] font-semibold text-[#171719] tracking-[-0.72px] leading-[1.4] group-hover:text-[#009cff] transition-colors">
                    {study.subtitle}
                  </h3>
                  {study.tags.length > 0 && (
                    <div className="flex items-center gap-[8px] text-[14px] font-medium text-[#a9a9a9] tracking-[-0.42px]">
                      <span>{parseCategory(study.tags)}</span>
                      {parseYear(study.tags) && (
                        <>
                          <span aria-hidden>·</span>
                          <span>{parseYear(study.tags)}</span>
                        </>
                      )}
                    </div>
                  )}
                  {study.desc && (
                    <p className="font-pretendard text-[17px] font-normal text-[#606060] tracking-[-0.51px] leading-[1.65] line-clamp-3">
                      {study.desc}
                    </p>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
