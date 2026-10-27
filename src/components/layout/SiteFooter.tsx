import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { RMark } from "@/components/ui/RMark";
import { email, footer } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-ridgeway-deep text-paper">
      <Container className="py-16 md:py-24">
        <div className="flex items-center gap-3">
          <RMark />
          <p className="heading-text text-paper">{footer.legalName}</p>
        </div>
        <p className="mt-6">{footer.blurb}</p>
        <nav aria-label="Footer" className="mt-8 flex flex-col sm:flex-row sm:gap-6">
          {footer.links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center underline decoration-2 underline-offset-4 hover:text-ridgeway-bright"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="mt-2">
          <a
            href={`mailto:${email}`}
            className="inline-flex min-h-11 items-center underline decoration-2 underline-offset-4 hover:text-ridgeway-bright"
          >
            {email}
          </a>
        </p>
        <p className="mt-10 border-t border-rule pt-6 text-sm">{footer.copyright}</p>
      </Container>
    </footer>
  );
}
