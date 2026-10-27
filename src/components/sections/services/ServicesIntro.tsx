import { Section } from "@/components/ui/Section";
import { servicesIntro } from "@/content/services";

export function ServicesIntro() {
  return (
    <Section className="border-b border-rule pb-10 md:pb-12">
      <h1>{servicesIntro.title}</h1>
      <p className="mt-6">{servicesIntro.body}</p>
      <nav aria-label={servicesIntro.jumpTitle} className="mt-8">
        <p className="text-sm text-ink-soft">{servicesIntro.jumpTitle}</p>
        <ul className="mt-2 flex flex-wrap gap-x-6">
          {servicesIntro.jumpLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex min-h-11 items-center text-ridgeway underline decoration-2 underline-offset-4 hover:text-ridgeway-deep"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Section>
  );
}
