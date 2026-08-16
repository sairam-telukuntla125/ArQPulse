import { useRef, useEffect, useState } from "react";

const STEPS = [
  {
    n: "01",
    title: "Connect, read-only",
    tag: "CONNECT",
    body: "Authenticate once with a read-only connection. No packages to install, no write permissions granted — ever. Your org data never leaves your control.",
    detail: "OAuth 2.0 · Zero write access · No managed package",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    points: ["OAuth 2.0 read-only connection", "No managed package to install", "Zero write permissions — ever"],
  },
  {
    n: "02",
    title: "Continuous scan",
    tag: "SCAN",
    body: "ArQPulse scans your org on a rolling basis, tracking every change to architecture, security, cost and technical debt over time — snapshot over snapshot.",
    detail: "Architecture · Security · Cost · Technical Debt",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l2 5 4-13 2 8h6"/>
      </svg>
    ),
    points: ["Rolling scans — snapshot over snapshot", "12+ intelligence modules", "Architecture, security, cost & debt"],
  },
  {
    n: "03",
    title: "AI advisory",
    tag: "ADVISORY",
    body: "Findings are triaged and explained in plain language by Claude. An AI advisor answers follow-up questions grounded in your org's own evidence — not generic advice.",
    detail: "Powered by Claude · Grounded in your org's evidence",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    points: ["Powered by Claude AI", "Answers grounded in your org's data", "Audit-safe, minimized payloads"],
  },
  {
    n: "04",
    title: "Modernization roadmap",
    tag: "ROADMAP",
    body: "Get a prioritized, sequenced roadmap for paying down debt and hardening the org — with quick wins, medium plays and large programs ready to hand to your team.",
    detail: "Quick wins · Medium plays · Large programs",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      </svg>
    ),
    points: ["Prioritized quick wins this sprint", "Medium plays & large programs", "Sequenced implementation roadmap"],
  },
];

