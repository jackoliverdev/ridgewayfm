import { BulletList } from "@/components/ui/BulletList";
import { Hairline } from "@/components/ui/Hairline";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { home } from "@/content/site";

export function WhoWeWorkFor() {
  return (
    <Section tone="mist">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-x-8">
        <div className="min-w-0 md:col-span-4">
          <SectionHeading title={home.sectors.title} intro={home.sectors.intro} />
        </div>
        <div className="min-w-0 md:col-span-8">
          {home.sectors.items.map((item, index) => (
            <div key={item.title}>
              {index > 0 ? <Hairline className="my-8" /> : null}
              <h3>{item.title}</h3>
              <p className="mt-3">{item.body}</p>
              <BulletList items={item.points} className="mt-4" />
              <p className="mt-4 text-sm text-ink-soft">
                <span className="font-semibold text-ink">
                  {home.sectors.referenceLabel}
                </span>{" "}
                {item.reference}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
