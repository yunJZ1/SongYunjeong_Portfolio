type BeforeAfterBarProps = {
  beforeValue: number;
  afterValue: number;
  delta: number;
  className?: string;
};

export default function BeforeAfterBar({
  beforeValue,
  afterValue,
  delta,
  className = "",
}: BeforeAfterBarProps) {
  return (
    <div
      className={`flex flex-col gap-[12px] pt-[16px] border-t border-[#e7e7e7] ${className}`}
    >
      <div className="flex items-end gap-[20px]">
        <div className="flex flex-col gap-[6px] flex-1">
          <span className="text-[11px] font-medium text-[#9CA3AF] tracking-[-0.33px]">
            Before
          </span>
          <div className="h-[32px] bg-[#f0f0f0] rounded-[6px] overflow-hidden">
            <div
              className="h-full bg-[#6B7280] rounded-[6px] transition-all duration-500"
              style={{ width: `${beforeValue}%` }}
            />
          </div>
          <span className="text-[14px] font-semibold text-[#454545]">{beforeValue}%</span>
        </div>

        <div className="flex flex-col items-center justify-center pb-[20px] shrink-0">
          <span className="text-[20px] text-[#111111]">→</span>
          <span className="text-[13px] font-semibold text-[#111111] bg-[#F4FF47] px-[8px] py-[2px] rounded-[4px] mt-[4px]">
            {delta}%p
          </span>
        </div>

        <div className="flex flex-col gap-[6px] flex-1">
          <span className="text-[11px] font-medium text-[#9CA3AF] tracking-[-0.33px]">
            After
          </span>
          <div className="h-[32px] bg-[#f0f0f0] rounded-[6px] overflow-hidden">
            <div
              className="h-full bg-[#111111] rounded-[6px] transition-all duration-500"
              style={{ width: `${afterValue}%` }}
            />
          </div>
          <span className="text-[14px] font-semibold text-[#111111]">{afterValue}%</span>
        </div>
      </div>
      <p className="text-[11px] font-medium text-[#9CA3AF] tracking-[-0.33px] leading-[1.5]">
        회귀모델 기반 추정, 실제 적용 시 A/B 테스트 검증 필요
      </p>
    </div>
  );
}
