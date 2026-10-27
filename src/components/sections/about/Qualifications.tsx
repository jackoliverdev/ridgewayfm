import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/content/site";

export function Qualifications() {
  return (
    <Section>
      <SectionHeading
        title={about.qualifications.title}
        intro={about.qualifications.intro}
      />
      <dl className="mt-10 grid grid-cols-1 border-t border-rule md:grid-cols-2 md:gap-x-8">
        {about.qualifications.items.map((item) => (
          <div key={item.title} className="min-w-0 border-b border-rule py-5">
            <dt className="font-bold text-ridgeway-deep">{item.title}</dt>
            <dd className="mt-1">{item.body}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
