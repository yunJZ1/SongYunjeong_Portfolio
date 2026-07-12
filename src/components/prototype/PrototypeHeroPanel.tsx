import type { PrototypeScreenConfig } from "../../types/caseStudyPrototype";
import PrototypeScreen from "./PrototypeScreen";

type PrototypeHeroPanelProps = {
  screen: PrototypeScreenConfig;
};

export default function PrototypeHeroPanel({ screen }: PrototypeHeroPanelProps) {
  return (
    <div className="flex min-h-[420px] w-full items-center justify-center rounded-[20px] bg-[#f0f0f0] px-[32px] py-[48px] md:min-h-[520px] md:px-[48px] md:py-[64px] lg:min-h-[600px] lg:px-[64px] lg:py-[72px]">
      <PrototypeScreen screen={screen} />
    </div>
  );
}
