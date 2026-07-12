import type { PrototypeScreenConfig } from "../../types/caseStudyPrototype";
import { useUniformScale } from "../../hooks/useUniformScale";
import PrototypeScreenSurface from "./PrototypeScreenSurface";

type PrototypeDesktopScreenProps = {
  screen: PrototypeScreenConfig;
};

/** WORKSON prototype viewport — matches --desktop-width / --desktop-height */
const VIEWPORT_WIDTH = 1440;
const VIEWPORT_HEIGHT = 1024;

export default function PrototypeDesktopScreen({
  screen,
}: PrototypeDesktopScreenProps) {
  const { wrapperRef, scale } = useUniformScale(VIEWPORT_WIDTH);

  return (
    <div
      ref={wrapperRef}
      className="relative mx-auto w-full min-w-0 max-w-full shrink-0 overflow-hidden rounded-[10px] border border-[#ececec] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.06)]"
      style={{ aspectRatio: `${VIEWPORT_WIDTH} / ${VIEWPORT_HEIGHT}` }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: VIEWPORT_WIDTH,
          height: VIEWPORT_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <PrototypeScreenSurface screen={screen} allowFullScreen />
      </div>
    </div>
  );
}
