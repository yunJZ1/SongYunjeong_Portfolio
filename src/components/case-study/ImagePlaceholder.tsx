type ImagePlaceholderProps = {
  label: string;
};

export default function ImagePlaceholder({ label }: ImagePlaceholderProps) {
  return (
    <div className="bg-[#f7f7f7] border border-dashed border-[#e0e0e0] rounded-[20px] h-[280px] flex items-center justify-center">
      <span className="text-[14px] font-medium text-[#9CA3AF] tracking-[-0.42px]">
        {label}
      </span>
    </div>
  );
}
