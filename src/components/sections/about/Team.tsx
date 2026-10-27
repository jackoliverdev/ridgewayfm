import Image from "next/image";
import { RowList } from "@/components/ui/RowList";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/content/site";
import { engineers, team } from "@/content/team";

export function Team() {
  return (
    <Section>
      <SectionHeading title={about.teamTitle} intro={about.teamIntro} />
      <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4">
        {team.map((person) => (
          <li key={person.name}>
            <Image
              src={person.image}
              alt={`${person.name}, ${person.role}`}
              width={1024}
              height={1024}
              sizes="(min-width: 1024px) 250px, (min-width: 768px) 30vw, 45vw"
              className="aspect-square w-full rounded-[2px] object-cover"
            />
            <p className="mt-4 font-bold">{person.name}</p>
            <p className="text-sm text-ink-soft">{person.role}</p>
            <p className="mt-2">{person.line}</p>
          </li>
        ))}
      </ul>
      <h3 className="mt-16">{about.engineersTitle}</h3>
      <RowList
        items={engineers.map((engineer) => ({
          title: engineer.name,
          body: engineer.trade,
        }))}
        className="mt-2"
      />
    </Section>
  );
}
