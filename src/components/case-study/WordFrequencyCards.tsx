import { WORD_FREQUENCY } from "../../data/commerceAiCaseStudy";

type WordFrequencyCardsProps = {
  className?: string;
  compact?: boolean;
};

export default function WordFrequencyCards({
  className = "",
  compact = false,
}: WordFrequencyCardsProps) {
  const { words, totalRespondents, citedRespondents } = WORD_FREQUENCY;

  return (
    <div className={`flex flex-col gap-[24px] ${className}`}>
      <div className="flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[24px]">
        {words.map((item, index) => (
          <div key={item.word} className="flex items-center gap-[16px] sm:gap-[24px] w-full sm:w-auto">
            {index > 0 && (
              <span className="hidden sm:block text-[28px] font-light text-[#9CA3AF]">+</span>
            )}
            <div
              className={`flex-1 sm:flex-none bg-white border border-[#e7e7e7] rounded-[20px] px-[32px] py-[28px] min-w-[200px] ${
                compact ? "px-[24px] py-[20px]" : ""
              }`}
            >
              <p className="text-[32px] font-semibold text-[#111111] tracking-[-0.96px] leading-[1.2] mb-[8px]">
                &ldquo;{item.word}&rdquo;
              </p>
              <p className="text-[40px] font-semibold text-[#111111] tracking-[-1.2px] leading-[1.1] mb-[12px]">
                {item.count}
                <span className="text-[18px] font-medium text-[#6B7280] ml-[4px]">명</span>
              </p>
              <p className="font-pretendard text-[14px] text-[#6B7280] tracking-[-0.42px] leading-[1.6]">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-[8px] pt-[8px]">
        <p className="text-[24px] sm:text-[28px] font-semibold text-[#292929] tracking-[-0.84px]">
          {totalRespondents}명 중{" "}
          <span className="text-[#111111] underline decoration-[#F4FF47] decoration-[3px] underline-offset-[4px]">
            {citedRespondents}명
          </span>
        </p>
      </div>
    </div>
  );
}
