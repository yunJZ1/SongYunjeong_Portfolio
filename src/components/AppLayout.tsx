import { useState } from "react";
import { downloadResume } from "../lib/resumeDownload";
import SiteFooter from "./home/SiteFooter";
import type { View } from "../types";

const UTILITY_NAV: { label: string; href?: string; onClick?: () => void }[] = [
  { label: "Resume", onClick: downloadResume },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yunjeongsong" },
];

function UtilityNavItem({
  item,
  className,
  onNavigate,
}: {
  item: (typeof UTILITY_NAV)[number];
  className: string;
  onNavigate?: () => void;
}) {
  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={`${className} no-underline hover:underline`}
      >
        {item.label}
      </a>
    );
  }

  if (item.onClick) {
    return (
      <button
        type="button"
        onClick={() => {
          item.onClick?.();
          onNavigate?.();
        }}
        className={className}
      >
        {item.label}
      </button>
    );
  }

  return (
    <button type="button" onClick={onNavigate} className={className}>
      {item.label}
    </button>
  );
}

const PRIMARY_NAV: { label: string; view?: View; action?: "case-study" }[] = [
  { label: "About Me", view: "who-am-i" },
  { label: "Case Study", action: "case-study" },
];

const NAV_LINK =
  "text-[14px] font-medium text-[#606060] tracking-[-0.14px] cursor-pointer hover:text-[#171719] hover:underline underline-offset-4 transition-colors bg-transparent border-0 p-0";

const NAV_LINK_ACTIVE =
  "text-[14px] font-medium text-[#171719] tracking-[-0.14px] cursor-pointer underline underline-offset-4 bg-transparent border-0 p-0";

type AppLayoutProps = {
  activeView: View;
  onNavigate: (view: View) => void;
  onPortfolioCaseStudy: () => void;
  children: React.ReactNode;
};

export default function AppLayout({
  activeView,
  onNavigate,
  onPortfolioCaseStudy,
  children,
}: AppLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isAboutMeActive = activeView === "who-am-i";
  const isCaseStudyActive =
    activeView === "case-study" || activeView === "case-study-detail";

  function isNavActive(item: (typeof PRIMARY_NAV)[number]): boolean {
    if (item.view === "who-am-i") return isAboutMeActive;
    if (item.action === "case-study") return isCaseStudyActive;
    return false;
  }

  function handleNavClick(item: (typeof PRIMARY_NAV)[number]) {
    setMobileOpen(false);
    if (item.view) {
      onNavigate(item.view);
      return;
    }
    if (item.action === "case-study") onPortfolioCaseStudy();
  }

  return (
    <div className="w-full bg-white font-sans flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 shrink-0 h-[64px] flex items-center justify-between px-[24px] md:px-[40px] bg-white">
        <div className="flex items-center gap-[32px] md:gap-[48px] min-w-0">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onNavigate("home");
            }}
            className="shrink-0 text-[13px] font-semibold text-[#171719] tracking-[0.08em] uppercase leading-none select-none bg-transparent border-0 p-0 cursor-pointer hover:opacity-70 transition-opacity"
          >
            YUNJEONG SONG
          </button>

          <nav
            className="hidden md:flex items-center gap-[28px]"
            aria-label="Portfolio navigation"
          >
            {PRIMARY_NAV.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item)}
                className={isNavActive(item) ? NAV_LINK_ACTIVE : NAV_LINK}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-[16px] md:gap-[28px] shrink-0">
          <nav className="hidden md:flex items-center gap-[28px]">
            {UTILITY_NAV.map((item) => (
              <UtilityNavItem key={item.label} item={item} className={NAV_LINK} />
            ))}
          </nav>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="md:hidden flex flex-col justify-center items-center w-[36px] h-[36px] gap-[5px] bg-transparent border-0 cursor-pointer p-0"
          >
            <span
              className={`block w-[18px] h-[1.5px] bg-[#171719] transition-transform ${mobileOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
            />
            <span
              className={`block w-[18px] h-[1.5px] bg-[#171719] transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-[18px] h-[1.5px] bg-[#171719] transition-transform ${mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="md:hidden sticky top-[64px] z-40 bg-white px-[24px] py-[20px] flex flex-col gap-[4px] shadow-[0_1px_0_#e7e7e7]">
          {PRIMARY_NAV.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item)}
              className={`text-left py-[10px] ${isNavActive(item) ? NAV_LINK_ACTIVE : NAV_LINK}`}
            >
              {item.label}
            </button>
          ))}
          <div className="h-px w-full bg-[#e7e7e7] my-[8px]" />
          {UTILITY_NAV.map((item) => (
            <UtilityNavItem
              key={item.label}
              item={item}
              className={`text-left py-[10px] ${NAV_LINK}`}
              onNavigate={() => setMobileOpen(false)}
            />
          ))}
        </div>
      )}

      <div className="flex-1 w-full">{children}</div>
      <SiteFooter />
    </div>
  );
}
