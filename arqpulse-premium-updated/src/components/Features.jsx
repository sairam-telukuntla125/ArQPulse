import { useEffect, useRef, useState } from "react";

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="flex-none mt-0.5">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const FEATURES = [
  {
    num: "01", tag: "EXECUTIVE HEALTH",
    title: "Leadership clarity in minutes, not months",
    body: "A unified, always-current inventory rolled into a weighted 0–100 health score with trends, quick wins and improvement potential across every domain.",
    bullets: ["Weighted domain-level scoring & deltas", "Quick wins & improvement potential", "Snapshot-over-snapshot progress"],
    viz: "health",
  },
  {
    num: "02", tag: "ORGANIZATION",
    title: "A decision-ready inventory of your whole estate",
    body: "Org profile, clouds, users, licenses, packages, storage and limits — unified from Setup into one place, refreshed on every scan.",
    bullets: ["Edition, instance, clouds & capabilities", "Users, licenses, packages & storage"],
    viz: "org",
  },
  {
    num: "03", tag: "DATA MODEL",
    title: "Understand objects, fields, quality & sprawl",
    body: "Object/field proliferation, relationships, record distribution and consolidation targets — the structural signals that shape scalability and AI readiness.",
    bullets: ["Objects by type & field-limit pressure", "Record distribution & LDV signals"],
    viz: "data",
  },
  {
    num: "04", tag: "SECURITY & RISK",
    title: "See your most material exposure — prioritized",
    body: "Over-privileged access, OAuth & connected apps, certificates, endpoints, sharing model and hard-coded secrets — correlated org-wide and ranked by business impact.",
    bullets: ["Access, credential & endpoint exposure", "Health Check & compliance correlation"],
    viz: "security",
  },
  {
    num: "05", tag: "PERFORMANCE & SCALABILITY",
    title: "Stay ahead of limits — at peak and at growth",
    body: "Architecture, code, automation, scalability and query-selectivity scores — turning LDV, SOQL/DML and governor pressure into forecasts before the incident.",
    bullets: ["LDV, SOQL/DML & async pressure", "Query selectivity & capacity headroom"],
    viz: "perf",
  },
  {
    num: "06", tag: "TECHNICAL DEBT",
    title: "Turn thousands of findings into a funded plan",
    body: "Debt by severity, category and remediation effort — grouped into quick wins, medium plays and large programs so value lands every sprint.",
    bullets: ["Severity, category & effort breakdown", "Quick wins vs. large modernization"],
    viz: "debt",
  },
  {
    num: "07", tag: "FUTURE READINESS",
    title: "Ready for Hyperforce, Agentforce & Data Cloud",
    body: "Ready / ready-with-remediation / not-ready scorecards for every transformation — each with the blockers that must be resolved and an implementation sequence.",
    bullets: ["Hyperforce migration readiness", "Agentforce & Data Cloud readiness"],
    viz: "readiness",
  },
  {
    num: "08", tag: "ASK ArQPulse",
    title: "A grounded AI architect, powered by Claude",
    body: "Executive summaries, prioritized roadmaps and step-by-step how-tos — every recommendation traceable to the finding, the rule, and the affected metadata.",
    bullets: ["Answers grounded in your org's evidence", "Read-only, audit-safe, minimized payloads"],
    viz: "ai",
  },
];

function VizHealth() {
  const domains = [
    { label: "Architecture", val: 54, color: "#f59e0b" },
    { label: "Security",     val: 100, color: "#16A34A" },
    { label: "Code Quality", val: 20,  color: "#ef4444" },
    { label: "Automation",   val: 85,  color: "#16A34A" },
    { label: "Performance",  val: 100, color: "#16A34A" },
    { label: "Future Ready", val: 67,  color: "#84cc16" },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-end gap-3 mb-4">
        <span className="text-5xl font-black text-[#d9880f]">60</span>
        <span className="text-sm text-[#555555] font-semibold mb-2">/ 100 · Fair</span>
        <span className="ml-auto text-xs font-bold text-[#16A34A]">▲ 40 pts potential</span>
      </div>
      {domains.map(d => (
        <div key={d.label} className="flex items-center gap-3">
          <span className="w-24 text-[10px] font-bold text-[#333333] text-right">{d.label}</span>
          <div className="flex-1 h-2 rounded-full bg-[#f0f2f8] overflow-hidden">
            <div className="h-full rounded-full dom-fill" style={{ background: d.color, width: `${d.val}%` }} />
          </div>
          <span className="w-8 text-[10px] font-black" style={{ color: d.color }}>{d.val}</span>
        </div>
      ))}
    </div>
  );
}

