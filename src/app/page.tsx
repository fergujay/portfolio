import { Download, Link, Mail, Send } from "lucide-react";

export default function Home() {
  const projects = [
    {
      name: "Kati's Villas",
      href: "https://katisvillas.com",
      image:
        "linear-gradient(rgba(232,137,58,0.62), rgba(232,137,58,0.62)), url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop')",
    },
    {
      name: "Lajares Homes",
      href: "https://www.lajares.homes",
      image:
        "linear-gradient(rgba(59,208,202,0.58), rgba(59,208,202,0.58)), url('https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop')",
    },
    {
      name: "Let It Tee",
      href: "https://www.let-it-tee.com",
      image:
        "linear-gradient(rgba(202,92,231,0.58), rgba(202,92,231,0.58)), url('/let-it-tee.png')",
    },
    {
      name: "Nook Shop",
      href: "https://www.nookshop.rs",
      image:
        "linear-gradient(rgba(77,151,234,0.55), rgba(77,151,234,0.55)), url('/nook.png')",
    },
  ];

  return (
    <main className="min-h-screen px-5 pt-4 pb-10 sm:px-8 md:px-12">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col items-center">
        <h1 className="text-center text-[4.8rem] font-black leading-[0.84] tracking-[-0.04em] sm:text-[7rem] md:text-[9.25rem]">
          <span className="block gradient-text">DANIIL</span>
          <span className="block gradient-text">KOVTUN</span>
        </h1>

        <p className="mt-7 text-center text-[1.95rem] text-[var(--muted)] sm:text-[2rem]">
          Software Developer • React • TypeScript • 7+ Years
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          <a
            href="/cv.pdf"
            download
            className="inline-flex h-11 items-center gap-2 rounded-[10px] bg-[var(--purple)] px-5 text-base font-semibold text-white hover:brightness-105"
          >
            <Download size={16} />
            Download CV
          </a>
          <a
            href="mailto:disproziy@gmail.com"
            className="icon-btn"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://linkedin.com/in/dankovtun"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="LinkedIn"
          >
            <Link size={16} />
          </a>
          <a
            href="https://t.me/Fergujay"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="Telegram"
          >
            <Send size={16} />
          </a>
        </div>

        <section className="mt-11 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={{ backgroundImage: project.image }}
            >
              <span className="text-[2.3rem] font-bold leading-none text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-[2.1rem]">
                {project.name}
              </span>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
