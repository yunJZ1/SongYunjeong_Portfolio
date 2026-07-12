import { useCallback, useEffect, useState } from "react";
import AppLayout from "./components/AppLayout";
import { CHIP_RESPONSES, FALLBACK_RESPONSE } from "./components/ChipButtons";
import { HOME_CHIP_RESPONSES } from "./components/home/HomeHero";
import CaseStudyDetailPage from "./pages/CaseStudyDetailPage";
import CaseStudyListPage from "./pages/CaseStudyListPage";
import HomeLandingPage from "./pages/HomeLandingPage";
import WhoAmIPage from "./pages/WhoAmIPage";
import { downloadResume } from "./lib/resumeDownload";
import type { CaseStudyListCategory } from "./lib/caseStudyListCategory";
import {
  readPortfolioUrlState,
  writePortfolioUrlState,
} from "./lib/portfolioUrl";
import type { Message, View } from "./types";

function resolveAssistantResponse(text: string): string {
  return (
    HOME_CHIP_RESPONSES[text] ?? CHIP_RESPONSES[text] ?? FALLBACK_RESPONSE
  );
}

export default function HomePage() {
  const initialUrlState = readPortfolioUrlState();
  const [view, setView] = useState<View>(initialUrlState.view);
  const [caseStudyCategory, setCaseStudyCategory] =
    useState<CaseStudyListCategory>(initialUrlState.category);
  const [selectedCaseId, setSelectedCaseId] = useState(initialUrlState.caseId);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [pendingScrollTarget, setPendingScrollTarget] = useState<string | null>(
    null,
  );

  const syncUrl = useCallback(
    (
      nextView: View,
      options?: {
        category?: CaseStudyListCategory;
        caseId?: string;
        replace?: boolean;
      },
    ) => {
      writePortfolioUrlState(
        {
          view: nextView,
          category: options?.category ?? caseStudyCategory,
          caseId: options?.caseId ?? selectedCaseId,
        },
        { replace: options?.replace },
      );
    },
    [caseStudyCategory, selectedCaseId],
  );

  useEffect(() => {
    const handlePopState = () => {
      const state = readPortfolioUrlState();
      setView(state.view);
      setCaseStudyCategory(state.category);
      setSelectedCaseId(state.caseId);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const assistantResponse = resolveAssistantResponse(trimmed);

    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      { role: "assistant", text: assistantResponse },
    ]);

    if (trimmed === "Resume") {
      window.setTimeout(downloadResume, 600);
    }
  }

  function handleNavigate(
    nextView: View,
    category?: CaseStudyListCategory,
  ) {
    if (nextView === "ai-workflow") {
      setView("case-study");
      setCaseStudyCategory("ai-workflow");
      syncUrl("case-study", { category: "ai-workflow" });
      return;
    }

    if (nextView === "case-study") {
      const nextCategory = category ?? "product-cases";
      setView("case-study");
      setCaseStudyCategory(nextCategory);
      syncUrl("case-study", { category: nextCategory });
      return;
    }

    setView(nextView);
    syncUrl(nextView);
  }

  function handleOpenCase(id: string) {
    setSelectedCaseId(id);
    setView("case-study-detail");
    syncUrl("case-study-detail", { caseId: id });
  }

  function handlePortfolioCaseStudy() {
    setView("case-study");
    setCaseStudyCategory("product-cases");
    syncUrl("case-study", { category: "product-cases" });
  }

  function handleCaseStudyCategoryChange(category: CaseStudyListCategory) {
    setCaseStudyCategory(category);
    syncUrl("case-study", { category });
  }

  function handleNavigateToCaseStudyCategory(category: CaseStudyListCategory) {
    setView("case-study");
    setCaseStudyCategory(category);
    syncUrl("case-study", { category });
  }

  const handleScrollComplete = useCallback(() => {
    setPendingScrollTarget(null);
  }, []);

  function renderMain() {
    switch (view) {
      case "home":
        return (
          <HomeLandingPage
            messages={messages}
            input={input}
            onInputChange={setInput}
            onSendMessage={sendMessage}
            onNavigate={handleNavigate}
            onOpenCase={handleOpenCase}
            pendingScrollTarget={pendingScrollTarget}
            onScrollComplete={handleScrollComplete}
          />
        );
      case "case-study":
        return (
          <CaseStudyListPage
            onOpenCase={handleOpenCase}
            activeCategory={caseStudyCategory}
            onCategoryChange={handleCaseStudyCategoryChange}
          />
        );
      case "case-study-detail":
        return (
          <CaseStudyDetailPage
            caseId={selectedCaseId}
            onOpenCase={handleOpenCase}
            onNavigateToCategory={handleNavigateToCaseStudyCategory}
          />
        );
      case "who-am-i":
        return <WhoAmIPage />;
      default:
        return null;
    }
  }

  return (
    <AppLayout
      activeView={view}
      onNavigate={handleNavigate}
      onPortfolioCaseStudy={handlePortfolioCaseStudy}
    >
      {renderMain()}
    </AppLayout>
  );
}
