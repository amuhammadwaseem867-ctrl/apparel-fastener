const RADIUS = 26;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ShareRing({ value, label }) {
  return (
    <div className="share-ring" role="img" aria-label={`${value}% ${label}`}>
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle className="share-ring__track" cx="32" cy="32" r={RADIUS} />
        <circle
          className="share-ring__value"
          cx="32"
          cy="32"
          r={RADIUS}
          strokeDasharray={`${(value / 100) * CIRCUMFERENCE} ${CIRCUMFERENCE}`}
        />
      </svg>
      <span>{value}%</span>
    </div>
  );
}
