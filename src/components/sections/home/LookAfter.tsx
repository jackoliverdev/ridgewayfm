import { Fragment } from "react";
import { BulletList } from "@/components/ui/BulletList";
import { Hairline } from "@/components/ui/Hairline";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { home } from "@/content/site";

export function LookAfter() {
  return (
    <Section>
      <SectionHeading title={home.lookAfter.title} intro={home.lookAfter.intro} />
      <div className="mt-10 flex flex-col md:mt-12 md:flex-row md:items-stretch">
        {home.lookAfter.items.map((item, index) => (
          <Fragment key={item.title}>
            {index > 0 ? <Hairline className="my-8 md:hidden" /> : null}
            {index > 0 ? (
              <Hairline
                orientation="vertical"
                className="mx-8 hidden md:block"
              />
            ) : null}
            <div className="min-w-0 md:flex-1">
              <h3>{item.title}</h3>
              <p className="mt-3">{item.body}</p>
              <BulletList items={item.includes} className="mt-5" />
            </div>
          </Fragment>
        ))}
      </div>
      <div className="mt-10 md:mt-12">
        <TextLink href={home.lookAfter.link.href}>
          {home.lookAfter.link.label}
        </TextLink>
      </div>
    </Section>
  );
}
