import { BulletList } from "@/components/ui/BulletList";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { careers } from "@/content/careers";
import { email } from "@/content/site";

export function CareersVacancies() {
  const meta = careers.vacancyMeta;

  return (
    <Section id="vacancies" tone="mist" className="scroll-mt-24">
      <h2>{careers.vacanciesTitle}</h2>
      <div className="mt-10 flex flex-col gap-8">
        {careers.vacancies.map((role) => (
          <article
            key={role.title}
            className="rounded-[4px] border border-rule bg-paper p-6 md:p-10"
          >
            <h3>{role.title}</h3>
            <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 text-sm md:grid-cols-3">
              <div>
                <dt className="text-ink-soft">{meta.location}</dt>
                <dd>{role.location}</dd>
              </div>
              <div>
                <dt className="text-ink-soft">{meta.hours}</dt>
                <dd>{role.hours}</dd>
              </div>
              <div>
                <dt className="text-ink-soft">{meta.contract}</dt>
                <dd>{role.contract}</dd>
              </div>
            </dl>
            <p className="mt-6">{role.summary}</p>
            <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="min-w-0">
                <p className="font-bold text-ridgeway-deep">{meta.doTitle}</p>
                <BulletList items={role.duties} className="mt-3" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-ridgeway-deep">{meta.needTitle}</p>
                <BulletList items={role.needs} className="mt-3" />
              </div>
            </div>
            <ButtonLink
              href={`mailto:${email}?subject=${encodeURIComponent(role.applySubject)}`}
              className="mt-8"
            >
              {careers.applyLabel}
            </ButtonLink>
          </article>
        ))}
      </div>
    </Section>
  );
}
