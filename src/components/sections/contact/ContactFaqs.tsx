import { Hairline } from "@/components/ui/Hairline";
import { Section } from "@/components/ui/Section";
import { contact } from "@/content/site";

export function ContactFaqs() {
  return (
    <Section tone="mist">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-x-8">
        <h2 className="min-w-0 md:col-span-4">{contact.faqsTitle}</h2>
        <dl className="min-w-0 md:col-span-8">
          {contact.faqs.map((item, index) => (
            <div key={item.question}>
              {index > 0 ? <Hairline className="my-6" /> : null}
              <dt className="heading-text text-[1.375rem] leading-[1.25] text-ridgeway-deep">
                {item.question}
              </dt>
              <dd className="mt-3">
                <p>{item.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
