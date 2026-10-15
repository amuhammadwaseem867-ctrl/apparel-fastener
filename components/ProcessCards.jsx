import Image from "next/image";
import { productionCycle } from "@/lib/site";

export default function ProcessCards() {
  return (
    <ol className="process-cards">
      {productionCycle.map((step, i) => (
        <li key={step.title} className="process-card" data-reveal style={{ "--reveal-delay": i }}>
          <div className="process-card__media">
            <Image
              src={step.image}
              alt={step.imageAlt}
              fill
              sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 25vw"
              className="process-card__image"
            />
            <span className="process-card__index">{String(i + 1).padStart(2, "0")}</span>
          </div>

          <h3>{step.title}</h3>
          <p className="body-copy">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
