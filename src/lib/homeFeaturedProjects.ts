import type { FeaturedProjectCardData } from "../components/project/FeaturedProjectCard";
import { getHomeFeaturedCardLabels } from "../data/caseStudyCardLabels";
import { getAIWorkflowCardSubtitle } from "../data/aiWorkflowCardMeta";
import { getAIWorkflowThumbnail } from "../data/aiWorkflowThumbnails";
import { getProductCaseThumbnail } from "../data/productCaseThumbnails";
import {
  HOME_AI_WORKFLOW_PROJECTS,
  HOME_CASE_STUDY_PROJECTS,
  type CuratedProjectDisplay,
} from "../data/curatedProjectDisplay";
import { HOME_AI_WORKFLOW_CARDS } from "../data/homeAiWorkflow";

const COVER_GRADIENTS = [
  "from-[#1a1a2e] to-[#16213e]",
  "from-[#2d3436] to-[#636e72]",
  "from-[#0f3460] to-[#533483]",
  "from-[#1b4332] to-[#2d6a4f]",
  "from-[#3d155f] to-[#7b2cbf]",
];

const TBU_WORKFLOW_CARD_ID = "build-validate";

function mapCuratedToFeaturedCard(
  project: CuratedProjectDisplay,
  index: number,
  section: "product-cases" | "ai-workflow",
  onOpenCase?: (id: string) => void,
): FeaturedProjectCardData {
  const workflow = HOME_AI_WORKFLOW_CARDS.find((card) => card.id === project.id);
  const isTbuWorkflow =
    section === "ai-workflow" && project.id === TBU_WORKFLOW_CARD_ID;
  const coverImageSrc =
    section === "product-cases"
      ? getProductCaseThumbnail(project.id)
      : getAIWorkflowThumbnail(project.id);

  return {
    id: project.id,
    title: project.title,
    category: project.category ?? "Case Study",
    year: project.year,
    description:
      getAIWorkflowCardSubtitle(project.id) ?? project.description,
    labels: getHomeFeaturedCardLabels(section, project.id),
    coverImageSrc,
    coverGradient:
      workflow?.gradient ??
      COVER_GRADIENTS[index % COVER_GRADIENTS.length],
    onClick:
      onOpenCase && !isTbuWorkflow ? () => onOpenCase(project.id) : undefined,
  };
}

export function buildHomeProductCaseProjects(
  onOpenCase: (id: string) => void,
): FeaturedProjectCardData[] {
  return HOME_CASE_STUDY_PROJECTS.map((project, index) =>
    mapCuratedToFeaturedCard(project, index, "product-cases", onOpenCase),
  );
}

export function buildHomeAIWorkflowProjects(
  onOpenCase: (id: string) => void,
): FeaturedProjectCardData[] {
  return HOME_AI_WORKFLOW_PROJECTS.map((project, index) =>
    mapCuratedToFeaturedCard(project, index, "ai-workflow", onOpenCase),
  );
}
