export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-20 text-center">
          {/* Subtle radial glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-60 w-[400px] rounded-full bg-[#1a6aef]/10 blur-[100px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-dot" />
              <span className="text-[11px] font-black tracking-[0.14em] uppercase text-white/80">Free 2-Month Pilot</span>
            </div>

            <h2 className="text-[44px] sm:text-[52px] font-black tracking-tight text-white mb-5">
              See your org's real health
            </h2>
            <p className="mx-auto max-w-xl text-[18px] text-white/75 leading-[1.7] mb-10">
              Connect read-only in minutes and get your first architecture intelligence report — no sales call required to get started.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://calendly.com/neuzenai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-ink font-bold text-sm px-8 py-4 rounded-xl hover:bg-[#f0f4ff] hover:text-accent transition-colors duration-200"
              >
                Book a live demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 border border-white/20 text-white/80 font-semibold text-sm px-8 py-4 rounded-xl hover:border-white/40 hover:text-white transition-colors duration-200"
              >
                Explore the platform
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              {["Read-only · Zero write access", "No managed package", "SOC 2 aligned"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-[12px] text-white/50 font-medium">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
