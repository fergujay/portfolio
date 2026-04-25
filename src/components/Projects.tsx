"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    number: "01",
    name: "Kati's Villas",
    url: "https://katisvillas.com",
    category: "Real Estate · Website",
    description:
      "A luxury villa rental platform for high-end properties. Built with a focus on visual storytelling, booking flows, and conversion-optimised layouts.",
    year: "2024",
  },
  {
    number: "02",
    name: "Lajares Homes",
    url: "https://www.lajares.homes",
    category: "Real Estate · Website",
    description:
      "Property listing and discovery site for a boutique real estate agency. Features custom property search, filtering, and interactive maps.",
    year: "2024",
  },
  {
    number: "03",
    name: "Let It Tee",
    url: "https://www.let-it-tee.com",
    category: "E-commerce · Website",
    description:
      "A custom apparel e-commerce store. Includes a product configurator, seamless checkout, and a clean, brand-forward design system.",
    year: "2024",
  },
  {
    number: "04",
    name: "Nook Shop",
    url: "https://www.nookshop.rs",
    category: "E-commerce · Website",
    description:
      "Online store for a small-batch textile brand based in Belgrade. Minimal, editorial design reflecting the handmade nature of the products.",
    year: "2024",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState<string | null>(null);
  const { ref, inView } = useInView();

  return (
    <section
      id="work"
      ref={ref as React.RefObject<HTMLElement>}
      className="px-6 md:px-12 py-24 max-w-screen-xl mx-auto transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
      }}
    >
      <div className="flex items-baseline justify-between mb-16">
        <h2
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          Selected Work
        </h2>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          {projects.length} projects
        </span>
      </div>

      <div>
        {projects.map((project, i) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block py-8 transition-all duration-300 cursor-pointer relative"
            style={{
              borderTop: "1px solid var(--border)",
              borderBottom:
                i === projects.length - 1 ? "1px solid var(--border)" : "none",
            }}
            onMouseEnter={() => setHovered(project.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-start justify-between gap-6">
              {/* Left column */}
              <div className="flex items-start gap-6 flex-1 min-w-0">
                <span
                  className="text-xs font-mono mt-1 shrink-0 transition-colors duration-300"
                  style={{
                    color:
                      hovered === project.name
                        ? "var(--foreground)"
                        : "var(--text-muted)",
                  }}
                >
                  {project.number}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-4 flex-wrap">
                    <h3
                      className="font-semibold transition-colors duration-300 leading-tight"
                      style={{
                        fontSize: "clamp(1.25rem, 3vw, 2rem)",
                        color: "var(--foreground)",
                      }}
                    >
                      {project.name}
                    </h3>
                    <span
                      className="text-xs tracking-widest uppercase"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <p
                    className="mt-3 text-sm leading-relaxed max-w-xl transition-all duration-300"
                    style={{
                      color: "var(--text-secondary)",
                      maxHeight: hovered === project.name ? "4rem" : "0",
                      overflow: "hidden",
                      opacity: hovered === project.name ? 1 : 0,
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Right column */}
              <div className="flex items-center gap-4 shrink-0">
                <span
                  className="text-xs hidden md:block"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.year}
                </span>
                <div
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300"
                  style={{
                    borderColor:
                      hovered === project.name
                        ? "var(--border-hover)"
                        : "var(--border)",
                    backgroundColor:
                      hovered === project.name
                        ? "rgba(240,237,232,0.06)"
                        : "transparent",
                    transform:
                      hovered === project.name
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                  }}
                >
                  <ArrowUpRight
                    size={14}
                    style={{ color: "var(--foreground)" }}
                  />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
