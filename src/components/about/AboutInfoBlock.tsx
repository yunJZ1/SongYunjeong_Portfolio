import type { AboutIconName } from "./AboutIcons";
import { AboutIcon } from "./AboutIcons";

type AboutInfoBlockProps = {
  icon: AboutIconName;
  title: string;
  description: string;
};

export default function AboutInfoBlock({
  icon,
  title,
  description,
}: AboutInfoBlockProps) {
  return (
    <div className="group flex flex-col justify-between min-h-[200px] px-[24px] py-[24px] border border-[#e4e4e4] rounded-[12px] bg-white hover:border-[#d4d4d4] hover:bg-[#fafafa] transition-colors">
      <div className="flex flex-col gap-[16px]">
        <span className="inline-flex items-center justify-center w-[36px] h-[36px] rounded-[8px] border border-[#e4e4e4] bg-[#fafafa] text-[#606060]">
          <AboutIcon name={icon} className="w-[18px] h-[18px]" />
        </span>
        <div className="flex flex-col gap-[8px]">
          <h3 className="font-pretendard text-[16px] font-semibold text-[#171719] tracking-[-0.32px] leading-[1.35]">
            {title}
          </h3>
          <p className="font-pretendard text-[14px] font-normal text-[#606060] tracking-[-0.28px] leading-[1.65] max-w-[36ch]">
            {description}
          </p>
        </div>
      </div>
      <span
        className="self-end mt-[20px] text-[16px] text-[#a9a9a9] group-hover:text-[#171719] transition-colors"
        aria-hidden
      >
        →
      </span>
    </div>
  );
}
