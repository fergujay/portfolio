"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const links = [
  { label: "Email", value: "disproziy@gmail.com", href: "mailto:disproziy@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/dankovtun", href: "https://linkedin.com/in/dankovtun" },
  { label: "CV", value: "Download PDF", href: "/cv.pdf" },
];

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="px-6 md:px-12 py-24 transition-all duration-700"
      style={{
        borderTop: "1px solid var(--border)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16">
          {/* CTA */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              Contact
            </p>
            <h2
              className="font-bold leading-none tracking-tight"
              style={{
                fontSize: "clamp(2rem, 7vw, 6rem)",
                color: "var(--foreground)",
              }}
            >
              Let&apos;s work
              <br />
              together.
            </h2>
          </div>

          {/* Links */}
          <div className="space-y-0">
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                download={link.href === "/cv.pdf" ? true : undefined}
                className="group flex items-center justify-between gap-12 py-5 transition-all duration-200"
                style={{
                  borderTop: "1px solid var(--border)",
                  borderBottom:
                    i === links.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div className="flex items-center gap-8">
                  <span
                    className="text-xs tracking-widest uppercase w-16"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {link.label}
                  </span>
                  <span
                    className="text-sm transition-colors duration-200 group-hover:text-[var(--foreground)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.value}
                  </span>
                </div>
                <ArrowUpRight
                  size={14}
                  className="transition-all duration-200 opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "var(--foreground)" }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className="mt-16 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            © 2025 Daniil Kovtun
          </span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            Belgrade, Serbia
          </span>
        </div>
      </div>
    </section>
  );
}
