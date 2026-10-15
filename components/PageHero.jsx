import Image from "next/image";

/*
  Full-bleed photographic hero used at the top of every page.
  `data-hero` lets the header render transparently above it.
*/
export default function PageHero({
  index,
  label,
  title,
  lead,
  image,
  imageAlt,
  imagePosition = "center",
  actions,
  meta,
  size = "default",
}) {
  return (
    <section className={`page-hero page-hero--${size}`} data-hero>
      <div className="page-hero__media">
        <Image
          src={image}
          alt={imageAlt}
          fill
          preload
          quality={90}
          sizes="100vw"
          className="page-hero__image"
          style={{ objectPosition: imagePosition }}
        />
        <div className="page-hero__overlay" />
      </div>

      <div className="container page-hero__content">
        <span className="eyebrow page-hero__eyebrow">
          {index && <span className="eyebrow__index">{index}</span>}
          <span className="eyebrow__line" />
          {label}
        </span>

        <div className="page-hero__main">
          <h1 className="display page-hero__title">
            {title.map((line, i) => (
              <span key={i} style={{ "--i": i }}>
                {line}
              </span>
            ))}
          </h1>

          {(lead || actions) && (
            <div className="page-hero__side">
              {lead && <p>{lead}</p>}
              {actions && <div className="btn-row">{actions}</div>}
            </div>
          )}
        </div>
      </div>

      {meta && (
        <div className="page-hero__meta">
          <div className="container page-hero__meta-inner">
            {meta.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
