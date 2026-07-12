import contentMd from "../../docs/projects/about/content.md?raw";
import AboutEditorialEntry, {
  AboutEditorialDivider,
} from "../components/about/AboutEditorialEntry";
import AboutHighlightCard from "../components/about/AboutHighlightCard";
import PillBadge from "../components/project/PillBadge";
import { ABOUT_CATEGORY_PILLS } from "../data/aboutCategoryLabels";
import { buildAboutPageSections } from "../lib/buildAboutPageSections";
import { parseAboutMarkdown } from "../lib/parseAboutMarkdown";

const about = parseAboutMarkdown(contentMd);
const aboutSections = buildAboutPageSections(about);

export default function WhoAmIPage() {
  return (
    <main className="w-full bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-[24px] md:px-[40px] py-[48px] md:py-[64px]">
        <div className="flex flex-col gap-[12px] mb-[40px] max-w-[640px]">
          <p className="text-[12px] font-medium text-[#a9a9a9] tracking-[0.08em] uppercase leading-none">
            About
          </p>
          <h1 className="font-pretendard text-[36px] md:text-[40px] font-medium text-[#171719] tracking-[-0.8px] leading-[1.2]">
            {about.hero.name}
          </h1>
          <p className="font-pretendard text-[15px] font-medium text-[#606060] tracking-[-0.3px] leading-[1.7]">
            {about.hero.role}
          </p>
          <div className="flex flex-col gap-[14px] pt-[4px]">
            {about.hero.description.map((paragraph) => (
              <p
                key={paragraph}
                className="font-pretendard text-[15px] font-normal text-[#606060] tracking-[-0.3px] leading-[1.7]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-[32px] lg:gap-[48px] items-start">
          <aside className="lg:sticky lg:top-[128px] lg:self-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-[16px]">
              {about.highlights.map((highlight) => (
                <AboutHighlightCard
                  key={highlight.title}
                  title={highlight.title}
                  description={highlight.body}
                />
              ))}
            </div>
          </aside>

          <div className="flex flex-col gap-[64px] min-w-0">
            {aboutSections.map((section) => {
              const pill = ABOUT_CATEGORY_PILLS[section.id];

              return (
                <section
                  key={section.id}
                  id={`about-${section.id}`}
                  className="scroll-mt-[128px] flex flex-col gap-[24px]"
                >
                  <div className="self-start">
                    <PillBadge variant={pill.variant} label={pill.label} />
                  </div>

                  <div className="flex flex-col">
                    {section.items.map((item, itemIndex) => (
                      <div key={`${item.title}-${itemIndex}`}>
                        <AboutEditorialEntry
                          title={item.title}
                          description={item.description}
                          href={item.href}
                        />
                        {itemIndex < section.items.length - 1 && (
                          <AboutEditorialDivider />
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
