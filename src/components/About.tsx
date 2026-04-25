"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";

const experience = [
  {
    company: "DataArt Solutions",
    url: "https://www.dataart.com",
    role: "Software Developer",
    period: "2021 — Present",
    highlights: [
      "Developed a UI/UX library for a major US insurance company, integrating Next.js with FluentUI",
      "Built a cross-platform mobile app for a private aviation logistics platform using React Native",
      "Architected a React component library for a global music entertainment company",
    ],
  },
  {
    company: "I-Teco",
    url: null,
    role: "Software Developer",
    period: "2019 — 2021",
    highlights: [
      "Led partial migration of a banking application from monolith to micro-frontends",
      "Coordinated front-end development across 30+ teams",
      "Provided unit and automated testing coverage with Jest and Selenium",
    ],
  },
  {
    company: "Highglossy",
    url: null,
    role: "Software Developer · Team Lead",
    period: "2017 — 2019",
    highlights: [
      "Built a CRM platform for soccer clubs including email marketing and fan engagement tools",
      "Developed a ticket booking website with an interactive 3D stadium model using Three.js",
      "Designed a car-sharing mobile app and ERP system from brand book to production",
    ],
  },
];

const skills = [
  { category: "Languages", items: "TypeScript · JavaScript · CSS · HTML" },
  {
    category: "Frameworks",
    items: "React · Next.js · React Native · Node.js",
  },
  {
    category: "State & Data",
    items: "Zustand · Redux · React Query · Jotai · GraphQL",
  },
  {
    category: "Testing",
    items: "Jest · Testing Library · Enzyme · Storybook",
  },
  {
    category: "Tooling",
    items: "Webpack · Vite · Rollup · Docker · GitHub Actions",
  },
  { category: "Design", items: "Figma · Tailwind · Styled Components · SCSS" },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="px-6 md:px-12 py-24 transition-all duration-700"
      style={{
        borderTop: "1px solid var(--border)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <h2
          className="text-xs tracking-widest uppercase mb-16"
          style={{ color: "var(--text-muted)" }}
        >
          About
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Bio */}
          <div>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--foreground)" }}
            >
              I'm a front-end developer with 7+ years of experience building
              products used by millions. I work across the full front-end stack
              — from pixel-level UI to architecture decisions to developer
              tooling.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              I've led teams, built component libraries from scratch, shipped
              micro-frontend migrations, and designed mobile apps end-to-end. I
              care deeply about code quality, developer experience, and the
              intersection of design and engineering.
            </p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Based in Belgrade, Serbia
            </p>
          </div>

          {/* Skills grid */}
          <div>
            <h3
              className="text-xs tracking-widest uppercase mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div
                  key={skill.category}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 pb-4"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <span
                    className="text-xs tracking-widest uppercase shrink-0 w-28"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {skill.category}
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {skill.items}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-24">
          <h3
            className="text-xs tracking-widest uppercase mb-12"
            style={{ color: "var(--text-muted)" }}
          >
            Experience
          </h3>
          <div className="space-y-12">
            {experience.map((job) => (
              <div
                key={job.company}
                className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 md:gap-12"
              >
                <div>
                  <p
                    className="font-medium mb-1"
                    style={{ color: "var(--foreground)" }}
                  >
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity hover:opacity-70"
                      >
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {job.role}
                  </p>
                  <p
                    className="text-xs mt-1 font-mono"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {job.period}
                  </p>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm leading-relaxed flex gap-3"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span style={{ color: "var(--text-muted)" }} className="shrink-0 mt-0.5">
                        —
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
