import { CENTERED_BODY_TRACK_CLASS } from "./CaseStudyPage";

type CaseStudyDividerProps = {
  className?: string;
};

export default function CaseStudyDivider({ className = "" }: CaseStudyDividerProps) {
  return (
    <div className={`${CENTERED_BODY_TRACK_CLASS} ${className}`.trim()}>
      <hr className="border-0 h-px w-full bg-[#e7e7e7]" />
    </div>
  );
}
