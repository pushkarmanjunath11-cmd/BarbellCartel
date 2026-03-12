"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ background: "#080808", borderTop: "1px solid rgba(201,241,53,0.1)", padding: "56px 5% 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.55rem", letterSpacing: "0.04em", color: "#F0F0F0", lineHeight: 1 }}>
            BARBELL <span style={{ color: "var(--yellow)" }}>CARTEL</span>
          </div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.58rem", letterSpacing: "0.38em", color: "#555", textTransform: "uppercase" }}>
            BROOKEFIELD · BANGALORE
          </div>
            <p style={{ color: "#444", fontSize: "0.85rem", lineHeight: 1.75, marginTop: "15px" }}>
              AECS Layout's most energetic and spacious gym. Your transformation starts here.
            </p>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0F0F0", marginBottom: 18 }}>
              Quick Links
            </div>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} style={{ display: "block", color: "#444", fontSize: "0.88rem", marginBottom: 10, textDecoration: "none" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--yellow)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#444")}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Hours */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0F0F0", marginBottom: 18 }}>
              Opening Hours
            </div>
            {[["Monday – Saturday", "5:00 AM – 10:00 PM"], ["Sunday", "6:00 AM – 8:00 PM"]].map(([day, hrs]) => (
              <div key={day} style={{ marginBottom: 14 }}>
                <div style={{ color: "var(--yellow)", fontSize: "0.82rem", fontWeight: 600, marginBottom: 2 }}>{day}</div>
                <div style={{ color: "#444", fontSize: "0.85rem" }}>{hrs}</div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0F0F0", marginBottom: 18 }}>
              Find Us
            </div>
            {[["📍", "AECS Layout, Bangalore, Karnataka"], ["📞", "+91 99999 99999"], ["📧", "info@barbellcartel.com"]].map(([icon, text]) => (
              <div key={text} style={{ display: "flex", gap: 10, marginBottom: 14, alignItems: "flex-start" }}>
                <span style={{ fontSize: "1rem" }}>{icon}</span>
                <span style={{ color: "#444", fontSize: "0.88rem", lineHeight: 1.6 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(201,241,53,0.07)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ color: "#333", fontSize: "0.8rem" }}>© {new Date().getFullYear()} Barbell Cartel. All rights reserved.</div>
          <div style={{ color: "#333", fontSize: "0.8rem" }}>Built with 💛 for AECS Layout</div>
        </div>
      </div>
    </footer>
  );
}