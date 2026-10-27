import { DataTable } from "@/components/ui/DataTable";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { terms } from "@/content/site";

export function TermsBody() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-x-8">
        <nav aria-label="Sections" className="hidden min-w-0 md:col-span-3 md:block">
          <div className="md:sticky md:top-28">
            <ul className="flex flex-col">
              {terms.sections.map((section, index) => (
                <li key={section.title}>
                  <a
                    href={`#terms-${index + 1}`}
                    className="inline-flex min-h-9 items-center text-sm text-ridgeway underline-offset-4 hover:underline"
                  >
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="min-w-0 md:col-span-9">
          <h1>{terms.title}</h1>
          <p className="mt-8 text-sm text-ink-soft">{terms.updated}</p>
          <p className="mt-6">{terms.intro}</p>
          {terms.sections.map((section, index) => (
            <div
              key={section.title}
              id={`terms-${index + 1}`}
              className="mt-12 scroll-mt-28 border-t border-rule pt-8"
            >
              <h2 className="text-[1.75rem] leading-[1.15]">
                {index + 1}. {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4">
                  {paragraph}
                </p>
              ))}
              {section.table ? (
                <DataTable
                  caption={section.table.caption}
                  columns={section.table.columns}
                  rows={section.table.rows}
                  className="mt-6"
                />
              ) : null}
            </div>
          ))}
          <div className="mt-12 md:mt-16">
            <TextLink href={terms.contact.href}>{terms.contact.label}</TextLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
