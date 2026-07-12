import type { ReactNode } from "react";
import { PROJECT01_BODY_CLASS } from "./project01Styles";

type Project01CalloutProps = {
  children: ReactNode;
};

export default function Project01Callout({ children }: Project01CalloutProps) {
  return (
    <blockquote
      className={`border-l border-[#e5e5e5] pl-[16px] ${PROJECT01_BODY_CLASS} text-[#737373] flex flex-col gap-[12px]`}
    >
      {children}
    </blockquote>
  );
}
