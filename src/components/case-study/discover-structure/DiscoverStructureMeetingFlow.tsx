import {
  PROJECT01_BODY_CLASS,
  PROJECT01_SUBHEADING_CLASS,
} from "../project01/project01Styles";

const FLOW_STEPS = [
  { id: "create", label: "01", title: "회의 생성" },
  { id: "invite", label: "02", title: "참석 요청" },
  { id: "input", label: "03", title: "조건 입력" },
  { id: "recommend", label: "04", title: "후보 추천" },
  { id: "confirm", label: "05", title: "최종 확정" },
  { id: "remind", label: "06", title: "리마인드" },
] as const;

export default function DiscoverStructureMeetingFlow() {
  return (
    <div className="flex flex-col gap-[16px]">
      <p className={PROJECT01_SUBHEADING_CLASS}>End-to-End Flow</p>
      <div className="rounded-[16px] border border-[#e5e5e5] bg-[#fafafa] p-[20px] md:p-[24px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[12px]">
          {FLOW_STEPS.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center">
              <div className="w-full rounded-[12px] border border-[#e5e5e5] bg-white px-[12px] py-[14px] text-center">
                <p className="text-[11px] font-semibold text-[#a9a9a9] tracking-[0.04em] mb-[4px]">
                  {step.label}
                </p>
                <p className="text-[13px] font-semibold text-[#171719] tracking-[-0.26px] leading-[1.4]">
                  {step.title}
                </p>
              </div>
              {index < FLOW_STEPS.length - 1 ? (
                <span
                  className="hidden lg:block absolute top-1/2 -right-[8px] -translate-y-1/2 text-[#c0c0c0] text-[12px]"
                  aria-hidden
                >
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <p className={PROJECT01_BODY_CLASS}>
        회의 생성부터 확정·리마인드까지 하나의 플로우로 연결해, 서비스 밖에서
        불필요한 조율이 반복되지 않도록 설계했습니다.
      </p>
    </div>
  );
}
