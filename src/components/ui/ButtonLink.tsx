import Link from "next/link";
import { invertedButtonClass, primaryButtonClass } from "@/components/ui/buttonStyles";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "inverted";
  className?: string;
  onClick?: () => void;
}) {
  const variantClass =
    variant === "inverted" ? invertedButtonClass : primaryButtonClass;
  const classes = `${variantClass} ${className}`;

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
