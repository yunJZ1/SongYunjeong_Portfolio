type AboutEditorialEntryProps = {
  title: string;
  description: string;
  href?: string;
  meta?: string;
};

export default function AboutEditorialEntry({
  title,
  description,
  href,
  meta,
}: AboutEditorialEntryProps) {
  const content = (
    <div className="flex flex-col gap-[8px] py-[28px]">
      {meta && (
        <p className="text-[11px] font-medium text-[#a9a9a9] tracking-[0.08em] uppercase leading-none">
          {meta}
        </p>
      )}
      <h3 className="font-pretendard text-[16px] font-semibold text-[#171719] tracking-[-0.32px] leading-[1.4]">
        {title}
      </h3>
      <p className="font-pretendard text-[14px] font-normal text-[#606060] tracking-[-0.28px] leading-[1.65] max-w-[56ch] whitespace-pre-line">
        {description}
      </p>
      {href && (
        <span className="font-pretendard text-[13px] font-medium text-[#171719] tracking-[-0.26px] mt-[4px] group-hover:underline underline-offset-4">
          View →
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group block no-underline text-inherit border-0"
      >
        {content}
      </a>
    );
  }

  return content;
}

export function AboutEditorialDivider() {
  return <hr className="border-0 h-px w-full bg-[#e7e7e7]" />;
}
