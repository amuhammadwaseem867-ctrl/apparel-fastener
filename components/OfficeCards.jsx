import { MapPin, Phone } from "lucide-react";
import { offices } from "@/lib/site";

export default function OfficeCards() {
  return (
    <ul className="office-cards">
      {offices.map((office, i) => (
        <li key={office.id} className="office-card" data-reveal style={{ "--reveal-delay": i }}>
          <div className="office-card__top">
            <span className="kicker">{String(i + 1).padStart(2, "0")}</span>
            <span className="kicker">{office.label}</span>
          </div>

          <h3 className="subtitle">{office.city}</h3>

          <address>
            <MapPin size={16} strokeWidth={1.5} aria-hidden="true" />
            <span>
              {office.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </span>
          </address>

          <a href={`tel:${office.tel}`} className="office-card__phone">
            <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
            {office.phone}
          </a>
        </li>
      ))}
    </ul>
  );
}
