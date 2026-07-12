import type { View } from "../types";
import {
  DEFAULT_CASE_STUDY_CATEGORY,
  isCaseStudyListCategory,
  type CaseStudyListCategory,
} from "./caseStudyListCategory";

const DEFAULT_VIEW: View = "home";
const DEFAULT_CASE_ID = "ad-placement";

const VALID_VIEWS: View[] = [
  "home",
  "ai-workflow",
  "case-study",
  "case-study-detail",
  "who-am-i",
];

export type PortfolioUrlState = {
  view: View;
  category: CaseStudyListCategory;
  caseId: string;
};

function normalizeView(view: string | null): View {
  if (view === "ai-workflow") {
    return "case-study";
  }

  if (view && VALID_VIEWS.includes(view as View) && view !== "ai-workflow") {
    return view as View;
  }

  return DEFAULT_VIEW;
}

function normalizeCategory(
  view: View,
  category: string | null,
  fromAiWorkflowView: boolean,
): CaseStudyListCategory {
  if (fromAiWorkflowView) {
    return "ai-workflow";
  }

  if (view === "case-study" || view === "case-study-detail") {
    if (isCaseStudyListCategory(category)) {
      return category;
    }
  }

  return DEFAULT_CASE_STUDY_CATEGORY;
}

export function readPortfolioUrlState(): PortfolioUrlState {
  const params = new URLSearchParams(window.location.search);
  const rawView = params.get("view");
  const fromAiWorkflowView = rawView === "ai-workflow";
  const view = normalizeView(rawView);
  const category = normalizeCategory(
    view,
    params.get("category"),
    fromAiWorkflowView,
  );
  const caseId = params.get("case") ?? DEFAULT_CASE_ID;

  return { view, category, caseId };
}

export function writePortfolioUrlState(
  state: PortfolioUrlState,
  options?: { replace?: boolean },
) {
  const params = new URLSearchParams();

  if (state.view !== DEFAULT_VIEW) {
    params.set("view", state.view);
  }

  if (state.view === "case-study" || state.view === "case-study-detail") {
    params.set("category", state.category);
  }

  if (state.view === "case-study-detail") {
    params.set("case", state.caseId);
  }

  const query = params.toString();
  const nextUrl = query
    ? `${window.location.pathname}?${query}`
    : window.location.pathname;

  const method = options?.replace ? "replaceState" : "pushState";
  window.history[method]({}, "", nextUrl);
}
