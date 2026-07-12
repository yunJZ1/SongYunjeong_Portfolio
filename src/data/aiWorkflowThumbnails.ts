import thumbnail01 from "../assets/ai-workflow-thumbnails/thumbnail-01.png";
import thumbnail02 from "../assets/ai-workflow-thumbnails/thumbnail-02.png";

import { CASE_STUDY_AI_WORKFLOW_PROJECTS } from "./curatedProjectDisplay";

// Source images: docs/projects/case study/Thumnail/[AI Workflow] #1–#2/Thumbnail.png

const AI_WORKFLOW_THUMBNAILS_BY_INDEX = [thumbnail01, thumbnail02] as const;

const AI_WORKFLOW_THUMBNAIL_BY_ID = Object.fromEntries(
  CASE_STUDY_AI_WORKFLOW_PROJECTS.map((project, index) => [
    project.id,
    AI_WORKFLOW_THUMBNAILS_BY_INDEX[index],
  ]),
);

export function getAIWorkflowThumbnail(caseId: string): string | undefined {
  return AI_WORKFLOW_THUMBNAIL_BY_ID[caseId];
}
