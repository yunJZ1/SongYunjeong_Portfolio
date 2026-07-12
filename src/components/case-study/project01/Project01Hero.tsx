import {
  PROJECT01_CHIP_CLASS,
  PROJECT01_SECTION_INNER_GAP_CLASS,
  PROJECT01_SECTION_LABEL_CLASS,
  PROJECT01_TRACK_CLASS,
} from "./project01Styles";
import Project01PageLayout from "./Project01PageLayout";

type Project01HeroProps = {
  title: string;
  subtitle: string;
  chips?: string[];
};

export default function Project01Hero({
  title,
  subtitle,
  chips = [],
}: Project01HeroProps) {
  return (
    <section className={`${PROJECT01_TRACK_CLASS} flex flex-col gap-[40px]`}>
      <Project01PageLayout>
        <div className={`${PROJECT01_SECTION_INNER_GAP_CLASS}`}>
          <p className={PROJECT01_SECTION_LABEL_CLASS}>Case Study</p>

          <h1 className="font-pretendard text-[36px] md:text-[42px] lg:text-[48px] font-medium text-[#171719] tracking-[-0.96px] leading-[1.25] max-w-[720px]">
            {title}
          </h1>

          <p className="font-pretendard text-[17px] md:text-[18px] font-normal text-[#606060] tracking-[-0.36px] leading-[1.55] max-w-[720px]">
            {subtitle}
          </p>

          {chips.length > 0 && (
            <div className="flex flex-wrap gap-[6px] pt-[2px]">
              {chips.map((chip) => (
                <span key={chip} className={PROJECT01_CHIP_CLASS}>
                  {chip}
                </span>
              ))}
            </div>
          )}
        </div>
      </Project01PageLayout>

      <div className="w-full aspect-[16/9] rounded-[16px] bg-[#f5f5f5] overflow-hidden flex items-center justify-center">
        <span className="text-[12px] font-medium text-[#bdbdbd] tracking-[-0.24px]">
          Hero Visual
        </span>
      </div>
    </section>
  );
}
