export function SignPanel({
  children,
  className = "",
  fill = false,
}: {
  children: React.ReactNode;
  className?: string;
  fill?: boolean;
}) {
  return (
    <div
      className={`sign-panel relative rounded-[4px] bg-ridgeway p-7 text-paper md:p-10 ${fill ? "h-full" : ""} ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-2 rounded-[2px] border-2 border-paper"
      />
      <div className={fill ? "relative flex h-full flex-col" : "relative"}>
        {children}
      </div>
    </div>
  );
}
