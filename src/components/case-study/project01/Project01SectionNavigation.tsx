import type { CaseStudyNavItem } from "../../../lib/buildCaseStudyNav";

const NAV_LINK_BASE =
  "relative w-full text-left text-[13px] font-medium tracking-[-0.26px] leading-[1.5] py-[6px] bg-transparent border-0 cursor-pointer transition-colors duration-200";

const NAV_LINK =
  `${NAV_LINK_BASE} text-[#a9a9a9] hover:text-[#171719]`;

const NAV_LINK_ACTIVE = `${NAV_LINK_BASE} text-[#171719]`;

type Project01SectionNavigationProps = {
  navItems: CaseStudyNavItem[];
  activeNavId: string;
  onNavigate: (navId: string) => void;
};

export default function Project01SectionNavigation({
  navItems,
  activeNavId,
  onNavigate,
}: Project01SectionNavigationProps) {
  return (
    <nav
      aria-label="Case study sections"
      className="relative border-l border-[#e5e5e5] pl-[16px] flex flex-col gap-[4px]"
    >
      {navItems.map(({ id, label }) => {
        const isActive = activeNavId === id;

        return (
          <button
            key={id}
            type="button"
            onClick={() => onNavigate(id)}
            className={isActive ? NAV_LINK_ACTIVE : NAV_LINK}
          >
            {isActive && (
              <span
                aria-hidden
                className="absolute -left-[16px] top-1/2 -translate-y-1/2 w-[2px] h-[18px] bg-[#171719] rounded-full"
              />
            )}
            {label}
          </button>
        );
      })}
    </nav>
  );
}
