import { Container } from "@/components/ui/Container";

export function Section({
  children,
  tone = "paper",
  className = "",
  id,
}: {
  children: React.ReactNode;
  tone?: "paper" | "mist";
  className?: string;
  id?: string;
}) {
  const background = tone === "mist" ? "bg-mist" : "bg-paper";

  return (
    <section id={id} className={`py-16 md:py-24 ${background} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
