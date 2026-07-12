import { useState } from "react";
import {
  ANOVA_DATA,
  ANOVA_METRICS,
} from "../../data/commerceAiCaseStudy";

type AnovaResultsChartProps = {
  className?: string;
};

function BarRow({
  label,
  value,
  max,
  isPercent,
  highlight,
  quote,
}: {
  label: string;
  value: number;
  max: number;
  isPercent: boolean;
  highlight: boolean;
  quote: string;
}) {
  const [showQuote, setShowQuote] = useState(false);
  const widthPercent = Math.min((value / max) * 100, 100);
  const displayValue = isPercent ? `${value}%` : value.toFixed(2);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setShowQuote(true)}
      onMouseLeave={() => setShowQuote(false)}
      onClick={() => setShowQuote((prev) => !prev)}
    >
      <div className="flex items-center gap-[16px]">
        <span className="w-[120px] shrink-0 text-[14px] font-medium text-[#454545] tracking-[-0.42px]">
          {label}
        </span>
        <div className="flex-1 h-[28px] bg-[#f0f0f0] rounded-[6px] overflow-hidden relative">
          <div
            className={`h-full rounded-[6px] transition-all duration-500 ${
              highlight
                ? "bg-[#111111]"
                : "bg-[#D1D5DB]"
            }`}
            style={{ width: `${widthPercent}%` }}
          />
          {highlight && (
            <div
              className="absolute top-0 h-full w-[4px] bg-[#F4FF47] rounded-full"
              style={{ left: `calc(${widthPercent}% - 2px)` }}
            />
          )}
        </div>
        <span
          className={`w-[52px] shrink-0 text-right text-[14px] font-semibold tracking-[-0.42px] ${
            highlight ? "text-[#111111]" : "text-[#6B7280]"
          }`}
        >
          {displayValue}
        </span>
      </div>

      {showQuote && (
        <div
          className={`mt-[10px] ml-[136px] px-[14px] py-[10px] rounded-[8px] text-[13px] font-pretendard text-[#454545] leading-[1.6] tracking-[-0.39px] border ${
            highlight
              ? "bg-[#fdffe4] border-[#e0e776]"
              : "bg-white border-[#e7e7e7] shadow-sm"
          }`}
          role="tooltip"
        >
          &ldquo;{quote}&rdquo;
        </div>
      )}
    </div>
  );
}

export default function AnovaResultsChart({ className = "" }: AnovaResultsChartProps) {
  return (
    <div className={`flex flex-col gap-[40px] ${className}`}>
      {ANOVA_METRICS.map((metric) => (
        <div key={metric.key} className="flex flex-col gap-[16px]">
          <div className="flex items-baseline justify-between gap-[12px]">
            <h3 className="text-[18px] font-semibold text-[#292929] tracking-[-0.54px]">
              {metric.label}
            </h3>
            {metric.isPercent && (
              <span className="text-[12px] font-medium text-[#9CA3AF] tracking-[-0.36px]">
                퍼센트 바
              </span>
            )}
          </div>
          <div className="flex flex-col gap-[14px]">
            {ANOVA_DATA.map((row) => (
              <BarRow
                key={`${metric.key}-${row.type}`}
                label={row.shortLabel}
                value={row[metric.key]}
                max={metric.max}
                isPercent={metric.isPercent}
                highlight={metric.isPercent && row.highlight}
                quote={row.quote}
              />
            ))}
          </div>
        </div>
      ))}
      <p className="text-[12px] font-medium text-[#9CA3AF] tracking-[-0.36px] leading-[1.6]">
        n=51, One-way ANOVA, F=8.97, p&lt;.001
      </p>
    </div>
  );
}
