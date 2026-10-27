import { Hairline } from "@/components/ui/Hairline";

export function RowList({
  items,
  titleSpan = "md:col-span-4",
  bodySpan = "md:col-span-8",
  className = "",
}: {
  items: { title: string; body: string }[];
  titleSpan?: string;
  bodySpan?: string;
  className?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={item.title}>
          {index > 0 ? <Hairline /> : null}
          <div className="grid grid-cols-1 gap-2 py-6 md:grid-cols-12 md:gap-8">
            <h3 className={`min-w-0 ${titleSpan}`}>{item.title}</h3>
            <p className={`min-w-0 ${bodySpan}`}>{item.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
