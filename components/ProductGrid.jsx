import Image from "next/image";

export default function ProductGrid({ items }) {
  return (
    <ul className="product-grid">
      {items.map((item, i) => (
        <li key={item.name} className="product-card" data-reveal style={{ "--reveal-delay": i % 3 }}>
          <div className="product-card__media">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 760px) 50vw, 33vw"
              className="product-card__image"
            />
          </div>
          <div className="product-card__label">
            <span className="kicker">{String(i + 1).padStart(2, "0")}</span>
            <h3>{item.name}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
}
