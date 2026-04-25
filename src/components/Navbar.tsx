"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backgroundColor: scrolled ? "rgba(12,12,12,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav className="max-w-screen-xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-medium tracking-widest uppercase"
          style={{ color: "var(--foreground)", letterSpacing: "0.12em" }}
        >
          DK
        </a>
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm transition-colors duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--foreground)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-secondary)")
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
