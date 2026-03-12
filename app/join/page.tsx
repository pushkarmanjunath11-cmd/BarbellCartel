"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PLANS } from "@/lib/data";
import Link from "next/link";

function CustomSelect({ value, onChange, placeholder, options }: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: { label: string; value: string }[];
}) {
  const [open, setOpen] = useState(false);
  const selected = options.find(o => o.value === value);

  return (
    <div style={{ position: "relative" }}>
      <div onClick={() => setOpen(!open)} style={{
        width: "100%",
        background: "rgba(212,175,55,0.04)",
        border: `1px solid ${open ? "#D4AF37" : "rgba(212,175,55,0.15)"}`,
        color: selected ? "#F0F0F0" : "#555",
        padding: "14px 18px",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.95rem",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "border-color 0.3s",
        userSelect: "none",
      }}>
        <span>{selected ? selected.label : placeholder}</span>
        <span style={{
          color: "#D4AF37", fontSize: "0.75rem",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s",
        }}>▼</span>
      </div>

      {open && (
        <>
          {/* Click outside to close */}
          <div onClick={() => setOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 998 }} />
          <div style={{
            position: "absolute", top: "calc(100% + 2px)", left: 0, right: 0,
            zIndex: 999, background: "#1A1A1A",
            border: "1px solid rgba(212,175,55,0.3)",
            maxHeight: 220, overflowY: "auto",
            boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
          }}>
            {options.map(opt => (
              <div key={opt.value}
                onClick={() => { onChange(opt.value); setOpen(false); }}
                style={{
                  padding: "13px 18px",
                  color: opt.value === value ? "#D4AF37" : "#ccc",
                  fontSize: "0.92rem",
                  cursor: "pointer",
                  background: opt.value === value ? "rgba(212,175,55,0.1)" : "transparent",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.15s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.12)";
                  (e.currentTarget as HTMLElement).style.color = "#D4AF37";
                  (e.currentTarget as HTMLElement).style.paddingLeft = "24px";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = opt.value === value ? "rgba(212,175,55,0.1)" : "transparent";
                  (e.currentTarget as HTMLElement).style.color = opt.value === value ? "#D4AF37" : "#ccc";
                  (e.currentTarget as HTMLElement).style.paddingLeft = "18px";
                }}>
                {opt.label}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function JoinPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", goal: "", plan: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "", goal: "", plan: "" });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <>
      <PageHero tag="Start Today" title="JOIN" accent="THE CARTEL"
        sub="Your first session is completely free. No pressure — just results." />

      <section className="section-overlay noise-bg" style={{ padding: "100px 5%", background: "#0A0A0A", position: "relative" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1,
          display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: 56, alignItems: "start",
        }}>

          {/* Benefits */}
          <div>
            <Reveal variant="fadeLeft">
              <div className="section-tag">What You Get</div>
              <h2 className="section-title">FREE TRIAL<br />
                <span style={{ color: "#D4AF37" }}>INCLUDES:</span>
              </h2>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 44 }}>
              {[
                ["🏋️", "Full Day Gym Access",    "Use every machine and zone — no restrictions."],
                ["📋", "Fitness Assessment",      "Understand your current fitness level and goals."],
                ["👤", "Trainer Walk-through",    "A certified coach shows you around and guides you."],
                ["🥗", "Nutrition Consult",       "Basic diet advice to get you started right."],
                ["💬", "No Sales Pressure",       "No hard sell. You decide if it's right for you."],
              ].map(([ic, title, desc], i) => (
                <Reveal key={title} variant="fadeLeft" delay={i * 80}>
                  <div style={{
                    display: "flex", gap: 14, background: "#111",
                    border: "1px solid rgba(212,175,55,0.12)", padding: "16px 18px",
                    transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                  }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(212,175,55,0.4)";
                      el.style.transform = "translateX(6px)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(212,175,55,0.12)";
                      el.style.transform = "translateX(0)";
                    }}>
                    <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{ic}</span>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
                        fontSize: "0.95rem", color: "#F0F0F0", letterSpacing: "0.06em" }}>{title}</div>
                      <div style={{ fontSize: "0.83rem", color: "#888", marginTop: 3 }}>{desc}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="fadeUp" delay={400}>
              <div style={{ background: "#111", border: "1px solid rgba(212,175,55,0.12)", padding: "22px 24px" }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
                  fontSize: "0.8rem", letterSpacing: "0.2em", color: "#D4AF37", marginBottom: 14 }}>
                  MEMBERSHIP FROM
                </div>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  {PLANS.map(p => (
                    <div key={p.name} style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: "'Anton',sans-serif", fontSize: "1.3rem",
                        color: p.popular ? "#D4AF37" : "#F0F0F0" }}>{p.price}</div>
                      <div style={{ fontSize: "0.72rem", color: "#666", marginTop: 2 }}>{p.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal variant="fadeRight">
            <div style={{
              background: "#111", border: "1.5px solid #D4AF37", padding: "44px 36px",
              boxShadow: "0 0 60px rgba(212,175,55,0.1)", position: "sticky", top: 100,
            }}>
              <h3 style={{ fontFamily: "'Anton',sans-serif", fontSize: "2rem",
                color: "#F0F0F0", letterSpacing: "0.04em", marginBottom: 6 }}>CLAIM YOUR</h3>
              <h3 style={{ fontFamily: "'Anton',sans-serif", fontSize: "2rem",
                color: "#D4AF37", letterSpacing: "0.04em", marginBottom: 28 }}>FREE TRIAL</h3>

              {submitted ? (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <div style={{ fontSize: "4rem", marginBottom: 18 }}>🎉</div>
                  <div style={{ fontFamily: "'Anton',sans-serif", fontSize: "2rem",
                    color: "#D4AF37", marginBottom: 10 }}>YOU'RE IN!</div>
                  <p style={{ color: "#888", lineHeight: 1.7 }}>
                    We'll call you within a few hours to schedule your free trial. Get ready! 💪
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <input className="input-field" placeholder="Full Name *"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                  <input className="input-field" type="tel" placeholder="Phone Number *"
                    value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
                  <input className="input-field" type="email" placeholder="Email Address"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />

                  <CustomSelect
                    value={form.goal}
                    onChange={v => setForm({ ...form, goal: v })}
                    placeholder="Select Fitness Goal"
                    options={[
                      { label: "Weight Loss",       value: "weight-loss"  },
                      { label: "Muscle Gain",       value: "muscle-gain"  },
                      { label: "Strength Training", value: "strength"     },
                      { label: "Powerlifting",      value: "powerlifting" },
                      { label: "General Fitness",   value: "general"      },
                    ]}
                  />

                  <CustomSelect
                    value={form.plan}
                    onChange={v => setForm({ ...form, plan: v })}
                    placeholder="Interested In (optional)"
                    options={PLANS.map(p => ({
                      label: `${p.name} — ${p.price}${p.period}`,
                      value: p.name,
                    }))}
                  />

                  <button type="submit" className="btn-primary"
                    style={{ clipPath: "none", fontSize: "1.05rem", marginTop: 6, padding: 16 }}>
                    Book My Free Trial →
                  </button>
                  <p style={{ fontSize: "0.78rem", color: "#555", textAlign: "center" }}>
                    No credit card required. We'll call you to confirm.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}