const AI_WORKFLOW_CARD_SUBTITLES: Record<string, string> = {
  "build-validate": "스스로 변화하기 위한 타임트래커, TOKI",
};

const AI_WORKFLOW_CARD_META: Record<string, string> = {
  "build-validate": "React · Cursor · Claude",
  "discover-structure": "React · Cursor · Claude",
};

export function getAIWorkflowCardSubtitle(
  projectId: string,
): string | undefined {
  return AI_WORKFLOW_CARD_SUBTITLES[projectId];
}

export function getAIWorkflowCardMeta(projectId: string): string | undefined {
  return AI_WORKFLOW_CARD_META[projectId];
}
