"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(13,13,13,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(201,241,53,0.12)" : "none",
      transition: "all 0.4s", padding: "0 5%",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.55rem", letterSpacing: "0.04em", color: "#F0F0F0", lineHeight: 1 }}>
            BARBELL <span style={{ color: "var(--yellow)" }}>CARTEL</span>
          </div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.58rem", letterSpacing: "0.38em", color: "#555", textTransform: "uppercase" }}>
            BROOKEFIELD · BANGALORE
          </div>
        </Link>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase",
              color: pathname === link.href ? "var(--yellow)" : "#888",
              textDecoration: "none",
              borderBottom: pathname === link.href ? "2px solid var(--yellow)" : "2px solid transparent",
              paddingBottom: 4, transition: "color 0.25s",
            }}>
              {link.label}
            </Link>
          ))}
          <Link href="/join" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.82rem" }}>
            Join Now
          </Link>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{
          display: "none", background: "none",
          border: "1px solid rgba(201,241,53,0.3)", color: "var(--yellow)",
          padding: "8px 14px", cursor: "pointer", fontSize: "1.2rem",
        }} aria-label="Toggle navigation menu" aria-expanded={menuOpen} aria-controls="mobile-menu">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" style={{ background: "rgba(13,13,13,0.99)", borderTop: "1px solid rgba(201,241,53,0.1)", padding: "16px 5% 24px" }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              display: "block", padding: "14px 0",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: "1.1rem", letterSpacing: "0.12em", textTransform: "uppercase",
              color: pathname === link.href ? "var(--yellow)" : "#888", textDecoration: "none",
            }}>
              {link.label}
            </Link>
          ))}
          <Link href="/join" onClick={() => setMenuOpen(false)} className="btn-primary"
            style={{ marginTop: 16, display: "block", textAlign: "center", clipPath: "none" }}>
            Join Now
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: block !important; }
        }
      `}</style>
    </nav>
  );
}