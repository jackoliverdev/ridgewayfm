import { RowList } from "@/components/ui/RowList";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { home } from "@/content/site";

export function Reporting() {
  return (
    <Section tone="mist">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-x-8">
        <div className="min-w-0 md:col-span-4">
          <SectionHeading title={home.reporting.title} intro={home.reporting.body} />
        </div>
        <RowList
          items={home.reporting.items}
          titleSpan="md:col-span-4"
          bodySpan="md:col-span-8"
          className="min-w-0 md:col-span-8 md:-mt-6"
        />
      </div>
    </Section>
  );
}
