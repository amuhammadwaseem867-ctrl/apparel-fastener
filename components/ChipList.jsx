export default function ChipList({ items, label }) {
  return (
    <ul className="chip-list" aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
