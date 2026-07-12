import type { ReactNode } from "react";
import AdPlacementDarkPatternCards from "../components/case-study/ad-placement/AdPlacementDarkPatternCards";
import AdPlacementExperimentResultsChart from "../components/case-study/ad-placement/AdPlacementExperimentResultsChart";
import AdPlacementInsightShiftDiagram from "../components/case-study/ad-placement/AdPlacementInsightShiftDiagram";
import DiscoverStructureCoordinationShift from "../components/case-study/discover-structure/DiscoverStructureCoordinationShift";
import DiscoverStructureDesignRationale from "../components/case-study/discover-structure/DiscoverStructureDesignRationale";
import DiscoverStructureMeetingFlow from "../components/case-study/discover-structure/DiscoverStructureMeetingFlow";
import DiscoverStructureProblemCards from "../components/case-study/discover-structure/DiscoverStructureProblemCards";

const CASE_STUDY_EMBEDS: Record<string, Record<string, ReactNode>> = {
  "ad-placement": {
    "dark-pattern-cards": <AdPlacementDarkPatternCards />,
    "experiment-results": <AdPlacementExperimentResultsChart />,
    "insight-shift": <AdPlacementInsightShiftDiagram />,
  },
  "discover-structure": {
    "problem-constraints": <DiscoverStructureProblemCards />,
    "coordination-shift": <DiscoverStructureCoordinationShift />,
    "meeting-flow": <DiscoverStructureMeetingFlow />,
    "design-rationale": <DiscoverStructureDesignRationale />,
  },
};

export function getCaseStudyContentEmbed(
  caseId: string,
  embedId: string,
): ReactNode | undefined {
  return CASE_STUDY_EMBEDS[caseId]?.[embedId];
}
