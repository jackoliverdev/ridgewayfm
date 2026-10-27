import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { email, notFoundPage } from "@/content/site";

export function NotFoundBody() {
  const parts = notFoundPage.body.split(email);

  return (
    <Section>
      <h1>{notFoundPage.title}</h1>
      <p className="mt-6">
        {parts.length === 2 ? (
          <>
            {parts[0]}
            <TextLink href={`mailto:${email}`}>{email}</TextLink>
            {parts[1]}
          </>
        ) : (
          notFoundPage.body
        )}
      </p>
      <div className="mt-8">
        <ButtonLink href={notFoundPage.home.href} variant="primary">
          {notFoundPage.home.label}
        </ButtonLink>
      </div>
    </Section>
  );
}
