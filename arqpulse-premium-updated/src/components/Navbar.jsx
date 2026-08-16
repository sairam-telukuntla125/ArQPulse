import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-2xl border-b border-[#e4e7f0] shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 h-[66px]">
        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <Logo height={42} />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {[["Features", "#features"], ["How It Works", "#how-it-works"], ["Pricing", "#pricing"]].map(([label, href]) => (
            <li key={href}>
              <a href={href} className="text-[13px] font-medium text-[#222222] hover:text-[#1552D2] transition-colors duration-200">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="https://app.arqpulse.com"
            className="hidden sm:block text-[13px] font-semibold text-[#222222] hover:text-[#1552D2] transition-colors px-3 py-2"
          >
            Log in
          </a>
          <a
            href="https://calendly.com/neuzenai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#000000] text-white text-[13px] font-bold px-5 py-2.5 rounded-xl hover:bg-[#1552D2] transition-colors duration-200"
          >
            Book a demo
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
