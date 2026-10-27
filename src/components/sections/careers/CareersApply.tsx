import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { email } from "@/content/site";
import { careers } from "@/content/careers";

export function CareersApply() {
  return (
    <Section className="border-t border-rule">
      <div className="flex flex-col items-start gap-8 md:flex-row md:justify-between md:gap-12">
        <div className="min-w-0">
          <h2>{careers.apply.title}</h2>
          <p className="mt-4">{careers.apply.body}</p>
        </div>
        <ButtonLink href={`mailto:${email}`} className="shrink-0">
          {careers.apply.label}
        </ButtonLink>
      </div>
    </Section>
  );
}
