import { useState } from "react";
import { config } from "../config.js";

export default function Contact() {
  const [f, setF] = useState({ name: "", contact: "", msg: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(`Name: ${f.name}\nContact: ${f.contact}\n\n${f.msg}`);
    const subject = encodeURIComponent("Shoot enquiry — Lumière the Shine");
    window.location.href = `mailto:${config.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="head" style={{ margin: 0 }}><span>Let's Create</span><h2>Book a Shoot</h2></div>
      <p style={{ color: "var(--mu)", marginTop: 12 }}>Tell us about your project and we'll get back to you.</p>
      <form onSubmit={submit}>
        <input placeholder="Your name" required value={f.name} onChange={set("name")} />
        <input placeholder="Email or phone" required value={f.contact} onChange={set("contact")} />
        <textarea rows="4" placeholder="What would you like shot?" required value={f.msg} onChange={set("msg")} />
        <button className="btn fill" type="submit">Send Enquiry</button>
      </form>
      <a className="ig" href={config.instagram} target="_blank" rel="noopener noreferrer">@lumiere the shine on Instagram →</a>
      <div className="igs">
        {[28, 18, 345, 100, 48, 310].map((h) => (
          <a key={h} href={config.instagram} target="_blank" rel="noopener noreferrer" style={{ "--h": h }} aria-label="Instagram" />
        ))}
      </div>
    </section>
  );
}
