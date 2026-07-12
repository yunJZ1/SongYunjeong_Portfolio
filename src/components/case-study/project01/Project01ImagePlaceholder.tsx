import { PROJECT01_CAPTION_CLASS } from "./project01Styles";

type Project01ImagePlaceholderProps = {
  label: string;
};

export default function Project01ImagePlaceholder({
  label,
}: Project01ImagePlaceholderProps) {
  return (
    <figure className="w-full flex flex-col gap-[10px]">
      <div className="w-full aspect-[16/10] rounded-[16px] bg-[#f5f5f5] overflow-hidden flex items-center justify-center">
        <span className={PROJECT01_CAPTION_CLASS}>{label}</span>
      </div>
    </figure>
  );
}
