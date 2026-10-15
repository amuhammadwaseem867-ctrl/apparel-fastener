import Image from "next/image";
import { clients } from "@/lib/site";

const rows = [clients.slice(0, 12), clients.slice(12)];

function LogoGroup({ items, hidden = false }) {
  return (
    <ul className="marquee__group" aria-hidden={hidden || undefined}>
      {items.map((client) => (
        <li key={client.name} className={`marquee__logo ${client.onDark ? "marquee__logo--dark" : ""}`}>
          <Image src={client.logo} alt={hidden ? "" : client.name} width={180} height={80} />
        </li>
      ))}
    </ul>
  );
}

export default function ClientsMarquee() {
  return (
    <div className="marquee" data-reveal>
      {rows.map((row, i) => (
        <div key={i} className={`marquee__track ${i % 2 ? "marquee__track--reverse" : ""}`}>
          <LogoGroup items={row} />
          <LogoGroup items={row} hidden />
        </div>
      ))}
    </div>
  );
}
