import {
  PROJECT01_BODY_CLASS,
  PROJECT01_SUBHEADING_CLASS,
} from "../project01/project01Styles";

const CONSTRAINT_ITEMS = [
  {
    id: "attendees",
    label: "참석자 구분",
    title: "필수·선택 참석자",
    description:
      "누가 반드시 참석해야 하는지, 누구는 선택인지에 따라 후보 시간의 우선순위가 달라집니다.",
    highlight: false,
  },
  {
    id: "preferences",
    label: "개인 조건",
    title: "일정·선호·외근",
    description:
      "개인 일정뿐 아니라 점심 직후 회의 회피, 특정 요일 외근 등 다양한 제약이 함께 작용합니다.",
    highlight: false,
  },
  {
    id: "scale",
    label: "조건 증가",
    title: "참석자·직군 확장",
    description:
      "참석자가 늘거나 직군이 다양해질수록 고려할 조건이 급격히 늘고 확인·수정이 반복됩니다.",
    highlight: false,
  },
  {
    id: "cost",
    label: "의사결정 비용",
    title: "반복 조율 루프",
    description:
      "주최자가 여러 일정을 직접 비교하고 참석자에게 다시 확인하는 과정에서 불필요한 비용이 발생합니다.",
    highlight: true,
  },
] as const;

const CARD_BASE_CLASS =
  "rounded-[16px] border p-[20px] md:p-[24px] flex flex-col gap-[10px]";
const CARD_NEUTRAL_CLASS = `${CARD_BASE_CLASS} border-[#e5e5e5] bg-[#fafafa]`;
const CARD_HIGHLIGHT_CLASS = `${CARD_BASE_CLASS} border-[#fecaca] bg-[#fffafa]`;

export default function DiscoverStructureProblemCards() {
  return (
    <div className="flex flex-col gap-[16px]">
      <p className={PROJECT01_SUBHEADING_CLASS}>Coordination Constraints</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {CONSTRAINT_ITEMS.map((item) => (
          <article
            key={item.id}
            className={
              item.highlight ? CARD_HIGHLIGHT_CLASS : CARD_NEUTRAL_CLASS
            }
          >
            <span className="inline-flex items-center h-[28px] px-[10px] rounded-full text-[12px] font-semibold tracking-[-0.24px] bg-[#f0f0f0] text-[#737373] w-fit">
              {item.label}
            </span>
            <h4 className="font-pretendard text-[16px] font-semibold text-[#171719] tracking-[-0.32px] leading-[1.4]">
              {item.title}
            </h4>
            <p className={PROJECT01_BODY_CLASS}>{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
