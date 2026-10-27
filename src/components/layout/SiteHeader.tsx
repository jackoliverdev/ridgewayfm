import Link from "next/link";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { PrimaryNav } from "@/components/layout/PrimaryNav";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { header } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <Container className="flex items-center justify-between gap-4 py-3">
        <Link href="/" className="inline-flex min-h-11 items-center">
          <Logo />
        </Link>
        <div className="hidden items-center gap-4 lg:flex">
          <PrimaryNav label="Primary" className="flex items-center gap-1" />
          <ButtonLink href={header.cta.href}>{header.cta.label}</ButtonLink>
        </div>
        <MobileMenu />
      </Container>
    </header>
  );
}
