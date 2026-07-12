import {
  CENTERED_BODY_TRACK_CLASS,
  EDITORIAL_ROW_CLASS,
  LABEL_COLUMN_CLASS,
  READING_COLUMN_CLASS,
  SECTION_LABEL_CLASS,
} from "./CaseStudyPage";

type CaseStudyHeroGroupProps = {
  label?: string;
  title: string;
  subtitle: string;
  chips?: string[];
  description?: string[];
};

const CHIP_CLASS =
  "inline-flex px-[14px] py-[8px] rounded-full bg-[#f5f5f5] border border-[#e7e7e7] text-[13px] font-medium text-[#606060] tracking-[-0.39px]";

export default function CaseStudyHeroGroup({
  label = "Case Study",
  title,
  subtitle,
  chips = [],
  description = [],
}: CaseStudyHeroGroupProps) {
  return (
    <section className={`${CENTERED_BODY_TRACK_CLASS} ${EDITORIAL_ROW_CLASS}`}>
      <div className={LABEL_COLUMN_CLASS}>
        <p className={SECTION_LABEL_CLASS}>{label}</p>
      </div>
      <div className={`${READING_COLUMN_CLASS} flex flex-col gap-[24px]`}>
        <h1 className="font-pretendard text-[42px] font-semibold text-[#171719] tracking-[-1.26px] leading-[1.35]">
          {title}
        </h1>
        <p className="font-pretendard text-[20px] font-medium text-[#606060] tracking-[-0.6px] leading-[1.5]">
          {subtitle}
        </p>
        {description.length > 0 && (
          <div className="flex flex-col gap-[16px]">
            {description.map((paragraph) => (
              <p
                key={paragraph}
                className="font-pretendard text-[17px] font-normal text-[#606060] tracking-[-0.51px] leading-[1.71]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}
        {chips.length > 0 && (
          <div className="flex flex-wrap gap-[10px]">
            {chips.map((chip) => (
              <span key={chip} className={CHIP_CLASS}>
                {chip}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
