import { useState, useEffect, useRef } from "react";
import { data } from "../data.js";
import Photo from "./Photo.jsx";
import Lightbox from "./Lightbox.jsx";

function Card({ p, i, onOpen }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.1 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`card ${+p.h > 1.2 ? "tall" : ""} ${seen ? "in" : ""}`}
      style={{ transitionDelay: `${(i % 3) * 0.12}s` }}
      onClick={() => onOpen(i)}
    >
      <Photo p={p} />
      <div className="cap"><small>{p.cat}</small><h3>{p.t}</h3></div>
    </div>
  );
}

export default function Gallery() {
  const [cat, setCat] = useState("Food");
  const [open, setOpen] = useState(null);
  const list = data.photos.filter((p) => p.cat === cat);

  return (
    <section id="work">
      <div className="head"><span>Portfolio</span><h2>Taste, Framed in Light</h2></div>
      <div className="filters">
        {data.categories.map((c) =>
          c.live || data.photos.some((p) => p.cat === c.name) ? (
            <button key={c.name} className={`chip ${c.name === cat ? "on" : ""}`} onClick={() => setCat(c.name)}>
              {c.name}
            </button>
          ) : (
            <span key={c.name} className="chip soon">{c.name}<small>soon</small></span>
          )
        )}
      </div>
      <div className="grid">
        {list.map((p, i) => <Card key={cat + p.t} p={p} i={i} onOpen={setOpen} />)}
      </div>
      {open !== null && <Lightbox list={list} index={open} setIndex={setOpen} />}
    </section>
  );
}
