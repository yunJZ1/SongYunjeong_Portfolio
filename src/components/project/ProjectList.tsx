import type { ReactNode } from "react";
import type { CaseStudyPillLabel } from "../../data/caseStudyCardLabels";
import ProjectHero from "./ProjectHero";
import ProjectPreview from "./ProjectPreview";

export type ProjectListItemData = {
  id: string;
  title: string;
  description: string;
  summary?: string;
  fieldMeta?: string;
  labels?: CaseStudyPillLabel[];
  previewLabel?: string;
  previewImageSrc?: string;
  ctaLabel?: string;
  ctaHref?: string;
  footer?: ReactNode;
};

type ProjectListItemProps = ProjectListItemData & {
  onOpen?: () => void;
};

export function ProjectListItem({
  title,
  description,
  summary,
  fieldMeta,
  labels,
  previewLabel,
  previewImageSrc,
  ctaLabel,
  ctaHref,
  footer,
  onOpen,
}: ProjectListItemProps) {
  const content = (
    <>
      <ProjectHero
        title={title}
        description={description}
        summary={summary}
        fieldMeta={fieldMeta}
        labels={labels}
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
        footer={footer}
      />
      <ProjectPreview label={previewLabel} imageSrc={previewImageSrc} />
    </>
  );

  if (!onOpen) {
    return (
      <article className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-[32px] lg:gap-[48px] items-center">
        {content}
      </article>
    );
  }

  return (
    <article>
      <button
        type="button"
        onClick={onOpen}
        className="group w-full text-left bg-transparent border-0 p-0 cursor-pointer grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-[32px] lg:gap-[48px] items-center"
      >
        {content}
      </button>
    </article>
  );
}

type ProjectListProps = {
  children: ReactNode;
};

export function ProjectList({ children }: ProjectListProps) {
  return <div className="flex flex-col gap-[64px]">{children}</div>;
}

type ProjectListLayoutProps = {
  label: string;
  title: string;
  description?: string;
  navigation?: ReactNode;
  children: ReactNode;
};

export function ProjectListLayout({
  label,
  title,
  description,
  navigation,
  children,
}: ProjectListLayoutProps) {
  return (
    <main className="w-full bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-[24px] md:px-[40px] py-[48px] md:py-[64px]">
        <div className="flex flex-col gap-[12px] mb-[40px] max-w-[640px]">
          <p className="text-[12px] font-medium text-[#a9a9a9] tracking-[0.08em] uppercase leading-none">
            {label}
          </p>
          <h1 className="font-pretendard text-[36px] md:text-[40px] font-medium text-[#171719] tracking-[-0.8px] leading-[1.2]">
            {title}
          </h1>
          {description && (
            <p className="font-pretendard text-[15px] font-normal text-[#606060] tracking-[-0.3px] leading-[1.7]">
              {description}
            </p>
          )}
        </div>

        {navigation && (
          <>
            <div className="mb-[32px]">{navigation}</div>
            <hr className="border-0 h-px w-full bg-[#e5e5e5] mb-[56px]" />
          </>
        )}

        {children}
      </div>
    </main>
  );
}

export function ProjectListDivider() {
  return <hr className="border-0 h-px w-full bg-[#e5e5e5]" />;
}

type PublicationListItemProps = {
  title: string;
  category: string;
  publishedDate: string;
  href: string;
};

export function PublicationListItem({
  title,
  category,
  publishedDate,
  href,
}: PublicationListItemProps) {
  return (
    <article>
      <a
        href={href}
        className="group w-full text-left no-underline grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-[32px] lg:gap-[48px] items-center"
      >
        <ProjectHero
          title={title}
          description={category}
          summary={publishedDate}
          ctaLabel="View publication"
        />
        <ProjectPreview label="Publication Preview" />
      </a>
    </article>
  );
}
