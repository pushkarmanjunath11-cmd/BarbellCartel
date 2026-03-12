"use client";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PLANS } from "@/lib/data";
import Link from "next/link";

export default function MembershipPage() {
  return (
    <>
      <PageHero tag="Simple Pricing" title="MEMBERSHIP" accent="PLANS"
        sub="Transparent pricing, zero hidden fees. Pick your plan and start today." />

      <section className="section-overlay noise-bg" style={{ padding:"100px 5%", background:"#0A0A0A", position:"relative" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", position:"relative", zIndex:1 }}>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))", gap:24 }}>
            {PLANS.map((p, i) => (
              <Reveal key={i} variant="fadeUp" delay={i * 120}>
                <div style={{
                  background: p.popular
                    ? "linear-gradient(160deg,rgba(139,0,0,0.2),rgba(212,175,55,0.08))"
                    : "#111",
                  border: p.popular ? "1.5px solid #D4AF37" : "1px solid rgba(212,175,55,0.15)",
                  padding:"40px 32px", position:"relative",
                  boxShadow: p.popular ? "0 0 50px rgba(212,175,55,0.12)" : "none",
                  transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-12px) scale(1.02)";
                  el.style.boxShadow = "0 30px 80px rgba(212,175,55,0.18)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0) scale(1)";
                  el.style.boxShadow = p.popular ? "0 0 50px rgba(212,175,55,0.12)" : "none";
                }}>
                  {p.popular && (
                    <div style={{ position:"absolute", top:0, right:0, background:"#D4AF37",
                      color:"#0A0A0A", padding:"5px 20px", fontFamily:"'Anton',sans-serif",
                      fontSize:"0.72rem", letterSpacing:"0.15em" }}>MOST POPULAR</div>
                  )}
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700,
                    fontSize:"0.82rem", letterSpacing:"0.25em", textTransform:"uppercase",
                    color: p.popular ? "#D4AF37" : "#666", marginBottom:20 }}>{p.name}</div>
                  <div style={{ fontFamily:"'Anton',sans-serif", fontSize:"3.5rem",
                    color:"#F0F0F0", lineHeight:1, marginBottom:4 }}>{p.price}</div>
                  <div style={{ fontSize:"0.82rem", color:"#555", marginBottom:32 }}>{p.period}</div>
                  <div style={{ height:1,
                    background: p.popular ? "rgba(212,175,55,0.2)" : "rgba(212,175,55,0.08)",
                    marginBottom:28 }} />
                  {p.features.map((f, j) => (
                    <div key={j} style={{ display:"flex", gap:12, marginBottom:14, alignItems:"flex-start" }}>
                      <span style={{ color: p.popular ? "#D4AF37" : "#8B0000", flexShrink:0 }}>✓</span>
                      <span style={{ fontSize:"0.92rem", color:"#aaa", lineHeight:1.5 }}>{f}</span>
                    </div>
                  ))}
                  <Link href="/join" style={{
                    display:"block", textAlign:"center", marginTop:32, padding:"15px",
                    fontFamily:"'Anton',sans-serif", fontSize:"0.95rem", letterSpacing:"0.1em",
                    textTransform:"uppercase", textDecoration:"none", transition:"all 0.25s",
                    ...(p.popular
                      ? { background:"#D4AF37", color:"#0A0A0A" }
                      : { background:"transparent", color:"#D4AF37", border:"1.5px solid #D4AF37" }
                    ),
                  }}>Get Started →</Link>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Included in all plans */}
          <Reveal variant="fadeUp" delay={200} style={{ marginTop:56 }}>
            <div style={{ background:"#111", border:"1px solid rgba(212,175,55,0.12)", padding:"36px 40px" }}>
              <h3 style={{ fontFamily:"'Anton',sans-serif", fontSize:"1.4rem", color:"#F0F0F0",
                letterSpacing:"0.06em", marginBottom:24 }}>
                INCLUDED IN <span style={{ color:"#D4AF37" }}>ALL PLANS</span>
              </h3>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:16 }}>
                {["Access to all gym zones","Expert trainer guidance","AC facility",
                  "Parking available","Motivational environment","Clean locker rooms"].map(item => (
                  <div key={item} style={{ display:"flex", gap:10, alignItems:"center",
                    fontSize:"0.9rem", color:"#aaa" }}>
                    <span style={{ color:"#D4AF37" }}>✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* FAQ */}
          <div style={{ marginTop:56 }}>
            <Reveal variant="fadeUp">
              <div className="section-tag">FAQ</div>
              <h2 className="section-title" style={{ marginBottom:32 }}>
                COMMON <span style={{ color:"#D4AF37" }}>QUESTIONS</span>
              </h2>
            </Reveal>
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              {[
                ["Can I freeze my membership?","Yes — members on Quarterly or Yearly plans can freeze for up to 30 days per year."],
                ["Is there a joining fee?","No joining fee. You only pay for the plan you choose."],
                ["Can I upgrade my plan?","Yes. You can upgrade at any time and we'll prorate the difference."],
                ["What's in the free trial?","One full-day gym access with a complimentary fitness assessment and trainer walk-through."],
              ].map(([q, a], i) => (
                <Reveal key={q} variant="fadeLeft" delay={i * 80}>
                  <div style={{ background:"#111", border:"1px solid rgba(212,175,55,0.12)",
                    padding:"22px 24px", transition:"border-color 0.3s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.4)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.12)"}>
                    <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700,
                      fontSize:"1rem", color:"#F0F0F0", letterSpacing:"0.04em", marginBottom:8 }}>{q}</div>
                    <div style={{ fontSize:"0.88rem", color:"#888", lineHeight:1.75 }}>{a}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-overlay" style={{ padding:"80px 5%", textAlign:"center", background:"#D4AF37" }}>
        <Reveal variant="scaleUp">
          <h2 style={{ fontFamily:"'Anton',sans-serif", fontSize:"clamp(2rem,5vw,3.2rem)",
            color:"#0A0A0A", lineHeight:1, marginBottom:14 }}>NOT SURE WHICH PLAN?</h2>
          <p style={{ color:"#333", marginBottom:32 }}>Start with a free trial — no commitment required.</p>
          <Link href="/join" style={{ background:"#0A0A0A", color:"#D4AF37", padding:"15px 40px",
            fontFamily:"'Anton',sans-serif", fontSize:"1rem", letterSpacing:"0.08em",
            textTransform:"uppercase", textDecoration:"none", display:"inline-block" }}>
            Book Free Trial →
          </Link>
        </Reveal>
      </section>
    </>
  );
}