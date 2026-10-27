import { DataTable } from "@/components/ui/DataTable";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { responseTimes } from "@/content/services";

export function ResponseTimes() {
  return (
    <Section id="response-times" className="scroll-mt-24">
      <SectionHeading title={responseTimes.title} intro={responseTimes.intro} />
      <DataTable
        caption={responseTimes.caption}
        columns={responseTimes.columns}
        rows={responseTimes.rows}
        className="mt-8 md:mt-12"
      />
      <p className="mt-6">{responseTimes.note}</p>
    </Section>
  );
}
