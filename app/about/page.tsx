"use client";

import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <PageHero tag="Our Story" title="ABOUT" accent="NS FITNESS" sub="More than a gym — a revolution. Built for fighters, beginners, and everyone in between." />

      <section style={{ padding: "90px 5%", background: "var(--black)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "start" }}>
          <div>
            <div className="section-tag">Mission</div>
            <h2 className="section-title">BUILT FOR<br /><span style={{ color: "var(--yellow)" }}>FIGHTERS.</span></h2>
            <p style={{ color: "#888", lineHeight: 1.95, marginBottom: 20 }}>NS Fitness Revolution was founded with one mission: to bring world-class fitness to every person in AECS Layout — regardless of their starting point.</p>
            <p style={{ color: "#888", lineHeight: 1.95, marginBottom: 20 }}>Our 3,000+ sq ft arena is equipped with professional-grade red equipment, motivational murals on every wall, and an atmosphere that charges you up the moment you walk through the door.</p>
            <p style={{ color: "#888", lineHeight: 1.95 }}>Beginners, athletes, weight-loss warriors, bodybuilders — everyone belongs here and everyone gets results.</p>
          </div>
          <div>
            <div className="section-tag">Why Choose Us</div>
            <ul style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 8, listStyle: "none", padding: 0, margin: 0 }}>
              {[
                ["🏟️","Massive Space","3,000+ sqft — you'll never feel crowded, ever."],
                ["🔴","Premium Equipment","Professional red-grade machines & free weights."],
                ["🎓","Certified Coaches","Every trainer holds recognised fitness certifications."],
                ["🧹","Hygienic & Clean","Strict daily cleaning protocols maintained always."],
                ["🕔","Great Hours","5 AM – 10 PM weekdays, 6 AM – 8 PM Sundays."],
                ["🤝","Real Community","Supportive members who push each other forward."]
              ].map(([ic, title, desc]) => (
                <li key={title} style={{ display: "flex", gap: 16, background: "var(--card)", border: "1px solid var(--border)", padding: "18px 20px", transition: "border-color 0.25s", tabIndex: 0, role: "button" } as any}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(201,241,53,0.35)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
                  onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(201,241,53,0.35)")}
                  onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}>
                  <span style={{ fontSize: "1.6rem", flexShrink: 0 }}>{ic}</span>
                  <div>
                    <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "1rem", color: "var(--text)", letterSpacing: "0.05em" }}>{title}</div>
                    <div style={{ fontSize: "0.85rem", color: "#888", marginTop: 4 }}>{desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <StatsBar />

      <section style={{ padding: "74px 5%", textAlign: "center", background: "var(--dark)" }}>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: 14 }}>READY TO BE PART OF THE <span style={{ color: "var(--yellow)" }}>REVOLUTION?</span></h2>
        <p style={{ color: "#888", marginBottom: 36 }}>Your first session is on us. No pressure — just results.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/join" className="btn-primary">Book Free Trial →</Link>
          <Link href="/membership" className="btn-outline">View Plans</Link>
        </div>
      </section>
    </>
  );
}