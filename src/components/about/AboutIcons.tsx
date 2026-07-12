type IconProps = {
  className?: string;
};

const STROKE = 1.5;

export function WorkflowIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 7h4v4H7V7ZM13 13h4v4h-4v-4ZM7 13h2M15 7h2M11 9v2M13 15v2"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 9H9a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h2M13 15h2a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2h-2"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparklesIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l1.2 3.6L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Z"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinejoin="round"
      />
      <path
        d="M5 14l.8 2.4L8 17l-2.4.8L5 20l-.8-2.4L2 17l2.4-.8L5 14ZM19 5l.6 1.8L21 7l-1.8.6L19 9l-.6-1.8L17 7l1.8-.6L19 5Z"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LayersIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 4l8 4.5-8 4.5-8-4.5L12 4Z"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinejoin="round"
      />
      <path
        d="M4 13l8 4.5L20 13M4 17l8 4.5L20 17"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SearchIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth={STROKE} />
      <path
        d="M16 16l4 4"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CodeIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 8L5 12l4 4M15 8l4 4-4 4"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AwardIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth={STROKE} />
      <path
        d="M8.5 14L7 20l5-2.5L17 20l-1.5-6"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BriefcaseIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="4"
        y="8"
        width="16"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth={STROKE}
      />
      <path
        d="M9 8V6a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v2"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
      />
      <path
        d="M4 13h16"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BookIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 5.5A2.5 2.5 0 0 1 8.5 3H18v17H8.5A2.5 2.5 0 0 0 6 22.5V5.5Z"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinejoin="round"
      />
      <path
        d="M6 5.5A2.5 2.5 0 0 0 8.5 3H18"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CompassIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth={STROKE} />
      <path
        d="M14.5 9.5L10 10l-.5 4.5 4.5-.5.5-4.5Z"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type AboutIconName =
  | "workflow"
  | "sparkles"
  | "layers"
  | "search"
  | "code"
  | "award"
  | "briefcase"
  | "book"
  | "compass";

const ICON_MAP = {
  workflow: WorkflowIcon,
  sparkles: SparklesIcon,
  layers: LayersIcon,
  search: SearchIcon,
  code: CodeIcon,
  award: AwardIcon,
  briefcase: BriefcaseIcon,
  book: BookIcon,
  compass: CompassIcon,
} as const;

export function AboutIcon({
  name,
  className,
}: {
  name: AboutIconName;
  className?: string;
}) {
  const Icon = ICON_MAP[name];
  return <Icon className={className} />;
}
