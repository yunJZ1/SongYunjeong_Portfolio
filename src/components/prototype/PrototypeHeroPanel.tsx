import type { PrototypeScreenConfig } from "../../types/caseStudyPrototype";
import PrototypeScreen from "./PrototypeScreen";
import { PROTOTYPE_HERO_PANEL_CLASS } from "./prototypePanelStyles";

type PrototypeHeroPanelProps = {
  screen: PrototypeScreenConfig;
};

export default function PrototypeHeroPanel({ screen }: PrototypeHeroPanelProps) {
  return (
    <div className={PROTOTYPE_HERO_PANEL_CLASS}>
      <PrototypeScreen screen={screen} />
    </div>
  );
}