function VizOrg() {
  const rows = [
    ["Organization Name","Acme"],["Instance","AP53"],["API Version","67.0"],
    ["Salesforce CD","262.11.6"],["Created Date","Nov 29, 2017"],
    ["Hyperforce","No"],["My Domain","neuzenai-dev-ed"],["Data Center","Asia Pacific"],
  ];
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
      {rows.map(([k,v]) => (
        <div key={k}>
          <div className="text-[9px] text-[#555555] font-semibold uppercase tracking-wide">{k}</div>
          <div className="text-[12px] font-bold text-[#000000]">{v}</div>
        </div>
      ))}
    </div>
  );
}

function VizData() {
  const segs = [
    { label: "Custom Objects", val: 27, pct: "65.9%", color: "#3b82f6" },
    { label: "Big Objects",    val: 2,  pct: "4.9%",  color: "#8b5cf6" },
    { label: "Custom Settings",val: 8,  pct: "19.5%", color: "#16A34A" },
    { label: "Other",          val: 4,  pct: "9.8%",  color: "#f59e0b" },
  ];
  return (
    <div>
      <div className="text-[11px] font-bold text-[#555555] mb-3">Objects by Type · 41 total</div>
      <div className="space-y-2.5">
        {segs.map(s => (
          <div key={s.label} className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-sm flex-none" style={{ background: s.color }} />
            <span className="flex-1 text-[11px] font-semibold text-[#222222]">{s.label}</span>
            <span className="text-[11px] font-black" style={{ color: s.color }}>{s.val}</span>
            <span className="text-[10px] text-[#555555] w-10 text-right">{s.pct}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VizSecurity() {
  const risks = [
    { label: "Access Mgmt",  val: 86, color: "#ef4444", level: "High" },
    { label: "Credentials",  val: 64, color: "#f59e0b", level: "Med" },
    { label: "Endpoints",    val: 52, color: "#f59e0b", level: "Med" },
    { label: "Sharing",      val: 30, color: "#3b82f6", level: "Low" },
    { label: "Data Exposure", val: 22, color: "#3b82f6", level: "Low" },
  ];
  return (
    <div className="space-y-3">
      <div className="text-[11px] font-bold text-[#555555] mb-3">Top Risk Categories</div>
      {risks.map(r => (
        <div key={r.label} className="flex items-center gap-3">
          <span className="w-24 text-[10px] font-bold text-[#222222]">{r.label}</span>
          <div className="flex-1 h-2 rounded-full bg-[#f0f2f8] overflow-hidden">
            <div className="h-full rounded-full dom-fill" style={{ background: r.color, width: `${r.val}%` }} />
          </div>
          <span className="text-[10px] font-black w-8" style={{ color: r.color }}>{r.level}</span>
        </div>
      ))}
    </div>
  );
}

function VizPerf() {
  const items = [
    { label: "Architecture", val: 86, color: "#16A34A" },
    { label: "Code Quality",  val: 78, color: "#16A34A" },
    { label: "Automation",    val: 82, color: "#16A34A" },
    { label: "Scalability",   val: 81, color: "#16A34A" },
    { label: "Query Select.", val: 73, color: "#f59e0b" },
  ];
  return (
    <div className="space-y-3">
      <div className="text-[11px] font-bold text-[#555555] mb-3">Performance Scores</div>
      {items.map(d => (
        <div key={d.label} className="flex items-center gap-3">
          <span className="w-24 text-[10px] font-bold text-[#333333] text-right">{d.label}</span>
          <div className="flex-1 h-2 rounded-full bg-[#f0f2f8] overflow-hidden">
            <div className="h-full rounded-full dom-fill" style={{ background: d.color, width: `${d.val}%` }} />
          </div>
          <span className="w-8 text-[10px] font-black" style={{ color: d.color }}>{d.val}</span>
        </div>
      ))}
    </div>
  );
}

function VizDebt() {
  const cats = [
    { label: "Outdated API Version", val: 139, pct: "54%", color: "#ef4444" },
    { label: "Code Complexity",      val: 82,  pct: "32%", color: "#f59e0b" },
    { label: "Dead Code",            val: 17,  pct: "7%",  color: "#16A34A" },
    { label: "Missing Docs",         val: 16,  pct: "6%",  color: "#8b5cf6" },
  ];
  return (
    <div>
      <div className="flex items-end gap-2 mb-4">
        <span className="text-4xl font-black text-[#000000]">256</span>
        <span className="text-sm text-[#555555] font-semibold mb-1">Debt Items</span>
      </div>
      <div className="space-y-2.5">
        {cats.map(c => (
          <div key={c.label} className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-sm flex-none" style={{ background: c.color }} />
            <span className="flex-1 text-[11px] font-semibold text-[#222222]">{c.label}</span>
            <span className="text-[11px] font-black" style={{ color: c.color }}>{c.val}</span>
            <span className="text-[10px] text-[#555555] w-8 text-right">{c.pct}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VizReadiness() {
  const cards = [
    { label: "Hyperforce", val: 75, color: "#f59e0b" },
    { label: "Data Cloud", val: 54, color: "#ef4444" },
    { label: "Agentforce", val: 71, color: "#16A34A" },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {cards.map(c => (
          <div key={c.label} className="border border-[#e4e7f0] rounded-xl p-3 text-center">
            <div className="text-2xl font-black" style={{ color: c.color }}>{c.val}%</div>
            <div className="text-[9px] text-[#555555] font-semibold mt-1">{c.label}</div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {[["Identity Resolution","40%","#ef4444"],["Data Model Quality","69%","#f59e0b"],["Data Volume & Scale","90%","#16A34A"],["Integration & Data","75%","#f59e0b"]].map(([l,v,c]) => (
          <div key={l} className="flex items-center gap-3">
            <span className="flex-1 text-[10px] font-semibold text-[#222222]">{l}</span>
            <span className="text-[10px] font-black" style={{ color: c }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VizAI() {
  return (
    <div className="flex flex-col gap-3">
      <div className="self-end max-w-[85%] bg-[#1552D2] text-white text-[12px] leading-relaxed px-4 py-3 rounded-2xl rounded-br-sm">
        Summarize this org's health for a CIO — focus on risk and readiness.
      </div>
      <div className="flex gap-1.5 px-4 py-3 bg-[#f0f2f8] border border-[#e4e7f0] rounded-2xl rounded-bl-sm w-fit">
        {[0,1,2].map(i => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#1552D2]" style={{ animation: `dot 1.1s ${i*0.16}s infinite` }} />
        ))}
      </div>
      <div className="self-start max-w-[90%] bg-white border border-[#e4e7f0] text-[12px] text-[#222222] leading-relaxed px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm">
        Health is <strong className="text-[#000000]">78/100 (+6)</strong>. Greatest exposure: architecture (54) — 3 hard-coded endpoints and 1 expiring certificate threaten the Hyperforce timeline. 33 quick wins could recover ~9 points this quarter.
        <div className="mt-2 text-[10px] text-[#555555] font-mono">Sources: Finding SEC-014 · Rule ARC-203 · Snapshot 2026-07-02</div>
      </div>
    </div>
  );
}

const VIZ_MAP = {
  health: VizHealth, org: VizOrg, data: VizData,
  security: VizSecurity, perf: VizPerf, debt: VizDebt,
  readiness: VizReadiness, ai: VizAI,
};

export default function Features() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const N = FEATURES.length;

  // Drive the pinned stage: which card is active, and how far through the section we are.
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
  }, [N]);

  // Animate each viz's bars in once its card becomes active.
  useEffect(() => {
    const el = document.querySelector(`.feat-stage-card[data-index="${activeIndex}"]`);
    if (!el) return;
    el.querySelectorAll(".dom-fill").forEach(bar => {
      const w = bar.style.width;
      bar.style.width = "0%";
      requestAnimationFrame(() => { bar.style.width = w; });
    });
  }, [activeIndex]);

  return (
    <section id="features" ref={sectionRef} className="relative bg-white" style={{ height: `${N * 82}vh` }}>
      {/* Desktop / tablet: pinned sliding stage */}
      <div className="hidden lg:flex sticky top-0 h-screen flex-col overflow-hidden bg-gradient-to-b from-white via-white to-[#fafbfe]">
        <div className="mx-auto max-w-7xl px-6 pt-24 w-full flex-none">
          <div className="text-[11px] font-black tracking-[0.18em] uppercase text-[#1552D2] mb-2">FEATURES</div>
          <h2 className="text-[30px] xl:text-[36px] font-black tracking-tight text-[#000000] mb-2">
            One intelligence fabric for every Salesforce org
          </h2>
          <p className="text-[15px] text-[#555555] leading-[1.6] max-w-xl">
            From executive health scores to grounded AI advisory — continuous, evidence-based, and read-only.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 w-full flex-1 grid grid-cols-[220px_1fr] gap-10 items-center min-h-0 mt-6">
          {/* Left rail: numbered nav 01 → 08 with progress spine */}
          <div className="relative h-full max-h-[440px] self-center">
            <div className="absolute left-4 top-1 bottom-1 w-px bg-[#e4e7f0]">
              <div
                className="absolute top-0 left-0 w-full bg-[#1552D2]"
                style={{ height: `${progress * 100}%`, transition: "height 0.08s linear" }}
              />
            </div>
            <div className="space-y-[18px] pl-11">
              {FEATURES.map((f, i) => (
                <div key={f.num} className="relative flex items-center gap-3">
                  <div
                    className={`absolute -left-11 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-300 ${
                      i <= activeIndex
                        ? "bg-[#1552D2] text-white shadow-[0_2px_10px_rgba(21,82,210,0.32)]"
                        : "bg-white border-2 border-[#e4e7f0] text-[#999999]"
                    }`}
                  >
                    {f.num}
                  </div>
                  <div
                    className={`text-[12px] font-bold tracking-tight transition-all duration-300 ${
                      i === activeIndex ? "text-[#000000]" : i < activeIndex ? "text-[#555555]" : "text-[#aaaaaa]"
                    }`}
                  >
                    {f.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: sliding card stage — one card visible at a time */}
          <div className="relative h-full min-h-0 max-h-[500px] flex items-center">
            {FEATURES.map((feat, i) => {
              const VizComp = VIZ_MAP[feat.viz];
              const diff = i - activeIndex;
              const active = diff === 0;
              const style = active
                ? { opacity: 1, transform: "translateY(0) scale(1)", zIndex: 20, pointerEvents: "auto" }
                : diff < 0
                ? { opacity: 0, transform: "translateY(-36px) scale(0.96)", zIndex: 10, pointerEvents: "none" }
                : { opacity: 0, transform: "translateY(36px) scale(0.96)", zIndex: 10, pointerEvents: "none" };
              return (
                <div
                  key={feat.num}
                  data-index={i}
                  className="feat-stage-card absolute inset-0 transition-all duration-500 ease-out"
                  style={style}
                >
                  <div className="h-full bg-white border border-[#e4e7f0] rounded-3xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_24px_56px_-18px_rgba(0,0,0,0.12)] p-7 xl:p-9 overflow-hidden">
                    <div className="grid grid-cols-2 gap-8 h-full items-center">
                      <div className="min-w-0">
                        <div className="text-[11px] font-black tracking-[0.12em] text-[#1552D2] mb-2">{feat.num} · {feat.tag}</div>
                        <h3 className="text-[21px] xl:text-[24px] font-black tracking-tight text-[#000000] mb-3 leading-tight">{feat.title}</h3>
                        <p className="text-[14px] xl:text-[15px] text-[#333333] leading-[1.6] mb-4 line-clamp-4">{feat.body}</p>
                        <ul className="space-y-2">
                          {feat.bullets.map(b => (
                            <li key={b} className="flex items-start gap-2.5 text-[13px] xl:text-[14px] text-[#222222] font-medium">
                              <Check />{b}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-[#f8f9fc] border border-[#e4e7f0] rounded-2xl p-5 h-full max-h-[360px] overflow-hidden flex flex-col">
                        <div className="text-[10px] font-bold tracking-wide uppercase text-[#555555] mb-3 flex-none">{feat.tag}</div>
                        <div className="flex-1 overflow-hidden">
                          <VizComp />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer: step counter + progress dots */}
        <div className="mx-auto max-w-7xl px-6 w-full flex-none py-6 flex items-center justify-between">
          <span className="text-[11px] font-mono tracking-wide text-[#999999]">
            {String(activeIndex + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-1.5">
            {FEATURES.map((f, i) => (
              <span
                key={f.num}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-7 bg-[#1552D2]" : "w-1.5 bg-[#e4e7f0]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / tablet fallback: simple stacked cards, no pinning */}
      <div className="lg:hidden py-20 bg-white">
        <div className="mx-auto max-w-2xl px-6">
          <div className="text-center mb-14 reveal">
            <div className="text-[11px] font-black tracking-[0.18em] uppercase text-[#1552D2] mb-3">FEATURES</div>
            <h2 className="text-[30px] font-black tracking-tight text-[#000000] mb-4">
              One intelligence fabric for every Salesforce org
            </h2>
            <p className="text-[16px] text-[#333333] leading-[1.7]">
              From executive health scores to grounded AI advisory — continuous, evidence-based, and read-only.
            </p>
          </div>

          <div className="space-y-6">
            {FEATURES.map(feat => {
              const VizComp = VIZ_MAP[feat.viz];
              return (
                <div
                  key={feat.num}
                  className="reveal bg-white border border-[#e4e7f0] rounded-3xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_20px_48px_-16px_rgba(0,0,0,0.10)] p-7"
                >
                  <div className="text-[11px] font-black tracking-[0.12em] text-[#1552D2] mb-2">{feat.num} · {feat.tag}</div>
                  <h3 className="text-[20px] font-black tracking-tight text-[#000000] mb-2 leading-tight">{feat.title}</h3>
                  <p className="text-[14px] text-[#333333] leading-[1.65] mb-4">{feat.body}</p>
                  <ul className="space-y-2 mb-5">
                    {feat.bullets.map(b => (
                      <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-[#222222] font-medium">
                        <Check />{b}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-[#f8f9fc] border border-[#e4e7f0] rounded-2xl p-5">
                    <div className="text-[10px] font-bold tracking-wide uppercase text-[#555555] mb-3">{feat.tag}</div>
                    <VizComp />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
