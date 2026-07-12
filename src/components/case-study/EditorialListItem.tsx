type EditorialListItemProps = {
  title: string;
  description: string;
  onOpen: () => void;
};

export default function EditorialListItem({
  title,
  description,
  onOpen,
}: EditorialListItemProps) {
  return (
    <article className="flex items-center gap-[75px] group">
      <div className="flex flex-col flex-1 min-w-0 gap-[30px]">
        <button
          type="button"
          onClick={onOpen}
          className="text-left bg-transparent border-0 p-0 cursor-pointer"
        >
          <h2 className="text-[38px] font-semibold text-[#292929] tracking-[-1.14px] leading-[1.71] transition-colors duration-200 group-hover:text-[#171719]">
            {title}
          </h2>
        </button>
        <p className="text-[18px] font-medium text-[#171719] tracking-[-0.54px] leading-[1.71] transition-colors duration-200 group-hover:text-[#171719]">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open ${title}`}
        className="bg-white border border-[#e7e7e7] rounded-[20px] shrink-0 overflow-hidden flex items-center justify-center
          transition-all duration-300 ease-out cursor-pointer p-0
          group-hover:shadow-[0px_20px_60px_rgba(0,0,0,0.09)]
          group-hover:border-[#d8d8d8]
          group-hover:scale-[1.015]
          group-hover:-translate-y-[4px]"
        style={{ width: 476, height: 430 }}
      >
        <div className="w-full h-full flex items-center justify-center bg-[#fafafa] group-hover:bg-[#f4f4f4] transition-colors duration-300">
          <span className="text-[13px] font-medium text-[#d8d8d8] tracking-[-0.39px] transition-colors duration-300 group-hover:text-[#c0c0c0]">
            Preview
          </span>
        </div>
      </button>
    </article>
  );
}
