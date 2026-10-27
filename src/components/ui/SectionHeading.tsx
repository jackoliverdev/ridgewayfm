export function SectionHeading({
  title,
  intro,
  as: Heading = "h2",
}: {
  title: string;
  intro?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="min-w-0">
      <Heading>{title}</Heading>
      {intro ? <p className="mt-4">{intro}</p> : null}
    </div>
  );
}
