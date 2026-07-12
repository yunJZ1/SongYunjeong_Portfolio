import type { CaseStudyPrototypeConfig } from "../types/caseStudyPrototype";

const CASE_STUDY_PROTOTYPE_BY_ID: Record<string, CaseStudyPrototypeConfig> = {
  "discover-structure": {
    caseId: "discover-structure",
    sectionDomId: "discover-structure-prototype",
    navLabel: "Prototype",
    label: "Prototype",
    title: "인터랙티브 프로토타입",
    description:
      "호스트가 여러 조건을 입력하고 최적의 일정 조건을 탐색하는 핵심 플로우를 시각화한 프로토타입입니다.",
    blocks: [
      {
        id: "schedule-flow",
        heading: "일정 조건 탐색 플로우",
        description:
          "조건 입력, 후보 일정 비교, 확정까지의 핵심 화면을 미리볼 수 있습니다. 이후 인터랙티브 프로토타입이 이 영역에 연결됩니다.",
        screen: {
          id: "schedule-flow-screen",
          iframeSrc: "https://workson-prototype-do92.vercel.app/",
          alt: "일정 조건 탐색 인터랙티브 프로토타입",
        },
      },
    ],
  },
};

export function getCaseStudyPrototypeConfig(
  caseId: string,
): CaseStudyPrototypeConfig | undefined {
  return CASE_STUDY_PROTOTYPE_BY_ID[caseId];
}
