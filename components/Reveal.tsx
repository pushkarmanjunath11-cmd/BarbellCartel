"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CSSProperties, ReactNode } from "react";

type RevealVariant = "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleUp" | "slideDown";

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;      // ms
  duration?: number;   // ms
  className?: string;
  style?: CSSProperties;
  threshold?: number;
}

const HIDDEN: Record<RevealVariant, CSSProperties> = {
  fadeUp:    { opacity: 0, transform: "translateY(48px)" },
  fadeIn:    { opacity: 0 },
  fadeLeft:  { opacity: 0, transform: "translateX(-60px)" },
  fadeRight: { opacity: 0, transform: "translateX(60px)" },
  scaleUp:   { opacity: 0, transform: "scale(0.88)" },
  slideDown: { opacity: 0, transform: "translateY(-40px)" },
};

export default function Reveal({
  children, variant = "fadeUp", delay = 0,
  duration = 700, className, style, threshold,
}: RevealProps) {
  const { ref, visible } = useScrollReveal(threshold);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        ...(visible ? { opacity: 1, transform: "none" } : HIDDEN[variant]),
        ...style,
      }}
    >
      {children}
    </div>
  );
}