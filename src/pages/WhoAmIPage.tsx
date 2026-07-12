import { useCallback, useEffect, useRef, useState } from "react";
import contentMd from "../../docs/projects/about/content.md?raw";
import AboutCategoryNav from "../components/about/AboutCategoryNav";
import AboutEditorialEntry, {
  AboutEditorialDivider,
} from "../components/about/AboutEditorialEntry";
import AboutSectionLabel from "../components/about/AboutSectionLabel";
import Container from "../components/Container";
import SiteFooter from "../components/home/SiteFooter";
import {
  buildAboutPageSections,
  type AboutNavCategory,
} from "../lib/buildAboutPageSections";
import { parseAboutMarkdown } from "../lib/parseAboutMarkdown";

const about = parseAboutMarkdown(contentMd);
const aboutSections = buildAboutPageSections(about);

const SECTION_SCROLL_OFFSET = 128;

export default function WhoAmIPage() {
  const [activeCategory, setActiveCategory] =
    useState<AboutNavCategory>("strength");
  const isScrollingRef = useRef(false);
  const scrollTimerRef = useRef<number | null>(null);

  const scrollToSection = useCallback((category: AboutNavCategory) => {
    const element = document.getElementById(`about-${category}`);
    if (!element) return;

    isScrollingRef.current = true;
    setActiveCategory(category);

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      SECTION_SCROLL_OFFSET;

    window.scrollTo({ top, behavior: "smooth" });

    if (scrollTimerRef.current) {
      window.clearTimeout(scrollTimerRef.current);
    }

    scrollTimerRef.current = window.setTimeout(() => {
      isScrollingRef.current = false;
    }, 700);
  }, []);

  useEffect(() => {
    const sectionElements = aboutSections
      .map((section) => document.getElementById(`about-${section.id}`))
      .filter((element): element is HTMLElement => element !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const target = visible[0]?.target;
        if (!target?.id) return;

        const category = target.id.replace("about-", "") as AboutNavCategory;
        setActiveCategory(category);
      },
      {
        rootMargin: `-${SECTION_SCROLL_OFFSET}px 0px -45% 0px`,
        threshold: [0, 0.15, 0.35, 0.55],
      },
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      if (scrollTimerRef.current) {
        window.clearTimeout(scrollTimerRef.current);
      }
    };
  }, []);

  return (
    <main className="w-full bg-white">
      <Container variant="editorial" className="pt-[48px]">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col">
          <section className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-[40px] lg:gap-[64px] pb-[48px]">
            <div className="flex flex-col gap-[20px] max-w-[42ch]">
              <AboutSectionLabel>About</AboutSectionLabel>
              <h1 className="font-pretendard text-[40px] md:text-[48px] font-medium text-[#171719] tracking-[-1.2px] leading-[1.2]">
                {about.hero.name}
              </h1>
              <p className="font-pretendard text-[18px] font-medium text-[#606060] tracking-[-0.36px] leading-[1.5]">
                {about.hero.role}
              </p>
              <div className="flex flex-col gap-[14px]">
                {about.hero.description.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="font-pretendard text-[15px] font-normal text-[#606060] tracking-[-0.3px] leading-[1.75]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[20px] lg:pt-[28px]">
              <AboutSectionLabel>Highlights</AboutSectionLabel>
              <div className="flex flex-col divide-y divide-[#e7e7e7]">
                {about.highlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="flex flex-col gap-[4px] py-[16px] first:pt-0 last:pb-0"
                  >
                    <p className="font-pretendard text-[14px] font-semibold text-[#171719] tracking-[-0.28px] leading-[1.4]">
                      {highlight.title}
                    </p>
                    <p className="font-pretendard text-[13px] font-normal text-[#606060] tracking-[-0.26px] leading-[1.6]">
                      {highlight.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Container>

      <AboutCategoryNav
        activeCategory={activeCategory}
        onCategoryChange={scrollToSection}
      />

      <Container variant="editorial" className="pb-[80px]">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col">
          {aboutSections.map((section, sectionIndex) => (
            <section
              key={section.id}
              id={`about-${section.id}`}
              className="scroll-mt-[128px] flex flex-col"
            >
              <div className="flex flex-col gap-[8px] pt-[64px] pb-[8px]">
                <AboutSectionLabel>{section.label}</AboutSectionLabel>
              </div>

              <div className="flex flex-col">
                {section.items.map((item, itemIndex) => (
                  <div key={`${item.title}-${itemIndex}`}>
                    <AboutEditorialEntry
                      title={item.title}
                      description={item.description}
                      href={item.href}
                      meta={item.meta}
                    />
                    {itemIndex < section.items.length - 1 && (
                      <AboutEditorialDivider />
                    )}
                  </div>
                ))}
              </div>

              {sectionIndex < aboutSections.length - 1 && (
                <hr className="border-0 h-px w-full bg-[#e7e7e7] mt-[64px]" />
              )}
            </section>
          ))}
        </div>
      </Container>

      <SiteFooter />
    </main>
  );
}
