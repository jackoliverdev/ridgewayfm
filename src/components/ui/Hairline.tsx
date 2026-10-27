export function Hairline({
  orientation = "horizontal",
  className = "",
}: {
  orientation?: "horizontal" | "vertical";
  className?: string;
}) {
  const shape = orientation === "vertical" ? "w-px self-stretch" : "h-px w-full";

  return <div aria-hidden="true" className={`bg-rule ${shape} ${className}`} />;
}
