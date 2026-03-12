"use client";
import { useState, useEffect, useRef } from "react";
import { STATS } from "@/lib/data";

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, active, dark }: {
  value: number; suffix: string; label: string; active: boolean; dark: boolean;
}) {
  const n = useCountUp(value, active);
  return (
    <div style={{ textAlign: "center", padding: "36px 20px" }}>
      <div style={{
        fontFamily: "'Anton', sans-serif",
        fontSize: "clamp(2rem, 5vw, 3.4rem)",
        color: dark ? "var(--black)" : "var(--yellow)",
        lineHeight: 1,
        minWidth: "4ch",         // ← prevents layout shift
        display: "inline-block",
        textAlign: "center",
      }}>
        {n}{suffix}
      </div>
      <div style={{
        fontSize: "0.75rem",
        color: dark ? "#333" : "var(--muted)",
        textTransform: "uppercase",
        letterSpacing: "0.18em",
        marginTop: 8,
      }}>
        {label}
      </div>
    </div>
  );
}

export default function StatsBar({ dark = false }: { dark?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{
      background: dark ? "var(--yellow)" : "rgba(212,175,55,0.06)",
      borderTop: "1px solid rgba(212,175,55,0.15)",
      borderBottom: "1px solid rgba(212,175,55,0.15)",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "0 5%",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)", // 2 columns on mobile
        gap: 0,
      }}>
        {STATS.map((s, i) => <StatItem key={i} {...s} active={active} dark={dark} />)}
      </div>
      <style>{`
        @media (min-width: 640px) {
          .stats-inner { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}