export type PrototypeScreenConfig = {
  id: string;
  imageSrc?: string;
  iframeSrc?: string;
  alt?: string;
  placeholderLabel?: string;
};

export type PrototypeEditorialBlockConfig = {
  id: string;
  heading?: string;
  description?: string;
  screen: PrototypeScreenConfig;
};

export type CaseStudyPrototypeConfig = {
  caseId: string;
  sectionDomId: string;
  navLabel: string;
  label: string;
  title: string;
  description: string;
  blocks: PrototypeEditorialBlockConfig[];
};
