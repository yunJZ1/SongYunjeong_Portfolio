export type CuratedProjectDisplay = {
  id: string;
  title: string;
  description: string;
  category?: string;
  year?: string;
};

export const HOME_CASE_STUDY_PROJECTS: CuratedProjectDisplay[] = [
  {
    id: "ad-placement",
    title: "더 나은 제품 경험을 위해 AI는 어떻게 추천해야할까?",
    description:
      "전환을 높이고 신뢰 리스크를 줄이는 커머스 AI 추천 인터페이스 설계",
    category: "Interaction Design & Research",
    year: "2026",
  },
  {
    id: "case-04-1",
    title: "모호한 AI 니즈, 어떤 제품 전략으로 설계할 수 있을까?",
    description:
      "Discovery Research를 제품 전략과 UX 방향으로 연결한 프로젝트",
    category: "Commercial Project",
    year: "2026",
  },
  {
    id: "case-04-2",
    title: "접근성 사용자에게 정말 필요한 경험은 어떤것일까?",
    description:
      "접근성 사용성 평가를 통해 제품의 사용 가능성과 개선 우선순위를 검증한 프로젝트",
    category: "Commercial Project",
    year: "2026",
  },
];

export const HOME_AI_WORKFLOW_PROJECTS: CuratedProjectDisplay[] = [
  {
    id: "build-validate",
    title: "서비스 기획부터 출시까지, 0→1 with Cursor",
    description: "",
    category: "AI Workflow",
  },
  {
    id: "discover-structure",
    title: "여러 조건을 고려해 최선의 일정 조건을 잡으려면?",
    description: "",
    category: "AI Workflow",
  },
];

export const CASE_STUDY_PRODUCT_CASE_PROJECTS: CuratedProjectDisplay[] =
  HOME_CASE_STUDY_PROJECTS;

export const CASE_STUDY_AI_WORKFLOW_PROJECTS: CuratedProjectDisplay[] =
  HOME_AI_WORKFLOW_PROJECTS;

export const CASE_STUDY_PRODUCT_RESEARCH_PROJECTS: CuratedProjectDisplay[] = [
  {
    id: "case-02",
    title:
      "복잡한 치료 여정을 구조화한 환자 중심 커뮤니케이션 플랫폼 PCCP",
    description: "",
    category: "Product Research",
  },
  {
    id: "case-03",
    title: "사용자 공감을 리텐션으로 확장할, 밀키트 커머스 플랫폼 CHE-KIT",
    description: "",
    category: "Product Research",
  },
  {
    id: "ad-placement",
    title: "도심형 MFC 환경에서 피킹과 배송을 하나로 연결한 로보틱스 UX",
    description: "",
    category: "Product Research",
  },
  {
    id: "case-04-1",
    title: "서비스 로봇의 의인화와 마이크로 인터랙션은 어떻게 설계해야 할까?",
    description: "",
    category: "Product Research",
  },
  {
    id: "case-04-2",
    title: "미래 시나리오 기반 개인 맞춤형 헬스케어 플랫폼 ALL:ganoid",
    description: "",
    category: "Product Research",
  },
];
