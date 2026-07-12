import type { ReactNode } from "react";

type CaseStudyContentLayoutProps = {
  sidebar?: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function CaseStudyContentLayout({
  sidebar,
  children,
  className = "",
}: CaseStudyContentLayoutProps) {
  return (
    <div
      className={`flex gap-[80px] w-full max-w-[1200px] mx-auto ${className}`.trim()}
    >
      <aside className="hidden lg:block w-[220px] shrink-0">{sidebar}</aside>
      <div className="flex-1 min-w-0 w-full max-w-[900px] flex flex-col gap-[140px]">
        {children}
      </div>
    </div>
  );
}
