import type { ReactNode } from "react";

const VARIANT_CLASS = {
  hero: "max-w-[900px] mx-auto px-[40px] w-full",
  "hero-image": "max-w-[1480px] mx-auto px-[40px] w-full",
  editorial: "max-w-[1480px] mx-auto px-[40px] w-full",
  reading: "max-w-[900px] mx-auto w-full",
} as const;

type ContainerVariant = keyof typeof VARIANT_CLASS;

type ContainerProps = {
  variant: ContainerVariant;
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
  id?: string;
};

export default function Container({
  variant,
  children,
  className = "",
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={`${VARIANT_CLASS[variant]} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
