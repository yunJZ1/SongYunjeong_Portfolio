import type { ReactNode } from "react";
import { useGradientSurface } from "../../hooks/useGradientSurface";

type GradientSurfaceProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

export default function GradientSurface({
  children,
  className = "",
  onClick,
  disabled = false,
  type = "button",
}: GradientSurfaceProps) {
  const { ref, style, onMouseMove, onMouseEnter, onMouseLeave } =
    useGradientSurface();

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
      className={`gradient-surface relative overflow-hidden cursor-pointer border border-[#e8ecf0] transition-colors hover:border-[#d8dee6] disabled:opacity-50 disabled:cursor-not-allowed [&>*]:relative [&>*]:z-[1] ${className}`}
    >
      {children}
    </button>
  );
}
