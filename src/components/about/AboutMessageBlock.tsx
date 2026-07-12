type AboutMessageBlockProps = {
  variant: "philosophy" | "contact";
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function AboutMessageBlock({
  variant,
  title,
  body,
  ctaLabel,
  ctaHref,
}: AboutMessageBlockProps) {
  const isPhilosophy = variant === "philosophy";

  return (
    <div
      className={[
        "flex flex-col gap-[14px] px-[24px] py-[24px] rounded-[8px]",
        isPhilosophy
          ? "bg-[#f7f7f7] border border-[#efefef]"
          : "bg-white border border-[#e4e4e4]",
      ].join(" ")}
    >
      <h3 className="font-pretendard text-[18px] font-semibold text-[#171719] tracking-[-0.36px] leading-[1.35]">
        {title}
      </h3>
      <p className="font-pretendard text-[14px] font-normal text-[#606060] tracking-[-0.28px] leading-[1.7] max-w-[38ch]">
        {body}
      </p>
      {ctaLabel && ctaHref && (
        <a
          href={ctaHref}
          className="self-start mt-[4px] px-[18px] py-[10px] bg-[#171719] text-white text-[13px] font-medium tracking-[-0.26px] rounded-[6px] hover:bg-[#404040] transition-colors no-underline w-full sm:w-auto text-center"
        >
          {ctaLabel}
        </a>
      )}
    </div>
  );
}
