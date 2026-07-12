type CaseStudyTagsProps = {
  tags: string[];
};

export default function CaseStudyTags({ tags }: CaseStudyTagsProps) {
  if (tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-[10px]">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex px-[14px] py-[8px] rounded-full border border-[#e7e7e7] text-[13px] font-medium text-[#606060] tracking-[-0.39px]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
