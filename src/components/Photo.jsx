// Shows a real photo, or a coloured placeholder when src is empty.
export default function Photo({ p }) {
  return p.src ? (
    <img className="ph" src={p.src} alt={p.t} loading="lazy" />
  ) : (
    <div className="ph fake" style={{ "--h": p.hue, aspectRatio: `1/${p.h}` }} />
  );
}
