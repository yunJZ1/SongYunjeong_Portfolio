import type { ReactNode } from "react";
import { SECTION_LABEL_CLASS } from "./CaseStudyPage";

export type CaseStudyBodySectionVariant = "default" | "featured";

type CaseStudyBodySectionProps = {
  id?: string;
  label: string;
  title?: string;
  children: ReactNode;
  variant?: CaseStudyBodySectionVariant;
};

export default function CaseStudyBodySection({
  id,
  label,
  title,
  children,
  variant = "default",
}: CaseStudyBodySectionProps) {
  if (variant === "featured") {
    return (
      <section id={id} className="scroll-mt-[96px] w-full">
        <div className="bg-[#171719] rounded-[20px] px-[40px] py-[48px] flex flex-col gap-[40px] w-full">
          <div className="flex flex-col gap-[14px]">
            <p className={`${SECTION_LABEL_CLASS} text-white`}>{label}</p>
            {title && (
              <h2 className="font-pretendard text-[36px] font-semibold text-white tracking-[-1.08px] leading-[1.3]">
                {title}
              </h2>
            )}
          </div>
          <div className="flex flex-col gap-[40px]">{children}</div>
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className="flex flex-col gap-[40px] scroll-mt-[96px]"
    >
      <div className="flex flex-col gap-[14px]">
        <p className={SECTION_LABEL_CLASS}>{label}</p>
        {title && (
          <h2 className="font-pretendard text-[36px] font-semibold text-[#171719] tracking-[-1.08px] leading-[1.3]">
            {title}
          </h2>
        )}
      </div>
      <div className="flex flex-col gap-[40px]">{children}</div>
    </section>
  );
}
