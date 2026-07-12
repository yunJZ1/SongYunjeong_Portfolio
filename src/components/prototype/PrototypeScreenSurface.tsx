import type { ReactNode } from "react";
import type { PrototypeScreenConfig } from "../../types/caseStudyPrototype";
import { PROJECT01_CAPTION_CLASS } from "../case-study/project01/project01Styles";

type PrototypeScreenSurfaceProps = {
  screen: PrototypeScreenConfig;
  children?: ReactNode;
  allowFullScreen?: boolean;
};

export default function PrototypeScreenSurface({
  screen,
  children,
  allowFullScreen = false,
}: PrototypeScreenSurfaceProps) {
  if (children) {
    return <div className="h-full w-full overflow-hidden">{children}</div>;
  }

  if (screen.iframeSrc) {
    return (
      <iframe
        src={screen.iframeSrc}
        title={screen.alt ?? "Interactive prototype"}
        loading="lazy"
        allowFullScreen={allowFullScreen}
        className="block h-full w-full border-0 m-0 p-0 bg-white"
      />
    );
  }

  if (screen.imageSrc) {
    return (
      <img
        src={screen.imageSrc}
        alt={screen.alt ?? screen.placeholderLabel ?? "Prototype screen"}
        className="h-full w-full object-cover object-top"
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[#f7f7f7] px-[24px] text-center">
      <span className={PROJECT01_CAPTION_CLASS}>
        {screen.placeholderLabel ?? "Prototype Screen"}
      </span>
    </div>
  );
}
