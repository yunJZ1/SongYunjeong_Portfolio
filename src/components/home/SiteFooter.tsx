function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto px-[40px] py-[40px] flex items-center justify-between">
        <p className="text-[14px] font-medium text-[#a9a9a9] tracking-[-0.28px]">
          © 2026 Yunjeong Song
        </p>
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-[6px] px-[16px] py-[8px] rounded-full bg-[#f5f5f5] text-[14px] font-medium text-[#171719] tracking-[-0.28px] leading-none border-0 cursor-pointer hover:bg-[#ececec] transition-colors duration-200"
        >
          ↑ Top
        </button>
      </div>
    </footer>
  );
}
