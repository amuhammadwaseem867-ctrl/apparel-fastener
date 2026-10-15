export default function Stats({ items }) {
  return (
    <dl className="stats">
      {items.map((item, i) => (
        <div key={item.label} className="stats__item" data-reveal style={{ "--reveal-delay": i }}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
