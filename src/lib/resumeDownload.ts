export const RESUME_FILE_NAME = "Resume-송윤정.pdf";

export const RESUME_PUBLIC_PATH = "/resume/Resume-Yunjeong-Song.pdf";

function getResumeFetchUrl(): string {
  return `${RESUME_PUBLIC_PATH}?t=${Date.now()}`;
}

export async function downloadResume(): Promise<void> {
  const response = await fetch(getResumeFetchUrl(), {
    cache: "no-store",
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to download resume (${response.status})`);
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("pdf")) {
    throw new Error("Resume file is unavailable. Please try again.");
  }

  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);

  try {
    const anchor = document.createElement("a");
    anchor.href = objectUrl;
    anchor.download = RESUME_FILE_NAME;
    anchor.rel = "noopener noreferrer";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}
