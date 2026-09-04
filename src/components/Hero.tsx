"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const stack = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "React Native",
  "GraphQL",
  "Zustand",
  "Tailwind",
  "Jest",
  "WebSocket",
  "Storybook",
  "Figma",
];

export default function Hero() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    let x = 0;
    let animId: number;
    const speed = 0.4;
    const totalWidth = el.scrollWidth / 2;

    const animate = () => {
      x -= speed;
      if (Math.abs(x) >= totalWidth) x = 0;
      el.style.transform = `translateX(${x}px)`;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 overflow-hidden">
      {/* Status badge */}
      <div className="flex items-center gap-2 mb-16">
        <span
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-3 py-1.5 rounded-full border"
          style={{
            color: "var(--text-secondary)",
            borderColor: "var(--border)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#6fcf97" }}
          />
          Available for work
        </span>
      </div>

      {/* Main hero content */}
      <div className="flex-1 flex flex-col justify-center max-w-screen-xl mx-auto w-full">
        <div className="mb-6">
          <p
            className="text-xs tracking-widest uppercase mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            Belgrade, Serbia · Front-end · 9 Years
          </p>
          <h1
            className="font-bold leading-none tracking-tighter"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 11rem)",
              color: "var(--foreground)",
            }}
          >
            DANIIL
            <br />
            KOVTUN
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-8">
          <p
            className="max-w-sm text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Software Developer building fast, precise, and polished front-end
            products. Specialised in React ecosystems, component architecture,
            and real-time applications.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#work"
              className="text-sm px-5 py-2.5 rounded-full border transition-all duration-200"
              style={{
                color: "var(--foreground)",
                borderColor: "var(--border-hover)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(240,237,232,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
              }}
            >
              View Work
            </a>
            <a
              href="/cv.pdf"
              download
              className="text-sm px-5 py-2.5 rounded-full transition-all duration-200"
              style={{
                backgroundColor: "var(--foreground)",
                color: "var(--background)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.88";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Tech stack marquee */}
      <div
        className="mt-16 overflow-hidden"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="pt-6 flex items-center gap-3">
          <span
            className="text-xs tracking-widest uppercase shrink-0 mr-4"
            style={{ color: "var(--text-muted)" }}
          >
            Stack
          </span>
          <div className="overflow-hidden flex-1">
            <div ref={marqueeRef} className="flex gap-6 will-change-transform">
              {[...stack, ...stack].map((tech, i) => (
                <span
                  key={i}
                  className="text-xs tracking-widest uppercase shrink-0"
                  style={{ color: "var(--text-muted)" }}
                >
                  {tech}
                  <span
                    className="ml-6"
                    style={{ color: "var(--border-hover)" }}
                  >
                    ·
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#work"
        className="absolute bottom-8 right-8 md:right-12 flex items-center gap-2 text-xs transition-opacity duration-200 opacity-40 hover:opacity-100"
        style={{ color: "var(--foreground)" }}
      >
        <ArrowDown size={14} />
        Scroll
      </a>
    </section>
  );
}
