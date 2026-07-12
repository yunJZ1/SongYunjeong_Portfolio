import { useState } from "react";
import { OUTCOME_METRICS } from "../../data/commerceAiCaseStudy";
import BeforeAfterBar from "./BeforeAfterBar";

type OutcomeMetricsGridProps = {
  className?: string;
};

export default function OutcomeMetricsGrid({ className = "" }: OutcomeMetricsGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-[20px] ${className}`}
    >
      {OUTCOME_METRICS.map((metric) => {
        const isExpanded = expandedId === metric.id;

        return (
          <button
            key={metric.id}
            type="button"
            onClick={() => {
              if (metric.expandable) {
                setExpandedId(isExpanded ? null : metric.id);
              }
            }}
            className={`text-left bg-white border border-[#e7e7e7] rounded-[20px] px-[28px] py-[28px] transition-all duration-200 ${
              metric.expandable
                ? "cursor-pointer hover:border-[#d1d5db] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                : "cursor-default"
            } ${isExpanded ? "md:col-span-2 border-[#111111]" : ""}`}
          >
            {"headlineHighlight" in metric && metric.headlineHighlight ? (
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#111111] tracking-[-0.84px] leading-[1.3] mb-[12px]">
                이탈 위험{" "}
                <span className="text-[36px] sm:text-[42px] tracking-[-1.26px]">
                  {metric.headlineHighlight.before}
                </span>
                <span className="text-[20px] mx-[6px]">→</span>
                <span className="text-[36px] sm:text-[42px] tracking-[-1.26px]">
                  {metric.headlineHighlight.after}
                </span>
              </h3>
            ) : (
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#111111] tracking-[-0.84px] leading-[1.3] mb-[12px]">
                {metric.headline}
              </h3>
            )}

            <p className="font-pretendard text-[15px] sm:text-[16px] font-normal text-[#454545] tracking-[-0.45px] leading-[1.65] mb-[8px]">
              {metric.description}
            </p>

            {metric.expandable && "beforeValue" in metric && metric.beforeValue !== undefined && (
              <>
                {!isExpanded && (
                  <span className="text-[12px] font-medium text-[#9CA3AF] tracking-[-0.36px]">
                    클릭하여 Before/After 차트 보기
                  </span>
                )}
                {isExpanded && "afterValue" in metric && "delta" in metric && (
                  <BeforeAfterBar
                    beforeValue={metric.beforeValue}
                    afterValue={metric.afterValue}
                    delta={metric.delta}
                  />
                )}
              </>
            )}
          </button>
        );
      })}
    </div>
  );
}
