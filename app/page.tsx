"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import StatsBar from "@/components/StatsBar";
import ReviewCard from "@/components/ReviewCard";
import Reveal from "@/components/Reveal";
import { REVIEWS, PLANS } from "@/lib/data";

const HERO_IMAGES = [
  "https://images.squarespace-cdn.com/content/v1/652cf0f5e0d38551458727c6/0154aa6a-6bf5-4383-90bb-d88409b440f5/DSC03167.jpg",
  "https://images.squarespace-cdn.com/content/v1/652cf0f5e0d38551458727c6/278bf347-b2dd-4712-88df-57ceb138cdbe/DSC02872.jpg",
  "https://images.squarespace-cdn.com/content/v1/652cf0f5e0d38551458727c6/d283f3d5-1fa1-46dd-a33b-ea0262c2995d/DSC02877.jpg",
  "https://images.squarespace-cdn.com/content/v1/652cf0f5e0d38551458727c6/decfc666-060f-4d9b-bd09-c6d5cab395c6/DSC02924.jpg",
  "https://images.squarespace-cdn.com/content/v1/652cf0f5e0d38551458727c6/ab1f944f-6666-4189-8e68-79aba465149d/DSC03084-3.jpg",
  "https://images.squarespace-cdn.com/content/v1/652cf0f5e0d38551458727c6/c9298c10-bea3-48ab-84ed-154cb114b971/DSC03133.jpg",
  "https://images.squarespace-cdn.com/content/v1/652cf0f5e0d38551458727c6/f7f54f35-222a-4b6b-a96b-46b0d6bcd5f1/DSC02916.jpg",
  "https://images.squarespace-cdn.com/content/v1/652cf0f5e0d38551458727c6/b9762049-aa96-453b-ae11-3d96a34e7953/DSC03146-2.jpg",
  "https://images.squarespace-cdn.com/content/v1/652cf0f5e0d38551458727c6/8184adb6-4ba0-4651-8b9f-3a646180b5fb/DSC03146.jpg",
];

