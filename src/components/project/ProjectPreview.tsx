type ProjectPreviewProps = {
  label?: string;
};

export default function ProjectPreview({
  label = "Preview",
}: ProjectPreviewProps) {
  return (
    <div
      className="w-full aspect-[4/3] rounded-[12px] border border-[#e4e4e4] bg-[#fafafa] overflow-hidden flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-[1.02] group-hover:border-[#d4d4d4]"
      aria-hidden
    >
      <span className="text-[13px] font-medium text-[#c0c0c0] tracking-[-0.26px] transition-colors duration-300 group-hover:text-[#a9a9a9]">
        {label}
      </span>
    </div>
  );
}
