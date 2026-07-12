import type { CaseStudyPillVariant } from "../../data/caseStudyCardLabels";

const PILL_BASE_CLASS =
  "inline-flex items-center gap-[6px] rounded-full px-[12px] py-[6px] text-[13px] font-semibold tracking-[-0.26px] leading-none";

const PILL_VARIANT_CLASS: Record<CaseStudyPillVariant, string> = {
  year: "bg-[#F0F4F8] text-[#475569]",
  published: "bg-[#E6F7F5] text-[#0F766E]",
  commercial: "bg-[#FFF4E6] text-[#C2410C]",
  "award-winning": "bg-[#FEECEC] text-[#DC2626]",
  "ai-built-prototype": "bg-[#F3E8FF] text-[#7C3AED]",
  tbu: "bg-[#E8F2FF] text-[#0071E3]",
  careers: "bg-[#E8EEF5] text-[#1E3A5F]",
  "ma-labs": "bg-[#E6F7ED] text-[#15803D]",
  etc: "bg-[#F0F4F8] text-[#475569]",
};

function LockIcon() {
  return (
    <svg
      className="h-[12px] w-[12px] shrink-0"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
    >
      <path
        d="M3.5 5V4a2.5 2.5 0 0 1 5 0v1"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <rect
        x="2.5"
        y="5"
        width="7"
        height="5"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

type PillBadgeProps = {
  variant: CaseStudyPillVariant;
  label: string;
};

export default function PillBadge({ variant, label }: PillBadgeProps) {
  return (
    <span className={`${PILL_BASE_CLASS} ${PILL_VARIANT_CLASS[variant]}`}>
      {variant === "tbu" ? <LockIcon /> : null}
      {label}
    </span>
  );
}
