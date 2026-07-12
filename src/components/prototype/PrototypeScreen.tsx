import type { PrototypeScreenConfig } from "../../types/caseStudyPrototype";
import { useUniformScale } from "../../hooks/useUniformScale";
import PrototypeScreenSurface from "./PrototypeScreenSurface";

type PrototypeScreenSize = "hero" | "compact";

type PrototypeScreenProps = {
  screen: PrototypeScreenConfig;
  size?: PrototypeScreenSize;
};

/** WORKSON prototype viewport — matches --mobile-max-width / --mobile-min-height */
const VIEWPORT_WIDTH = 420;
const VIEWPORT_HEIGHT = 874;

const SIZE_CLASS: Record<PrototypeScreenSize, string> = {
  hero: "w-full max-w-[min(100%,320px)] md:max-w-[min(100%,360px)]",
  compact: "w-full max-w-[min(100%,260px)]",
};

export default function PrototypeScreen({
  screen,
  size = "hero",
}: PrototypeScreenProps) {
  const { wrapperRef, scale } = useUniformScale(VIEWPORT_WIDTH);

  return (
    <div
      ref={wrapperRef}
      className={`relative mx-auto shrink-0 overflow-hidden rounded-[28px] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.06)] ${SIZE_CLASS[size]}`}
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
        <PrototypeScreenSurface screen={screen} />
      </div>
    </div>
  );
}
