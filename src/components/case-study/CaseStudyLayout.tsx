import type { ReactNode } from "react";
import Container from "../Container";

type CaseStudyLayoutProps = {
  navigation: ReactNode;
  children: ReactNode;
};

export default function CaseStudyLayout({
  navigation,
  children,
}: CaseStudyLayoutProps) {
  return (
    <Container variant="editorial" className="pb-[140px]">
      <div className="flex gap-[80px] items-start">
        {navigation}
        <div className="flex-1 min-w-0 flex flex-col gap-[140px]">{children}</div>
      </div>
    </Container>
  );
}
