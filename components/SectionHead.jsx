export default function SectionHead({ index, label, title, intro, id }) {
  return (
    <div className={`section-head ${intro ? "section-head--split" : ""}`}>
      <div data-reveal>
        <span className="eyebrow">
          {index && <span className="eyebrow__index">{index}</span>}
          <span className="eyebrow__line" />
          {label}
        </span>

        <h2 id={id} className="title section-head__title">
          {title}
        </h2>
      </div>

      {intro && (
        <div className="section-head__intro" data-reveal style={{ "--reveal-delay": 2 }}>
          {typeof intro === "string" ? <p className="body-copy">{intro}</p> : intro}
        </div>
      )}
    </div>
  );
}
