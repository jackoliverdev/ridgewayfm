import { Section } from "@/components/ui/Section";
import { contact } from "@/content/site";

export function ContactRoutes() {
  return (
    <Section>
      <h2>{contact.routes.title}</h2>
      <ul className="mt-10 grid grid-cols-1 gap-px bg-rule sm:grid-cols-2 lg:grid-cols-4">
        {contact.routes.items.map((item) => (
          <li
            key={item.id}
            id={item.id}
            className="min-w-0 scroll-mt-24 bg-paper py-6 sm:px-6 lg:py-2"
          >
            <h3>{item.title}</h3>
            <p className="mt-3">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
