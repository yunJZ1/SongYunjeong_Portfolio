import type { CaseStudyPillLabel } from "../../data/caseStudyCardLabels";
import PillBadge from "./PillBadge";

type PillBadgeGroupProps = {
  labels: CaseStudyPillLabel[];
};

export default function PillBadgeGroup({ labels }: PillBadgeGroupProps) {
  if (labels.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-[8px]">
      {labels.map((item, index) => (
        <PillBadge
          key={`${item.variant}-${item.label}-${index}`}
          variant={item.variant}
          label={item.label}
        />
      ))}
    </div>
  );
}
