import { Section } from "@/components/ui/Section";
import { contact } from "@/content/site";

export function ContactHero() {
  return (
    <Section className="pb-10 md:pb-12">
      <h1>{contact.title}</h1>
      <p className="mt-6">{contact.intro}</p>
    </Section>
  );
}
