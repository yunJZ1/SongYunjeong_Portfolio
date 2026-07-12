import type { NavigateHandler } from "../../types";
import GradientSurface from "./GradientSurface";

type AIWorkflowBannerProps = {
  onNavigate: NavigateHandler;
};

export default function AIWorkflowBanner({ onNavigate }: AIWorkflowBannerProps) {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-[24px] md:px-[40px] pt-[12px] pb-[8px]">
      <GradientSurface
        onClick={() => onNavigate("ai-workflow")}
        className="group w-full min-h-[56px] md:min-h-[60px] flex flex-col sm:flex-row sm:items-center justify-between gap-[10px] sm:gap-[16px] px-[20px] md:px-[28px] py-[14px] sm:py-[12px] rounded-[16px] text-left"
      >
        <div className="flex items-center gap-[12px] md:gap-[16px] min-w-0 flex-1">
          <span className="shrink-0 px-[10px] py-[4px] rounded-full bg-[#171719] text-white text-[11px] font-medium tracking-[0.02em] leading-none">
            AI Workflow
          </span>
          <p className="font-pretendard text-[13px] md:text-[14px] font-medium text-[#404040] tracking-[-0.28px] leading-[1.5] sm:truncate">
            See how Yunjeong Song designs and builds products with AI.
          </p>
        </div>

        <span className="shrink-0 text-[13px] font-medium text-[#171719] tracking-[-0.26px] whitespace-nowrap group-hover:underline underline-offset-4 decoration-[#d4d4d4] group-hover:decoration-[#171719] transition-colors">
          Explore Workflow →
        </span>
      </GradientSurface>
    </div>
  );
}
