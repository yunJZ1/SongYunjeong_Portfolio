export const RESUME_FILE_NAME = "Resume-송윤정.pdf";

const RESUME_PUBLIC_PATH = `/resume/${encodeURIComponent(RESUME_FILE_NAME)}`;

export function downloadResume(): void {
  const anchor = document.createElement("a");
  anchor.href = RESUME_PUBLIC_PATH;
  anchor.download = RESUME_FILE_NAME;
  anchor.rel = "noopener noreferrer";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
