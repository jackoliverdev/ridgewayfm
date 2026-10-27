export function BulletList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-col gap-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-[0.6em] h-2 w-2 shrink-0 bg-ridgeway"
          />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}
