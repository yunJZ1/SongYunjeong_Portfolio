import type { AboutIconName } from "./AboutIcons";
import { AboutIcon } from "./AboutIcons";

type AboutStrengthBlockProps = {
  icon: AboutIconName;
  title: string;
  description: string;
  emphasized?: boolean;
};

export default function AboutStrengthBlock({
  icon,
  title,
  description,
  emphasized = false,
}: AboutStrengthBlockProps) {
  return (
    <div
      className={[
        "flex items-start gap-[16px] px-[20px] py-[18px] rounded-[8px] border bg-white transition-colors",
        emphasized
          ? "border-[#171719]"
          : "border-[#e4e4e4] hover:bg-[#fafafa] hover:border-[#d4d4d4]",
      ].join(" ")}
    >
      <span className="shrink-0 text-[#171719] pt-[2px]">
        <AboutIcon name={icon} className="w-5 h-5" />
      </span>
      <div className="flex flex-col gap-[6px] min-w-0">
        <h3 className="font-pretendard text-[15px] font-semibold text-[#171719] tracking-[-0.3px] leading-[1.4]">
          {title}
        </h3>
        <p className="font-pretendard text-[14px] font-normal text-[#606060] tracking-[-0.28px] leading-[1.65]">
          {description}
        </p>
      </div>
    </div>
  );
}
