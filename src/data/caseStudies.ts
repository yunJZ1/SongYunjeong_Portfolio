export type CaseStudy = {
  id: string;
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
  subtitle: string;
  tags: string[];
  summary: {
    problem: string;
    approach: string;
    outcome: string;
  };
  metrics: { value: string; label: string }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "ad-placement",
    title: "Ad Placement System UXUI",
    desc: "Redesigned ad injection logic using scroll-depth heuristics and A/B-tested native placements, increasing CTR by 34% without hurting retention.",
    stat: "11→1",
    statLabel: "published components",
    subtitle:
      "커머스 환경에서 음성 AI 다크패턴 사례를 유형화하고 — 사용자 51명 검증을 통해 사용자 의사결정을 지원할 인터페이스 디자인을 특정했습니다.",
    tags: [
      "2023.03 - 2024.08・2 months / 2025.06 Published",
      "Own Major Cases",
      "B2C ・Commerce UX/UI",
      "Figma ・Claude",
    ],
    summary: {
      problem:
        "Native sidebar ad units had low CTR and disrupted reading flow. Users reported ads felt intrusive and disconnected from content.",
      approach:
        "Mapped scroll-depth patterns, prototyped in-feed native placements, and ran A/B tests across three content verticals before full rollout.",
      outcome:
        "CTR increased 34% with no measurable drop in 7-day retention. Component library consolidated from 11 variants to 1 shared system.",
    },
    metrics: [
      { value: "+80%", label: "page views" },
      { value: "+80%", label: "MAU" },
      { value: "+27pts", label: "Usability" },
    ],
  },
  {
    id: "job-detail",
    title: "Job Detail Page Redesign",
    desc: "Restructured information hierarchy and reduced cognitive load across the job detail screen, leading to an 18% drop-off reduction post-launch.",
    stat: "−18%",
    statLabel: "drop-off after launch",
    subtitle:
      "채용 상세 페이지의 정보 구조를 재설계하고, 지원 전환율을 높이는 UX 개선 프로젝트입니다.",
    tags: [
      "2022.06 - 2023.01・7 months",
      "Own Major Cases",
      "B2C ・Recruitment",
      "Figma",
    ],
    summary: {
      problem:
        "Job seekers dropped off before applying due to dense layouts and unclear CTAs on mobile.",
      approach:
        "Conducted usability tests, restructured content hierarchy, and simplified the apply flow to three visible steps.",
      outcome:
        "Post-launch drop-off reduced 18%. Apply button visibility and task completion scores improved significantly.",
    },
    metrics: [
      { value: "−18%", label: "drop-off" },
      { value: "+24%", label: "apply rate" },
      { value: "+12pts", label: "SUS score" },
    ],
  },
  {
    id: "ai-health",
    title: "AI Health Consultation Flow",
    desc: "Designed a conversational UX for health check-in kiosks serving 50+ clinics, focused on accessibility and low-literacy users.",
    stat: "50+",
    statLabel: "clinics deployed",
    subtitle:
      "접근성과 저문해력 사용자를 고려한 AI 기반 건강 상담 키오스크 대화형 UX 설계 프로젝트입니다.",
    tags: [
      "2023.09 - 2024.03・6 months",
      "Own Major Cases",
      "B2B ・Health-tech",
      "Figma ・Claude",
    ],
    summary: {
      problem:
        "Clinic kiosks had high abandonment rates among elderly and low-literacy patients unfamiliar with touch interfaces.",
      approach:
        "Designed voice-first conversational flows with plain language, large touch targets, and progressive disclosure.",
      outcome:
        "Deployed across 50+ clinics with 92% task completion rate and positive accessibility audit results.",
    },
    metrics: [
      { value: "50+", label: "clinics" },
      { value: "92%", label: "completion" },
      { value: "+35pts", label: "accessibility" },
    ],
  },
];

export function getAdjacentCaseStudy(
  caseId: string,
): CaseStudy | undefined {
  const index = CASE_STUDIES.findIndex((study) => study.id === caseId);
  if (index === -1) return undefined;

  return CASE_STUDIES[index + 1] ?? CASE_STUDIES[index - 1];
}

export const DETAIL_SECTIONS = [
  "Summary",
  "Problem",
  "Approach",
  "Research",
  "Workflow",
  "Design",
  "Outcome",
  "Try It",
] as const;
