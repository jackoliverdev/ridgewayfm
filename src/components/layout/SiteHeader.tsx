import { Mail } from "lucide-react";
import Link from "next/link";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { RMark } from "@/components/ui/RMark";
import { email, header, nav } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <Container className="flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex min-h-11 items-center gap-3">
          <RMark />
          <span className="flex flex-col leading-tight">
            <span className="heading-text text-lg text-ridgeway-deep">
              {header.brand}
            </span>
            <span className="text-sm text-ink-soft">{header.descriptor}</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center px-3 text-ridgeway hover:text-ridgeway-deep"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href={`mailto:${email}`} className="ml-3">
            <Mail aria-hidden="true" size={20} />
            {header.emailLabel}
          </ButtonLink>
        </nav>
        <MobileMenu />
      </Container>
    </header>
  );
}
