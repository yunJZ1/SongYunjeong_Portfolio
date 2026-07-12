import {
  PROJECT01_BODY_CLASS,
  PROJECT01_SUBHEADING_CLASS,
} from "../project01/project01Styles";

const SHIFT_ITEMS = [
  {
    channel: "VUI",
    asIs:
      "인간처럼 대화하며 단일 결론에 집중해 사용자 판단을 흐리는 AI",
    toBe:
      "추천 기준을 먼저 설명하고 비교·재탐색을 열어두어 사용자 판단을 돕는 AI",
  },
  {
    channel: "UI",
    asIs:
      "추천 결과에 집중하고 비교 구조와 근거를 축소해 판단 기준을 흐리는 UI",
    toBe:
      "수치·근거를 먼저 보여주고 비교 구조를 명확히 제공해 재탐색까지 지원하는 UI",
  },
] as const;

export default function AdPlacementInsightShiftDiagram() {
  return (
    <div className="flex flex-col gap-[16px]">
      <p className={PROJECT01_SUBHEADING_CLASS}>As-Is → To-Be Shift</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {SHIFT_ITEMS.map((item) => (
          <div
            key={item.channel}
            className="rounded-[16px] border border-[#e5e5e5] overflow-hidden bg-white"
          >
            <div className="px-[16px] py-[10px] bg-[#fafafa] border-b border-[#e5e5e5]">
              <span className="text-[13px] font-semibold text-[#171719] tracking-[-0.26px]">
                {item.channel}
              </span>
            </div>
            <div className="p-[16px] flex flex-col gap-[12px]">
              <div className="rounded-[12px] border border-[#fecaca] bg-[#fffafa] p-[14px]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#dc2626] mb-[6px]">
                  As-Is
                </p>
                <p className={PROJECT01_BODY_CLASS}>{item.asIs}</p>
              </div>
              <div className="flex justify-center text-[#a9a9a9] text-[18px] leading-none">
                ↓
              </div>
              <div className="rounded-[12px] border border-[#bfdbfe] bg-[#f8fbff] p-[14px]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#2563eb] mb-[6px]">
                  To-Be
                </p>
                <p className={PROJECT01_BODY_CLASS}>{item.toBe}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
