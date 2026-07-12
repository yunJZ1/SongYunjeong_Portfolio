export type Publication = {
  id: string;
  title: string;
  category: string;
  publishedDate: string;
  href: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    id: "adr-2025",
    title:
      "더 나은 제품 경험을 위해, AI가 어떻게 추천해야할까? — 커머스 AI 추천 인터페이스 설계 연구",
    category: "Research Paper",
    publishedDate: "Jun 2025",
    href: "#",
  },
  {
    id: "scopus-thesis",
    title:
      "AI 추천 인터페이스의 표현 방식이 사용자 신뢰와 의사결정에 미치는 영향",
    category: "Master's Thesis",
    publishedDate: "2024",
    href: "#",
  },
  {
    id: "design-award",
    title: "AI Recommendation UX Principle — 설계 기준 도출",
    category: "Design Research",
    publishedDate: "2025",
    href: "#",
  },
  {
    id: "conference",
    title: "Dark Pattern 유형화를 통한 커머스 VUI 신뢰 설계",
    category: "Conference",
    publishedDate: "2024",
    href: "#",
  },
];
