type SectionHeadingProps = {
  label: string;
  title?: string;
  className?: string;
};

export default function SectionHeading({
  label,
  title,
  className = "",
}: SectionHeadingProps) {
  const headingClass =
    "font-pretendard text-[36px] font-semibold text-[#171719] tracking-[-1.08px] leading-[1.3]";
  const labelClass =
    "text-[15px] font-medium text-[#a9a9a9] tracking-[-0.45px] leading-[1.65] uppercase";

  return (
    <div className={`flex flex-col gap-[14px] ${className}`}>
      {title ? (
        <>
          <p className={labelClass}>{label}</p>
          <h2 className={headingClass}>{title}</h2>
        </>
      ) : (
        <h2 className={headingClass}>{label}</h2>
      )}
    </div>
  );
}
