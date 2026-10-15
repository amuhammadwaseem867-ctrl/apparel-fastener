import {
  BookOpen,
  Brain,
  ClipboardCheck,
  FlaskConical,
  Handshake,
  Network,
  Recycle,
  Scale,
  Zap,
} from "lucide-react";

const ICONS = {
  knowledge: BookOpen,
  intelligence: Brain,
  integrity: Handshake,
  ethics: Scale,
  networking: Network,
  responsibility: ClipboardCheck,
  energy: Zap,
  waste: Recycle,
  process: FlaskConical,
};

/*
  Bordered grid of titled cells. Cells show an icon when the item
  has one, otherwise a two-digit index.
*/
export default function FeatureGrid({ items, columns = 3 }) {
  return (
    <ul className={`feature-grid feature-grid--${columns}`}>
      {items.map((item, i) => {
        const Icon = ICONS[item.icon];

        return (
          <li
            key={item.title}
            className="feature-grid__item"
            data-reveal
            style={{ "--reveal-delay": i % columns }}
          >
            {Icon ? (
              <span className="feature-grid__icon">
                <Icon size={22} strokeWidth={1.5} />
              </span>
            ) : (
              <span className="feature-grid__index">{String(i + 1).padStart(2, "0")}</span>
            )}

            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        );
      })}
    </ul>
  );
}
