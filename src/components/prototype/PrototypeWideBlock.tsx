import type { PrototypeWideBlockConfig } from "../../types/caseStudyPrototype";
import PrototypeDesktopScreen from "./PrototypeDesktopScreen";

type PrototypeWideBlockProps = {
  block: PrototypeWideBlockConfig;
};

export default function PrototypeWideBlock({ block }: PrototypeWideBlockProps) {
  return (
    <div className="w-full min-w-0">
      <PrototypeDesktopScreen screen={block.screen} />
    </div>
  );
}
