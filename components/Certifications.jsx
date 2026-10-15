import { ShieldCheck } from "lucide-react";
import { certifications } from "@/lib/site";

export default function Certifications({ only }) {
  const items = only
    ? certifications.filter((item) => only.includes(item.name))
    : certifications;

  return (
    <ul className={`cert-grid cert-grid--${items.length}`}>
      {items.map((item, i) => (
        <li key={item.name} className="cert-grid__item" data-reveal style={{ "--reveal-delay": i % 4 }}>
          <ShieldCheck size={20} strokeWidth={1.5} aria-hidden="true" />
          <strong>{item.name}</strong>
          <span>{item.detail}</span>
        </li>
      ))}
    </ul>
  );
}
