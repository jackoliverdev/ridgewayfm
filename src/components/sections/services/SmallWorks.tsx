import { BulletList } from "@/components/ui/BulletList";
import { RowList } from "@/components/ui/RowList";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { smallWorks } from "@/content/services";

export function SmallWorks() {
  return (
    <Section id="small-works" className="scroll-mt-24">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-x-8">
        <div className="min-w-0 md:col-span-4">
          <SectionHeading title={smallWorks.title} intro={smallWorks.intro} />
          <h3 className="mt-8">{smallWorks.examplesTitle}</h3>
          <BulletList items={smallWorks.examples} className="mt-4" />
        </div>
        <div className="min-w-0 md:col-span-8">
          <h3>{smallWorks.stepsTitle}</h3>
          <RowList
            items={smallWorks.steps}
            titleSpan="md:col-span-3"
            bodySpan="md:col-span-9"
            className="mt-2"
          />
        </div>
      </div>
    </Section>
  );
}
