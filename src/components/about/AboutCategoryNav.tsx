import type { AboutNavCategory } from "../../lib/buildAboutPageSections";
import { ABOUT_NAV_CATEGORIES } from "../../lib/buildAboutPageSections";

type AboutCategoryNavProps = {
  activeCategory: AboutNavCategory;
  onCategoryChange: (category: AboutNavCategory) => void;
};

export default function AboutCategoryNav({
  activeCategory,
  onCategoryChange,
}: AboutCategoryNavProps) {
  return (
    <nav
      aria-label="About page categories"
      className="sticky top-[64px] z-40 bg-white border-b border-[#e7e7e7]"
    >
      <div className="w-full max-w-[1200px] mx-auto px-[24px] md:px-[40px] py-[16px]">
        <div className="flex items-center gap-[4px] p-[4px] rounded-full border border-[#e4e4e4] bg-white overflow-x-auto scrollbar-none">
          {ABOUT_NAV_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onCategoryChange(category.id)}
                className={[
                  "shrink-0 px-[18px] md:px-[22px] py-[10px] rounded-full text-[14px] font-medium tracking-[-0.28px] leading-none border-0 cursor-pointer transition-colors duration-200 whitespace-nowrap",
                  isActive
                    ? "bg-[#f0f0f0] text-[#171719]"
                    : "bg-transparent text-[#171719] hover:bg-[#fafafa]",
                ].join(" ")}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
