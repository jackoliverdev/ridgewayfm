import type { ButtonHTMLAttributes } from "react";
import { invertedButtonClass, primaryButtonClass } from "@/components/ui/buttonStyles";

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "inverted";
}) {
  const variantClass =
    variant === "inverted" ? invertedButtonClass : primaryButtonClass;

  return (
    <button className={`${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
