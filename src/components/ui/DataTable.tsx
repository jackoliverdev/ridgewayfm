export function DataTable({
  caption,
  columns,
  rows,
  className = "",
}: {
  caption: string;
  columns: string[];
  rows: string[][];
  className?: string;
}) {
  return (
    <table className={`response-table ${className}`}>
      <caption>{caption}</caption>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} scope="col">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.join("|")}>
            {row.map((cell, index) =>
              index === 0 ? (
                <th key={columns[index]} scope="row" data-label={columns[index]}>
                  {cell}
                </th>
              ) : (
                <td key={columns[index]} data-label={columns[index]}>
                  {cell}
                </td>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
