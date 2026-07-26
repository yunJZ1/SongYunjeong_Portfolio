export const RESUME_FILE_NAME = "Resume-송윤정.pdf";

export const RESUME_DOWNLOAD_HREF = "/resume/Resume-송윤정.pdf";

export function downloadResume(): void {
  const anchor = document.createElement("a");
  anchor.href = RESUME_DOWNLOAD_HREF;
  anchor.download = RESUME_FILE_NAME;
  anchor.rel = "noopener noreferrer";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
