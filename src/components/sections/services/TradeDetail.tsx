import Image from "next/image";
import { notFound } from "next/navigation";
import { BulletList } from "@/components/ui/BulletList";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DataTable } from "@/components/ui/DataTable";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { trades } from "@/content/services";

export function TradeDetail({ slug }: { slug: string }) {
  const trade = trades.items.find((item) => item.slug === slug);

  if (!trade) {
    notFound();
  }

  return (
    <>
      <Section>
        <TextLink href="/services">{trades.back}</TextLink>
        <div className="mt-8 grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="min-w-0 md:col-span-7">
            <h1>{trade.title}</h1>
            {trade.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-6">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="min-w-0 md:col-span-5">
            <Image
              src={trade.image}
              alt={trade.imageAlt}
              width={1152}
              height={864}
              priority
              sizes="(min-width: 768px) 420px, 100vw"
              className="aspect-[4/3] w-full rounded-[2px] object-cover"
            />
            <h2 className="mt-8 text-[1.375rem] leading-[1.25]">
              {trades.coversTitle}
            </h2>
            <BulletList items={trade.covers} className="mt-4" />
          </div>
        </div>
      </Section>
      <Section tone="mist">
        <SectionHeading title={trades.tasksTitle} intro={trades.tasksIntro} />
        <DataTable
          caption={`${trade.title}: planned maintenance tasks`}
          columns={trades.tasksColumns}
          rows={trade.tasks.map((item) => [item.task, item.frequency])}
          className="mt-8 bg-paper md:mt-12"
        />
      </Section>
      <Section>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
          <div className="min-w-0">
            <h2>{trades.safetyTitle}</h2>
            <BulletList items={trade.safety} className="mt-6" />
          </div>
          <div className="min-w-0">
            <h2>{trades.recordsTitle}</h2>
            <p className="mt-6">{trade.records}</p>
          </div>
        </div>
      </Section>
      <Section className="border-t border-rule">
        <div className="flex flex-col items-start gap-8 md:flex-row md:justify-between md:gap-12">
          <SectionHeading title={trades.closing.title} intro={trades.closing.body} />
          <ButtonLink href={trades.contact.href} className="shrink-0">
            {trades.contact.label}
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
