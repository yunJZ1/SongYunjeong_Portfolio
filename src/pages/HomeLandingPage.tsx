import { useEffect } from "react";
import AIWorkflowBanner from "../components/home/AIWorkflowBanner";
import HomeFeaturedProjects from "../components/home/HomeFeaturedProjects";
import HomeHero from "../components/home/HomeHero";
import SiteFooter from "../components/home/SiteFooter";
import type { Message, NavigateHandler } from "../types";

type HomeLandingPageProps = {
  messages: Message[];
  input: string;
  onInputChange: (value: string) => void;
  onSendMessage: (text: string) => void;
  onNavigate: NavigateHandler;
  onOpenCase: (id: string) => void;
  pendingScrollTarget: string | null;
  onScrollComplete: () => void;
};

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HomeLandingPage({
  messages,
  input,
  onInputChange,
  onSendMessage,
  onNavigate,
  onOpenCase,
  pendingScrollTarget,
  onScrollComplete,
}: HomeLandingPageProps) {
  useEffect(() => {
    if (!pendingScrollTarget) return;

    const timer = window.setTimeout(() => {
      scrollToSection(pendingScrollTarget);
      onScrollComplete();
    }, 100);

    return () => window.clearTimeout(timer);
  }, [pendingScrollTarget, onScrollComplete]);

  return (
    <main className="w-full">
      <AIWorkflowBanner onNavigate={onNavigate} />

      <HomeHero
        messages={messages}
        input={input}
        onInputChange={onInputChange}
        onSendMessage={onSendMessage}
        onNavigate={onNavigate}
      />

      <div className="flex flex-col gap-[100px] md:gap-[120px] py-[40px] pb-[100px]">
        <HomeFeaturedProjects onOpenCase={onOpenCase} onNavigate={onNavigate} />
      </div>

      <SiteFooter />
    </main>
  );
}
