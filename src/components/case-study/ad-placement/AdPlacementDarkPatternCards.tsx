import {
  PROJECT01_BODY_CLASS,
  PROJECT01_SUBHEADING_CLASS,
} from "../project01/project01Styles";

const DARK_PATTERN_TYPES = [
  {
    id: "social-proof",
    typeLabel: "Type A",
    title: "Social Proof",
    subtitle: "사회적 선호에 따라 선택 유도",
    example: "디자이너 업무에 가장 적합해",
    description:
      "근거 없는 사회적 선호를 사실처럼 제시해, 사용자가 판단 근거를 검증하지 않고 정보를 수용하게 만듭니다.",
    accentClass: "border-[#e5e5e5] bg-[#fafafa]",
    badgeClass: "bg-[#f0f0f0] text-[#737373]",
    highlight: false,
  },
  {
    id: "confirmshaming",
    typeLabel: "Type B",
    title: "Confirmshaming",
    subtitle: "재고려를 방해하는 감정적 메시지 압박",
    example: "후회하지 않을 거예요",
    description:
      "감정적·관계적 표현으로 사용자의 이성적 판단 여지를 줄입니다. 실험에서 가장 높은 거부 반응(41.2%)을 보였습니다.",
    accentClass: "border-[#fecaca] bg-[#fffafa]",
    badgeClass: "bg-[#fef2f2] text-[#dc2626]",
    highlight: true,
  },
  {
    id: "scarcity",
    typeLabel: "Type C",
    title: "Scarcity",
    subtitle: "정보 불균형을 통한 조기 결정 유도",
    example: "재고가 소진되기 전에 서둘러요",
    description:
      "시간·재고 압박을 과장해 충분한 비교와 탐색을 제한합니다.",
    accentClass: "border-[#e5e5e5] bg-[#fafafa]",
    badgeClass: "bg-[#f0f0f0] text-[#737373]",
    highlight: false,
  },
] as const;

export default function AdPlacementDarkPatternCards() {
  return (
    <div className="flex flex-col gap-[16px]">
      <p className={PROJECT01_SUBHEADING_CLASS}>Dark Pattern Types</p>
      <div className="grid grid-cols-1 gap-[16px]">
        {DARK_PATTERN_TYPES.map((item) => (
          <article
            key={item.id}
            className={`rounded-[16px] border p-[20px] md:p-[24px] flex flex-col gap-[12px] ${item.accentClass}`}
          >
            <div className="flex flex-wrap items-center gap-[8px]">
              <span
                className={`inline-flex items-center h-[28px] px-[10px] rounded-full text-[12px] font-semibold tracking-[-0.24px] ${item.badgeClass}`}
              >
                {item.typeLabel}
              </span>
              <h4 className="font-pretendard text-[16px] font-semibold text-[#171719] tracking-[-0.32px] leading-[1.4]">
                {item.title}
              </h4>
              {item.highlight ? (
                <span className="text-[12px] font-medium text-[#dc2626] tracking-[-0.24px]">
                  Highest rejection
                </span>
              ) : null}
            </div>
            <p className="text-[14px] font-medium text-[#404040] tracking-[-0.28px] leading-[1.5]">
              {item.subtitle}
            </p>
            <p className="text-[14px] font-medium italic text-[#171719] tracking-[-0.28px] leading-[1.6] border-l-2 border-[#e5e5e5] pl-[12px]">
              &ldquo;{item.example}&rdquo;
            </p>
            <p className={PROJECT01_BODY_CLASS}>{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
