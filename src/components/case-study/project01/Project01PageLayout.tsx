import type { ReactNode } from "react";
import {
  PROJECT01_CONTENT_CLASS,
  PROJECT01_LAYOUT_GAP_CLASS,
  PROJECT01_SIDEBAR_CLASS,
  PROJECT01_TRACK_CLASS,
} from "./project01Styles";

type Project01PageLayoutProps = {
  children: ReactNode;
  sidebar?: ReactNode;
};

/** @deprecated Use Project01Document single-container layout instead */
export default function Project01PageLayout({
  children,
  sidebar,
}: Project01PageLayoutProps) {
  return (
    <div className={PROJECT01_TRACK_CLASS}>
      <div className={`flex ${PROJECT01_LAYOUT_GAP_CLASS}`}>
        <div className={`hidden lg:block ${PROJECT01_SIDEBAR_CLASS} shrink-0`}>
          {sidebar}
        </div>
        <div className={PROJECT01_CONTENT_CLASS}>{children}</div>
      </div>
    </div>
  );
}
