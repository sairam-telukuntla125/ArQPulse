const ECOSYSTEMS = [
  { name: "Salesforce", mark: "SF", color: "#0176D3", type: "Core platform" },
  { name: "Data Cloud", mark: "DC", color: "#38BDF8", type: "Data" },
  { name: "Agentforce", mark: "AF", color: "#8B5CF6", type: "AI" },
  { name: "MuleSoft", mark: "M", color: "#2563EB", type: "Integration" },
  { name: "Slack", mark: "S", color: "#E01E5A", type: "Collaboration" },
  { name: "Tableau", mark: "T", color: "#E97627", type: "Analytics" },
  { name: "Heroku", mark: "H", color: "#7056BF", type: "Platform" },
  { name: "Hyperforce", mark: "HF", color: "#0EA5E9", type: "Infrastructure" },
  { name: "Sales Cloud", mark: "SC", color: "#0176D3", type: "CRM" },
  { name: "Service Cloud", mark: "SV", color: "#14B8A6", type: "CRM" },
  { name: "Experience Cloud", mark: "EC", color: "#D946EF", type: "Digital experience" },
  { name: "Marketing Cloud", mark: "MC", color: "#F97316", type: "Engagement" },
  { name: "Commerce Cloud", mark: "CC", color: "#2563EB", type: "Commerce" },
  { name: "Salesforce Shield", mark: "SH", color: "#16A34A", type: "Trust" },
  { name: "Einstein", mark: "E", color: "#7C5CE0", type: "Intelligence" },
  { name: "Platform Events", mark: "PE", color: "#F59E0B", type: "Automation" },
];

function EcosystemCard({ ecosystem }) {
  return (
    <div className="ecosystem-card flex items-center gap-3 px-4 py-3 flex-none whitespace-nowrap">
      <span
        className="ecosystem-mark grid place-items-center flex-none text-[10px] font-black tracking-tight"
        style={{ backgroundColor: `${ecosystem.color}18`, color: ecosystem.color, borderColor: `${ecosystem.color}38` }}
      >
        {ecosystem.mark}
      </span>
      <span>
        <span className="block text-[13px] font-bold text-[#20304f] leading-tight">{ecosystem.name}</span>
        <span className="block text-[10px] font-medium text-[#7787a2] mt-0.5">{ecosystem.type}</span>
      </span>
    </div>
  );
}

function Ticker({ items, reverse = false }) {
  return (
    <div className="ecosystem-ticker">
      <div className={`ecosystem-track ${reverse ? "ecosystem-track-reverse" : ""}`}>
        {[0, 1, 2].map((copy) => (
          <div className="ecosystem-group" key={copy}>
            {items.map((ecosystem) => <EcosystemCard key={ecosystem.name} ecosystem={ecosystem} />)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Integrations() {
  const firstRow = ECOSYSTEMS.slice(0, 8);
  const secondRow = ECOSYSTEMS.slice(8);

  return (
    <section id="integrations" className="ecosystem-surface relative py-24 overflow-hidden">
      <div className="ecosystem-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 mb-14 text-center reveal">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#cbdcf6] bg-white/80 px-4 py-2 shadow-[0_8px_22px_rgba(50,83,140,0.06)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0176D3] animate-pulse" />
          <span className="text-[10px] font-black tracking-[0.16em] uppercase text-[#1552D2]">Salesforce-native</span>
        </div>
        <h2 className="mt-5 text-[34px] sm:text-[42px] font-black tracking-tight text-[#15213b]">
          The Salesforce ecosystem, connected
        </h2>
        <p className="mt-4 text-[16px] text-[#60708d] max-w-2xl mx-auto leading-[1.7]">
          See the products, clouds and platforms that shape your estate in one continuously updated architecture view.
        </p>
      </div>

      <div className="relative space-y-4">
        <Ticker items={firstRow} />
        <Ticker items={secondRow} reverse />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[11px] font-semibold text-[#71819d]">
        {['Metadata', 'Security', 'Automation', 'Data', 'Code', 'Integrations'].map((signal) => (
          <span key={signal} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8a6ef2]" />
            {signal}
          </span>
        ))}
      </div>
    </section>
  );
}
