import { RowList } from "@/components/ui/RowList";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/content/site";

export function HealthAndSafety() {
  return (
    <Section tone="mist">
      <SectionHeading title={about.safety.title} intro={about.safety.intro} />
      <RowList items={about.safety.items} className="mt-8" />
    </Section>
  );
}
