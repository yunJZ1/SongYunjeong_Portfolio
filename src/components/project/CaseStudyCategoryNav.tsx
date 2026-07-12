import {
  CASE_STUDY_LIST_CATEGORIES,
  type CaseStudyListCategory,
} from "../../lib/caseStudyListCategory";

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
      className="flex flex-wrap items-center gap-[20px] md:gap-[28px]"
    >
      {CASE_STUDY_LIST_CATEGORIES.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryChange(category.id)}
            className={`text-[15px] font-medium tracking-[-0.3px] leading-none bg-transparent border-0 p-0 cursor-pointer transition-colors duration-200 ${
              isActive
                ? "text-[#171719]"
                : "text-[#a9a9a9] hover:text-[#171719]"
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </nav>
  );
}
