import type { ReactNode } from "react";

type CalloutProps = {
  children: ReactNode;
};

export default function Callout({ children }: CalloutProps) {
  return (
    <blockquote className="border-l-[3px] border-[#F4FF47] pl-[20px] font-pretendard text-[12px] font-medium text-[#ADADAD] tracking-[-0.51px] leading-[1.71] flex flex-col gap-[16px]">
      {children}
    </blockquote>
  );
}
