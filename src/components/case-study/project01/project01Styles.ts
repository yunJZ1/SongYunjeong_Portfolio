/** Shared layout + typography tokens for Project 01 editorial document */

export const PROJECT01_TRACK_CLASS = "w-full max-w-[1200px] mx-auto";

export const PROJECT01_SIDEBAR_CLASS = "w-[180px]";

export const PROJECT01_LAYOUT_GAP_CLASS = "gap-[40px] lg:gap-[48px]";

export const PROJECT01_CONTENT_CLASS = "flex-1 min-w-0 w-full";

export const PROJECT01_SECTION_LABEL_CLASS =
  "text-[12px] font-medium text-[#a9a9a9] tracking-[0.08em] uppercase leading-none";

/** Spacing between major body sections (after Intro) */
export const PROJECT01_BLOCK_GAP_CLASS = "mt-[96px] md:mt-[108px]";

/** Spacing between subsections inside Intro */
export const PROJECT01_INTRO_GAP_CLASS = "mt-[64px] md:mt-[72px]";

export const PROJECT01_DIVIDER_CLASS = "border-0 h-px w-full bg-[#e5e5e5]";

export const PROJECT01_LABEL_CONTENT_GAP_CLASS = "mt-[28px] md:mt-[32px]";

export const PROJECT01_ROW_GRID_CLASS =
  "grid grid-cols-1 sm:grid-cols-[140px_minmax(0,1fr)] gap-[20px] sm:gap-[36px] items-start";

export const PROJECT01_ROW_PADDING_CLASS = "py-[30px]";

export const PROJECT01_METRICS_GRID_CLASS =
  "grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[24px]";

export const PROJECT01_METRIC_CARD_CLASS =
  "min-w-0 flex flex-col gap-[10px] bg-white border border-[#e5e5e5] rounded-[18px] p-[24px] shadow-[0_12px_32px_rgba(0,0,0,0.06)]";

export const PROJECT01_CHIP_BASE_CLASS =
  "inline-flex items-center h-[34px] px-[12px] rounded-full text-[13px] font-medium tracking-[-0.26px] leading-none";

export const PROJECT01_CHIP_CLASS = `${PROJECT01_CHIP_BASE_CLASS} bg-white border border-[#e5e5e5] text-[#737373]`;

export const PROJECT01_CHIP_PRIMARY_CLASS = `${PROJECT01_CHIP_BASE_CLASS} bg-[#171719] text-white`;

export const PROJECT01_BODY_CLASS =
  "font-pretendard text-[15px] md:text-[16px] font-normal text-[#606060] tracking-[-0.32px] leading-[1.7]";

export const PROJECT01_SECTION_TITLE_CLASS =
  "font-pretendard text-[26px] md:text-[28px] font-medium text-[#171719] tracking-[-0.56px] leading-[1.3]";

export const PROJECT01_SUBHEADING_CLASS =
  "font-pretendard text-[15px] font-semibold text-[#171719] tracking-[-0.3px] leading-[1.5]";

export const PROJECT01_CAPTION_CLASS =
  "text-[12px] font-medium text-[#bdbdbd] tracking-[-0.24px] leading-none";

export const PROJECT01_CONTENT_GAP_CLASS = "flex flex-col gap-[32px]";

export const PROJECT01_SECTION_INNER_GAP_CLASS =
  "flex flex-col gap-[24px] md:gap-[28px]";

export const PROJECT01_BODY_SECTION_GAP_CLASS =
  "flex flex-col gap-[96px] md:gap-[108px]";

/** @deprecated Use PROJECT01_BLOCK_GAP_CLASS */
export const PROJECT01_SECTION_GAP_CLASS = PROJECT01_BLOCK_GAP_CLASS;
