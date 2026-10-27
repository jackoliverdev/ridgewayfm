import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { about } from "@/content/site";

export function AboutIntro() {
  return (
    <Section>
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
        <div className="min-w-0 md:col-span-7">
          <h1>{about.title}</h1>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6">
              {paragraph}
            </p>
          ))}
        </div>
        <Image
          src={about.image}
          alt={about.imageAlt}
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
