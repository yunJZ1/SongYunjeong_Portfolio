import {
  PROJECT01_BODY_CLASS,
  PROJECT01_SUBHEADING_CLASS,
} from "../project01/project01Styles";

export default function DiscoverStructureCoordinationShift() {
  return (
    <div className="flex flex-col gap-[16px]">
      <p className={PROJECT01_SUBHEADING_CLASS}>As-Is → To-Be</p>
      <div className="rounded-[16px] border border-[#e5e5e5] overflow-hidden bg-white">
        <div className="p-[16px] md:p-[20px] flex flex-col gap-[12px]">
          <div className="rounded-[12px] border border-[#fecaca] bg-[#fffafa] p-[14px] md:p-[16px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#dc2626] mb-[6px]">
              As-Is
            </p>
            <p className={PROJECT01_BODY_CLASS}>
              캘린더는 각자의 일정을 보여주지만, 여러 사람의 조건을 하나의
              의사결정으로 연결하지 못합니다. 주최자가 후보를 직접 비교하고
              반복적으로 조율합니다.
            </p>
          </div>
          <div className="flex justify-center text-[#a9a9a9] text-[18px] leading-none">
            ↓
          </div>
          <div className="rounded-[12px] border border-[#bfdbfe] bg-[#f8fbff] p-[14px] md:p-[16px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#2563eb] mb-[6px]">
              To-Be
            </p>
            <p className={PROJECT01_BODY_CLASS}>
              참석자는 조건만 입력하고, 제품이 조건을 종합해 최적 후보를
              제안합니다. 주최자는 추천 결과를 검토하고 확정만 하면 됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
