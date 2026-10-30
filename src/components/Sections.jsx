import { data } from "../data.js";
import { config } from "../config.js";

export function Nav() {
  return (
    <nav>
      <a href="#top" className="logo">Lumière <em>the Shine</em></a>
      <ul>
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#plans">Services</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="glow" />
      <div className="eyebrow">Photography Studio</div>
      <h1>Lumière<br /><em>the Shine</em></h1>
      <p>Food stories told through light — every plate, every texture, every shimmer, captured to make people hungry.</p>
      <a href="#work" className="btn">View Food Gallery</a>
    </header>
  );
}

export function About() {
  return (
    <section className="about" id="about">
      <div className="frame">L</div>
      <div>
        <div className="head" style={{ textAlign: "left", margin: 0 }}>
          <span>The Artist</span><h2>Light is the main ingredient</h2>
        </div>
        <p>Lumière the Shine is a photography studio that treats light as the secret ingredient. We start with food — styling, texture, steam and sparkle — to help restaurants, cafés, bakers and home chefs show their work at its most delicious.</p>
        <p>Soon, the studio expands into portraits, model portfolios, newborn sessions and more. The goal stays the same: make every frame glow.</p>
        <div className="stats">
          <div><b>100+</b><small>Dishes shot</small></div>
          <div><b>50+</b><small>Happy clients</small></div>
          <div><b>3+</b><small>Years</small></div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const items = [
    ["Menu Shoot", "Clean, bright shots of your signature dishes for menus, delivery apps and websites."],
    ["Brand Story", "Styled, moody, editorial imagery with props and ambience for social media and campaigns."],
    ["Reels & Video", "Short cinematic food clips — pours, steam, cheese pulls — made for Instagram."],
  ];
  return (
    <section id="plans">
      <div className="head"><span>Services</span><h2>Food Photography</h2></div>
      <div className="plans">
        {items.map(([t, d]) => <div className="plan" key={t}><h3>{t}</h3><p>{d}</p></div>)}
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section className="alt" id="pricing">
      <div className="head"><span>Packages</span><h2>Simple, Transparent Pricing</h2></div>
      <div className="plans">
        {data.pricing.map((x) => (
          <div key={x.n} className={`price ${x.pop ? "pop" : ""}`}>
            <h3>{x.n}</h3><b>{x.p}</b>
            <ul>{x.f.map((i) => <li key={i}>{i}</li>)}</ul>
            <a href="#contact" className={`btn ${x.pop ? "fill" : ""}`}>Book Now</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews">
      <div className="head"><span>Kind Words</span><h2>Loved by Food Brands</h2></div>
      <div className="revs">
        {data.reviews.map((r) => <div className="rev" key={r.a}><q>{r.q}</q><small>— {r.a}</small></div>)}
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="alt" id="faq">
      <div className="head"><span>Good to Know</span><h2>Questions, Answered</h2></div>
      <div className="faq">
        {data.faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </div>
    </section>
  );
}

export function Footer() {
  return <footer>© {new Date().getFullYear()} Lumière the Shine · All rights reserved</footer>;
}

export function WhatsApp() {
  const msg = encodeURIComponent("Hi Lumière the Shine, I'd like to book a food shoot.");
  return (
    <a className="wa" href={`https://wa.me/${config.whatsapp}?text=${msg}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">💬</a>
  );
}
