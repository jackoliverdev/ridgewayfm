import { Container } from "@/components/ui/Container";
import { home } from "@/content/site";

export function FactStrip() {
  return (
    <section className="border-b border-rule bg-mist">
      <Container>
        <ul className="grid grid-cols-1 gap-px bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {home.facts.map((fact) => (
            <li key={fact.title} className="min-w-0 bg-mist py-6 sm:px-6 lg:py-8">
              <p className="heading-text text-[1.125rem] text-ridgeway-deep">
                {fact.title}
              </p>
              <p className="mt-1 text-sm">{fact.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
