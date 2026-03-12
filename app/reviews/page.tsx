"use client";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ReviewCard from "@/components/ReviewCard";
import { REVIEWS } from "@/lib/data";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <>
      <PageHero tag="Testimonials" title="WHAT MEMBERS" accent="SAY"
        sub="Real results from real people. Don't take our word for it." />

      {/* Rating summary */}
      <section className="section-overlay" style={{ padding:"56px 5%", background:"#111",
        borderBottom:"1px solid rgba(212,175,55,0.1)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <Reveal variant="fadeUp">
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center",
              gap:48, flexWrap:"wrap" }}>
              <div style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"'Anton',sans-serif", fontSize:"5rem",
                  color:"#D4AF37", lineHeight:1 }}>4.9</div>
                <div style={{ display:"flex", gap:3, justifyContent:"center", marginTop:6 }}>
                  {[...Array(5)].map((_,i) => <span key={i} style={{ color:"#FFD700", fontSize:22 }}>★</span>)}
                </div>
                <div style={{ color:"#666", fontSize:"0.82rem", marginTop:6 }}>out of 5 on Google</div>
              </div>
              <div style={{ width:1, height:80, background:"rgba(212,175,55,0.15)" }} />
              <div>
                {[5,4,3].map(stars => (
                  <div key={stars} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
                    <span style={{ color:"#FFD700", fontSize:13 }}>{"★".repeat(stars)}</span>
                    <div style={{ width:120, height:6, background:"#1A1A1A", borderRadius:3, overflow:"hidden" }}>
                      <div style={{ width: stars===5?"90%":stars===4?"7%":"3%",
                        height:"100%", background: stars===5?"#D4AF37":"#555",
                        transition:"width 1s ease" }} />
                    </div>
                    <span style={{ fontSize:"0.78rem", color:"#666" }}>
                      {stars===5?"90%":stars===4?"7%":"3%"}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ width:1, height:80, background:"rgba(212,175,55,0.15)" }} />
              <div style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"'Anton',sans-serif", fontSize:"3rem",
                  color:"#8B0000", lineHeight:1 }}>200+</div>
                <div style={{ color:"#666", fontSize:"0.82rem", marginTop:6 }}>Google Reviews</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Review cards */}
      <section className="section-overlay noise-bg" style={{ padding:"90px 5%", background:"#0A0A0A", position:"relative" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:24 }}>
            {REVIEWS.map((r, i) => (
              <Reveal key={i} variant="fadeUp" delay={i * 80}>
                <ReviewCard {...r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-overlay" style={{ padding:"80px 5%", textAlign:"center", background:"#D4AF37" }}>
        <Reveal variant="scaleUp">
          <h2 style={{ fontFamily:"'Anton',sans-serif", fontSize:"clamp(2rem,5vw,3.2rem)",
            color:"#0A0A0A", lineHeight:1, marginBottom:14 }}>
            ADD YOUR OWN<br />SUCCESS STORY.
          </h2>
          <p style={{ color:"#333", marginBottom:32 }}>
            Start today. Your review could inspire the next transformation.
          </p>
          <Link href="/join" style={{ background:"#0A0A0A", color:"#D4AF37", padding:"15px 40px",
            fontFamily:"'Anton',sans-serif", fontSize:"1rem", letterSpacing:"0.08em",
            textTransform:"uppercase", textDecoration:"none", display:"inline-block" }}>
            Join Now →
          </Link>
        </Reveal>
      </section>
    </>
  );
}