import type { CaseStudyNavItem } from "../../lib/buildCaseStudyNav";

const NAV_LINK =
  "text-[15px] font-medium text-[#a9a9a9] tracking-[-0.45px] leading-[1.65] cursor-pointer hover:text-[#009cff] transition-colors bg-transparent border-0 p-0 text-left";

const NAV_LINK_ACTIVE =
  "text-[15px] font-medium text-[#009cff] tracking-[-0.45px] leading-[1.65] cursor-pointer transition-colors bg-transparent border-0 p-0 text-left";

type SectionNavigationProps = {
  navItems: CaseStudyNavItem[];
  activeNavId: string;
  onNavigate: (navId: string) => void;
};

export default function SectionNavigation({
  navItems,
  activeNavId,
  onNavigate,
}: SectionNavigationProps) {
  return (
    <nav
      aria-label="Case study sections"
      className="hidden lg:flex flex-col gap-[16px] sticky top-[96px] self-start"
    >
      {navItems.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => onNavigate(id)}
          className={activeNavId === id ? NAV_LINK_ACTIVE : NAV_LINK}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
