import { Section } from "@/components/ui/Section";
import { SignPanel } from "@/components/ui/SignPanel";
import { outOfHours } from "@/content/services";
import { phones, telHref } from "@/content/site";

export function OutOfHours() {
  return (
    <Section id="out-of-hours" tone="mist" className="scroll-mt-24">
      <SignPanel>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="min-w-0 md:col-span-7">
            <h2>{outOfHours.title}</h2>
            {outOfHours.body.map((paragraph) => (
              <p key={paragraph} className="mt-6">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="min-w-0 md:col-span-5 md:self-end">
            <p>{outOfHours.lineLabel}</p>
            <a
              href={telHref(phones.outOfHours.number)}
              className="heading-text inline-flex min-h-11 items-center text-[2rem] leading-tight text-paper underline decoration-2 underline-offset-4"
            >
              {phones.outOfHours.number}
            </a>
            <p className="mt-4 text-sm">{outOfHours.note}</p>
          </div>
        </div>
      </SignPanel>
    </Section>
  );
}
