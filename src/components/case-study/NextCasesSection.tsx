import {
  getCuratedProjectNeighbors,
  type CuratedProjectNeighbor,
} from "../../lib/getCuratedProjectNeighbors";
import type { CaseStudyListCategory } from "../../lib/caseStudyListCategory";

type NextCasesSectionProps = {
  currentCaseId: string;
  onOpenCase: (id: string) => void;
  onNavigateToCategory: (category: CaseStudyListCategory) => void;
};

const NAV_LABEL_CLASS =
  "text-[14px] font-semibold text-[#171719] tracking-[-0.28px] leading-none";

const NAV_TITLE_CLASS =
  "text-[15px] font-medium text-[#737373] tracking-[-0.3px] leading-[1.5] transition-colors duration-200 group-hover:text-[#171719]";

const ARROW_CLASS =
  "inline-block transition-transform duration-200 text-[#737373] group-hover:text-[#171719]";

function NavButton({
  label,
  title,
  direction,
  onClick,
}: {
  label: string;
  title: string;
  direction: "previous" | "next";
  onClick: () => void;
}) {
  const isPrevious = direction === "previous";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex flex-col gap-[10px] bg-transparent border-0 p-0 cursor-pointer ${
        isPrevious ? "items-start text-left" : "items-end text-right ml-auto"
      }`}
    >
      <span className={NAV_LABEL_CLASS}>{label}</span>
      <span
        className={`flex items-center gap-[8px] ${NAV_TITLE_CLASS} ${
          isPrevious ? "" : "justify-end"
        }`}
      >
        {isPrevious && (
          <span className={`${ARROW_CLASS} group-hover:-translate-x-1`}>←</span>
        )}
        <span>{title}</span>
        {!isPrevious && (
          <span className={`${ARROW_CLASS} group-hover:translate-x-1`}>→</span>
        )}
      </span>
    </button>
  );
}

function handleNeighborClick(
  neighbor: CuratedProjectNeighbor,
  onOpenCase: (id: string) => void,
  onNavigateToCategory: (category: CaseStudyListCategory) => void,
) {
  if (neighbor.type === "project") {
    onOpenCase(neighbor.id);
    return;
  }

  onNavigateToCategory(neighbor.category);
}

export default function NextCasesSection({
  currentCaseId,
  onOpenCase,
  onNavigateToCategory,
}: NextCasesSectionProps) {
  const { previous, next } = getCuratedProjectNeighbors(currentCaseId);

  if (!previous && !next) {
    return null;
  }

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-[40px] py-[80px] md:py-[96px]">
        <div className="flex items-start justify-between gap-[48px]">
          {previous ? (
            <NavButton
              label="Previous"
              title={previous.title}
              direction="previous"
              onClick={() =>
                handleNeighborClick(previous, onOpenCase, onNavigateToCategory)
              }
            />
          ) : (
            <div className="flex-1" aria-hidden="true" />
          )}

          {next ? (
            <NavButton
              label="Next"
              title={next.title}
              direction="next"
              onClick={() =>
                handleNeighborClick(next, onOpenCase, onNavigateToCategory)
              }
            />
          ) : (
            <div className="flex-1" aria-hidden="true" />
          )}
        </div>
      </div>
    </section>
  );
}
