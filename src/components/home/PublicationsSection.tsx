import { PUBLICATIONS } from "../../data/publications";

export default function PublicationsSection() {
  return (
    <section id="publications" className="scroll-mt-[24px]">
      <div className="max-w-[1480px] mx-auto px-[40px]">
        <h2 className="text-[36px] font-semibold text-[#171719] tracking-[-1.08px] leading-[1.3] mb-[64px]">
          Publications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] lg:gap-[56px]">
          {PUBLICATIONS.map((pub) => (
            <a
              key={pub.id}
              href={pub.href}
              className="group flex gap-[28px] items-start no-underline"
            >
              <div className="shrink-0 w-[160px] h-[160px] lg:w-[180px] lg:h-[180px] rounded-[16px] bg-[#f5f5f5] flex items-center justify-center overflow-hidden">
                <span className="text-[12px] font-medium text-[#c8c8c8] tracking-[-0.36px]">
                  Thumbnail
                </span>
              </div>
              <div className="flex flex-col gap-[12px] min-w-0 pt-[4px]">
                <h3 className="font-pretendard text-[22px] font-semibold text-[#171719] tracking-[-0.66px] leading-[1.45] group-hover:text-[#009cff] transition-colors">
                  {pub.title}
                </h3>
                <div className="flex items-center gap-[8px] text-[14px] font-medium text-[#a9a9a9] tracking-[-0.42px]">
                  <span>{pub.category}</span>
                  <span aria-hidden>·</span>
                  <span>{pub.publishedDate}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
