import { useRef, useEffect, useState } from "react";

const STEPS = [
  {
    n: "01",
    title: "Connect, read-only",
    body: "Authenticate once with a read-only connection. No packages to install, no write permissions granted — ever. Your org data never leaves your control.",
    detail: "OAuth 2.0 · Zero write access · No managed package",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    n: "02",
    title: "Modernization roadmap",
    body: "Get a prioritized, sequenced roadmap for paying down debt and hardening the org — with quick wins, medium plays and large programs ready to hand to your team.",
    detail: "Quick wins · Medium plays · Large programs",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      </svg>
    ),
  },
];

function StepCard({ step, index, isActive }) {
  return (
    <div
      className={`step-card relative flex gap-6 transition-all duration-500 ${isActive ? "opacity-100" : "opacity-40"}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex flex-col items-center flex-none">
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center font-black text-sm transition-all duration-500 ${
            isActive
              ? "bg-[#1552D2] text-white shadow-[0_4px_20px_rgba(21,82,210,0.35)]"
              : "bg-white border-2 border-[#e4e7f0] text-[#888888]"
          }`}
        >
          {step.n}
        </div>
      </div>

      <div className="flex-1 pb-12">
        <div
          className={`rounded-2xl border p-7 transition-all duration-500 ${
            isActive
              ? "bg-white border-[#e4e7f0] shadow-[0_2px_4px_rgba(0,0,0,0.04),0_16px_40px_-12px_rgba(0,0,0,0.10)]"
              : "bg-[#fafbfc] border-[#f0f2f8]"
          }`}
        >
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 transition-colors duration-500 ${isActive ? "bg-[#f0f4ff] text-[#1552D2]" : "bg-[#f0f2f8] text-[#888888]"}`}>
            {step.icon}
          </div>
          <h3 className="text-[20px] font-black text-[#000000] tracking-tight mb-2">{step.title}</h3>
          <p className="text-[15px] text-[#333333] leading-[1.7] mb-4">{step.body}</p>
          <div className={`inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide transition-colors duration-500 ${isActive ? "text-[#1552D2]" : "text-[#888888]"}`}>
            <span className={`w-1 h-1 rounded-full ${isActive ? "bg-[#1552D2]" : "bg-[#888888]"}`} />
            {step.detail}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh * 0.2)));
      setLineProgress(raw);
      setActiveStep(Math.min(STEPS.length - 1, Math.floor(raw * STEPS.length)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".step-card");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.15 });
    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <div className="text-[12px] font-black tracking-[0.18em] uppercase text-[#1552D2] mb-3">HOW IT WORKS</div>
          <h2 className="text-[42px] font-black tracking-tight text-[#000000] mb-5">
            Start with one org. Prove value in days.
          </h2>
          <p className="text-[18px] text-[#333333] leading-[1.7]">
            Run a live scan, generate your first executive report, and prioritize your top 10 risks — with a two-month, zero-dollar pilot.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left: sticky progress */}
          <div className="hidden lg:block sticky top-28">
            <div className="relative">
              <div className="absolute left-5 top-5 bottom-5 w-px bg-[#e4e7f0]">
                <div
                  className="absolute top-0 left-0 w-full bg-[#1552D2]"
                  style={{ height: `${lineProgress * 100}%`, transition: "height 0.1s linear" }}
                />
              </div>

              <div className="space-y-10 pl-14">
                {STEPS.map((step, i) => (
                  <div key={step.n} className="flex items-center gap-3">
                    <div
                      className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${
                        i <= activeStep
                          ? "bg-[#1552D2] text-white shadow-[0_2px_12px_rgba(21,82,210,0.3)]"
                          : "bg-white border-2 border-[#e4e7f0] text-[#888888]"
                      }`}
                    >
                      {i < activeStep ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                      ) : step.n}
                    </div>
                    <div className={`text-[13px] font-bold transition-colors duration-300 ${i <= activeStep ? "text-[#000000]" : "text-[#888888]"}`}>
                      {step.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 p-5 rounded-2xl bg-[#f8f9fc] border border-[#e4e7f0]">
              <div className="text-[11px] font-black tracking-[0.12em] uppercase text-[#1552D2] mb-2">Free Pilot</div>
              <p className="text-[13px] text-[#333333] leading-relaxed mb-4">Two months, zero dollars. Connect your first org and get your executive report in minutes.</p>
              <a
                href="https://calendly.com/neuzenai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#000000] text-white text-[12px] font-bold px-4 py-2.5 rounded-lg hover:bg-[#1552D2] transition-colors duration-200"
              >
                Start free pilot
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          {/* Right: step cards */}
          <div className="space-y-0">
            {STEPS.map((step, i) => (
              <StepCard key={step.n} step={step} index={i} isActive={i <= activeStep} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
