import { RowList } from "@/components/ui/RowList";
import { Section } from "@/components/ui/Section";
import { careers } from "@/content/careers";

export function CareersRoles() {
  return (
    <>
      <Section>
        <h2>{careers.benefitsTitle}</h2>
        <RowList items={careers.benefits} className="mt-8" />
      </Section>
      <Section tone="mist">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-x-8">
          <div className="min-w-0 md:col-span-8">
            <h2>{careers.startTitle}</h2>
            <RowList
              items={careers.start}
              className="mt-8"
              titleSpan="md:col-span-4"
              bodySpan="md:col-span-8"
            />
          </div>
          <div className="min-w-0 md:col-span-4">
            <h2>{careers.apprenticeship.title}</h2>
            <p className="mt-6">{careers.apprenticeship.body}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
