type AboutSectionLabelProps = {
  children: string;
};

export default function AboutSectionLabel({ children }: AboutSectionLabelProps) {
  return (
    <p className="text-[12px] font-medium text-[#a9a9a9] tracking-[0.08em] uppercase leading-none">
      {children}
    </p>
  );
}
