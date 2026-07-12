export type PrototypeScreenConfig = {
  id: string;
  imageSrc?: string;
  iframeSrc?: string;
  alt?: string;
  placeholderLabel?: string;
};

export type PrototypeBlockLayout = "editorial" | "wide";

export type PrototypeEditorialBlockConfig = {
  id: string;
  layout?: "editorial";
  heading?: string;
  description?: string;
  screen: PrototypeScreenConfig;
};

export type PrototypeWideBlockConfig = {
  id: string;
  layout: "wide";
  screen: PrototypeScreenConfig;
};

export type PrototypeBlockConfig =
  | PrototypeEditorialBlockConfig
  | PrototypeWideBlockConfig;

export type CaseStudyPrototypeConfig = {
  caseId: string;
  sectionDomId: string;
  navLabel: string;
  label: string;
  title: string;
  description: string;
  blocks: PrototypeBlockConfig[];
  /** When set, prototype renders inside this body section instead of after Intro */
  placementSectionId?: string;
};
