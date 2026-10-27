import { DataTable } from "@/components/ui/DataTable";
import { RowList } from "@/components/ui/RowList";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { plannedMaintenance } from "@/content/services";

export function PlannedMaintenance() {
  return (
    <Section id="planned-maintenance" tone="mist" className="scroll-mt-24">
      <SectionHeading
        title={plannedMaintenance.title}
        intro={plannedMaintenance.intro}
      />
      <DataTable
        caption={plannedMaintenance.caption}
        columns={plannedMaintenance.columns}
        rows={plannedMaintenance.rows}
        className="mt-8 bg-paper md:mt-12"
      />
      <h3 className="mt-12">{plannedMaintenance.gradesTitle}</h3>
      <RowList items={plannedMaintenance.grades} className="mt-2" />
    </Section>
  );
}
