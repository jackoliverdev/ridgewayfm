import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactPanel } from "@/components/sections/contact/ContactPanel";
import { Section } from "@/components/ui/Section";
import { contact } from "@/content/site";

export function ContactSection() {
  return (
    <Section tone="mist">
      <div className="grid grid-cols-1 items-stretch gap-12 md:grid-cols-12">
        <div className="min-w-0 md:col-span-5">
          <ContactPanel />
        </div>
        <div className="min-w-0 self-stretch md:col-span-7">
          <h2 className="text-[1.375rem] leading-[1.25]">{contact.formTitle}</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
