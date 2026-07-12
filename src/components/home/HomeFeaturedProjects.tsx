import FeaturedProjectsSection from "../project/FeaturedProjectsSection";
import {
  buildHomeAIWorkflowProjects,
  buildHomeProductCaseProjects,
} from "../../lib/homeFeaturedProjects";
import type { NavigateHandler } from "../../types";

type HomeFeaturedProjectsProps = {
  onOpenCase: (id: string) => void;
  onNavigate: NavigateHandler;
};

export default function HomeFeaturedProjects({
  onOpenCase,
  onNavigate,
}: HomeFeaturedProjectsProps) {
  const productCaseProjects = buildHomeProductCaseProjects(onOpenCase);
  const aiWorkflowProjects = buildHomeAIWorkflowProjects(onOpenCase);

  return (
    <>
      <FeaturedProjectsSection
        id="featured-product-cases"
        title="Case Study"
        projects={productCaseProjects}
        onMoreClick={() => onNavigate("case-study", "product-cases")}
      />
      <FeaturedProjectsSection
        id="featured-ai-workflow"
        title="AI Workflow"
        projects={aiWorkflowProjects}
        onMoreClick={() => onNavigate("case-study", "ai-workflow")}
      />
    </>
  );
}
