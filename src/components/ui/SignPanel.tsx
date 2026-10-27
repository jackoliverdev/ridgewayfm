export function SignPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`sign-panel relative rounded-[4px] bg-ridgeway p-7 text-paper md:p-10 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-2 rounded-[2px] border-2 border-paper"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
