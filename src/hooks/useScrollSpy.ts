import { useCallback, useEffect, useRef, useState } from "react";

type NavItem = {
  id: string;
  sections: readonly string[];
};

type UseScrollSpyOptions = {
  navItems: readonly NavItem[];
  rootMargin?: string;
  scrollOffset?: number;
};

export function useScrollSpy({
  navItems,
  rootMargin = "-20% 0px -55% 0px",
  scrollOffset = 96,
}: UseScrollSpyOptions) {
  const [activeNavId, setActiveNavId] = useState(navItems[0]?.id ?? "");
  const sectionToNav = useRef<Map<string, string>>(new Map());

  useEffect(() => {
    const map = new Map<string, string>();
    navItems.forEach((item) => {
      item.sections.forEach((sectionId) => {
        map.set(sectionId, item.id);
      });
    });
    sectionToNav.current = map;
  }, [navItems]);

  useEffect(() => {
    const sectionIds = navItems.flatMap((item) => item.sections);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibleSections.add(id);
          } else {
            visibleSections.delete(id);
          }
        });

        if (visibleSections.size === 0) return;

        const orderedVisible = sectionIds.filter((id) => visibleSections.has(id));
        const topSection = orderedVisible[0];
        const navId = sectionToNav.current.get(topSection);
        if (navId) setActiveNavId(navId);
      },
      { root: null, rootMargin, threshold: [0, 0.1, 0.25] },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [navItems, rootMargin]);

  const scrollToNav = useCallback(
    (navId: string) => {
      const item = navItems.find((nav) => nav.id === navId);
      const firstSectionId = item?.sections[0];
      if (!firstSectionId) return;

      const target = document.getElementById(firstSectionId);
      if (!target) return;

      const offset =
        target.getBoundingClientRect().top + window.scrollY - scrollOffset;

      window.scrollTo({ top: offset, behavior: "smooth" });
      setActiveNavId(navId);
    },
    [navItems, scrollOffset],
  );

  return { activeNavId, scrollToNav };
}
