"use client";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { FACILITIES } from "@/lib/data";
import Link from "next/link";

export default function FacilitiesPage() {
  return (
    <>
      <PageHero tag="World-Class Equipment" title="OUR" accent="FACILITIES"
        sub="Everything you need to crush every goal — all under one roof." />

      <section className="section-overlay noise-bg" style={{ padding:"100px 5%", background:"#0A0A0A", position:"relative" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", position:"relative", zIndex:1 }}>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:24 }}>
            {FACILITIES.map((f, i) => (
              <Reveal key={i} variant="scaleUp" delay={i * 80}>
                <div style={{ background:"#111", border:"1px solid rgba(212,175,55,0.15)",
                  padding:"36px 28px", transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)",
                  position:"relative", overflow:"hidden", height:"100%", cursor:"default" }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(212,175,55,0.45)";
                    el.style.transform = "translateY(-8px)";
                    el.style.boxShadow = "0 28px 70px rgba(212,175,55,0.12)";
                    (el.querySelector(".top-bar") as HTMLElement).style.transform = "scaleX(1)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(212,175,55,0.15)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                    (el.querySelector(".top-bar") as HTMLElement).style.transform = "scaleX(0)";
                  }}>
                  <div className="top-bar" style={{ position:"absolute", top:0, left:0, right:0,
                    height:3, background:"linear-gradient(90deg,#8B0000,#D4AF37)",
                    transform:"scaleX(0)", transformOrigin:"left", transition:"transform 0.4s" }} />
                  <div style={{ fontSize:"2.8rem", marginBottom:18 }}>{f.icon}</div>
                  <h3 style={{ fontFamily:"'Anton',sans-serif", fontSize:"1.25rem", color:"#F0F0F0",
                    letterSpacing:"0.06em", marginBottom:10, textTransform:"uppercase" }}>{f.title}</h3>
                  <p style={{ color:"#666", fontSize:"0.9rem", lineHeight:1.8 }}>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Equipment highlight box */}
          <Reveal variant="fadeUp" delay={200} style={{ marginTop:64 }}>
            <div style={{ background:"linear-gradient(135deg,rgba(139,0,0,0.15),rgba(212,175,55,0.06))",
              border:"1px solid rgba(139,0,0,0.3)", padding:"52px 44px" }}>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
                gap:40, alignItems:"center" }}>
                <div>
                  <div className="section-tag">Equipment</div>
                  <h2 className="section-title">RED LINE<br /><span style={{ color:"#8B0000" }}>PRO SERIES</span></h2>
                  <p style={{ color:"#888", lineHeight:1.9 }}>Professional-grade, regularly serviced, and built for maximum performance and safety.</p>
                </div>
                {[["50+","Machines"],["100+","Free Weight Sets"],["10+","Cardio Units"],["6","Functional Zones"]].map(([n,l]) => (
                  <Reveal key={l} variant="scaleUp">
                    <div style={{ textAlign:"center" }}>
                      <div style={{ fontFamily:"'Anton',sans-serif", fontSize:"3rem", color:"#8B0000", lineHeight:1 }}>{n}</div>
                      <div style={{ fontSize:"0.8rem", color:"#666", letterSpacing:"0.1em", marginTop:6 }}>{l}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-overlay" style={{ padding:"80px 5%", textAlign:"center", background:"#111" }}>
        <Reveal variant="fadeUp">
          <h2 className="section-title" style={{ textAlign:"center", marginBottom:14 }}>
            SEE IT FOR <span style={{ color:"#D4AF37" }}>YOURSELF.</span>
          </h2>
          <p style={{ color:"#888", marginBottom:36 }}>Book a free trial and walk the floor with one of our coaches.</p>
          <Link href="/join" className="btn-primary">Book Free Trial →</Link>
        </Reveal>
      </section>
    </>
  );
}