export type View =
  | "home"
  | "ai-workflow"
  | "case-study"
  | "case-study-detail"
  | "who-am-i";

export type Message = { role: "user" | "assistant"; text: string };

export type CaseStudyListCategory =
  | "product-cases"
  | "ai-workflow"
  | "product-research";

export type NavigateHandler = (
  view: View,
  category?: CaseStudyListCategory,
) => void;
