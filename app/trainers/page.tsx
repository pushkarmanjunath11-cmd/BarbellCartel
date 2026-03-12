"use client";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TrainerCard from "@/components/TrainerCard";
import { TRAINERS } from "@/lib/data";
import Link from "next/link";

export default function TrainersPage() {
  return (
    <>
      <PageHero tag="The Experts" title="MEET YOUR" accent="COACHES"
        sub="Certified professionals obsessed with getting you results." />

      <section className="section-overlay noise-bg" style={{ padding:"100px 5%", background:"#0A0A0A", position:"relative" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", position:"relative", zIndex:1 }}>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:28 }}>
            {TRAINERS.map((t, i) => (
              <Reveal key={i} variant="fadeUp" delay={i * 120}>
                <TrainerCard {...t} />
              </Reveal>
            ))}
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
            gap:24, marginTop:64 }}>
            {[
              ["📋","Personalised Program","Every PT client gets a fully customised training and nutrition plan."],
              ["📈","Progress Tracking","Regular assessments and body composition checks to keep results coming."],
              ["🥗","Nutrition Guidance","Diet advice and macro coaching included with all personal training packages."],
              ["💬","24/7 Support","WhatsApp access to your trainer for questions and accountability."],
            ].map(([icon, title, desc], i) => (
              <Reveal key={title} variant="scaleUp" delay={i * 80}>
                <div style={{ background:"#111", border:"1px solid rgba(212,175,55,0.12)",
                  padding:"28px 24px", transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)", height:"100%" }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(212,175,55,0.4)";
                    el.style.transform = "translateY(-6px)";
                    el.style.boxShadow = "0 20px 50px rgba(212,175,55,0.1)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(212,175,55,0.12)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}>
                  <div style={{ fontSize:"2rem", marginBottom:14 }}>{icon}</div>
                  <div style={{ fontFamily:"'Anton',sans-serif", fontSize:"1.05rem",
                    color:"#F0F0F0", letterSpacing:"0.05em", marginBottom:8 }}>{title}</div>
                  <p style={{ fontSize:"0.88rem", color:"#888", lineHeight:1.75 }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-overlay" style={{ padding:"80px 5%", textAlign:"center", background:"#111" }}>
        <Reveal variant="fadeUp">
          <h2 className="section-title" style={{ textAlign:"center", marginBottom:14 }}>
            TRAIN WITH THE <span style={{ color:"#D4AF37" }}>BEST.</span>
          </h2>
          <p style={{ color:"#888", marginBottom:36 }}>Book a free session and see what our coaches can do for you.</p>
          <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/join" className="btn-primary">Book Free Trial →</Link>
            <Link href="/membership" className="btn-outline">View PT Plans</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}