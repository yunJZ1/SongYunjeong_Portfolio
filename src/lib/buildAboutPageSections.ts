import type { ParsedAbout } from "./parseAboutMarkdown";

export type AboutSectionCategory = "careers" | "awards" | "ma-labs" | "etc";

export type AboutSectionItem = {
  title: string;
  description: string;
  href?: string;
};

export type AboutPageSection = {
  id: AboutSectionCategory;
  items: AboutSectionItem[];
};

function toItems(metrics: { title: string; body: string }[]): AboutSectionItem[] {
  return metrics.map((metric) => ({
    title: metric.title,
    description: metric.body,
  }));
}

function buildCareersSection(aboutData: ParsedAbout): AboutPageSection {
  return {
    id: "careers",
    items: toItems(aboutData.careers),
  };
}

function buildAwardsSection(aboutData: ParsedAbout): AboutPageSection {
  return {
    id: "awards",
    items: toItems(aboutData.awards),
  };
}

const MA_LABS_KEEP_TITLES = new Set([
  "UX · Interaction Design MA",
  "DEEP Lab",
]);

function buildMaLabsSection(aboutData: ParsedAbout): AboutPageSection {
  return {
    id: "ma-labs",
    items: toItems(
      aboutData.maLabs.filter((item) => MA_LABS_KEEP_TITLES.has(item.title)),
    ),
  };
}

function buildEtcSection(): AboutPageSection {
  return {
    id: "etc",
    items: [
      {
        title: "Certification",
        description: "GTQ\n컴퓨터그래픽스운용기능사",
      },
      {
        title: "Contact",
        description: "yunjeong_1@naver.com",
        href: "mailto:yunjeong_1@naver.com",
      },
    ],
  };
}

export function buildAboutPageSections(aboutData: ParsedAbout): AboutPageSection[] {
  return [
    buildCareersSection(aboutData),
    buildAwardsSection(aboutData),
    buildMaLabsSection(aboutData),
    buildEtcSection(),
  ];
}
