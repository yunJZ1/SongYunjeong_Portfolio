import type { ReactNode } from "react";
import type { CaseStudyPillLabel } from "../../data/caseStudyCardLabels";
import PillBadgeGroup from "./PillBadgeGroup";

type ProjectHeroProps = {
  title: string;
  description: string;
  summary?: string;
  fieldMeta?: string;
  labels?: CaseStudyPillLabel[];
  ctaLabel?: string;
  ctaHref?: string;
  footer?: ReactNode;
};

const CTA_CLASS =
  "text-[14px] font-medium text-[#171719] tracking-[-0.28px] underline underline-offset-4 decoration-[#d4d4d4] transition-colors duration-300 self-start";

const FIELD_META_CLASS =
  "font-pretendard text-[14px] font-normal text-[#a9a9a9] tracking-[-0.28px] leading-[1.65] max-w-[42ch]";

export default function ProjectHero({
  title,
  description,
  summary,
  fieldMeta,
  labels,
  ctaLabel = "View project",
  ctaHref,
  footer,
}: ProjectHeroProps) {
  return (
    <div className="flex flex-col gap-[16px] min-w-0">
      <PillBadgeGroup labels={labels ?? []} />
      <h2 className="font-pretendard text-[28px] md:text-[32px] font-medium text-[#171719] tracking-[-0.64px] leading-[1.25] transition-colors duration-300 group-hover:text-[#000000]">
        {title}
      </h2>
      <p className="font-pretendard text-[15px] font-normal text-[#606060] tracking-[-0.3px] leading-[1.7] max-w-[42ch]">
        {description}
      </p>
      {fieldMeta && <p className={FIELD_META_CLASS}>{fieldMeta}</p>}
      {summary && <p className={FIELD_META_CLASS}>{summary}</p>}
      {footer ??
        (ctaHref && ctaLabel ? (
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${CTA_CLASS} hover:decoration-[#171719]`}
          >
            {ctaLabel}
          </a>
        ) : ctaLabel ? (
          <span
            className={`${CTA_CLASS} group-hover:decoration-[#171719]`}
          >
            {ctaLabel}
          </span>
        ) : null)}
    </div>
  );
}
