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
import {
  getAIWorkflowCardMeta,
  getAIWorkflowCardSubtitle,
} from "../data/aiWorkflowCardMeta";
import { getCaseStudyCardLabels } from "../data/caseStudyCardLabels";
import { getProductResearchFieldMeta } from "../data/productResearchFieldMeta";
import { getProductResearchPublicationLink } from "../data/productResearchPublicationLinks";
import { getProductCaseThumbnail } from "../data/productCaseThumbnails";
import { getAIWorkflowThumbnail } from "../data/aiWorkflowThumbnails";
import { getProductResearchThumbnail } from "../data/productResearchThumbnails";
import type { CaseStudyListCategory } from "../lib/caseStudyListCategory";
import TbuBadge from "../components/project/TbuBadge";

const TBU_WORKFLOW_CARD_ID = "build-validate";

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
                  fieldMeta={
                    activeCategory === "product-research"
                      ? getProductResearchFieldMeta(entry.id)
                      : undefined
                  }
                  summary={
                    activeCategory === "product-research"
                      ? undefined
                      : getCaseSummary(entry.id) ??
                        entry.study?.tags.join(" · ") ??
                        undefined
                  }
                  labels={getCaseStudyCardLabels(activeCategory, entry.id)}
                  previewImageSrc={
                    activeCategory === "product-cases"
                      ? getProductCaseThumbnail(entry.id)
                      : activeCategory === "product-research"
                        ? getProductResearchThumbnail(entry.id)
                        : undefined
                  }
                  previewLabel="Case Study Preview"
                  ctaLabel={
                    activeCategory === "product-research"
                      ? "View publication ↗"
                      : "View case study"
                  }
                  ctaHref={
                    activeCategory === "product-research"
                      ? getProductResearchPublicationLink(entry.id)
                      : undefined
                  }
                  onOpen={
                    activeCategory === "product-research"
                      ? undefined
                      : () => onOpenCase(entry.id)
                  }
                />
              ) : (
                <ProjectListItem
                  id={entry.id}
                  title={entry.title}
                  description={
                    getAIWorkflowCardSubtitle(entry.id) ?? entry.description
                  }
                  summary={getAIWorkflowCardMeta(entry.id) ?? "AI Workflow"}
                  labels={getCaseStudyCardLabels(activeCategory, entry.id)}
                  previewImageSrc={getAIWorkflowThumbnail(entry.id)}
                  previewLabel="Workflow Preview"
                  ctaLabel={
                    entry.id === TBU_WORKFLOW_CARD_ID
                      ? undefined
                      : "View workflow"
                  }
                  footer={
                    entry.id === TBU_WORKFLOW_CARD_ID ? <TbuBadge /> : undefined
                  }
                  onOpen={
                    entry.id === TBU_WORKFLOW_CARD_ID
                      ? undefined
                      : () => onOpenCase(entry.id)
                  }
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