const N = STEPS.length;

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const section = sectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        const scrollable = rect.height - vh;
        const raw = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
        setProgress(raw);
        setActiveIndex(Math.min(N - 1, Math.floor(raw * N)));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative bg-white" style={{ height: `${N * 82}vh` }}>

      {/* ── Desktop: pinned sliding stage ── */}
      <div className="hidden lg:flex sticky top-0 h-screen flex-col overflow-hidden bg-white">

        {/* Header */}
        <div className="mx-auto max-w-7xl px-6 pt-24 w-full flex-none">
          <div className="text-[11px] font-black tracking-[0.18em] uppercase text-[#1552D2] mb-2">HOW IT WORKS</div>
          <h2 className="text-[30px] xl:text-[36px] font-black tracking-tight text-[#000000] mb-2">
            Start with one org. Prove value in days.
          </h2>
          <p className="text-[15px] text-[#555555] leading-[1.6] max-w-xl">
            Run a live scan, generate your first executive report, and prioritize your top 10 risks — with a two-month, zero-dollar pilot.
          </p>
        </div>

        {/* Body: left rail + right card stage */}
        <div className="mx-auto max-w-7xl px-6 w-full flex-1 grid grid-cols-[220px_1fr] gap-10 items-center min-h-0 mt-6">

          {/* Left rail */}
          <div className="relative h-full max-h-[440px] self-center">
            <div className="absolute left-4 top-1 bottom-1 w-px bg-[#e4e7f0]">
              <div
                className="absolute top-0 left-0 w-full bg-[#1552D2]"
                style={{ height: `${progress * 100}%`, transition: "height 0.08s linear" }}
              />
            </div>
            <div className="space-y-[22px] pl-11">
              {STEPS.map((s, i) => (
                <div key={s.n} className="relative flex items-center gap-3">
                  <div
                    className={`absolute -left-11 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-300 ${
                      i <= activeIndex
                        ? "bg-[#1552D2] text-white shadow-[0_2px_10px_rgba(21,82,210,0.32)]"
                        : "bg-white border-2 border-[#e4e7f0] text-[#999999]"
                    }`}
                  >
                    {i < activeIndex ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    ) : s.n}
                  </div>
                  <div className={`text-[12px] font-bold tracking-tight transition-all duration-300 ${
                    i === activeIndex ? "text-[#000000]" : i < activeIndex ? "text-[#555555]" : "text-[#aaaaaa]"
                  }`}>
                    {s.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: sliding card stage */}
          <div className="relative h-full min-h-0 max-h-[500px] flex items-center">
            {STEPS.map((step, i) => {
              const diff = i - activeIndex;
              const active = diff === 0;
              const style = active
                ? { opacity: 1, transform: "translateY(0) scale(1)", zIndex: 20, pointerEvents: "auto" }
                : diff < 0
                ? { opacity: 0, transform: "translateY(-36px) scale(0.96)", zIndex: 10, pointerEvents: "none" }
                : { opacity: 0, transform: "translateY(36px) scale(0.96)", zIndex: 10, pointerEvents: "none" };

              return (
                <div
                  key={step.n}
                  className="absolute inset-0 transition-all duration-500 ease-out"
                  style={style}
                >
                  <div className="h-full bg-white border border-[#e4e7f0] rounded-3xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_24px_56px_-18px_rgba(0,0,0,0.12)] p-8 xl:p-10 overflow-hidden">
                    <div className="grid grid-cols-2 gap-8 h-full items-center">

                      {/* Copy */}
                      <div className="min-w-0">
                        <div className="text-[11px] font-black tracking-[0.14em] uppercase text-[#1552D2] mb-3">
                          {step.n} · {step.tag}
                        </div>
                        <h3 className="text-[24px] xl:text-[28px] font-black tracking-tight text-[#000000] mb-4 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-[14px] xl:text-[15px] text-[#333333] leading-[1.65] mb-6">
                          {step.body}
                        </p>
                        <ul className="space-y-2.5">
                          {step.points.map(pt => (
                            <li key={pt} className="flex items-center gap-2.5 text-[13px] xl:text-[14px] text-[#222222] font-medium">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-none">
                                <path d="M20 6 9 17l-5-5"/>
                              </svg>
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Visual panel */}
                      <div className="bg-[#f8f9fc] border border-[#e4e7f0] rounded-2xl p-7 h-full max-h-[360px] flex flex-col items-center justify-center gap-5">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-[0_4px_20px_rgba(21,82,210,0.3)] bg-[#1552D2]`}>
                          {step.icon}
                        </div>
                        <div className="text-center">
                          <div className="text-[13px] font-black text-[#000000] mb-1">{step.title}</div>
                          <div className="text-[11px] text-[#1552D2] font-bold tracking-wide">{step.detail}</div>
                        </div>
                        {/* Step progress indicator */}
                        <div className="flex items-center gap-2 mt-2">
                          {STEPS.map((_, si) => (
                            <span
                              key={si}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                si === i ? "w-8 bg-[#1552D2]" : si < i ? "w-3 bg-[#1552D2]/40" : "w-3 bg-[#e4e7f0]"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer: step counter + dots */}
        <div className="mx-auto max-w-7xl px-6 w-full flex-none py-6 flex items-center justify-between">
          <span className="text-[11px] font-mono tracking-wide text-[#999999]">
            {String(activeIndex + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-1.5">
            {STEPS.map((s, i) => (
              <span
                key={s.n}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-7 bg-[#1552D2]" : "w-1.5 bg-[#e4e7f0]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile fallback: stacked cards ── */}
      <div className="lg:hidden py-20 bg-white">
        <div className="mx-auto max-w-2xl px-6">
          <div className="text-center mb-14 reveal">
            <div className="text-[12px] font-black tracking-[0.18em] uppercase text-[#1552D2] mb-3">HOW IT WORKS</div>
            <h2 className="text-[30px] font-black tracking-tight text-[#000000] mb-4">
              Start with one org. Prove value in days.
            </h2>
            <p className="text-[16px] text-[#333333] leading-[1.7]">
              Run a live scan, generate your first executive report, and prioritize your top 10 risks.
            </p>
          </div>

          <div className="space-y-5">
            {STEPS.map((step, i) => (
              <div key={step.n} className="reveal bg-white border border-[#e4e7f0] rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)] p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1552D2] text-white flex items-center justify-center flex-none">
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-black tracking-[0.14em] uppercase text-[#1552D2]">{step.n} · {step.tag}</div>
                    <div className="text-[17px] font-black text-[#000000] leading-tight">{step.title}</div>
                  </div>
                </div>
                <p className="text-[14px] text-[#333333] leading-[1.65] mb-4">{step.body}</p>
                <ul className="space-y-2">
                  {step.points.map(pt => (
                    <li key={pt} className="flex items-center gap-2 text-[13px] text-[#222222] font-medium">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-none"><path d="M20 6 9 17l-5-5"/></svg>
                      {pt}
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
