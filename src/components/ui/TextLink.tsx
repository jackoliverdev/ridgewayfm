import Link from "next/link";

export function TextLink({
  href,
  children,
  tone = "ridgeway",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "ridgeway" | "paper";
  className?: string;
}) {
  const colour = tone === "paper" ? "text-paper" : "text-ridgeway";
  const classes = `inline-flex min-h-11 items-center underline decoration-2 underline-offset-4 ${colour} ${className}`;

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
