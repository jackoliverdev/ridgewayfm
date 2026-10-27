import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { home } from "@/content/site";

export function ClosingStrip() {
  return (
    <Section className="border-t border-rule">
      <div className="flex flex-col items-start gap-8 md:flex-row md:justify-between md:gap-12">
        <div className="min-w-0">
          <h2>{home.closing.title}</h2>
          <p className="mt-4">{home.closing.body}</p>
        </div>
        <ButtonLink href={home.closing.primary.href} className="shrink-0">
          {home.closing.primary.label}
        </ButtonLink>
      </div>
    </Section>
  );
}
