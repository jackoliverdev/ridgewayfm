import { Hairline } from "@/components/ui/Hairline";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fixedPrices } from "@/content/services";

export function FixedPrices() {
  return (
    <Section id="fixed-prices" tone="mist" className="scroll-mt-24">
      <SectionHeading title={fixedPrices.title} intro={fixedPrices.intro} />
      <ul className="mt-8 md:mt-12">
        {fixedPrices.items.map((item, index) => (
          <li key={item.job}>
            {index > 0 ? <Hairline /> : null}
            <div className="grid grid-cols-1 gap-2 py-6 md:grid-cols-12 md:gap-8 md:py-8">
              <p className="md:col-span-6">{item.job}</p>
              <p className="md:col-span-6">{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-ink-soft">{fixedPrices.note}</p>
    </Section>
  );
}
