import { useEffect, useRef, useState } from "react";

const WORDS = ["confidence.", "clarity.", "evidence.", "speed."];

const SLIDES = [
  { id: "s1", label: "Executive Health" },
  { id: "s2", label: "Future Readiness" },
  { id: "s3", label: "License Management" },
  { id: "s4", label: "Automation & Flows" },
  { id: "s5", label: "Organization Details" },
];

function MockBar() {
  return (
    <div className="flex gap-1.5 mb-4">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
    </div>
  );
}

function HeroMock({ active }) {
  return (
    <div className="bg-white border border-[#e4e7f0] rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.04),0_24px_56px_-16px_rgba(0,0,0,0.12)] p-6 min-h-[400px] flex flex-col">
      <MockBar />
      <div className="text-[11px] font-bold text-[#000000] tracking-tight mb-4 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
        {active.label}
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full space-y-3">
          {[80, 60, 90, 45, 70].map((w, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-20 h-2 rounded bg-[#f0f2f8]" />
              <div className="flex-1 h-2 rounded bg-[#f0f2f8] overflow-hidden">
                <div
                  className="h-full rounded transition-all duration-1000"
                  style={{
                    width: `${w}%`,
                    background: "linear-gradient(90deg,#1552D2,#1a6aef)",
                    transitionDelay: `${i * 80}ms`,
                  }}
                />
              </div>
              <div className="w-6 text-right text-[10px] font-bold text-[#555555]">{w}</div>
            </div>
          ))}
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[["78", "Health Score"], ["33", "Quick Wins"], ["12+", "Modules"]].map(([v, l]) => (
              <div key={l} className="border border-[#e4e7f0] rounded-xl p-3 text-center bg-[#f8f9fc]">
                <div className="text-lg font-black text-[#1552D2]">{v}</div>
                <div className="text-[9px] text-[#555555] font-semibold mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const [slideIdx, setSlideIdx] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const iv = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % WORDS.length);
        setWordVisible(true);
      }, 220);
    }, 2600);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSlideIdx(i => (i + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section id="hero" className="relative pt-28 pb-20 overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-[#1552D2]/[0.04] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
        {/* Copy */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 bg-[#f0f4ff] border border-[#1552D2]/20 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1552D2] animate-pulse" />
            <span className="text-[12px] font-black tracking-[0.14em] uppercase text-[#1552D2]">AI-Powered Salesforce Intelligence</span>
          </div>

          <h1 className="text-[56px] leading-[1.05] font-black tracking-[-2px] text-[#000000]">
            Know your org.<br />Modernize with{" "}
            <span
              className="hl-word"
              style={{ opacity: wordVisible ? 1 : 0, transition: "opacity 0.22s" }}
            >
              {WORDS[wordIdx]}
            </span>
          </h1>

          <p className="mt-6 text-[18px] text-[#333333] leading-[1.7] max-w-[540px]">
            ArQPulse is a continuous architecture intelligence platform for complex Salesforce estates. From a read-only scan it gives you real-time visibility into architecture health, dependencies and risk — with AI-grounded readiness scorecards for Data Cloud, Hyperforce, Agentforce and every transformation ahead.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="https://calendly.com/neuzenai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#000000] text-white font-bold text-[15px] px-8 py-4 rounded-xl hover:bg-[#1552D2] transition-colors duration-200"
            >
              Book a live demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 bg-white border-2 border-[#d0d4e8] text-[#000000] font-semibold text-[15px] px-8 py-4 rounded-xl hover:border-[#1552D2] hover:text-[#1552D2] transition-colors duration-200"
            >
              Explore platform
            </a>
          </div>

          {/* Trust stats */}
          <div className="mt-10 flex items-center gap-8">
            {[["78/100", "Avg. Health Score"], ["12+", "Modules"], ["33", "Quick Wins"]].map(([v, l], i) => (
              <div key={l} className="flex items-center gap-8">
                {i > 0 && <div className="w-px h-10 bg-[#e4e7f0]" />}
                <div>
                  <div className="text-[26px] font-black text-[#1552D2]">{v}</div>
                  <div className="text-[12px] text-[#555555] font-semibold mt-0.5">{l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mock carousel */}
        <div className="relative">
          <HeroMock active={SLIDES[slideIdx]} />

          <div className="flex justify-center gap-2 mt-4">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => { setSlideIdx(i); clearInterval(timerRef.current); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === slideIdx ? "w-6 bg-[#1552D2]" : "w-1.5 bg-[#d0d4e8]"
                }`}
              />
            ))}
          </div>

          <div className="text-center mt-2 text-[11px] font-semibold text-[#555555] tracking-wide">
            {SLIDES[slideIdx].label}
          </div>

          <div className="absolute -top-3 -right-3 bg-white border border-[#e4e7f0] rounded-xl px-3 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-[11px] font-bold text-[#16A34A] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
            Read-only · Zero write access
          </div>
        </div>
      </div>
    </section>
  );
}
