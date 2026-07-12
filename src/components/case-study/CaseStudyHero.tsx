import Container from "../Container";

type CaseStudyHeroProps = {
  label?: string;
  title: string;
  subtitle: string;
  chips: string[];
  meta: string;
};

export default function CaseStudyHero({
  label = "Case Study",
  title,
  subtitle,
  chips,
  meta,
}: CaseStudyHeroProps) {
  return (
    <Container variant="hero" className="pt-[64px] pb-[140px] text-center">
      <div className="flex flex-col items-center gap-[24px]">
        <p className="text-[15px] font-medium text-[#a9a9a9] tracking-[-0.45px] leading-[1.65] uppercase">
          {label}
        </p>
        <h1 className="font-pretendard text-[42px] font-semibold text-[#171719] tracking-[-1.26px] leading-[1.35]">
          {title}
        </h1>
        <p className="font-pretendard text-[20px] font-medium text-[#606060] tracking-[-0.6px] leading-[1.5] max-w-[760px]">
          {subtitle}
        </p>
        {chips.length > 0 && (
          <div className="flex flex-wrap justify-center gap-[10px]">
            {chips.map((chip) => (
              <span
                key={chip}
                className="inline-flex px-[14px] py-[8px] rounded-full bg-[#171719] text-[13px] font-medium text-white tracking-[-0.39px]"
              >
                {chip}
              </span>
            ))}
          </div>
        )}
        {meta && (
          <p className="font-pretendard text-[15px] font-medium text-[#a9a9a9] tracking-[-0.45px] leading-[1.65]">
            {meta}
          </p>
        )}
      </div>
    </Container>
  );
}
