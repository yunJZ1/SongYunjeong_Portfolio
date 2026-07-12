import {
  CASE_STUDY_LIST_CATEGORIES,
  type CaseStudyListCategory,
} from "../../lib/caseStudyListCategory";

const CATEGORY_BUTTON_CLASS =
  "rounded-full px-[18px] md:px-[20px] py-[10px] text-[15px] font-medium tracking-[-0.3px] leading-none border-0 cursor-pointer transition-colors duration-200";

type CaseStudyCategoryNavProps = {
  activeCategory: CaseStudyListCategory;
  onCategoryChange: (category: CaseStudyListCategory) => void;
};

export default function CaseStudyCategoryNav({
  activeCategory,
  onCategoryChange,
}: CaseStudyCategoryNavProps) {
  return (
    <nav
      aria-label="Project categories"
      className="flex flex-wrap items-center gap-[8px]"
    >
      {CASE_STUDY_LIST_CATEGORIES.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryChange(category.id)}
            className={`${CATEGORY_BUTTON_CLASS} ${
              isActive
                ? "bg-[#171719] text-white hover:bg-[#000000]"
                : "bg-[#F4F4F4] text-[#171719] hover:bg-[#EBEBEB]"
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </nav>
  );
}
