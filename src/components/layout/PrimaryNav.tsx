"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";

function current(href: string, pathname: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PrimaryNav({
  id,
  label,
  onNavigate,
  className,
}: {
  id?: string;
  label: string;
  onNavigate?: () => void;
  className: string;
}) {
  const pathname = usePathname();

  return (
    <nav id={id} aria-label={label} className={className}>
      {nav.map((item) => {
        const active = current(item.href, pathname);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`inline-flex min-h-11 items-center px-3 ${
              active
                ? "font-semibold text-ridgeway-deep"
                : "text-ridgeway hover:text-ridgeway-deep"
            }`}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
