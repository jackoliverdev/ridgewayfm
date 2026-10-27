import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { trades } from "@/content/services";
import { email, footer, hours, phones, telHref } from "@/content/site";

const linkClass =
  "inline-flex min-h-11 items-center underline decoration-1 underline-offset-4 hover:text-ridgeway-bright";

export function SiteFooter() {
  return (
    <footer className="bg-ridgeway-deep text-paper">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="min-w-0 md:col-span-4">
            <Logo variant="light" />
            <p className="mt-6">{footer.blurb}</p>
            <p className="mt-4 text-sm text-paper/80">{footer.divisions}</p>
          </div>
          <div className="min-w-0 md:col-span-3">
            <p className="heading-text">{footer.contactTitle}</p>
            <dl className="mt-4 flex flex-col gap-3 text-sm">
              <div>
                <dt className="text-paper/80">{phones.serviceDesk.label}</dt>
                <dd>
                  <a href={telHref(phones.serviceDesk.number)} className={`${linkClass} text-base`}>
                    {phones.serviceDesk.number}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-paper/80">{phones.outOfHours.label}</dt>
                <dd>
                  <a href={telHref(phones.outOfHours.number)} className={`${linkClass} text-base`}>
                    {phones.outOfHours.number}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-paper/80">Email</dt>
                <dd>
                  <a href={`mailto:${email}`} className={`${linkClass} text-base`}>
                    {email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-paper/80">Office hours</dt>
                <dd className="text-base">{hours.office}</dd>
              </div>
            </dl>
          </div>
          <nav aria-label="Services" className="min-w-0 md:col-span-3">
            <p className="heading-text">{footer.servicesTitle}</p>
            <ul className="mt-4">
              {trades.items.map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`} className={linkClass}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Footer" className="min-w-0 md:col-span-2">
            <p className="heading-text">{footer.companyTitle}</p>
            <ul className="mt-4">
              {footer.links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 border-t border-paper/20 pt-6">
          <p className="text-sm text-paper/80">{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
