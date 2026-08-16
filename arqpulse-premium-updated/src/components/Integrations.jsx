const INTEGRATIONS = [
  ["Apex", "#2563EB"], ["Flows", "#16A34A"], ["LWC", "#7C3AED"],
  ["Triggers", "#f59e0b"], ["Data Cloud", "#38bdf8"], ["Agentforce", "#a855f7"],
  ["Hyperforce", "#3b82f6"], ["MuleSoft", "#ef4444"], ["Sales Cloud", "#0ea5e9"],
  ["Service Cloud", "#0d9488"], ["Experience Cloud", "#d946ef"], ["Shield", "#16A34A"],
  ["Event Monitoring", "#f97316"], ["Platform Events", "#8b5cf6"],
  ["OmniStudio", "#2563EB"], ["Named Credentials", "#0d9488"],
];

const PulseIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h4l2 5 4-13 2 8h6"/>
  </svg>
);

function Card({ label, color }) {
  return (
    <div className="flex items-center gap-2.5 border border-[#e4e7f0] bg-white rounded-2xl px-4 py-3 font-bold text-[13px] text-[#000000] flex-none whitespace-nowrap hover:border-[#1552D2] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all cursor-default">
      <span className="w-7 h-7 rounded-lg grid place-items-center flex-none" style={{ background: color + "1f", color }}>
        <PulseIcon />
      </span>
      {label}
    </div>
  );
}

export default function Integrations() {
  const row1 = INTEGRATIONS.slice(0, 8);
  const row2 = INTEGRATIONS.slice(8);

  return (
    <section id="integrations" className="py-20 bg-[#f8f9fc] border-y border-[#e4e7f0] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-12 text-center reveal">
        <div className="text-[12px] font-black tracking-[0.18em] uppercase text-[#1552D2] mb-3">SALESFORCE-NATIVE</div>
        <h2 className="text-[42px] font-black tracking-tight text-[#000000] mb-4">
          Deep across the entire Salesforce estate
        </h2>
        <p className="text-[18px] text-[#333333] leading-[1.7] max-w-xl mx-auto">
          Metadata, code, automation, security, integrations and licenses — analyzed with architect-grade depth.
        </p>
      </div>

      {/* Row 1 — left */}
      <div className="marquee-mask mb-3">
        <div className="flex gap-3 w-max animate-marquee">
          {[...row1, ...row1].map((item, i) => <Card key={i} label={item[0]} color={item[1]} />)}
        </div>
      </div>

      {/* Row 2 — right */}
      <div className="marquee-mask">
        <div className="flex gap-3 w-max animate-marquee-rev">
          {[...row2, ...row2].map((item, i) => <Card key={i} label={item[0]} color={item[1]} />)}
        </div>
      </div>
    </section>
  );
}
