import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { careers } from "@/content/careers";

export function CareersIntro() {
  return (
    <Section>
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
        <div className="min-w-0 md:col-span-7">
          <h1>{careers.title}</h1>
          {careers.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6">
              {paragraph}
            </p>
          ))}
          <div className="mt-6">
            <TextLink href="#vacancies">{careers.vacanciesTitle}</TextLink>
          </div>
        </div>
        <Image
          src={careers.image}
          alt={careers.imageAlt}
          width={1280}
          height={720}
          priority
          sizes="(min-width: 768px) 420px, 100vw"
          className="aspect-[4/3] w-full rounded-[2px] object-cover md:col-span-5"
        />
      </div>
    </Section>
  );
}
