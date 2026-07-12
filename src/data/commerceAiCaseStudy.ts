export const CASE_STUDY_NAV = [
  {
    id: "background",
    label: "Background",
    sections: ["section-background"],
  },
  {
    id: "problem",
    label: "Problem",
    sections: ["section-problem"],
  },
  {
    id: "research",
    label: "Research",
    sections: ["section-research"],
  },
  {
    id: "insight",
    label: "Insight",
    sections: ["section-insight"],
  },
  {
    id: "design-direction",
    label: "Design Direction",
    sections: ["section-design-direction"],
  },
  {
    id: "outcome",
    label: "Outcome",
    sections: ["section-outcome"],
  },
  {
    id: "what-i-learned",
    label: "What I Learned",
    sections: ["section-what-i-learned"],
  },
  {
    id: "prototype-screens",
    label: "Prototype Screens",
    sections: ["section-prototype-screens"],
  },
] as const;

export type CaseStudyNavId = (typeof CASE_STUDY_NAV)[number]["id"];

export const ANOVA_DATA = [
  {
    type: "Social Proof (A)",
    shortLabel: "Social Proof",
    deception: 2.45,
    usefulness: 3.81,
    satisfaction: 3.32,
    strongRejection: 15.7,
    quote:
      "다른 유형보다 덜 거슬려서 선택했어요 — 근거가 있는지는 잘 모르겠지만요.",
    highlight: false,
  },
  {
    type: "Confirmshaming (B)",
    shortLabel: "Confirmshaming",
    deception: 3.33,
    usefulness: 3.25,
    satisfaction: 2.99,
    strongRejection: 41.2,
    quote: "내가 다른 걸 사면 현명하지 않다는 건가?",
    highlight: true,
  },
  {
    type: "Scarcity (C)",
    shortLabel: "Scarcity",
    deception: 2.76,
    usefulness: 3.55,
    satisfaction: 3.17,
    strongRejection: 19.6,
    quote: "할인 정보 자체가 유용했어요 — 오늘만이라는 말은 좀 부담스럽긴 했지만요.",
    highlight: false,
  },
] as const;

export const ANOVA_METRICS = [
  { key: "deception" as const, label: "기만감", max: 5, isPercent: false },
  { key: "usefulness" as const, label: "유용성", max: 5, isPercent: false },
  { key: "satisfaction" as const, label: "만족도", max: 5, isPercent: false },
  {
    key: "strongRejection" as const,
    label: "강한 거부감 비율",
    max: 100,
    isPercent: true,
  },
] as const;

export const WORD_FREQUENCY = {
  words: [
    {
      word: "현명한",
      count: 7,
      quote: "내가 다른 걸 사면 현명하지 않다는 건가?",
    },
    {
      word: "진정한",
      count: 5,
      quote: "진정한 디자이너만 고르는 것 같아서 불쾌했어요.",
    },
  ],
  totalRespondents: 22,
  citedRespondents: 12,
} as const;

export const OUTCOME_METRICS = [
  {
    id: "vui-principles",
    headline: "VUI 4원칙",
    description:
      '제품 설계팀이 컴포넌트 단위로 적용 가능한 설계 기준 — "현명한", "진정한" 같은 특정 단어까지 짚어낸 처방',
    caption: null,
    expandable: false,
  },
  {
    id: "rejection-rate",
    headline: "이탈 위험 41%→16%",
    headlineHighlight: { before: "41%", after: "16%" },
    description:
      "감정적 표현 하나를 근거 기반 문구로 바꾸는 것만으로, 강한 거부감을 느끼는 사용자 비율을 4분의 1 수준까지 줄일 수 있다는 추정 (회귀모델 기반)",
    caption: null,
    expandable: true,
    beforeValue: 41.2,
    afterValue: 15.7,
    delta: -25.5,
  },
  {
    id: "trust-risk",
    headline: "신뢰 리스크 발견",
    description:
      '사용자 3명 중 1명이 묻지 않아도 먼저 "이거 광고 아니야?"라고 의심 — 다크패턴이 UX 문제가 아니라 비즈니스 신뢰 문제임을 증명',
    caption: null,
    expandable: false,
  },
  {
    id: "publication",
    headline: "국제학술지 게재",
    description:
      "Archives of Design Research 등재로 설계 기준 검증 완료",
    caption: null,
    expandable: false,
  },
] as const;

export const OUTCOME_FOOTNOTE =
  "51명 응답 기반 회귀분석 (R²=0.44, p<.001) · 기만감 β=-0.31, 유용성 β=+0.47 · ANOVA F=8.97, p<.001";

export const OUTCOME_SUMMARY =
  "AI가 더 잘 추천할수록 사용자는 덜 생각하게 된다. 이 프로젝트는 그 구조를 41%의 이탈 위험군을 줄이는 설계 기준으로 뒤집었다.";
