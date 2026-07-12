import type { ReactNode } from "react";

type CaseStudySectionProps = {
  id?: string;
  label: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function CaseStudySection({
  id,
  label,
  title,
  children,
  className = "",
}: CaseStudySectionProps) {
  return (
    <section
      id={id}
      className={`flex flex-col gap-[40px] scroll-mt-[96px] ${className}`.trim()}
    >
      <div className="flex flex-col gap-[14px]">
        <p className="text-[15px] font-medium text-[#a9a9a9] tracking-[-0.45px] leading-[1.65] uppercase">
          {label}
        </p>
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
