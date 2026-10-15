import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { divisions } from "@/lib/site";
import ShareRing from "./ShareRing";

export default function DivisionCards({ exclude }) {
  const items = divisions.filter((division) => division.id !== exclude);

  return (
    <div className={`division-cards division-cards--${items.length}`}>
      {items.map((division, i) => (
        <Link
          key={division.id}
          href={division.href}
          className="division-card"
          data-reveal
          style={{ "--reveal-delay": i }}
        >
          <div className="division-card__media">
            <Image
              src={division.image}
              alt={division.imageAlt}
              fill
              sizes="(max-width: 860px) 100vw, 33vw"
              className="division-card__image"
            />
          </div>

          <div className="division-card__body">
            <div className="division-card__top">
              <span className="kicker">
                {String(divisions.indexOf(division) + 1).padStart(2, "0")}
              </span>
              <ShareRing value={division.share} label="of our core classifications" />
            </div>

            <h3 className="subtitle">{division.title}</h3>
            <p className="body-copy">{division.summary}</p>

            <span className="text-link division-card__link">
              Explore {division.title.toLowerCase()}
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
