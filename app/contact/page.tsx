"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", phone:"", email:"", message:"" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name:"", phone:"", email:"", message:"" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <PageHero tag="Get In Touch" title="CONTACT" accent="US"
        sub="Have a question? Want to visit? We'd love to hear from you." />

      <section className="section-overlay noise-bg" style={{ padding:"100px 5%", background:"#0A0A0A", position:"relative" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", position:"relative", zIndex:1,
          display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:64 }}>

          {/* Contact info */}
          <div>
            <Reveal variant="fadeLeft">
              <div className="section-tag">Find Us</div>
              <h2 className="section-title">WE'RE RIGHT<br />
                <span style={{ color:"#D4AF37" }}>HERE FOR YOU.</span>
              </h2>
            </Reveal>
            <div style={{ display:"flex", flexDirection:"column", gap:22, marginTop:8 }}>
              {[
                ["📍","Address","Brookefield, Bangalore, Karnataka"],
                ["📞","Phone","+91 99999 99999"],
                ["📧","Email","info@barbellcartel.in"],
                ["🕒","Hours","Mon–Sat: 5:00 AM – 10:00 PM\nSun: 6:00 AM – 8:00 PM"],
              ].map(([icon, label, value], i) => (
                <Reveal key={label} variant="fadeLeft" delay={i * 80}>
                  <div style={{ display:"flex", gap:16, alignItems:"flex-start" }}>
                    <div style={{ width:44, height:44, background:"rgba(212,175,55,0.07)",
                      border:"1px solid rgba(212,175,55,0.15)", display:"flex",
                      alignItems:"center", justifyContent:"center", fontSize:"1.2rem", flexShrink:0 }}>
                      {icon}
                    </div>
                    <div>
                      <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700,
                        fontSize:"0.75rem", letterSpacing:"0.2em", textTransform:"uppercase",
                        color:"#D4AF37", marginBottom:4 }}>{label}</div>
                      <div style={{ color:"#aaa", fontSize:"0.9rem", lineHeight:1.7,
                        whiteSpace:"pre-line" }}>{value}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <Reveal variant="fadeRight">
            <div style={{ background:"#111", border:"1px solid rgba(212,175,55,0.2)",
              padding:"44px 36px", boxShadow:"0 0 40px rgba(212,175,55,0.05)" }}>
              <h3 style={{ fontFamily:"'Anton',sans-serif", fontSize:"1.8rem",
                color:"#F0F0F0", letterSpacing:"0.05em", marginBottom:28 }}>
                SEND A <span style={{ color:"#D4AF37" }}>MESSAGE</span>
              </h3>
              {sent ? (
                <div style={{ textAlign:"center", padding:"48px 0" }}>
                  <div style={{ fontSize:"3.5rem", marginBottom:16 }}>✅</div>
                  <div style={{ fontFamily:"'Anton',sans-serif", fontSize:"1.8rem",
                    color:"#D4AF37", marginBottom:8 }}>MESSAGE SENT!</div>
                  <p style={{ color:"#888" }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:16 }}>
                  <input className="input-field" placeholder="Full Name *"
                    value={form.name} onChange={e => setForm({...form, name:e.target.value})} required />
                  <input className="input-field" type="tel" placeholder="Phone Number *"
                    value={form.phone} onChange={e => setForm({...form, phone:e.target.value})} required />
                  <input className="input-field" type="email" placeholder="Email Address"
                    value={form.email} onChange={e => setForm({...form, email:e.target.value})} />
                  <textarea className="input-field" placeholder="Your message..." rows={4}
                    value={form.message} onChange={e => setForm({...form, message:e.target.value})}
                    style={{ resize:"vertical" }} />
                  <button type="submit" className="btn-primary"
                    style={{ clipPath:"none", fontSize:"1rem", marginTop:8 }}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}