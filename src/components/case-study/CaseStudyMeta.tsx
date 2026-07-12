type CaseStudyMetaProps = {
  meta: string;
};

export default function CaseStudyMeta({ meta }: CaseStudyMetaProps) {
  return (
    <p className="font-pretendard text-[15px] font-medium text-[#a9a9a9] tracking-[-0.45px] leading-[1.65]">
      {meta}
    </p>
  );
}
