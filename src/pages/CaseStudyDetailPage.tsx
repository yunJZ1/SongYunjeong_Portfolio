import CaseStudyPage from "../components/case-study/CaseStudyPage";
import NextCasesSection from "../components/case-study/NextCasesSection";
import Project01Document from "../components/case-study/project01/Project01Document";
import Project01SectionNavigation from "../components/case-study/project01/Project01SectionNavigation";
import PrototypeSection from "../components/prototype/PrototypeSection";
import { getCaseStudyDetailLayoutConfig } from "../data/caseStudyDetailLayoutConfig";
import { getCaseStudyDetailKeywordChips } from "../data/caseStudyDetailKeywordChips";
import { getCaseStudyPrototypeConfig } from "../data/caseStudyPrototypeConfig";
import { getCaseStudyContentMd } from "../lib/caseStudyContentById";
import {
  buildDetailMetaChips,
  extractMetricCallouts,
  extractMetricItems,
} from "../lib/buildCaseStudyDetailModel";
import { buildCaseStudyDetailNav } from "../lib/buildCaseStudyDetailNav";
import { filterPopulatedBlocks, filterPopulatedSections } from "../lib/filterCaseStudySections";
import { getCuratedDetailHero } from "../lib/getCuratedDetailHero";
import { resolveCaseStudyContent } from "../lib/resolveCaseStudyContent";
import { useScrollSpy } from "../hooks/useScrollSpy";

type CaseStudyDetailPageProps = {
  caseId: string;
  onOpenCase: (id: string) => void;
};

export default function CaseStudyDetailPage({
  caseId,
  onOpenCase,
}: CaseStudyDetailPageProps) {
  const curatedHero = getCuratedDetailHero(caseId);

  if (!curatedHero) {
    return null;
  }

  const contentMd = getCaseStudyContentMd(caseId);
  const resolved = contentMd
    ? resolveCaseStudyContent(contentMd)
    : {
        parsed: {
          projectName: "",
          hero: {
            title: "",
            subtitle: "",
            meta: "",
            metaChips: [],
          },
          tldr: [],
          keyMetrics: [],
          sections: [],
        },
        bodySections: [],
        navItems: [],
      };

  const bodySections = filterPopulatedSections(resolved.bodySections);
  const tldr = filterPopulatedBlocks(resolved.parsed.tldr);
  const metrics = extractMetricItems(resolved.parsed.keyMetrics);
  const callout = extractMetricCallouts(resolved.parsed.keyMetrics);
  const navItems = buildCaseStudyDetailNav(
    caseId,
    bodySections.length > 0 ? resolved.navItems : [],
  );
  const prototypeConfig = getCaseStudyPrototypeConfig(caseId);
  const layoutConfig = getCaseStudyDetailLayoutConfig(caseId);
  const metaChips = getCaseStudyDetailKeywordChips(
    caseId,
    buildDetailMetaChips(resolved.parsed.hero.metaChips, curatedHero),
  );

  const sectionAppendix =
    prototypeConfig?.placementSectionId != null
      ? {
          [prototypeConfig.placementSectionId]: (
            <PrototypeSection config={prototypeConfig} variant="embedded" />
          ),
        }
      : undefined;

  const afterIntroPrototype =
    prototypeConfig && !prototypeConfig.placementSectionId ? (
      <PrototypeSection config={prototypeConfig} />
    ) : undefined;

  const { activeNavId, scrollToNav } = useScrollSpy({
    navItems,
  });

  return (
    <main className="bg-white">
      <CaseStudyPage topPaddingVariant="compact">
        <Project01Document
          caseId={caseId}
          sectionLabel={curatedHero.sectionLabel}
          title={curatedHero.title}
          subtitle={curatedHero.subtitle}
          chips={metaChips}
          tldr={tldr}
          metrics={metrics}
          callout={callout}
          sections={bodySections}
          hideHeroImage={layoutConfig?.hideHeroImage}
          highlightMetricCards={layoutConfig?.highlightMetricCards}
          sectionAppendix={sectionAppendix}
          afterIntro={afterIntroPrototype}
          navigation={
            <Project01SectionNavigation
              navItems={navItems}
              activeNavId={activeNavId}
              onNavigate={scrollToNav}
            />
          }
        />
      </CaseStudyPage>

      <NextCasesSection currentCaseId={caseId} onOpenCase={onOpenCase} />
    </main>
  );
}
