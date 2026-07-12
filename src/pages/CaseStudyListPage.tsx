import { useEffect, useState } from "react";
import CaseStudyCategoryNav from "../components/project/CaseStudyCategoryNav";
import {
  ProjectList,
  ProjectListDivider,
  ProjectListItem,
  ProjectListLayout,
} from "../components/project/ProjectList";
import { CASE_STUDIES } from "../data/caseStudies";
import {
  buildCuratedArchiveEntries,
  type CuratedArchiveEntry,
} from "../lib/buildCuratedArchiveEntries";
import type { CaseStudyListCategory } from "../lib/caseStudyListCategory";

type CaseStudyListPageProps = {
  onOpenCase: (id: string) => void;
  activeCategory: CaseStudyListCategory;
  onCategoryChange: (category: CaseStudyListCategory) => void;
};

function getCaseSummary(id: string): string | undefined {
  const study = CASE_STUDIES.find((item) => item.id === id);
  if (!study) return undefined;
  return study.summary.approach;
}

function getEntryKey(entry: CuratedArchiveEntry): string {
  return entry.id;
}

export default function CaseStudyListPage({
  onOpenCase,
  activeCategory,
  onCategoryChange,
}: CaseStudyListPageProps) {
  const [fadeIn, setFadeIn] = useState(true);
  const [entries, setEntries] = useState<CuratedArchiveEntry[]>(() =>
    buildCuratedArchiveEntries(activeCategory),
  );

  useEffect(() => {
    setFadeIn(false);
    const timer = window.setTimeout(() => {
      setEntries(buildCuratedArchiveEntries(activeCategory));
      setFadeIn(true);
    }, 180);

    return () => window.clearTimeout(timer);
  }, [activeCategory]);

  return (
    <ProjectListLayout
      label="Case Study"
      title="Selected projects"
      description="Research-driven product design across commerce AI, discovery, and validation — from problem framing to measurable outcomes."
      navigation={
        <CaseStudyCategoryNav
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />
      }
    >
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <ProjectList>
          {entries.map((entry, index) => (
            <div
              key={getEntryKey(entry)}
              className="flex flex-col gap-[64px]"
            >
              {entry.type === "curated-case" ? (
                <ProjectListItem
                  id={entry.id}
                  title={entry.title}
                  description={entry.description}
                  summary={
                    getCaseSummary(entry.id) ??
                    entry.study?.tags.join(" · ") ??
                    entry.meta
                  }
                  meta={entry.meta}
                  previewLabel="Case Study Preview"
                  ctaLabel="View case study"
                  onOpen={() => onOpenCase(entry.id)}
                />
              ) : (
                <ProjectListItem
                  id={entry.id}
                  title={entry.title}
                  description={entry.description}
                  summary={entry.workflow?.tools ?? "AI Workflow"}
                  meta="AI Workflow"
                  previewLabel="Workflow Preview"
                  ctaLabel="View workflow"
                  onOpen={() => onOpenCase(entry.id)}
                />
              )}
              {index < entries.length - 1 && <ProjectListDivider />}
            </div>
          ))}
        </ProjectList>
      </div>
    </ProjectListLayout>
  );
}
