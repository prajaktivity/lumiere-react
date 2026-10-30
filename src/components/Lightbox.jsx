import { useEffect } from "react";
import Photo from "./Photo.jsx";

export default function Lightbox({ list, index, setIndex }) {
  const n = list.length;
  const close = () => setIndex(null);
  const go = (d) => setIndex((index + d + n) % n);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const p = list[index];
  return (
    <div className="lb open" onClick={(e) => e.target === e.currentTarget && close()}>
      <button className="x" onClick={close} aria-label="Close">×</button>
      <button className="pv" onClick={() => go(-1)} aria-label="Previous">‹</button>
      <button className="nx" onClick={() => go(1)} aria-label="Next">›</button>
      <div><Photo p={p} /></div>
      <p>{p.t}</p>
    </div>
  );
}
