import { Section } from "@/components/ui/Section";
import { home } from "@/content/site";

export function HowAJobRuns() {
  return (
    <Section>
      <h2>{home.howAJobRuns.title}</h2>
      <ol className="mt-10 grid list-none grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {home.howAJobRuns.steps.map((step) => (
          <li key={step.number} className="flex min-w-0 flex-col">
            <p className="heading-text text-[1.375rem] leading-none text-ridgeway-deep">
              {step.number}
            </p>
            <h3 className="mt-3 min-h-[1.7em]">{step.title}</h3>
            <p className="mt-3 min-h-[4.8em]">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
