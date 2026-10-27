import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SignPanel } from "@/components/ui/SignPanel";
import { TextLink } from "@/components/ui/TextLink";
import { home } from "@/content/site";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ridgeway-deep">
      <Image
        src={home.hero.image}
        alt={home.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center]"
      />
      <Container className="relative py-8 md:py-16">
        <SignPanel className="md:max-w-[42rem]">
          <h1 className="hero-rise hero-rise-1">{home.hero.title}</h1>
          <p className="hero-rise hero-rise-2 mt-6">{home.hero.body}</p>
          <div className="hero-rise hero-rise-3 mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ButtonLink href={home.hero.primary.href} variant="inverted">
              {home.hero.primary.label}
            </ButtonLink>
            <TextLink href={home.hero.secondary.href} tone="paper">
              {home.hero.secondary.label}
            </TextLink>
          </div>
        </SignPanel>
      </Container>
    </section>
  );
}
