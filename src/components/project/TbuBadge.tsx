function LockIcon() {
  return (
    <svg
      className="h-[12px] w-[12px] shrink-0"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
    >
      <path
        d="M3.5 5V4a2.5 2.5 0 0 1 5 0v1"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <rect
        x="2.5"
        y="5"
        width="7"
        height="5"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export default function TbuBadge() {
  return (
    <span className="inline-flex items-center gap-[6px] self-start rounded-full bg-[#E8F2FF] px-[12px] py-[6px] text-[13px] font-semibold tracking-[-0.26px] text-[#0071E3] leading-none">
      <LockIcon />
      TBU
    </span>
  );
}
