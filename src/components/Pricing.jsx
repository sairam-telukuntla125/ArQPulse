const TIERS = [
  {
    name: "Starter",
    price: "Contact us",
    desc: "For teams exploring Salesforce governance.",
    features: ["1 connected org", "Weekly scans", "Health & security signals", "Email support"],
  },
  {
    name: "Growth",
    price: "Contact us",
    desc: "For orgs that need continuous intelligence.",
    featured: true,
    features: [
      "Up to 5 connected orgs",
      "Daily scans",
      "All intelligence pillars",
      "AI advisory chat",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Contact us",
    desc: "For complex, multi-org Salesforce estates.",
    features: [
      "Unlimited orgs",
      "Continuous scanning",
      "Modernization roadmap",
      "Dedicated success manager",
      "SSO & audit logs",
    ],
  },
];

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-none mt-0.5">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#f8f9fc]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="text-[12px] font-black tracking-[0.18em] uppercase text-[#1552D2] mb-3">PRICING</div>
          <h2 className="text-[42px] font-black tracking-tight text-[#000000] mb-5">
            Plans that scale with your org
          </h2>
          <p className="text-[18px] text-[#333333] leading-[1.7]">
            Start with a free two-month pilot. No credit card, no sales call required.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                tier.featured
                  ? "bg-[#000000] border-[#000000] shadow-[0_8px_40px_rgba(0,0,0,0.20)]"
                  : "bg-white border-[#e4e7f0] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)]"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-8 bg-[#1552D2] text-white text-[10px] font-black tracking-[0.12em] uppercase px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h3 className={`text-[20px] font-black mb-1 ${tier.featured ? "text-white" : "text-[#000000]"}`}>
                  {tier.name}
                </h3>
                <p className={`text-[14px] ${tier.featured ? "text-white/60" : "text-[#555555]"}`}>
                  {tier.desc}
                </p>
              </div>

              <div className={`text-[32px] font-black mb-6 ${tier.featured ? "text-white" : "text-[#000000]"}`}>
                {tier.price}
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    {tier.featured ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-none mt-0.5">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    ) : <Check />}
                    <span className={`text-[14px] font-medium ${tier.featured ? "text-white/80" : "text-[#222222]"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/neuzenai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center py-3 rounded-xl text-[13px] font-bold transition-all duration-200 ${
                  tier.featured
                    ? "bg-white text-[#000000] hover:bg-[#f0f4ff] hover:text-[#1552D2]"
                    : "bg-[#000000] text-white hover:bg-[#1552D2]"
                }`}
              >
                Book a demo
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-[#555555] mt-8">
          All plans include a <strong className="text-[#000000] font-semibold">2-month free pilot</strong>. No credit card required.
        </p>
      </div>
    </section>
  );
}
