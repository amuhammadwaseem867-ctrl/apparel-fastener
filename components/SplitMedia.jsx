import Image from "next/image";

export default function SplitMedia({ image, imageAlt, reverse = false, caption, children }) {
  return (
    <div className={`split-media ${reverse ? "split-media--reverse" : ""}`}>
      <figure className="split-media__figure" data-reveal>
        <div className="split-media__frame">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="split-media__image"
          />
        </div>
        {caption && <figcaption className="kicker">{caption}</figcaption>}
      </figure>

      <div className="split-media__body" data-reveal style={{ "--reveal-delay": 2 }}>
        {children}
      </div>
    </div>
  );
}