const GALLERY_IMAGES = HERO_IMAGES.slice(1, 7);

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => { setCurrent(c => (c + 1) % HERO_IMAGES.length); setFading(false); }, 600);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes fadeSlide { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:none} }
        @keyframes kenBurns { from{transform:scale(1)} to{transform:scale(1.08)} }
        @keyframes glowPulse { 0%,100%{opacity:0.4} 50%{opacity:0.9} }
        @keyframes borderRun { 0%{background-position:0% 0%} 100%{background-position:300% 0%} }
        @keyframes scanLine { 0%{top:-80px} 100%{top:110%} }

        .hero-img { animation: kenBurns 8s ease-in-out infinite alternate; }

        .gold-shimmer {
          background: linear-gradient(90deg,#D4AF37 0%,#fff8dc 40%,#D4AF37 60%,#a8892a 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .h1-line { overflow: hidden; }
        .h1-line span { display: inline-block; animation: fadeSlide 0.8s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-line-1 span { animation-delay: 0.1s; }
        .hero-line-2 span { animation-delay: 0.25s; }
        .hero-line-3 span { animation-delay: 0.4s; }
        .hero-sub  { animation: fadeSlide 0.8s 0.55s both; }
        .hero-cta  { animation: fadeSlide 0.8s 0.7s  both; }
        .hero-dots { animation: fadeSlide 0.8s 0.85s both; }

        .floating-badge { animation: floatBadge 3s ease-in-out infinite; }
        @keyframes floatBadge { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }

        .img-hover { overflow: hidden; position: relative; }
        .img-hover img {
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1), filter 0.5s;
          filter: brightness(0.8) saturate(0.85);
        }
        .img-hover:hover img { transform: scale(1.07); filter: brightness(1) saturate(1.1); }

        .glow-card { transition: all 0.4s cubic-bezier(0.22,1,0.36,1); }
        .glow-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 80px rgba(212,175,55,0.18), 0 0 0 1px rgba(212,175,55,0.3);
        }

        .plan-pop { transition: all 0.4s cubic-bezier(0.22,1,0.36,1); }
        .plan-pop:hover { transform: translateY(-12px) scale(1.02); }

        .scan-line { position: relative; overflow: hidden; }
        .scan-line::after {
          content: ''; position: absolute; left: 0; right: 0; height: 80px;
          background: linear-gradient(to bottom, transparent, rgba(212,175,55,0.05), transparent);
          animation: scanLine 5s ease-in-out infinite; pointer-events: none;
        }

        .overlay-grid {
          background-image:
            linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .noise-bg { position: relative; }
        .noise-bg::after {
          content: ''; position: absolute; inset: 0; pointer-events: none; opacity: 0.025; z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .border-animated { position: relative; }
        .border-animated::before {
          content: ''; position: absolute; inset: 0; border: 1px solid transparent;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent) border-box;
          background-size: 300% 100%;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out; mask-composite: exclude;
          animation: borderRun 3s linear infinite; pointer-events: none;
        }

        .dot-btn { transition: all 0.3s cubic-bezier(0.22,1,0.36,1); }
        .dot-btn:hover { transform: scale(1.5); }

        /* Gallery grid */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          align-items: stretch;
        }
        @media (min-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 260px 260px;
            gap: 12px;
          }
          .gallery-tall {
            grid-row: 1 / 3;
            height: 100% !important;
          }
          .gallery-img-h {
            height: 100% !important;
          }
        }
        @media (max-width: 767px) {
          .gallery-tall, .gallery-img-h {
            height: 200px !important;
          }
        }

        /* Mobile fixes */
        @media (max-width: 768px) {
          .gold-shimmer {
            background: none !important;
            -webkit-text-fill-color: #D4AF37 !important;
            color: #D4AF37 !important;
            animation: none !important;
          }
          .hero-badge { display: none !important; }
        }
      `}</style>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>

        {/* Ken Burns bg */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, transition: "opacity 0.6s", opacity: fading ? 0 : 1 }}>
          <img src={HERO_IMAGES[current]} alt="" className="hero-img"
            style={{ width: "100%", height: "100%", objectFit: "cover", transformOrigin: "center" }} />
        </div>

        {/* Overlays */}
        <div className="hero-overlay-main" style={{ position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to right, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.8) 50%, rgba(10,10,10,0.3) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 2,
          background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 60%)" }} />
        <div className="overlay-grid scan-line" style={{ position: "absolute", inset: 0, zIndex: 3 }} />

        {/* Glow orbs */}
        <div style={{ position: "absolute", top: "20%", right: "8%", width: 500, height: 500,
          borderRadius: "50%", background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 65%)",
          animation: "glowPulse 4s ease-in-out infinite", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "15%", left: "-5%", width: 350, height: 350,
          borderRadius: "50%", background: "radial-gradient(circle, rgba(139,0,0,0.08) 0%, transparent 65%)",
          animation: "glowPulse 5s ease-in-out 1s infinite", zIndex: 2, pointerEvents: "none" }} />

        {/* Content */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "130px 5% 110px",
          position: "relative", zIndex: 4, width: "100%",
          transform: `translateY(${scrollY * 0.2}px)` }}>

          <div style={{ display: "inline-flex", alignItems: "center", gap: 10,
            border: "1px solid rgba(212,175,55,0.3)", padding: "5px 18px", marginBottom: 28,
            background: "rgba(212,175,55,0.05)", backdropFilter: "blur(8px)" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D4AF37",
              display: "inline-block", animation: "glowPulse 2s infinite" }} />
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.75rem",
              letterSpacing: "0.3em", textTransform: "uppercase", color: "#D4AF37" }}>
              Brookefield · Bangalore
            </span>
          </div>

          <h1 style={{ fontFamily: "'Anton',sans-serif", lineHeight: 0.9, marginBottom: 28, letterSpacing: "0.01em" }}>
            <div className="h1-line hero-line-1" style={{ fontSize: "clamp(3.2rem,10vw,9.5rem)", color: "#F0F0F0" }}>
              <span>WAGE WAR</span>
            </div>
            <div className="h1-line hero-line-2" style={{ fontSize: "clamp(3.2rem,10vw,9.5rem)", color: "#F0F0F0" }}>
              <span>AGAINST</span>
            </div>
            <div className="h1-line hero-line-3" style={{ fontSize: "clamp(3.2rem,10vw,9.5rem)" }}>
              <span className="gold-shimmer">MEDIOCRITY.</span>
            </div>
          </h1>

          <div style={{ width: 80, height: 3, background: "linear-gradient(90deg,#D4AF37,transparent)", marginBottom: 24 }} />

          <p className="hero-sub" style={{ fontSize: "clamp(0.9rem,2.5vw,1.1rem)",
            color: "rgba(240,240,240,0.6)", maxWidth: 480, lineHeight: 1.85, marginBottom: 40 }}>
            Brookefield's most serious strength gym. Calibrated equipment, expert coaches, and a culture that demands your best — every single rep.
          </p>

          <div className="hero-cta" style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
            <Link href="/join" className="btn-primary" style={{ fontSize: "1rem", padding: "15px 32px" }}>
              Start Free Trial →
            </Link>
            <Link href="/membership" className="btn-outline" style={{ fontSize: "1rem", padding: "14px 32px" }}>
              View Plans
            </Link>
          </div>

          <div className="hero-dots" style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {HERO_IMAGES.map((_, i) => (
              <button key={i} className="dot-btn" onClick={() => setCurrent(i)}
                style={{ width: i === current ? 32 : 8, height: 8, borderRadius: 4, padding: 0,
                  border: "none", cursor: "pointer",
                  background: i === current ? "#D4AF37" : "rgba(255,255,255,0.2)" }} />
            ))}
          </div>
        </div>

        {/* Floating badge */}
        <div className="hero-badge floating-badge" style={{ position: "absolute", bottom: 80, right: "5%", zIndex: 4,
          background: "rgba(10,10,10,0.85)", border: "1px solid rgba(212,175,55,0.3)",
          backdropFilter: "blur(12px)", padding: "16px 22px", textAlign: "center" }}>
          <div style={{ fontFamily: "'Anton',sans-serif", fontSize: "1.8rem", color: "#D4AF37", lineHeight: 1 }}>4.9★</div>
          <div style={{ fontSize: "0.72rem", color: "#888", letterSpacing: "0.15em", marginTop: 4 }}>GOOGLE RATING</div>
        </div>

        {/* Ticker */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 5,
          background: "rgba(212,175,55,0.95)", padding: "11px 0", overflow: "hidden" }}>
          <div className="ticker-inner">
            {["STRENGTH","POWER","DISCIPLINE","BARBELL CARTEL","WAGE WAR","BROOKEFIELD","NO EXCUSES","LIFT HEAVY",
              "STRENGTH","POWER","DISCIPLINE","BARBELL CARTEL","WAGE WAR","BROOKEFIELD","NO EXCUSES","LIFT HEAVY"].map((w,i) => (
              <span key={i} style={{ fontFamily: "'Anton',sans-serif", fontSize: "0.88rem",
                letterSpacing: "0.22em", color: "#0A0A0A" }}>
                {w} <span style={{ color: "#8B0000" }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <StatsBar dark />

      {/* ── WHY BARBELL CARTEL ────────────────────────────── */}
      <section className="noise-bg section-overlay" style={{ padding: "100px 5%", background: "#0A0A0A", position: "relative" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64,
          alignItems: "center", position: "relative", zIndex: 1 }}>
          <div>
            <Reveal variant="fadeLeft">
              <div className="section-tag">Why We're Different</div>
              <h2 className="section-title">NOT YOUR<br /><span style={{ color: "#D4AF37" }}>AVERAGE GYM.</span></h2>
            </Reveal>
            <Reveal variant="fadeLeft" delay={150}>
              <p style={{ color: "#888", lineHeight: 1.95, marginBottom: 20 }}>
                Barbell Cartel was built for people who take their training seriously. No gimmicks, no fluff — just premium equipment, expert programming, and a community that holds you to a higher standard.
              </p>
              <p style={{ color: "#888", lineHeight: 1.95, marginBottom: 36 }}>
                Located in Brookefield, we've created a space where strength athletes, beginners with big goals, and everyone in between can train the way they deserve.
              </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={250}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/about" className="btn-primary">Our Story</Link>
                <Link href="/facilities" className="btn-outline">See Equipment</Link>
              </div>
            </Reveal>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[
              ["🏋️","Competition Barbells","Calibrated plates, specialty bars, proper powerlifting setup."],
              ["📐","Expert Programming","Coaches who write real programs, not just count reps."],
              ["🔇","Serious Atmosphere","Zero ego, zero nonsense. Just focused, hard work."],
              ["🧹","Immaculate Facility","Cleaned daily. Equipment maintained obsessively."],
              ["🕔","Flexible Hours","Early mornings to late nights — we're here when you are."],
              ["🤝","Real Community","Members who push each other to be better every session."],
            ].map(([icon,title,desc], i) => (
              <Reveal key={String(title)} variant="scaleUp" delay={i * 80}>
                <div className="glow-card" style={{ background: "#111",
                  border: "1px solid rgba(212,175,55,0.12)", padding: "22px 18px",
                  cursor: "default", height: "100%" }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: 10 }}>{icon}</div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
                    fontSize: "0.95rem", color: "#F0F0F0", letterSpacing: "0.06em", marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65 }}>{desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX DIVIDER 1 ────────────────────────────── */}
      <div style={{ position: "relative", height: 280, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, transform: `translateY(${scrollY * 0.15 - 80}px)` }}>
          <img src={HERO_IMAGES[3]} alt="" style={{ width: "100%", height: "140%",
            objectFit: "cover", filter: "brightness(0.3) saturate(0.5)" }} />
        </div>
        <div style={{ position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, #0A0A0A, transparent 30%, transparent 70%, #111 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center",
          justifyContent: "center", flexDirection: "column", gap: 10, padding: "0 5%", textAlign: "center" }}>
          <Reveal variant="fadeIn">
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.75rem",
              letterSpacing: "0.35em", color: "#D4AF37", textTransform: "uppercase" }}>
              Brookefield's Premier Strength Gym
            </div>
            <div style={{ fontFamily: "'Anton',sans-serif",
              fontSize: "clamp(1.8rem,5vw,4.5rem)", color: "#F0F0F0",
              lineHeight: 1, marginTop: 10, WebkitTextStroke: "1px rgba(212,175,55,0.4)" }}>
              WHERE IRON MEETS INTENT
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── GYM GALLERY ───────────────────────────────────── */}
      <section className="section-overlay" style={{ padding: "100px 5%", background: "#111" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end",
            marginBottom: 48, flexWrap: "wrap", gap: 20 }}>
            <Reveal variant="fadeLeft">
              <div className="section-tag">Inside The Cartel</div>
              <h2 className="section-title" style={{ marginBottom: 8 }}>
                SEE THE <span style={{ color: "#D4AF37" }}>FLOOR.</span>
              </h2>
              <p style={{ color: "#666", maxWidth: 380 }}>Real photos from the actual gym — no stock images, no filters.</p>
            </Reveal>
            <Reveal variant="fadeRight">
              <Link href="/join" className="btn-outline">Book a Visit →</Link>
            </Reveal>
          </div>

          <div className="gallery-grid">
            {/* Tall first image */}
            <div className="img-hover gallery-tall" style={{ height: 200 }}>
              <img src={GALLERY_IMAGES[0]} alt="Barbell Cartel"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>

            {GALLERY_IMAGES.slice(1, 5).map((img, i) => (
              <Reveal key={i} variant="scaleUp" delay={i * 80}>
                <div className="img-hover gallery-img-h" style={{ height: 200 }}>
                  <img src={img} alt="Barbell Cartel"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
              </Reveal>
            ))}

            <Reveal variant="fadeRight">
              <div className="img-hover border-animated gallery-img-h"
                style={{ height: 200, position: "relative", cursor: "pointer" }}
                onClick={() => window.location.href = "/join"}>
                <img src={GALLERY_IMAGES[5]} alt="Barbell Cartel"
                  style={{ width: "100%", height: "100%", objectFit: "cover",
                    display: "block", filter: "brightness(0.4)" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center",
                  justifyContent: "center", flexDirection: "column", gap: 6 }}>
                  <div style={{ fontFamily: "'Anton',sans-serif", fontSize: "clamp(1.2rem,3vw,2rem)",
                    color: "#D4AF37", textAlign: "center" }}>BOOK A TOUR</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em" }}>
                    WALK THE FLOOR →
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP PLANS ──────────────────────────────── */}
      <section className="noise-bg section-overlay" style={{ padding: "100px 5%", background: "#0A0A0A", position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Reveal variant="fadeUp" style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-tag">Transparent Pricing</div>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              MEMBERSHIP <span style={{ color: "#D4AF37" }}>PLANS</span>
            </h2>
            <p style={{ color: "#666", maxWidth: 480, margin: "0 auto" }}>
              No joining fee. No hidden charges. Just pick your plan and start lifting.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 24 }}>
            {PLANS.map((p, i) => (
              <Reveal key={i} variant="fadeUp" delay={i * 120}>
                <div className="plan-pop" style={{
                  background: p.popular
                    ? "linear-gradient(160deg,rgba(139,0,0,0.2),rgba(212,175,55,0.08))"
                    : "#111",
                  border: p.popular ? "1.5px solid #D4AF37" : "1px solid rgba(212,175,55,0.15)",
                  padding: "40px 32px", position: "relative",
                  boxShadow: p.popular ? "0 0 50px rgba(212,175,55,0.12)" : "none",
                }}>
                  {p.popular && (
                    <div style={{ position: "absolute", top: 0, right: 0, background: "#D4AF37",
                      color: "#0A0A0A", padding: "5px 20px", fontFamily: "'Anton',sans-serif",
                      fontSize: "0.72rem", letterSpacing: "0.15em" }}>MOST POPULAR</div>
                  )}
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
                    fontSize: "0.82rem", letterSpacing: "0.25em", textTransform: "uppercase",
                    color: p.popular ? "#D4AF37" : "#666", marginBottom: 20 }}>{p.name}</div>
                  <div style={{ fontFamily: "'Anton',sans-serif", fontSize: "3.2rem",
                    color: "#F0F0F0", lineHeight: 1, marginBottom: 4 }}>{p.price}</div>
                  <div style={{ fontSize: "0.82rem", color: "#555", marginBottom: 32 }}>{p.period}</div>
                  <div style={{ height: 1,
                    background: p.popular ? "rgba(212,175,55,0.2)" : "rgba(212,175,55,0.08)",
                    marginBottom: 28 }} />
                  {p.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
                      <span style={{ color: p.popular ? "#D4AF37" : "#8B0000", flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: "0.92rem", color: "#aaa", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                  <Link href="/join" style={{
                    display: "block", textAlign: "center", marginTop: 32, padding: "15px",
                    fontFamily: "'Anton',sans-serif", fontSize: "0.95rem", letterSpacing: "0.1em",
                    textTransform: "uppercase", textDecoration: "none", transition: "all 0.25s",
                    ...(p.popular
                      ? { background: "#D4AF37", color: "#0A0A0A" }
                      : { background: "transparent", color: "#D4AF37", border: "1.5px solid #D4AF37" }
                    ),
                  }}>Get Started →</Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fadeUp" delay={300} style={{ marginTop: 36 }}>
            <div style={{ background: "#111", border: "1px solid rgba(212,175,55,0.12)",
              padding: "24px 32px", display: "flex", justifyContent: "space-between",
              alignItems: "center", flexWrap: "wrap", gap: 20 }}>
              <div>
                <div style={{ fontFamily: "'Anton',sans-serif", fontSize: "1.1rem",
                  color: "#F0F0F0", marginBottom: 4 }}>NOT SURE WHICH PLAN?</div>
                <div style={{ color: "#666", fontSize: "0.88rem" }}>
                  Try a free day — walk the floor, meet the coaches, lift some weights.
                </div>
              </div>
              <Link href="/join" className="btn-primary">Book Free Trial →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PARALLAX DIVIDER 2 ────────────────────────────── */}
      <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, transform: `translateY(${scrollY * 0.12 - 60}px)` }}>
          <img src={HERO_IMAGES[6]} alt="" style={{ width: "100%", height: "140%",
            objectFit: "cover", filter: "brightness(0.25) saturate(0.3)" }} />
        </div>
        <div style={{ position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, #0A0A0A, transparent 30%, transparent 70%, #111 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center",
          justifyContent: "center", gap: 40, flexWrap: "wrap", padding: "0 5%" }}>
          {[["500+","Active Members"],["3","Expert Coaches"],["PRs","Broken Daily"],["5★","Google Rated"]].map(([v,l]) => (
            <Reveal key={String(l)} variant="scaleUp">
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Anton',sans-serif",
                  fontSize: "clamp(1.8rem,4vw,3.5rem)", color: "#D4AF37", lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: "0.72rem", color: "#666",
                  letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 6 }}>{l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── REVIEWS ───────────────────────────────────────── */}
      <section className="section-overlay" style={{ padding: "100px 5%", background: "#111" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between",
            alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <Reveal variant="fadeLeft">
              <div className="section-tag">Member Reviews</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>
                THE CARTEL <span style={{ color: "#D4AF37" }}>SPEAKS.</span>
              </h2>
            </Reveal>
            <Reveal variant="fadeRight">
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {[...Array(5)].map((_,i) => <span key={i} style={{ color: "#FFD700", fontSize: 18 }}>★</span>)}
                <span style={{ color: "#666", fontSize: "0.9rem", marginLeft: 4 }}>4.9 on Google</span>
              </div>
            </Reveal>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            {REVIEWS.slice(0, 3).map((r, i) => (
              <Reveal key={i} variant="fadeUp" delay={i * 100}>
                <ReviewCard {...r} />
              </Reveal>
            ))}
          </div>
          <Reveal variant="fadeUp" delay={200} style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/reviews" className="btn-outline">Read All Reviews →</Link>
          </Reveal>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "120px 5%", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={HERO_IMAGES[5]} alt="" style={{ width: "100%", height: "100%",
            objectFit: "cover", transform: `translateY(${scrollY * 0.08}px)` }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.9)" }} />
        <div className="overlay-grid" style={{ position: "absolute", inset: 0 }} />

        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          {[0,1,2].map(i => (
            <div key={i} style={{ position: "absolute", left: "-50%", top: `${20 + i*30}%`,
              width: "200%", height: 1,
              background: `rgba(212,175,55,${0.06 - i*0.015})`,
              transform: "rotate(-8deg)" }} />
          ))}
        </div>

        <div style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto" }}>
          <Reveal variant="fadeUp">
            <div className="section-tag">Join The Cartel</div>
            <h2 style={{ fontFamily: "'Anton',sans-serif",
              fontSize: "clamp(2.4rem,7vw,5.5rem)", color: "#F0F0F0",
              lineHeight: 0.95, marginBottom: 20 }}>
              READY TO <span style={{ color: "#D4AF37" }}>WAGE WAR?</span>
            </h2>
            <p style={{ color: "#888", fontSize: "clamp(0.9rem,2vw,1.1rem)",
              marginBottom: 44, lineHeight: 1.8 }}>
              Stop settling for average. Join Barbell Cartel and start training the way you've always wanted to.
            </p>
          </Reveal>
          <Reveal variant="scaleUp" delay={200}>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/join" className="btn-primary" style={{ fontSize: "1.05rem", padding: "16px 40px" }}>
                Start Free Trial →
              </Link>
              <Link href="/contact" className="btn-outline" style={{ fontSize: "1.05rem", padding: "15px 40px" }}>
                Get In Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}