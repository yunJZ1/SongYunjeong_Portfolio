import {
  PROJECT01_BODY_CLASS,
  PROJECT01_SUBHEADING_CLASS,
} from "../project01/project01Styles";

const ROLE_ITEMS = [
  {
    id: "attendee",
    label: "참석자",
    title: "조건 입력에 집중",
    description:
      "가용 시간과 선호 조건만 입력합니다. 여러 경우의 수를 직접 계산하지 않습니다.",
  },
  {
    id: "product",
    label: "제품",
    title: "조건 종합·후보 제안",
    description:
      "필수 참석자를 우선 판단하고, 선택 참석자·선호도를 반영해 상위 후보를 추천합니다. 반영된 조건을 함께 표기합니다.",
  },
] as const;

const PLATFORM_ITEMS = [
  {
    id: "mobile",
    label: "Mobile",
    title: "최소 입력으로 응답",
    description: "이동 중에도 빠르게 조건을 입력하고 응답할 수 있습니다.",
  },
  {
    id: "desktop",
    label: "Desktop",
    title: "후보·상태 한눈에 비교",
    description:
      "여러 후보와 참석자 상태를 동시에 비교하며 확정할 수 있습니다.",
  },
] as const;

function InfoCard({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-[16px] border border-[#e5e5e5] bg-[#fafafa] p-[20px] flex flex-col gap-[10px]">
      <span className="inline-flex items-center h-[28px] px-[10px] rounded-full text-[12px] font-semibold tracking-[-0.24px] bg-[#f0f0f0] text-[#737373] w-fit">
        {label}
      </span>
      <h4 className="font-pretendard text-[16px] font-semibold text-[#171719] tracking-[-0.32px] leading-[1.4]">
        {title}
      </h4>
      <p className={PROJECT01_BODY_CLASS}>{description}</p>
    </article>
  );
}

export default function DiscoverStructureDesignRationale() {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex flex-col gap-[16px]">
        <p className={PROJECT01_SUBHEADING_CLASS}>Role Separation</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          {ROLE_ITEMS.map((item) => (
            <InfoCard key={item.id} {...item} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[16px]">
        <p className={PROJECT01_SUBHEADING_CLASS}>Platform Optimization</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          {PLATFORM_ITEMS.map((item) => (
            <InfoCard key={item.id} {...item} />
          ))}
        </div>
      </div>

      <div className="rounded-[16px] border border-[#e5e5e5] bg-white p-[20px] md:p-[24px]">
        <p className={PROJECT01_SUBHEADING_CLASS}>Build Process</p>
        <p className={`${PROJECT01_BODY_CLASS} mt-[12px]`}>
          Claude로 기존 일정·캘린더·생산성 서비스 플로우를 분석하고, Figma
          컴포넌트를 설계한 뒤 Cursor와 React로 모바일·PC 환경을 직접
          구현했습니다. 배포 환경을 고려하며 반복 검증해 전 과정을 하나의
          플로우로 연결했습니다.
        </p>
      </div>
    </div>
  );
}
